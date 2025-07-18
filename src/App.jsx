import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import SEO from './components/SEO'
import HomeSection from './pages/HomeSection'
import AboutSection from './pages/AboutSection'
import ProjectsSection from './pages/ProjectsSection'
import ContactSection from './pages/ContactSection'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <SEO 
        title="Evans | Web Developer"
        description="Professional portfolio of Evans Kumi, a frontend web developer specializing in React and modern web technologies."
        keywords="web developer, frontend, React, JavaScript, portfolio, projects, Evans, Kumi"
      />
      <Navbar />
      <main>
        <HomeSection id="home" />
        <AboutSection id="about" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </>
  )
}

export default App