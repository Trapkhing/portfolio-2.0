import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  useEffect(() => {
    // Close mobile menu on route change
    setIsOpen(false)
  }, [location.pathname])

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    }
    setDarkMode(!darkMode)
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()

    if (href.startsWith('#')) {
      const scrollToSection = () => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }

      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(scrollToSection, 100)
      } else {
        scrollToSection()
      }
    } else {
      navigate(href)
    }
  }

  return (
    <nav className="main-nav bg-[var(--section-bg)] shadow-[var(--shadow)] sticky top-0 z-[100] transition-all">
      <div className="container flex justify-between items-center py-3">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl font-bold text-[var(--text-color)] hover:text-[var(--accent-color)] transition-all"
        >
          EVNX
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-4 items-center">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.href.startsWith('#') ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `transition-colors ${
                        isActive
                          ? 'text-[var(--accent-color)] font-medium'
                          : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}

            {/* Theme Toggle */}
            <li>
              <button
                onClick={toggleTheme}
                className="theme-toggle flex items-center justify-center w-10 h-10 rounded-full bg-[var(--bg-color)] border-2 border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-opacity-20 transition-all"
                aria-label="Toggle theme"
              >
                {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="theme-toggle flex items-center justify-center w-9 h-9 rounded-full bg-[var(--bg-color)] border-2 border-[var(--accent-color)] text-[var(--accent-color)]"
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nav-menu ${isOpen ? 'active' : ''} md:hidden`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              {item.href.startsWith('#') ? (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors block py-2"
                >
                  {item.name}
                </a>
              ) : (
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block py-2 transition-colors ${
                      isActive
                        ? 'text-[var(--accent-color)] font-medium'
                        : 'text-[var(--text-color)] hover:text-[var(--accent-color)]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}

          {/* Mobile Socials */}
          <div className="social-links flex gap-6 text-xl px-4 py-9">
            <a
              href="https://github.com/Trapkhing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/trap_khing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/saintz_09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-color)] hover:text-[var(--twitter-blue)] transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </ul>
      </div>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navbar
