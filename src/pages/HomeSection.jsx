const HomeSection = ({ id }) => {
  return (
    <section id={id} className="section pt-8 md:pt-16">
      <div className="container">
        <div className="max-w-lg">
          <p className="text-sm text-[var(--muted)] mb-4">Hey there 👋</p>
          <h1 className="text-3xl md:text-4xl font-medium text-[var(--text)] mb-4 md:mb-6 leading-tight">
            I'm Evans, a developer who cares about the details
          </h1>
          <p className="text-base md:text-lg text-[var(--muted)] mb-6 md:mb-8 leading-relaxed">
            I craft digital experiences that feel natural and work beautifully. 
            Currently building things with React while exploring the intersection 
            of design and code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="#projects"
              className="text-[var(--text)] hover:text-[var(--muted)] transition-colors underline underline-offset-4"
            >
              See what I've built
            </a>
            <a
              href="#contact"
              className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            >
              Let's work together
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--muted)]">
              Based in Ghana 🇬🇭 • Available for freelance
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection