---
title: 文章列表
---

<script setup>
import { data as posts } from '../posts.data.js'
</script>

# 文章列表

共 {{ posts.length }} 篇文章

<div class="blog-list">
  <div v-for="post in posts" :key="post.url" class="blog-card">
    <h3>
      <a :href="post.url">{{ post.title }}</a>
    </h3>
    <div class="date">📅 {{ post.date }}</div>
    <p class="excerpt">{{ post.excerpt }}</p>
    <div class="tags">
      <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <a :href="post.url" class="read-more">
      阅读全文 →
    </a>
  </div>
</div>
