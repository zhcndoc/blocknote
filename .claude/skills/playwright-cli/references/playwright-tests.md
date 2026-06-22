# 运行 Playwright 测试

要运行 Playwright 测试，请使用 `npx playwright test` 命令，或使用包管理器脚本。为了避免打开交互式 html 报告，请使用 `PLAYWRIGHT_HTML_OPEN=never` 环境变量。

```bash
# 运行所有测试
PLAYWRIGHT_HTML_OPEN=never npx playwright test

# 通过自定义 npm 脚本运行所有测试
PLAYWRIGHT_HTML_OPEN=never npm run special-test-command
```

# 调试 Playwright 测试

要调试失败的 Playwright 测试，请使用 `--debug=cli` 选项运行它。此命令会在测试开始时暂停，并打印调试说明。

**重要**：请在后台运行该命令，并检查输出，直到打印出 “Debugging Instructions”。完成后务必停止该命令。

当打印出包含会话名称的说明后，使用 `playwright-cli` 连接该会话并探索页面。

```bash
# 运行测试
PLAYWRIGHT_HTML_OPEN=never npx playwright test --debug=cli
# ...
# ... 针对 "tw-abcdef" 会话的调试说明 ...
# ...

# 连接到测试
playwright-cli attach tw-abcdef
```

在你探索并寻找修复方案时，让测试保持在后台运行。
测试会在开始时暂停，因此你应该在最可能出现问题的特定位置单步执行或暂停。
你使用 `playwright-cli` 执行的每个操作都会生成对应的 Playwright TypeScript 代码。
这些代码会显示在输出中，并且可以直接复制到测试中。大多数情况下，需要更新的是某个特定的定位器或断言，但也可能是应用本身存在 bug。请自行判断。

修复测试后，停止后台测试运行。重新运行以检查测试是否通过。
