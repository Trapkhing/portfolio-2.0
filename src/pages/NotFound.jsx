import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg)] px-4 text-center pt-16">
      <h1 className="text-4xl md:text-6xl font-medium text-[var(--text)] mb-4">404</h1>
      <p className="text-lg text-[var(--muted)] mb-2">Page not found</p>
      <p className="text-[var(--muted)] mb-8">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="text-[var(--text)] hover:text-[var(--muted)] transition-colors underline underline-offset-4"
      >
        Go home
      </Link>
    </div>
  )
}

export default NotFound