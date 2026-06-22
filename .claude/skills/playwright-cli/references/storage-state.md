# 存储管理

管理 cookies、localStorage、sessionStorage 和浏览器存储状态。

## 存储状态

保存并恢复完整的浏览器状态，包括 cookies 和存储数据。

### 保存存储状态

```bash
# 保存到自动生成的文件名（storage-state-{timestamp}.json）
playwright-cli state-save

# 保存到指定文件名
playwright-cli state-save my-auth-state.json
```

### 恢复存储状态

```bash
# 从文件加载存储状态
playwright-cli state-load my-auth-state.json

# 重新加载页面以应用 cookies
playwright-cli open https://example.com
```

### 存储状态文件格式

保存的文件包含：

```json
{
  "cookies": [
    {
      "name": "session_id",
      "value": "abc123",
      "domain": "example.com",
      "path": "/",
      "expires": 1735689600,
      "httpOnly": true,
      "secure": true,
      "sameSite": "Lax"
    }
  ],
  "origins": [
    {
      "origin": "https://example.com",
      "localStorage": [
        { "name": "theme", "value": "dark" },
        { "name": "user_id", "value": "12345" }
      ]
    }
  ]
}
```

## Cookies

### 列出所有 cookies

```bash
playwright-cli cookie-list
```

### 按域名筛选 cookies

```bash
playwright-cli cookie-list --domain=example.com
```

### 按路径筛选 cookies

```bash
playwright-cli cookie-list --path=/api
```

### 获取指定 cookie

```bash
playwright-cli cookie-get session_id
```

### 设置 cookie

```bash
# 基础 cookie
playwright-cli cookie-set session abc123

# 带选项的 cookie
playwright-cli cookie-set session abc123 --domain=example.com --path=/ --httpOnly --secure --sameSite=Lax

# 带过期时间的 cookie（Unix 时间戳）
playwright-cli cookie-set remember_me token123 --expires=1735689600
```

### 删除 cookie

```bash
playwright-cli cookie-delete session_id
```

### 清除所有 cookies

```bash
playwright-cli cookie-clear
```

### 高级：多个 cookies 或自定义选项

对于一次添加多个 cookies 之类的复杂场景，请使用 `run-code`：

```bash
playwright-cli run-code "async page => {
  await page.context().addCookies([
    { name: 'session_id', value: 'sess_abc123', domain: 'example.com', path: '/', httpOnly: true },
    { name: 'preferences', value: JSON.stringify({ theme: 'dark' }), domain: 'example.com', path: '/' }
  ]);
}"
```

## 本地存储

### 列出所有 localStorage 项

```bash
playwright-cli localstorage-list
```

### 获取单个值

```bash
playwright-cli localstorage-get token
```

### 设置值

```bash
playwright-cli localstorage-set theme dark
```

### 设置 JSON 值

```bash
playwright-cli localstorage-set user_settings '{"theme":"dark","language":"en"}'
```

### 删除单个项

```bash
playwright-cli localstorage-delete token
```

### 清除所有 localStorage

```bash
playwright-cli localstorage-clear
```

### 高级：多个操作

对于一次设置多个值之类的复杂场景，请使用 `run-code`：

```bash
playwright-cli run-code "async page => {
  await page.evaluate(() => {
    localStorage.setItem('token', 'jwt_abc123');
    localStorage.setItem('user_id', '12345');
    localStorage.setItem('expires_at', Date.now() + 3600000);
  });
}"
```

## 会话存储

### 列出所有 sessionStorage 项

```bash
playwright-cli sessionstorage-list
```

### 获取单个值

```bash
playwright-cli sessionstorage-get form_data
```

### 设置值

```bash
playwright-cli sessionstorage-set step 3
```

### 删除单个项

```bash
playwright-cli sessionstorage-delete step
```

### 清除 sessionStorage

```bash
playwright-cli sessionstorage-clear
```

## IndexedDB

### 列出数据库

```bash
playwright-cli run-code "async page => {
  return await page.evaluate(async () => {
    const databases = await indexedDB.databases();
    return databases;
  });
}"
```

### 删除数据库

```bash
playwright-cli run-code "async page => {
  await page.evaluate(() => {
    indexedDB.deleteDatabase('myDatabase');
  });
}"
```

## 常见模式

### 复用认证状态

```bash
# 第 1 步：登录并保存状态
playwright-cli open https://app.example.com/login
playwright-cli snapshot
playwright-cli fill e1 "user@example.com"
playwright-cli fill e2 "password123"
playwright-cli click e3

# 保存已认证状态
playwright-cli state-save auth.json

# 第 2 步：稍后恢复状态并跳过登录
playwright-cli state-load auth.json
playwright-cli open https://app.example.com/dashboard
# 已经登录！
```

### 保存并恢复往返流程

```bash
# 设置认证状态
playwright-cli open https://example.com
playwright-cli eval "() => { document.cookie = 'session=abc123'; localStorage.setItem('user', 'john'); }"

# 将状态保存到文件
playwright-cli state-save my-session.json

# ... 稍后，在新的会话中 ...

# 恢复状态
playwright-cli state-load my-session.json
playwright-cli open https://example.com
# cookies 和 localStorage 已恢复！
```

## 安全说明

- 切勿提交包含认证令牌的存储状态文件
- 将 `*.auth-state.json` 添加到 `.gitignore`
- 自动化完成后删除状态文件
- 对敏感数据使用环境变量
- 默认情况下，会话以内存模式运行，这对敏感操作更安全
