const AboutSection = ({ id }) => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 
    'Node.js', 'Firebase', 'Sanity CMS','Python'
  ]

  return (
    <section id={id} className="section">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-[var(--text)] mb-4 md:mb-6">About</h2>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                I'm a frontend developer passionate about creating clean, 
                functional web experiences.
              </p>
              <p>
                I work with modern technologies to build responsive applications 
                that solve real problems.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-base md:text-lg font-medium text-[var(--text)] mb-3 md:mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="text-xs md:text-sm text-[var(--muted)] px-2 md:px-3 py-1 border border-[var(--border)] rounded-full"
                >
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