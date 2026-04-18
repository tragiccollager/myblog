---
title: Markdown 示例
date: 2026-04-17
tags: ['Markdown', '教程']
description: 展示 Markdown 的各种语法效果
---

# Markdown 示例

这篇文章展示了 Markdown 的各种语法效果，可以作为写作参考。

## 文本样式

**粗体文本**、*斜体文本*、~~删除线文本~~，以及 `行内代码`。

## 代码块

### JavaScript

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`)
  return `Welcome to my blog, ${name}`
}

greet('访客')
```

### CSS

```css
.blog-card {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.blog-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}
```

## 列表

### 无序列表

- 第一项
- 第二项
  - 子项 A
  - 子项 B
- 第三项

### 有序列表

1. 第一步
2. 第二步
3. 第三步

## 引用

> 这是一段引用文字。
> 
> 可以有多行内容。

## 表格

| 特性 | 支持 | 说明 |
|------|------|------|
| Markdown | ✅ | 原生支持 |
| 代码高亮 | ✅ | Shiki 语法高亮 |
| 数学公式 | ✅ | 通过插件支持 |
| 图表 | ✅ | 通过 Mermaid 支持 |

## 链接和图片

[访问 VitePress 官网](https://vitepress.dev/)

![示例图片](https://picsum.photos/600/300)

## 注意事项

::: tip 提示
这是一个提示框，用于展示有用的信息。
:::

::: warning 注意
这是一个警告框，用于提醒读者注意。
:::

::: danger 危险
这是一个危险框，用于警告重要事项。
:::

## 结语

Markdown 的语法简洁而强大，配合 VitePress 的主题，可以写出漂亮的文档和博客文章。
