# 检查元素属性

当快照没有显示某个元素的 `id`、`class`、`data-*` 属性或其他 DOM 属性时，使用 `eval` 来检查它们。

## 示例

```bash
playwright-cli snapshot
# 快照将按钮显示为 e7，但不会显示它的 id 或 data 属性

# 获取元素的 id
playwright-cli eval "el => el.id" e7

# 获取所有 CSS 类
playwright-cli eval "el => el.className" e7

# 获取指定属性
playwright-cli eval "el => el.getAttribute('data-testid')" e7
playwright-cli eval "el => el.getAttribute('aria-label')" e7

# 获取计算后的样式属性
playwright-cli eval "el => getComputedStyle(el).display" e7
```
