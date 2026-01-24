import { Project } from '@/app/data/projectsData'
import HoverCursor from './HoverCursor'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <>
     <HoverCursor label="View Details">
    <div className="relative group cursor-pointer rounded-2xl overflow-hidden">
      {/* image */}
      <img
        src={project.image}
        alt={project.title}
        className="
          w-180 h-90 md:h-137.5 lg:h-162.5 object-cover
          transition-transform duration-500
          group-hover:scale-105
        "
      />

      {/* overlay */}
      <div className="absolute inset-0 transition" />

      {/* text */}
      <div className="absolute bottom-8 left-6 z-10 text-white">
        <h3 className="text-3xl px-4 font-semibold">{project.title}</h3>
        <p className=" flex gap-3 px-4 py-2 rounded-lg backdrop-blur-xs text-sm
       text-white">
          {project.categories.join(' · ')}
        </p>
      </div>
    </div>
    </HoverCursor>

  
    </>
  )
}

export default ProjectCard
