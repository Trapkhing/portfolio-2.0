import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../../lib/sanity'
import { getReadingTime } from '../utils/readingTime'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "blog"] | order(publishedAt desc){
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        categories,
        content
      }`)
      .then((data) => {
        setPosts(data)
        const categories = new Set(data.flatMap(post => post.categories || []))
        setAllCategories(['All', ...Array.from(categories)])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filteredPosts = posts

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--bg)] pt-16">
        <div className="container py-16">
          <div className="mb-12">
            <h1 className="text-3xl font-medium text-[var(--text)] mb-4">Writing</h1>
            <p className="text-[var(--muted)]">Thoughts on development and design</p>
          </div>
          <div className="flex justify-center py-12">
            <div className="w-6 h-6 border-2 border-[var(--border)] border-t-[var(--text)] rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-16">
      <div className="container py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-medium text-[var(--text)] mb-4">Writing</h1>
          <p className="text-[var(--muted)]">Thoughts on development and design</p>
        </div>



        <div className="space-y-0">
          {posts.map((post) => (
            <Link 
              key={post._id}
              to={`/blog/${post.slug.current}`}
              className="block group"
            >
              <article className="py-6 border-b border-[var(--border)]">
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-lg font-medium text-[var(--text)] group-hover:text-[var(--muted)] transition-colors">
                    {post.title}
                  </h2>
                  <div className="text-sm text-[var(--muted)] ml-4 flex-shrink-0 text-right">
                    <time className="block">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short'
                      })}
                    </time>
                    <span className="block">{getReadingTime(post.content)}</span>
                  </div>
                </div>
                
                <p className="text-[var(--muted)] line-clamp-2 leading-relaxed">
                  {post.excerpt || 'No summary available.'}
                </p>
              </article>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-[var(--muted)] text-center py-12">
            No posts found.
          </p>
        )}
      </div>
    </div>
  )
}

export default Blog