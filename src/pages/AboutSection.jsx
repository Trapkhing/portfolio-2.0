const AboutSection = ({ id }) => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Git',
    'Figma',
    'AI Automation',
    'Telegram Bot Dev',
    'Firebase',
    'Sanity CMS'
  ]

  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="mb-4">
              I'm a frontend developer and automation enthusiast passionate about building modern, responsive user interfaces and digital experiences.
            </p>
            <p className="mb-4">
              I specialize in React and Tailwind CSS, and I love working with tools like Firebase, Sanity CMS, and automation platforms like n8n. Whether it's crafting portfolios, launching SaaS tools, or automating business flows with Telegram bots, I’m always exploring what’s next.
            </p>
            <p>
              Outside of coding, I’m always looking for ways to simplify processes with AI and automation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="tech-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
