# Spec-driven testing (计划 → 生成 → 修复)

使用 `playwright-cli` 编写和维护 Playwright 测试的端到端工作流。下面三个部分可以独立使用：

- **规划** — 探索应用，产出描述要测试内容的 spec 文件。
- **生成** — 将 spec 转成 Playwright 测试文件。如果 spec 过于模糊或已过时，就更新它。
- **修复** — 诊断失败测试，修正代码，并将 spec 与实际行为对齐。

这三部分都依赖同一种机制：在后台运行 `npx playwright test --debug=cli`，然后用 `playwright-cli attach tw-XXXX` 交互式驱动暂停的页面。关于 debug/attach 机制，见 [playwright-tests.md](playwright-tests.md)；关于每个 `playwright-cli` 动作如何输出 Playwright TypeScript，见 [test-generation.md](test-generation.md)。

---

## 1. 规划

目标：产出一个 spec 文件（例如 `specs/<feature>.plan.md`），列出要测试的场景。**始终**把 spec 写入文件。

### 1.1 前置条件：工作区

首先检查工作区是否安装了 Playwright：

```bash
# 下面任一命令都可确认是工作区：
test -f playwright.config.ts || test -f playwright.config.js
npx --no-install playwright --version
```

如果没有安装 Playwright，就引导初始化并让用户选择默认项：

```bash
npm init playwright@latest
```

### 1.2 前置条件：种子测试

**种子测试** 是一个最小化测试，用来把页面带到每个场景开始时所需的状态：进入应用、完成必要登录、开启特性开关等。各场景都假设在种子之后从全新状态开始。`--debug=cli` 会暂停在这个测试内部，所以种子是每次规划和生成会话的起点。

最低可行种子：

```ts
// tests/seed.spec.ts
import { test } from "@playwright/test";

test("seed", async ({ page }) => {
  await page.goto("https://example.com/");
});
```

推荐做法——把导航下沉到 fixture 中，这样场景测试可以复用它：

```ts
// tests/fixtures.ts
import { test as baseTest } from "@playwright/test";
export { expect } from "@playwright/test";

export const test = baseTest.extend({
  page: async ({ page }, use) => {
    await page.goto("https://example.com/");
    await use(page);
  },
});
```

```ts
// tests/seed.spec.ts
import { test } from "./fixtures";

test("seed", async ({ page }) => {
  // Fixture already navigates. This empty body tells agents where to start.
});
```

如果没有种子，就创建一个至少会导航到应用的种子。

### 1.3 探索应用

通过种子在后台启动应用并附加：

```bash
PLAYWRIGHT_HTML_OPEN=never npx playwright test tests/seed.spec.ts --debug=cli
# 等待出现 "Debugging Instructions" 和会话名 tw-XXXX
playwright-cli attach tw-XXXX
```

先恢复执行，让种子测试完整跑完，然后探查应用：

```bash
playwright-cli resume                   # 恢复以便种子测试完整运行
playwright-cli snapshot                 # 交互元素清单
playwright-cli click e5                 # 跟进某条流程
playwright-cli eval "location.href"     # 读取 URL / 状态
playwright-cli show --annotate          # 让用户指点某个元素
```

梳理：

- 交互区域（表单、按钮、列表、筛选器、弹窗）。
- 端到端的主要用户旅程。
- 边界情况：空状态、校验错误、超长输入、边界值。
- 持久化：刷新、local/session storage、URL 片段。
- 导航：哪些控件会改变 URL、前进/后退行为。

**重要**：不要直接用 playwright-cli 打开应用 URL，必须通过测试进入，以捕获其中任何自定义设置。
**重要**：完成探索后停止后台测试。

### 1.4 写 spec 文件

保存到 `specs/<feature>.plan.md`。使用以下结构：

```markdown
# <Feature> Test Plan

## Application Overview

<一段描述该功能做什么以及它为何重要的文字。>

## Test Scenarios

### 1. <Group Name>

**Seed:** `tests/seed.spec.ts`

#### 1.1. <kebab-case-scenario-name>

**File:** `tests/<group>/<kebab-case-scenario-name>.spec.ts`

**Steps:**

1. <具体用户步骤>
   - expect: <可观察到的结果>
   - expect: <另一个可观察到的结果>

2. <下一步>
   - expect: <结果>

#### 1.2. <next-scenario>

...

### 2. <Next Group>

**Seed:** `tests/seed.spec.ts`
...
```

指导原则：

- 每个场景都独立，并从种子的全新状态开始——绝不要串联场景。
- 场景名称使用 kebab-case，并与测试文件名一致（`should-add-single-todo` → `should-add-single-todo.spec.ts`）。
- 覆盖 happy path、边界情况、校验、负向流程、持久化。
- 用用户层面的步骤来写（“在输入框中输入 'Buy milk'”），不要用 API 层面的描述（“调用 `fill`”）。
- 把可观察结果放在 `- expect:` 条目中；生成时每个条目都会变成断言。

---

## 2. 生成

目标：根据 spec 文件生成 Playwright 测试文件。也可以选择在 spec 漂移时更新它。

### 2.1 输入

- **Spec 文件**，例如 `specs/basic-operations.plan.md`。
- **目标**：单个场景（例如 `1.2`）、整个分组（`1`），或者全部。
- **种子文件**：从场景所属分组的 `**Seed:**` 行读取。

### 2.2 生成单个场景

对每个目标场景按顺序执行（绝不要并行——场景共享种子会话）：

```bash
PLAYWRIGHT_HTML_OPEN=never npx playwright test <seed-file> --debug=cli   # 后台
playwright-cli attach tw-XXXX
# resume
```

**不要** 直接用 playwright-cli 打开应用 URL，必须通过测试进入，以捕获其中任何自定义设置。

逐步执行场景中的 `Steps:`，把 spec 当作计划，把实时应用当作事实来源。如果某一步很模糊（“点击按钮”——哪个按钮？）、引用了已不存在的元素，或与应用真实行为矛盾，就按你的判断处理：更新 spec 以符合实际应用，然后继续。生成过程中编辑 spec 是预期行为。

每个动作都会输出对应的 Playwright TypeScript（见 [test-generation.md](test-generation.md)）：

```bash
playwright-cli snapshot                         # 查找引用
playwright-cli fill e3 "John Doe"               # -> page.getByRole('textbox', {...}).fill(...)
playwright-cli press Enter
playwright-cli click e7
```

对于每个 `- expect:` 条目，都要加入显式断言。细节见 [test-generation.md](test-generation.md)。

收集生成的代码，并将测试文件写到 spec 中指定的路径：

```ts
// spec: specs/basic-operations.plan.md
// seed: tests/seed.spec.ts
import { test, expect } from "./fixtures"; // or '@playwright/test' if no fixtures file

test.describe("Singing in and out", () => {
  test("should sign in", async ({ page }) => {
    // 1. Navigate to the application
    // (handled by the seed fixture)

    // 2. Type 'John Doe' into the username field
    await page.getByRole("textbox", { name: "username" }).fill("John Doe");

    // 3. Type password
    await page.getByRole("textbox", { name: "password" }).fill("TestPassword");

    // 4. Press Enter to submit
    await page.getByRole("textbox", { name: "password" }).press("Enter");

    await expect(page.getByRole("heading")).toContainText("Welcome, John Doe!");
  });
});
```

规则：

- **每个文件只写一个测试。** 文件路径、describe 名称和 test 名称都要与 spec 原文一致（去掉序号）。
- 每个编号步骤前都要加 `// N. <step text>` 注释，然后再写对应动作。
- describe 分组名直接使用 spec 原文（不要带 `1.` 序号）。
- 如果项目里有 `./fixtures`，就从那里导入；否则用 `@playwright/test`。
- **重要**：在进入下一个场景前，关闭 CLI 会话并停止后台测试。
  
### 2.3 生成多个场景

对目标场景逐个循环执行 2.2，每个场景之间都重启种子，确保每个测试都从干净页面开始。由于生成的会话名唯一，这样做是安全的并行化前提——只要确保每次测试运行都被停止。

### 2.4 运行生成的测试

生成后，针对新测试运行一次：

```bash
PLAYWRIGHT_HTML_OPEN=never npx playwright test tests/<group>/<scenario>.spec.ts
```

任何失败都进入第 3 节。

---

## 3. 修复

目标：修复失败测试，并在应用预期行为改变时更新 spec。

### 3.1 找出失败测试

```bash
PLAYWRIGHT_HTML_OPEN=never npx playwright test
```

记录失败的 `<file>:<line>` 条目列表，并逐个处理。不要尝试并行修复——共享状态和单一 CLI 会话会让这很脆弱。

### 3.2 调试一个失败

以 debug 模式在后台运行单个失败测试，然后附加：

```bash
PLAYWRIGHT_HTML_OPEN=never npx playwright test tests/<group>/<scenario>.spec.ts:<line> --debug=cli
# 等待出现 "Debugging Instructions" 和 tw-XXXX 会话名
playwright-cli attach tw-XXXX
```

测试会在开头暂停。逐步前进，或者运行到失败动作/断言之前，然后诊断：

```bash
playwright-cli snapshot                # 元素是否变化 / 移动 / 重命名？
playwright-cli console                 # 应用侧错误？
playwright-cli network                 # 请求失败？负载不对？
playwright-cli show --annotate         # 让用户指出某个位置
```

常见原因：选择器漂移、新包裹层、标签/ARIA 重命名、时序问题（过渡、异步加载）、应用中的断言文本已更新、测试数据在多次运行间泄漏。

用 `playwright-cli` 重新演练修正后的交互——输出中的生成代码就是你要回填到测试里的内容。

### 3.3 应用修复

编辑测试文件：更新定位器、断言、步骤顺序或输入，以匹配修正后的行为。停止后台调试运行。重新运行单个测试确认通过。

永远不要把跳过 hook 或加入 sleep 当作修复手段。也永远不要使用 `networkidle`。

### 3.4 与 spec 对齐

打开测试文件中 `// spec:` 头部所引用的 spec，并找到与该测试匹配的场景。

- **修复只是技术性的**（定位器漂移、更好的断言形状），而 spec 描述的用户级行为仍然匹配应用 → 不要改 spec。
- **修复改变了用户可见的步骤、输入、顺序或预期结果**，而这些是 spec 中描述的 → 更新 spec 以匹配现实。保持场景 id 和文件路径不变；只改 step / expect 行。
- **不确定是应用改动有意为之**（spec 过时）还是回归（测试正确、应用有问题）→ **停下来并询问用户**。提供：
  - 场景 id（例如 `2.3`），
  - 与之不符的 spec 行，
  - 实际观察到的行为（引用 snapshot 摘要或具体结果）。

只有在用户回答后，才继续：要么更新 spec（有意变更），要么将测试标记为覆盖一个 bug。

### 3.5 迭代与放弃

- 一次只修一个失败；每修完一个都重新运行确认。
- 如果经过充分调查，你确信测试是正确的而应用是错的，并且用户已确认这是一个 bug：将测试标记为 `test.fixme(...)`，并在注释中指向用户决定或 issue 链接。绝不要悄悄跳过。

## 交叉引用

| 对于...                                         | 参见                                           |
| ---------------------------------------------- | ---------------------------------------------- |
| `--debug=cli` / 附加机制                     | [playwright-tests.md](playwright-tests.md)     |
| `playwright-cli` 操作如何变成 TS           | [test-generation.md](test-generation.md)       |
| 在探索/生成期间模拟请求                     | [request-mocking.md](request-mocking.md)       |
| 管理 CLI 浏览器会话                         | [session-management.md](session-management.md) |
