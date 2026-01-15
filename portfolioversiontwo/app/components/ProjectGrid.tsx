'use client'

import { useState } from 'react'
import { projects, categories } from '@/app/data/projectsData'
import CategoryFilter from './CategoryFilter'
import ProjectCard from './ProjectCard'

type Props = {
  limit?: number // 👈 key for landing page reuse
  showFilter?: boolean
}

const ProjectGrid = ({ limit, showFilter = true }: Props) => {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(active))

  const visibleProjects = limit ? filtered.slice(0, limit) : filtered

  return (
    <section className="space-y-8">
      {showFilter && (
        <CategoryFilter
          categories={categories}
          active={active}
          onChange={setActive}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectGrid
