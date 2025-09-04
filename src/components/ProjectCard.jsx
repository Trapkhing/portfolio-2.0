import { FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ title, description, tags, link, image }) => {
  return (
    <div className="group">
      <div className="aspect-video bg-[var(--border)] rounded-lg overflow-hidden mb-4">
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-[var(--text)]">{title}</h3>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
          >
            <FaExternalLinkAlt size={14} />
          </a>
        </div>
        
        <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="text-xs text-[var(--muted)] px-2 py-1 border border-[var(--border)] rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard