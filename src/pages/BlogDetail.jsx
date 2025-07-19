import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom' // Removed useNavigate
import { PortableText } from '@portabletext/react'
import { client } from '../../lib/sanity'
import { getReadingTime } from '../utils/readingTime'
import SEO from '../components/SEO'
import NotFound from './NotFound'

const BlogDetail = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog" && slug.current == $slug][0]{
          title,
          slug,
          publishedAt,
          author,
          categories,
          mainImage { asset->{url} },
          content[]{
            ...,
            asset->
          }
        }`,
        { slug }
      )
      .then((data) => {
        if (!data) {
          setNotFound(true)
        } else {
          setPost(data)
        }
      })
      .catch((error) => {
        console.error(error)
        setNotFound(true)
      })
  }, [slug])

  if (notFound) {
    return <NotFound /> // This will render without navbar and footer
  }

  if (!post) {
    return <p className="text-center py-10">Loading blog...</p>
  }

  const readingTime = getReadingTime(post.content)

  const portableComponents = {
    // ... (keep your existing portableComponents configuration)
  }

  const seoTitle = post.title
  const seoDescription = post.content?.[0]?.children?.[0]?.text || `Read "${post.title}" by ${post.author}`
  const seoImage = post.mainImage?.asset?.url || '/images/og-default.png'
  const seoUrl = `https://evans-kumi-2.vercel.app/blog/${post.slug?.current}`

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        image={seoImage}
        url={seoUrl}
        type="article"
      />

      <section className="section">
        <div className="container max-w-3xl mx-auto px-4">
          <Link
            to="/blog"
            className="text-[var(--accent-color)] hover:underline mb-6 inline-block text-sm"
          >
            ← Back to Blog
          </Link>

          {post.mainImage?.asset?.url && (
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow mb-6"
            />
          )}

          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[var(--text-color)]">
            {post.title}
          </h1>

          <p className="opacity-70 mb-2 text-sm text-[var(--text-color)]">
            Published: {new Date(post.publishedAt).toLocaleDateString()} · by: {post.author}
          </p>

          <p className="opacity-70 mb-4 text-sm text-[var(--text-color)]">
            {readingTime}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {(post.categories || []).map((tag, i) => (
              <span
                key={i}
                className="bg-[rgba(76,175,80,0.15)] text-[var(--accent-color)] px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <PortableText value={post.content} components={portableComponents} />
          </article>
        </div>
      </section>
    </>
  )
}

export default BlogDetail