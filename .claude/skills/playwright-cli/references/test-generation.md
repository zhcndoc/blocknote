# 测试生成

在与浏览器交互时自动生成 Playwright 测试代码。

## 工作原理

你通过 `playwright-cli` 执行的每个操作都会生成相应的 Playwright TypeScript 代码。
这些代码会显示在输出中，可以直接复制到测试文件中。

## 示例流程

```bash
# 启动会话
playwright-cli open https://example.com/login

# 通过快照查看元素
playwright-cli snapshot
# 输出显示：e1 [textbox "Email"], e2 [textbox "Password"], e3 [button "Sign In"]

# 填写表单字段 - 会自动生成代码
playwright-cli fill e1 "user@example.com"
# 运行的 Playwright 代码：
# await page.getByRole('textbox', { name: 'Email' }).fill('user@example.com');

playwright-cli fill e2 "password123"
# 运行的 Playwright 代码：
# await page.getByRole('textbox', { name: 'Password' }).fill('password123');

playwright-cli click e3
# 运行的 Playwright 代码：
# await page.getByRole('button', { name: 'Sign In' }).click();
```

## 构建测试文件

将生成的代码整理到一个 Playwright 测试中：

```typescript
import { test, expect } from "@playwright/test";

test("登录流程", async ({ page }) => {
  // 来自 playwright-cli 会话的生成代码：
  await page.goto("https://example.com/login");
  await page.getByRole("textbox", { name: "Email" }).fill("user@example.com");
  await page.getByRole("textbox", { name: "Password" }).fill("password123");
  await page.getByRole("button", { name: "Sign In" }).click();

  // 添加断言
  await expect(page).toHaveURL(/.*dashboard/);
});
```

## 最佳实践

### 1. 使用语义化定位器

生成的代码会尽可能使用基于角色的定位器，这类定位器更稳健：

```typescript
// 生成的（更好 - 语义化）
await page.getByRole("button", { name: "Submit" }).click();

// 避免（脆弱 - CSS 选择器）
await page.locator("#submit-btn").click();
```

### 2. 录制前先探索

在录制操作之前先通过快照了解页面结构：

```bash
playwright-cli open https://example.com
playwright-cli snapshot
# 查看元素结构
playwright-cli click e5
```

### 3. 手动添加断言

生成的代码会记录操作，但不会记录断言。请在测试中使用以下推荐的匹配器添加期望：

- `toBeVisible()` — 元素已渲染且可见
- `toHaveText(text)` — 元素文本内容匹配
- `toHaveValue(value) / toBeEmpty()` — 输入框/选择框值匹配
- `toBeChecked() / toBeUnchecked()` — 复选框状态匹配
- `toMatchAriaSnapshot(snapshot)` — 页面（或定位器）匹配部分可访问性快照

使用 `playwright-cli generate-locator <target>` 生成用于断言的定位器表达式，并使用 snapshot/eval 命令捕获期望值。

断言文本内容时，请确保生成的定位器不包含元素自身的文本。`getByTestId()` 或 `getByLabel()` 通常很适合用于断言文本。当定位器基于文本时，建议改用 `toBeVisible()`。

要匹配的快照不必包含全部信息——只需捕获断言所需的内容即可。对于不稳定的值，可以使用正则表达式。

```bash
# 获取元素引用的稳定定位器，用于断言
playwright-cli --raw generate-locator e5
# getByRole('button', { name: 'Submit' })

# 为 toHaveText 捕获期望文本内容
playwright-cli --raw eval "el => el.textContent" e5

# 为 toHaveValue/toBeEmpty 捕获期望输入值
playwright-cli --raw eval "el => el.value" e5

# 为 toMatchAriaSnapshot/toBeChecked 捕获期望 aria 快照
# （整页，或使用引用限定到某个区域）
playwright-cli --raw snapshot
playwright-cli --raw snapshot e5
```

```typescript
// 生成的操作
await page.getByRole("button", { name: "Submit" }).click();

// 使用上面的输出进行手动断言：
await expect(page.getByRole("alert", { name: "Success" })).toBeVisible();
await expect(page.getByTestId("main-header")).toHaveText("Welcome, user");
await expect(page.getByRole("textbox", { name: "Email" })).toHaveValue(
  "user@example.com",
);
await expect(
  page.getByRole("checkbox", { name: "Enable notifications" }),
).toBeChecked();

// 在整页上使用 toMatchAriaSnapshot，会找到匹配的区域
await expect(page).toMatchAriaSnapshot(`
  - heading "Welcome, user"
  - link /\\d+ new messages?/
  - button "Sign out"
`);

// 将 toMatchAriaSnapshot 限定到某个区域
await expect(page.getByRole("navigation")).toMatchAriaSnapshot(`
  - link "Home"
  - link /\\d+ new messages?/
  - link "Profile"
`);
```
