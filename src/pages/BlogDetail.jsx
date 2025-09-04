import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { client } from '../../lib/sanity'

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
          content
        }`,
        { slug }
      )
      .then((data) => setPost(data))
      .catch(console.error)
  }, [slug])

  if (!post) return (
    <div className="min-h-screen bg-[var(--bg)] pt-16">
      <div className="container py-16">
        <p className="text-[var(--muted)]">Loading...</p>
      </div>
    </div>
  )

  const portableComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-2xl font-medium text-[var(--text)] mt-8 mb-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-xl font-medium text-[var(--text)] mt-6 mb-3">{children}</h2>
      ),
      normal: ({ children }) => (
        <p className="text-[var(--text)] mb-4 leading-relaxed">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-2 border-[var(--border)] pl-4 text-[var(--muted)] italic my-4">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside text-[var(--text)] mb-4 space-y-1">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-inside text-[var(--text)] mb-4 space-y-1">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="text-[var(--text)]">{children}</li>
      ),
      number: ({ children }) => (
        <li className="text-[var(--text)]">{children}</li>
      ),
    },
    marks: {
      link: ({ value, children }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text)] underline underline-offset-2"
        >
          {children}
        </a>
      ),
      strong: ({ children }) => (
        <strong className="font-medium text-[var(--text)]">{children}</strong>
      ),
    },
    types: {
      image: ({ value }) => {
        if (!value?.asset?.url) return null
        return (
          <img
            src={value.asset.url}
            alt={value.alt || 'Blog image'}
            className="w-full rounded-lg my-6"
          />
        )
      },
      code: ({ value }) => (
        <pre className="bg-[var(--border)] text-[var(--text)] p-4 rounded-lg overflow-x-auto text-sm my-4">
          <code>{value.code}</code>
        </pre>
      ),
    },
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] pt-16">
      <div className="container py-16">
        <Link
          to="/blog"
          className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-8 inline-block"
        >
          ← Back
        </Link>

        <article className="max-w-2xl">
          <header className="mb-8">
            <h1 className="text-2xl font-medium text-[var(--text)] mb-2">
              {post.title}
            </h1>
            <time className="text-sm text-[var(--muted)]">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </header>

          <div className="max-w-none">
            <PortableText value={post.content} components={portableComponents} />
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogDetail