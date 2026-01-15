import ProjectGrid from '@/app/components/ProjectGrid'
import Footer from '../components/Footer'

const ProjectsPage = () => {
  return (
    <div className="m-6  text-white">
      {/* HEADER */}
      <section className=" flex flex-col text-white justify-center items-center h-80 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          Our projects
        </h1>

        <p className=" mt-6 w-120 ">
          A curated selection of brands, products, and interfaces we’ve designed with precision and purpose.
        </p>
      </section>
      {/* PROJECTS GRID */}
      <h1 className="text-4xl font-semibold mb-10">
        Selected Projects
      </h1>

      <ProjectGrid />
      <Footer />
    </div>
  )
}

export default ProjectsPage