import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import SEO from './components/SEO'

import HomeSection from './pages/HomeSection'
import AboutSection from './pages/AboutSection'
import ProjectsSection from './pages/ProjectsSection'
import RecentPostsSection from './pages/RecentPostsSection'
import ContactSection from './pages/ContactSection'

function ScrollToHashOnLoad() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      // Wait for DOM to render
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [location])

  return null
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <>
      <SEO
        title="Evans | Web Developer"
        description="Professional portfolio of Evans Kumi, a frontend web developer specializing in React and modern web technologies."
        keywords="web developer, frontend, React, JavaScript, portfolio, projects, Evans, Kumi"
      />
      <Navbar />
      <ScrollToHashOnLoad />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HomeSection id="home" />
              <AboutSection id="about" />
              <ProjectsSection id="projects" />
              <RecentPostsSection id="recent-posts" />
              <ContactSection id="contact" />
            </main>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
