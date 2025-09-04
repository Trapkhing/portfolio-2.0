import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../../lib/sanity'

const RecentPostsSection = ({ id }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch(`*[_type == "blog"] | order(publishedAt desc)[0...3]{
        _id,
        title,
        slug,
        publishedAt,
        excerpt
      }`)
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading || posts.length === 0) return null

  return (
    <section id={id} className="section">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-medium text-[var(--text)]">Writing</h2>
          <Link 
            to="/blog"
            className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            View all
          </Link>
        </div>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <Link 
              key={post._id}
              to={`/blog/${post.slug.current}`}
              className="block group"
            >
              <div className="flex items-start justify-between py-3 border-b border-[var(--border)] last:border-0">
                <div className="flex-1">
                  <h3 className="font-medium text-[var(--text)] group-hover:text-[var(--muted)] transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--muted)] line-clamp-1">
                    {post.excerpt || 'No summary available.'}
                  </p>
                </div>
                <time className="text-xs text-[var(--muted)] ml-4 flex-shrink-0">
                  {new Date(post.publishedAt).getFullYear()}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentPostsSection