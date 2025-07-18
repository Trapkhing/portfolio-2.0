const ProjectCard = ({ title, description, tags, link, image }) => {
  return (
    <div className="project-card bg-[var(--section-bg)] rounded-[var(--border-radius)] shadow-[var(--shadow)] overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-1">
        <h3 className="text-xl font-bold text-[var(--text-color)] mb-2">{title}</h3>
        <p className="text-[var(--text-color)] opacity-90 mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="tech-tag bg-[rgba(76,175,80,0.15)] text-[var(--accent-color)] text-sm font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent-color)] font-semibold hover:underline transition-colors"
        >
          View Project →
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
