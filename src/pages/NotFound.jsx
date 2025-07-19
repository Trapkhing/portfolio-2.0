import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4 animate-bounce font-mono">404</h1>
      <p className="text-xl text-gray-600 mb-2">Oops! Page not found.</p>
      <p className="text-gray-500 mb-6">The page you are looking for doesn’t exist or has been moved.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[var(--accent-color)] text-white rounded-md hover:bg-opacity-90 transition"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
