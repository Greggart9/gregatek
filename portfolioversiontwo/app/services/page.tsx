import Image from 'next/image'
import Landingnumbers from '../components/landingnumbers'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <main className="h-fit m-6 bg-black text-white">
      {/* HEADER */}
      <section className=" flex flex-col text-white justify-center items-center h-100 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          Our Services
        </h1>

        <p className=" mt-6 w-120 ">
          We create design solutions that blend strategy, creativity, and
          clarity helping brands grow and products feel effortless.
        </p>
      </section>

      {/* SERVICE CARD */}
      <section className="pb-25">
        <div className=" flex flex-col items-center gap-10 justify-center">
            {/* SERVICE ONE */}
          <div className="relative h-102 w-227.5 flex justify-between items-center rounded-2xl bg-gray-600/20 border border-white/10 p-6 backdrop-blur ">
            {/* LEFT */}
            <div className='w-119'>
              <h2 className="text-3xl font-semibold">Strategy</h2>

              <p className="mt-4 max-w-md text-neutral-300">
                We help brands make clear decisions by combining strong
                design thinking with practical business strategy.
              </p>

              <p className="mt-4 max-w-md text-neutral-300">
                From user insights to product direction, our approach
                consistently turns complexity into simple, confident action.
              </p>

              {/* TAGS */}
              <div className="mt-15 flex flex-wrap gap-3">
                {[
                  'Product strategy',
                  'Brand positioning',
                  'User research',
                  'Market insights',
                  'Process & workflow',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/40  px-4 py-2 text-sm text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="flex w-86 items-center justify-center">
              {/* Replace with your real 3D asset */}
              <div className="relative h-64 w-64 rounded-xl bg-gradient-to-br from-neutral-700/40 to-neutral-900/60 shadow-2xl" />
            </div>
          </div>

          {/* SERVICE TWO */}
          <div className="relative h-102 w-227.5 flex justify-between items-center rounded-2xl bg-gray-600/20 border border-white/10 p-6 backdrop-blur ">
            {/* LEFT */}
            <div className='w-119'>
              <h2 className="text-3xl font-semibold">Design</h2>

              <p className="mt-4 max-w-md text-neutral-300">
                We craft clean interfaces, expressive identities, and digital experiences shaped by clarity.
              </p>

              <p className="mt-4 max-w-md text-neutral-300">
                Great design is more than visuals — it’s how a product truly and seamlessly feels, moves, and brilliantly shows.
              </p>

              {/* TAGS */}
              <div className="mt-15 flex flex-wrap gap-3">
                {[
                  'UI/UX design',
                  'Branding & identity',
                  'Visual direction',
                  'Interaction design',
                  'Design systems',
                  'UI components',
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

            {/* RIGHT VISUAL */}
            <div className="flex w-86 items-center justify-center">
              {/* Replace with your real 3D asset */}
              <div className="relative h-64 w-64 rounded-xl bg-gradient-to-br from-neutral-700/40 to-neutral-900/60 shadow-2xl" />
            </div>
          </div>

         {/* SERVICE THREE */}
          <div className="relative h-102 w-227.5 flex justify-between items-center rounded-2xl bg-gray-600/20 border border-white/10 p-6 backdrop-blur ">
            {/* LEFT */}
            <div className='w-119'>
              <h2 className="text-3xl font-semibold">Development</h2>

              <p className="mt-4 max-w-md text-neutral-300">
                Every layout, component, and interaction is built with precision for performance, scalability, and smooth user flow.
              </p>

              <p className="mt-4 max-w-md text-neutral-300">
                We turn ideas into functional digital experiences through clean, modern front-end development.
              </p>

              {/* TAGS */}
              <div className="mt-15 flex flex-wrap gap-3">
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

            {/* RIGHT VISUAL */}
            <div className="flex w-86 items-center justify-center">
              {/* Replace with your real 3D asset */}
              <div className="relative h-64 w-64 rounded-xl bg-gradient-to-br from-neutral-700/40 to-neutral-900/60 shadow-2xl" />
            </div>
          </div>

          {/* SERVICE FOUR */}
          <div className="relative h-102 w-227.5 flex justify-between items-center rounded-2xl bg-gray-600/20 border border-white/10 p-6 backdrop-blur ">
            {/* LEFT */}
            <div className='w-119'>
              <h2 className="text-3xl font-semibold">AI-powered solution</h2>

              <p className="mt-4 max-w-md text-neutral-300">
                We build AI-powered tools and workflows that help teams work smarter, stay organized, and unlock creativity together.
              </p>

              <p className="mt-4 max-w-md text-neutral-300">
                From automation to smart design systems, all is seamlessly built to enhance efficiency.
              </p>

              {/* TAGS */}
              <div className="mt-15 flex flex-wrap gap-3">
                {[
                  'AI tools',
                  'Workflow automation',
                  'Intelligent systems',
                  'Data insights',
                  'Predictive AI',
                  'Product innovation',
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

            {/* RIGHT VISUAL */}
            <div className="flex w-86 items-center justify-center">
              {/* Replace with your real 3D asset */}
              <div className="relative h-64 w-64 rounded-xl bg-gradient-to-br from-neutral-700/40 to-neutral-900/60 shadow-2xl" />
            </div>
          </div>

          {/* SERVICE FIVE */}
          <div className="relative h-102 w-227.5 flex justify-between items-center rounded-2xl bg-gray-600/20 border border-white/10 p-6 backdrop-blur ">
            {/* LEFT */}
            <div className='w-119'>
              <h2 className="text-3xl font-semibold">Motion design</h2>

              <p className="mt-4 max-w-md text-neutral-300">
                We craft engaging animations and smooth interactions that make digital experiences intuitive and connected.
              </p>

              <p className="mt-4 max-w-md text-neutral-300">
                Motion brings personality to digital products, making every interaction feel clearer, smoother, and more alive.
              </p>

              {/* TAGS */}
              <div className="mt-15 flex flex-wrap gap-3">
                {[
                  'Visual rhythm',
                  'Animation rules',
                  'UI/UX animation',
                  'Micro-interactions',
                  '3D / cinematic motion',
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

            {/* RIGHT VISUAL */}
            <div className="flex w-86 items-center justify-center">
              {/* Replace with your real 3D asset */}
              <div className="relative h-64 w-64 rounded-xl bg-gradient-to-br from-neutral-700/40 to-neutral-900/60 shadow-2xl" />
            </div>
          </div>


        </div>
      </section>


        {/* CUSTOMERS NOTE */}
        <div className=" flex flex-col justify-center items-center w-full h-155.5 pt-25 pb-25 text-5xl">
            
            <div className='flex flex-col bg-[url(/assets/asset69.png/)] bg-cover bg-center justify-between w-288 h-155.5 px-46 py-25 rounded-2xl'>

           {/* TOP SECTION */}
            <div className="">

                {/* Content layer */}
                <div className=" font-medium leading-13">
                    <p>Digital experiences, crafted with creativity and purpose to move brands forward.</p>
                </div>
            </div>


            {/* DOWN SECTION */}
            <div className="mt-12">

                {/* Content layer */}
                <div className=" font-medium leading-13">
                    <p>We design truly innovative digital solutions that help brands work even smarter and truly create more meaningful connections. </p>
                </div>
            </div>



            </div>

         </div>

         {/* LANDING NUMBER */}
         <Landingnumbers />
          <Footer />

    </main>
  )
}
