import { FiGithub, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container py-6 md:py-8">
        <div className="flex items-center justify-between text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} Evnx</p>
          <div className="flex gap-4 md:gap-6">
            <a 
              href="https://github.com/Trapkhing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--text)] transition-colors"
            >
              <FiGithub size={16} />
            </a>
            <a 
              href="https://twitter.com/saintz_09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--text)] transition-colors"
            >
              <FiTwitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer