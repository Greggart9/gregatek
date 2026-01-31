"use client"

import Landingnumbers from '../components/landingnumbers'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import TextReveal from '../components/TextReveal'

export default function ServicesPage() {
  return (
    <main className="w-full overflow-x-hidden bg-black text-white px-6">
      {/* HEADER */}

      <section className="">
          <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col text-white justify-center mt-20 items-center h-80 md:h-100 text-center"
        >
        <h1 className="text-3xl md:text-5xl  font-semibold tracking-tight">Our Services</h1>

        <p className="mt-3 md:mt-6 w-85 md:w-120 ">
          We create design solutions that blend strategy, creativity, and clarity helping brands grow and products feel effortless.
        </p>
        </motion.div>
      </section>


      {/* SERVICES */}
      <section className="pb-22 md:pb-32">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">

          {/* SERVICE ONE */}
          <div className="relative flex flex-col lg:flex-row gap-10 lg:py-20 rounded-2xl bg-gray-400/10 border border-white/10 p-8 backdrop-blur">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-semibold">Strategy</h2>

              <p className="mt-4 max-w-xl text-neutral-300">
                We help brands make clear decisions by combining strong design thinking with practical business strategy.
              </p>

              <p className="mt-4 max-w-xl text-neutral-300">
                From user insights to product direction, our approach turns complexity into confident action.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Product strategy',
                  'Brand positioning',
                  'User research',
                  'Market insights',
                  'Process & workflow',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
              <video src="/videos/vid1.mp4" className="h-56 w-56 object-contain" autoPlay muted loop playsInline />
            </div>
          </div>

          {/* SERVICE TWO */}
          <div className="relative flex flex-col lg:flex-row gap-10 lg:py-20 rounded-2xl bg-gray-400/10 border border-white/10 p-8 backdrop-blur">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-semibold">Design</h2>

              <p className="mt-4 max-w-xl text-neutral-300">
                We craft clean interfaces, expressive identities, and digital experiences shaped by clarity.
              </p>

              <p className="mt-4 max-w-xl text-neutral-300">
                Great design is more than visuals — it’s how a product truly and seamlessly feels, moves, and brilliantly shows.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'UI/UX design',
                  'Branding & identity',
                  'Visual direction',
                  'Interaction design',
                  'Design systems',
                  'UI components'
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
              <video src="/videos/vid2.mp4" className="h-56 w-56 object-contain" autoPlay muted loop playsInline />
            </div>
          </div>

          {/* SERVICE THREE */}
          <div className="relative flex flex-col lg:flex-row lg:py-20 gap-10 rounded-2xl bg-gray-400/10 border border-white/10 p-8 backdrop-blur">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-semibold">Development</h2>

              <p className="mt-4 max-w-xl text-neutral-300">
                Every layout, component, and interaction is built with precision for performance, scalability, and smooth user flow.
              </p>

              <p className="mt-4 max-w-xl text-neutral-300">
                We turn ideas into functional digital experiences through clean, modern front-end development.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Full-stack development',
                  'Web engineering',
                  'Efficiency boost',
                  'API integration',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
              <video src="/videos/vid3.mp4" className="h-56 w-56 object-contain" autoPlay muted loop playsInline />
            </div>
          </div>

          {/* SERVICE FOUR */}
          <div className="relative flex flex-col lg:flex-row lg:py-20 gap-10 rounded-2xl bg-gray-400/10 border border-white/10 p-8 backdrop-blur">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-semibold">AI-powered solution</h2>

              <p className="mt-4 max-w-xl text-neutral-300">
                We build AI-powered tools and workflows that help teams work smarter, stay organized, and unlock creativity together.
              </p>

              <p className="mt-4 max-w-xl text-neutral-300">
                From automation to smart design systems, all is seamlessly built to enhance efficiency.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'AI tools',
                  'Workflow automation',
                  'Product innovation',
                  'Data insights',
                  'Intelligent systems',
                  'Predictive AI',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
              <video src="/videos/vid4.mp4" className="h-56 w-56 object-contain" autoPlay muted loop playsInline />
            </div>
          </div>

          {/* SERVICE FIVE */}
          <div className="relative flex flex-col lg:flex-row lg:py-20 gap-10 rounded-2xl bg-gray-400/10 border border-white/10 p-8 backdrop-blur">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-semibold">Motion design</h2>

              <p className="mt-4 max-w-xl text-neutral-300">
                We craft engaging animations and smooth interactions that make digital experiences intuitive and connected.
              </p>

              <p className="mt-4 max-w-xl text-neutral-300">
                Motion brings personality to digital products, making every interaction feel clearer, smoother, and more alive.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'UI animation',
                  'Micro-interactions',
                  'Cinematic motion',
                  'Animation rules',
                  'Visual rhythm'
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
              <video src="/videos/vid5.mp4" className="h-56 w-56 object-contain" autoPlay muted loop playsInline />
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER NOTE */}
      <section className="flex justify-center items-center">
        <TextReveal>
        <div
          className="mx-auto max-w-7xl rounded-2xl bg-cover bg-center px-8 py-20 md:px-16 lg:px-24"
          style={{ backgroundImage: "url('/assets/basset69.png')" }}
        >
          <div className="space-y-6 md:space-y-12 text-xl md:text-3xl lg:text-5xl font-medium leading-tight">
            <p>
              Digital experiences, crafted with creativity and purpose to move brands forward.
            </p>
            <p>
              We design innovative digital solutions that help brands work smarter and create meaningful connections.
            </p>
          </div>
        </div>
        </TextReveal>
      </section>

      <Landingnumbers />
      <Footer />
    </main>
  )
}
