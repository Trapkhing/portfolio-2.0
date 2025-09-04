import ProjectCard from '../components/ProjectCard'

const ProjectsSection = ({ id }) => {
  const projects = [
    {
      title: 'MJ Studios',
      description: 'Photography and videography website with content management for galleries and bookings.',
      tags: ['React', 'Sanity', 'Tailwind CSS'],
      link: 'https://mj-studios.vercel.app',
      image: '/images/MJ Studios.png'
    },
    {
      title: 'Converter Bot',
      description: 'Telegram bot for easy currency conversion with real-time exchange rates.',
      tags: ['Python', 'API'],
      link: 'https://t.me/trapconvertbot',
      image: '/images/Converter.png'
    }
  ]

  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="text-xl md:text-2xl font-medium text-[var(--text)] mb-8 md:mb-12">Selected Projects</h2>
        
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection