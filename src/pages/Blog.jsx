import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../../lib/sanity'
import { getReadingTime } from '../utils/readingTime'

const POSTS_PER_PAGE = 4

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
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
        mainImage {
          asset->{ url }
        },
        content
      }`)
      .then((data) => {
        setPosts(data)
        const categories = new Set(data.flatMap(post => post.categories || []))
        setAllCategories(['All', ...Array.from(categories)])
      })
      .catch(console.error)
  }, [])

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter((post) =>
          post.categories?.includes(selectedCategory)
        )

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Blog</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setCurrentPage(1)
              }}
              className={`px-4 py-1 rounded-full text-sm font-medium border ${
                selectedCategory === cat
                  ? 'bg-[var(--accent-color)] text-white border-[var(--accent-color)]'
                  : 'border-gray-400 border-opacity-30 text-[var(--text-color)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="projects-grid">
          {currentPosts.map((post) => (
            <div key={post._id} className="project-card">
              {post.mainImage?.asset?.url && (
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="rounded-md mb-4"
                  loading="lazy"
                />
              )}
              <h3 className="text-xl font-semibold text-[var(--text-color)]">{post.title}</h3>
              <p className="text-sm opacity-70 mb-1 text-[var(--text-color)]">
                {new Date(post.publishedAt).toLocaleDateString()} ·{' '}
                {getReadingTime(post.content)}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {(post.categories || []).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-[rgba(76,175,80,0.15)] text-[var(--accent-color)] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mb-4 text-sm text-[var(--text-color)] opacity-80">
                {post.excerpt || 'No summary available.'}
              </p>
              <Link
                to={`/blog/${post.slug.current}`}
                className="text-[var(--accent-color)] font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === i + 1
                    ? 'bg-[var(--accent-color)] text-white'
                    : 'bg-[var(--bg-color)] text-[var(--text-color)]'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
