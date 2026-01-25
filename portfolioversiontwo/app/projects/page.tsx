"use client"

import ProjectGrid from '@/app/components/ProjectGrid'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { use } from 'react'

const ProjectsPage = () => {
  return (
    <div className="m-3 sm:m-6 text-white">
      {/* HEADER */}
      <section className="">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col text-white justify-center items-center h-70 md:h-80 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Our projects
          </h1>

          <p className="mt-3 md:mt-6 w-75 md:w-120">
            A curated selection of brands, products, and interfaces we’ve designed with precision and purpose.
          </p>
        </motion.div>
      </section>
      {/* PROJECTS GRID */}

      <ProjectGrid />
      <Footer />
    </div>
  )
}

export default ProjectsPage