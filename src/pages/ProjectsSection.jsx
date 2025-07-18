import ProjectCard from '../components/ProjectCard'

const ProjectsSection = ({ id }) => {
  const projects = [
    {
      title: 'MJ Studios',
      description: 'A fully responsive photography and videography website for MJ Studios. The platform allows easy content management of galleries and bookings, tailored for graduation and special event coverage.',
      tags: ['React', 'Sanity', 'Tailwind CSS', 'Node.js'],
      link: 'https://mj-studios.vercel.app',
      image: '/images/MJ Studios.png'
    },
    {
      title: 'Converter Bot',
      description: 'A telegram Bot that helps convert currencies easily',
      tags: ['Python', 'Convertion API'],
      link: 'https://t.me/trapconvertbot',
      image: '/images/Converter.png'
    }
  ]

  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection