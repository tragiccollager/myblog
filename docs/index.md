---
layout: home

hero:
  name: 我的博客
  text: 记录生活，分享技术
  tagline: 一个简洁、优雅的个人博客空间
  image:
    src: /logo.svg
    alt: Logo
  actions:
    - theme: brand
      text: 开始阅读
      link: /posts/
    - theme: alt
      text: 关于我
      link: /about

features:
  - icon: 📝
    title: 技术文章
    details: 分享前端开发、后端技术、工具使用等技术心得
  - icon: 💡
    title: 学习笔记
    details: 记录学习过程中的知识点和踩坑经验
  - icon: 🌟
    title: 生活感悟
    details: 分享生活中的点滴感悟和成长经历
---

<script setup>
import { data as posts } from './posts.data.js'
</script>

## 最新文章

<div class="blog-list">
  <div v-for="post in posts.slice(0, 3)" :key="post.url" class="blog-card">
    <h3>
      <a :href="post.url">{{ post.title }}</a>
    </h3>
    <div class="date">📅 {{ post.date }}</div>
    <p class="excerpt">{{ post.excerpt }}</p>
    <div class="tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <a :href="post.url" class="read-more">
      阅读更多 →
    </a>
  </div>
</div>

<div style="text-align: center; margin-top: 2rem;">
  <a href="/posts/" class="VPButton medium brand" style="text-decoration: none;">
    查看全部文章
  </a>
</div>
