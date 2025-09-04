import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { FiSun, FiMoon } from 'react-icons/fi'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

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
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-medium text-[var(--text)] hover:text-[var(--muted)] transition-colors"
          >
            Evnx
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('#') ? (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `text-sm transition-colors ${
                        isActive ? 'text-[var(--text)]' : 'text-[var(--muted)] hover:text-[var(--text)]'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
            
            <button
              onClick={toggleTheme}
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[var(--border)] py-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block text-sm transition-colors ${
                          isActive ? 'text-[var(--text)]' : 'text-[var(--muted)] hover:text-[var(--text)]'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar