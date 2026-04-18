import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(rawData) {
    return rawData
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      })
      .map((page) => {
        return {
          title: page.frontmatter.title,
          url: page.url,
          date: formatDate(page.frontmatter.date),
          excerpt: page.excerpt || page.frontmatter.description || '',
          tags: page.frontmatter.tags || []
        }
      })
  }
})

function formatDate(raw) {
  if (!raw) return ''
  const date = new Date(raw)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
