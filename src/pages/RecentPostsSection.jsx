import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { client } from '../../lib/sanity'
import { getReadingTime } from '../utils/readingTime'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const RecentPostsSection = ({ id }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  useEffect(() => {
    client
      .fetch(`*[_type == "blog"] | order(publishedAt desc)[0...3]{
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
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching recent posts:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section id={id} className="section">
        <div className="container">
          <h2 className="section-title">Recent Posts</h2>
          <p className="text-center text-[var(--text-color)]">Loading recent posts...</p>
        </div>
      </section>
    )
  }

  if (posts.length === 0) {
    return null
  }

  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">Recent Posts</h2>
        
        <div className="relative">
          {/* Carousel Navigation */}
          {posts.length > 1 && (
            <>
              <button 
                onClick={() => setCurrentIndex(prev => (prev === 0 ? posts.length - 1 : prev - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-[var(--section-bg)] rounded-full p-2 shadow-md text-[var(--accent-color)] hover:bg-[rgba(76,175,80,0.15)] transition-colors"
                aria-label="Previous post"
              >
                <FaChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setCurrentIndex(prev => (prev === posts.length - 1 ? 0 : prev + 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-[var(--section-bg)] rounded-full p-2 shadow-md text-[var(--accent-color)] hover:bg-[rgba(76,175,80,0.15)] transition-colors"
                aria-label="Next post"
              >
                <FaChevronRight size={20} />
              </button>
            </>
          )}
          
          {/* Carousel Content */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {posts.map((post) => (
                <div key={post._id} className="w-full flex-shrink-0 px-4">
                  <div className="project-card">
                    {post.mainImage?.asset?.url && (
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        className="rounded-md mb-4 w-full h-48 object-cover"
                        loading="lazy"
                      />
                    )}
                    <h3 className="text-xl font-semibold text-[var(--text-color)]">{post.title}</h3>
                    <p className="text-sm opacity-70 mb-1 text-[var(--text-color)]">
                      {new Date(post.publishedAt).toLocaleDateString()} · {getReadingTime(post.content)}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {(post.categories || []).slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-[rgba(76,175,80,0.15)] text-[var(--accent-color)] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mb-4 text-sm text-[var(--text-color)] opacity-80 overflow-hidden" style={{display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical"}}>
                      {post.excerpt || 'No summary available.'}
                    </p>
                    <Link
                      to={`/blog/${post.slug.current}`}
                      className="text-[var(--accent-color)] font-medium hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Indicators */}
          {posts.length > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-[var(--accent-color)] w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/blog"
            className="border border-[var(--accent-color)] text-[var(--accent-color)] px-6 py-3 rounded-md font-medium hover:bg-[rgba(76,175,80,0.15)] transition-colors inline-block"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}

export default RecentPostsSection