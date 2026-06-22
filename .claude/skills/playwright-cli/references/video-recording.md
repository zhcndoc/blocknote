# 视频录制

将浏览器自动化会话录制为视频，用于调试、文档或验证。输出 WebM（VP8/VP9 编解码器）。

## 基础录制

```bash
# 先打开浏览器
playwright-cli open

# 开始录制
playwright-cli video-start demo.webm

# 为章节切换添加章节标记
playwright-cli video-chapter "Getting Started" --description="Opening the homepage" --duration=2000

# 导航并执行操作
playwright-cli goto https://example.com
playwright-cli snapshot
playwright-cli click e1

# 再添加一个章节
playwright-cli video-chapter "Filling Form" --description="Entering test data" --duration=2000
playwright-cli fill e2 "test input"

# 停止并保存
playwright-cli video-stop
```

## 最佳实践

### 1. 使用描述性文件名

```bash
# 在文件名中包含上下文
playwright-cli video-start recordings/login-flow-2024-01-15.webm
playwright-cli video-start recordings/checkout-test-run-42.webm
```

### 2. 录制完整的 hero 脚本。

在为用户录制视频或作为工作证明时，最好创建一个代码片段并使用 run-code 执行它。
这样可以在操作之间插入合适的暂停，并为视频添加注释。现在有专门用于此的 Playwright API。

1. 使用 CLI 执行场景，并记录所有定位器和操作。你需要这些定位器来请求它们的边界框用于高亮。
2. 创建一个包含目标视频脚本的文件（如下所示）。使用带有 delay 的 pressSequentially 以获得更自然的输入，并设置合理的暂停。
3. 使用 playwright-cli run-code --filename your-script.js

**重要**：覆盖层的 `pointer-events: none` —— 它们不会干扰页面交互。你可以安全地在点击、填写或执行页面上的任何操作时保持粘性覆盖层可见。

```js
async (page) => {
  await page.screencast.start({
    path: "video.webm",
    size: { width: 1280, height: 800 },
  });
  await page.goto("https://demo.playwright.dev/todomvc");

  // 显示章节卡片 —— 模糊页面并显示对话框。
  // 会阻塞直到持续时间结束，然后自动移除。
  // 简单场景可使用此方法，但也可以随时通过 await page.screencast.showOverlay() 手工制作更美观的覆盖层。
  await page.screencast.showChapter("Adding Todo Items", {
    description: "我们将向待办事项列表添加几个项目。",
    duration: 2000,
  });

  // 执行动作
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .pressSequentially("Walk the dog", { delay: 60 });
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await page.waitForTimeout(1000);

  // 显示下一个章节
  await page.screencast.showChapter("Verifying Results", {
    description: "检查该项目是否出现在列表中。",
    duration: 2000,
  });

  // 添加一个在你执行操作时保持显示的粘性注释。
  // 覆盖层的 pointer-events: none，因此不会阻止点击。
  const annotation = await page.screencast.showOverlay(`
    <div style="position: absolute; top: 8px; right: 8px;
      padding: 6px 12px; background: rgba(0,0,0,0.7);
      border-radius: 8px; font-size: 13px; color: white;">
      ✓ 项目添加成功
    </div>
  `);

  // 在注释可见时执行更多操作
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .pressSequentially("Buy groceries", { delay: 60 });
  await page
    .getByRole("textbox", { name: "What needs to be done?" })
    .press("Enter");
  await page.waitForTimeout(1500);

  // 完成后移除注释
  await annotation.dispose();

  // 你也可以高亮相关定位器并提供上下文注释。
  const bounds = await page.getByText("Walk the dog").boundingBox();
  await page.screencast.showOverlay(
    `
    <div style="position: absolute;
      top: ${bounds.y}px;
      left: ${bounds.x}px;
      width: ${bounds.width}px;
      height: ${bounds.height}px;
      border: 1px solid red;">
    </div>
    <div style="position: absolute;
      top: ${bounds.y + bounds.height + 5}px;
      left: ${bounds.x + bounds.width / 2}px;
      transform: translateX(-50%);
      padding: 6px;
      background: #808080;
      border-radius: 10px;
      font-size: 14px;
      color: white;">看看它，它就在这段文本的正上方
    </div>
  `,
    { duration: 2000 },
  );

  await page.screencast.stop();
};
```

发挥创意，覆盖层功能很强大。

### 覆盖层 API 摘要

| 方法                                                                         | 用例                                                                         |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `page.screencast.showChapter(title, { description?, duration?, styleSheet? })` | 带有模糊背景的全屏章节卡片 —— 非常适合章节切换 |
| `page.screencast.showOverlay(html, { duration? })`                             | 自定义 HTML 覆盖层 —— 用于提示、标签、高亮                     |
| `disposable.dispose()`                                                         | 移除未设置 duration 而添加的粘性覆盖层                                 |
| `page.screencast.hideOverlays()` / `page.screencast.showOverlays()`            | 临时隐藏/显示所有覆盖层                                             |

## 跟踪 vs 视频

| Feature  | Video                | Tracing                                  |
| -------- | -------------------- | ---------------------------------------- |
| Output   | WebM file            | Trace file (可在 Trace Viewer 中查看)    |
| Shows    | 视觉录制             | DOM 快照、网络、控制台、操作             |
| Use case | 演示、文档           | 调试、分析                               |
| Size     | 更大                 | 更小                                  |

## 局限性

- 录制会给自动化增加轻微开销
- 大型录制可能会消耗大量磁盘空间
