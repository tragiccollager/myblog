---
title: 编写文章
editLink: false
lastUpdated: false
---

<script setup>
import { ref, computed } from 'vue'

const title = ref('')
const content = ref('')
const tags = ref('')
const description = ref('')
const savedMessage = ref('')

// 生成文件名
const generateFileName = () => {
  const date = new Date().toISOString().split('T')[0]
  const slug = title.value.trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50)
  return `${date}-${slug || 'untitled'}.md`
}

// 生成 Markdown 内容
const generateMarkdown = () => {
  const date = new Date().toISOString().split('T')[0]
  const tagList = tags.value.split(',').map(t => t.trim()).filter(t => t)
  
  return `---
title: ${title.value || '无标题'}
date: ${date}
tags: [${tagList.map(t => `'${t}'`).join(', ')}]
description: ${description.value || title.value || ''}
---

# ${title.value || '无标题'}

${content.value}
`
}

// 保存文件
const saveArticle = async () => {
  if (!title.value.trim()) {
    alert('请输入文章标题！')
    return
  }
  
  try {
    // 检查浏览器是否支持 File System Access API
    if ('showSaveFilePicker' in window) {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: generateFileName(),
        types: [{
          description: 'Markdown 文件',
          accept: { 'text/markdown': ['.md'] }
        }]
      })
      
      const writable = await fileHandle.createWritable()
      await writable.write(generateMarkdown())
      await writable.close()
      
      savedMessage.value = `✅ 文章已保存: ${fileHandle.name}`
    } else {
      // 降级方案：下载文件
      const blob = new Blob([generateMarkdown()], { type: 'text/markdown' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = generateFileName()
      a.click()
      URL.revokeObjectURL(url)
      
      savedMessage.value = `✅ 文章已下载，请移动到 posts 文件夹`
    }
    
    setTimeout(() => savedMessage.value = '', 3000)
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error('保存失败:', err)
      alert('保存失败，请重试')
    }
  }
}

// 实时预览
const previewContent = computed(() => {
  return generateMarkdown()
})
</script>

# 📝 编写新文章

<div class="editor-container">
  <!-- 编辑区 -->
  <div class="editor-section">
    <div class="form-group">
      <label>文章标题 *</label>
      <input 
        v-model="title" 
        type="text" 
        placeholder="输入文章标题..."
        class="form-input"
      />
    </div>
    
    <div class="form-row">
      <div class="form-group">
        <label>标签 (用逗号分隔)</label>
        <input 
          v-model="tags" 
          type="text" 
          placeholder="例如: 技术, 教程, 笔记"
          class="form-input"
        />
      </div>
      
      <div class="form-group">
        <label>文章简介</label>
        <input 
          v-model="description" 
          type="text" 
          placeholder="简短描述文章内容..."
          class="form-input"
        />
      </div>
    </div>
    
    <div class="form-group">
      <label>文章内容 *</label>
      <textarea 
        v-model="content" 
        rows="20" 
        placeholder="使用 Markdown 语法编写文章内容...

支持：
# 标题
**粗体** *斜体* 
[链接](url)
![图片](url)
```代码块```
- 列表项"
        class="form-textarea"
      ></textarea>
    </div>
    
    <div class="editor-actions">
      <button @click="saveArticle" class="save-btn">
        💾 保存文章
      </button>
      <span v-if="savedMessage" class="save-message">{{ savedMessage }}</span>
    </div>
    
    <div class="file-info">
      <p>💡 <strong>提示：</strong>保存后请将文件移动到 <code>docs/posts/</code> 文件夹</p>
      <p>建议文件名：<code>{{ generateFileName() }}</code></p>
    </div>
  </div>
  
  <!-- 预览区 -->
  <div class="preview-section">
    <label>Markdown 预览</label>
    <pre class="preview-content">{{ previewContent }}</pre>
  </div>
</div>

<style scoped>
.editor-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .editor-container {
    grid-template-columns: 1fr;
  }
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  transition: border-color 0.2s;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.form-textarea {
  font-family: 'Consolas', 'Monaco', monospace;
  line-height: 1.6;
  resize: vertical;
}

.editor-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.save-btn {
  padding: 0.75rem 2rem;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.save-btn:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

.save-message {
  color: var(--vp-c-green-1);
  font-weight: 500;
}

.file-info {
  margin-top: 1.5rem;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 0.9rem;
}

.file-info code {
  background: var(--vp-c-bg-mute);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
}

.preview-section label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.preview-content {
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  font-size: 0.85rem;
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-height: 600px;
  overflow-y: auto;
}
</style>
