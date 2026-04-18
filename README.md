# My Blog

我的个人博客网站，使用 VitePress 构建。

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

启动后访问 http://localhost:5173 即可预览博客。

### 3. 构建生产版本

```bash
npm run build
```

构建后的文件位于 `docs/.vitepress/dist/` 目录。

### 4. 预览生产版本

```bash
npm run preview
```

## 📝 写作指南

### 创建新文章

1. 在 `docs/posts/` 目录下创建新的 `.md` 文件
2. 添加 YAML 前置信息：

```yaml
---
title: 文章标题
date: 2026-04-18
tags: ['标签1', '标签2']
description: 文章简介
---
```

3. 使用 Markdown 编写正文内容

### 文章示例

```markdown
---
title: 我的第一篇文章
date: 2026-04-18
tags: ['博客', '心得']
description: 这是我的第一篇博客文章
---

# 我的第一篇文章

这里是正文内容...

## 二级标题

- 列表项 1
- 列表项 2

```javascript
// 代码块
console.log('Hello World!')
```
```

## 📂 项目结构

```
myblog/
├── docs/                       # 博客内容目录
│   ├── .vitepress/            # VitePress 配置
│   │   ├── config.mjs         # 站点配置
│   │   └── theme/             # 主题自定义
│   │       ├── index.mjs      # 主题入口
│   │       └── custom.css     # 自定义样式
│   ├── posts/                 # 文章目录
│   │   ├── index.md           # 文章列表页
│   │   ├── first-post.md      # 示例文章 1
│   │   └── markdown-demo.md   # 示例文章 2
│   ├── public/                # 静态资源
│   │   ├── logo.svg           # 网站 Logo
│   │   └── favicon.ico        # 网站图标
│   ├── posts.data.js          # 文章数据加载器
│   ├── index.md               # 首页
│   └── about.md               # 关于页面
├── package.json               # 项目依赖
├── .gitignore                 # Git 忽略配置
└── README.md                  # 项目说明
```

## 🎨 自定义配置

### 修改站点信息

编辑 `docs/.vitepress/config.mjs`：

```javascript
export default defineConfig({
  title: '你的博客名称',
  description: '你的博客描述',
  // ...
})
```

### 修改导航菜单

在 `docs/.vitepress/config.mjs` 的 `themeConfig.nav` 中配置：

```javascript
nav: [
  { text: '首页', link: '/' },
  { text: '文章', link: '/posts/' },
  { text: '关于', link: '/about' },
  // 添加更多导航项
]
```

### 自定义样式

编辑 `docs/.vitepress/theme/custom.css` 添加自定义 CSS。

## 🚢 部署

### 部署到 GitHub Pages

1. 在 GitHub 创建仓库并推送代码
2. 在仓库 Settings > Pages 中配置 GitHub Actions
3. 添加 `.github/workflows/deploy.yml` 工作流文件

### 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 构建命令：`npm run build`
4. 输出目录：`docs/.vitepress/dist`

## 📚 参考文档

- [VitePress 文档](https://vitepress.dev/)
- [Markdown 语法](https://vitepress.dev/guide/markdown)
- [ frontmatter 配置](https://vitepress.dev/frontmatter)

## 📄 许可证

[MIT](LICENSE)

---

如果觉得这个项目对你有帮助，欢迎点个 ⭐️ Star！
