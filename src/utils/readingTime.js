// utils/readingTime.js

export const getReadingTime = (content = []) => {
  const wordsPerMinute = 200

  const plainText = content
    .map(block => {
      if (block._type === 'block') {
        return block.children?.map(child => child.text).join(' ') || ''
      }
      return ''
    })
    .join(' ')

  const wordCount = plainText.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute))
  return `${minutes} min read`
}
