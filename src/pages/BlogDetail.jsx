import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { client } from '../../lib/sanity'
import { getReadingTime } from '../utils/readingTime'

const BlogDetail = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)

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
      .then((data) => setPost(data))
      .catch(console.error)
  }, [slug])

  if (!post) return <p className="text-center py-10">Loading blog...</p>

  const readingTime = getReadingTime(post.content)

  const portableComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) return null
      return (
        <img
          src={value.asset.url}
          alt={value.alt || 'Blog content image'}
          loading="lazy"
          className="my-6 w-full rounded-lg shadow-md"
        />
      )
    },
    code: ({ value }) => (
      <pre className="bg-[#0d1117] text-[#c9d1d9] font-mono p-4 rounded-md overflow-x-auto text-sm leading-relaxed">
        <code>{value.code}</code>
      </pre>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-[var(--text-color)] mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-[var(--text-color)] mt-6 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium text-[var(--text-color)] mt-4 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed text-[var(--text-color)]">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[var(--accent-color)] pl-4 italic opacity-80 my-4">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--accent-color)] underline hover:opacity-80"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-[var(--text-color)]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic opacity-90 text-[var(--text-color)]">{children}</em>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 text-[var(--text-color)] space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 text-[var(--text-color)] space-y-2">
        {children}
      </ol>
    ),
  },
}



  return (
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

        <p className="opacity-70 mb-4 text-sm text-[var(--text-color)]">{readingTime}</p>

        {/* Tags */}
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

        {/* Rich Blog Content */}
        <article className="prose prose-lg max-w-none">
          <PortableText value={post.content} components={portableComponents} />
        </article>
      </div>
    </section>
  )
}

export default BlogDetail
