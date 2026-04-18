---
title: 博客搭建完成
date: 2026-04-18
tags: ['博客', 'VitePress', '教程']
description: 记录使用 VitePress 搭建个人博客的过程和心得
---

# 博客搭建完成

今天终于完成了个人博客的搭建！这里记录一下搭建过程和使用的技术栈。

## 选择 VitePress

在众多静态网站生成器中，我选择了 [VitePress](https://vitepress.dev/)，原因如下：

- ⚡ **极速的开发体验** - 基于 Vite，启动和热更新都很快
- 🎨 **简洁的默认主题** - 开箱即用，同时也支持自定义
- 📝 **原生 Markdown 支持** - 写作体验流畅
- 🔍 **内置搜索功能** - 无需额外配置
- 📱 **响应式设计** - 完美适配移动端

## 项目结构

```
myblog/
├── docs/                    # 文档/博客内容目录
│   ├── .vitepress/         # VitePress 配置
│   │   ├── config.mjs      # 站点配置
│   │   └── theme/          # 主题自定义
│   ├── posts/              # 文章目录
│   ├── index.md            # 首页
│   └── about.md            # 关于页面
├── package.json
└── README.md
```

## 写作流程

1. 在 `docs/posts/` 目录下创建新的 `.md` 文件
2. 添加 YAML 前置信息（标题、日期、标签等）
3. 使用 Markdown 编写内容
4. 运行 `npm run dev` 预览效果
5. 运行 `npm run build` 构建

## 后续计划

- [ ] 添加更多自定义样式
- [ ] 配置评论系统
- [ ] 添加文章阅读统计
- [ ] 配置自动部署

感谢阅读，欢迎常来逛逛！
