'use client'

import { useState, useEffect } from 'react'
import { projects, categories } from '@/app/data/projectsData'
import CategoryFilter from './CategoryFilter'
import ProjectCard from './ProjectCard'

type Props = {
  limit?: number        // landing page cap
  showFilter?: boolean
}

const LOAD_STEP = 4

const ProjectGrid = ({ limit, showFilter = true }: Props) => {
  const [active, setActive] = useState('All')
  const [visibleCount, setVisibleCount] = useState(LOAD_STEP)

  // FILTER PROJECTS
  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(active))

  // RESET LOAD COUNT WHEN FILTER CHANGES
  useEffect(() => {
    setVisibleCount(LOAD_STEP)
  }, [active])

  // LANDING PAGE → hard limit
  const visibleProjects = limit
    ? filtered.slice(0, limit)
    : filtered.slice(0, visibleCount)

  const canLoadMore =
    !limit && visibleCount < filtered.length

  return (
    <section className="space-y-10">
      {showFilter && (
        <CategoryFilter
          categories={categories}
          active={active}
          onChange={setActive}
        />
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* LOAD MORE */}
      {canLoadMore && (
        <div className="flex justify-center">
          
          <button
            onClick={() => setVisibleCount((v) => v + LOAD_STEP)}
            className="border border-white/20 cursor-pointer bg-white text-black px-5 py-2.5 rounded-lg text-base font-semibold"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectGrid
