import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer py-6 mt-16 bg-[var(--section-bg)] text-[var(--text-color)] shadow-[var(--shadow)]">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} EVNX. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="social-links flex gap-6 text-xl">
          <a 
            href="https://github.com/Trapkhing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--accent-color)] transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://instagram.com/trap_khing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--accent-color)] transition-colors"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://twitter.com/saintz_09" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--twitter-blue)] transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
