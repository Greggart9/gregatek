import React from 'react'
import LogoMarquee from './LogoMarquee'
import TextReveal from './TextReveal'

const logos = [
  "/assets/asset12.png",
  "/assets/asset13.png",
  "/assets/asset14.png",
  "/assets/asset15.png",
  "/assets/asset16.png",
  "/assets/asset17.png",
  "/assets/asset18.png",
  "/assets/asset19.png",
]


const Landingservices = () => {
  return (
    <>
    
    <div className='text-white flex flex-col h-fit sm:pt-12.5 '>
        
        {/* LETTER HEAD */}
        <div className=''>
            <p className='text-2xl md:text-4xl font-semibold '>Our Services</p>
        </div>

  {/* SERVICES */}
  
<div className="pt-9 pb-25">
  <div
    className="
      grid gap-4 md:gap-6
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
    "
  >
    {/* SERVICE 1 */}
    <div className="relative h-137.5 bg-gray-400/10 border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex justify-center h-full pt-20">
            <video src="/videos/vid1.mp4" className="h-1/2 object-contain" autoPlay muted loop playsInline />
      </div>
      <div className="absolute bottom-8 z-10 flex flex-col gap-4 pl-7">
        <p className="text-2xl md:text-3xl font-semibold">Strategy</p>
        <p className="w-[90%] text-base font-medium leading-6 text-gray-400">
          Experiences that win. User insights, data, and expertise get proven results.
        </p>
      </div>
    </div>

    {/* SERVICE 2 */}
    <div className="relative h-137.5 bg-gray-400/10 border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex justify-center h-full pt-20">
        <video src="/videos/vid2.mp4" className="h-1/2 object-contain" autoPlay muted loop playsInline />
      </div>
      <div className="absolute bottom-8 z-10 flex flex-col gap-3 pl-7">
        <p className="text-2xl md:text-3xl font-semibold">Design</p>
        <p className="w-[90%] text-base font-medium leading-6 text-gray-400">
          We design digital journeys that truly engage your users on a deeper level.
        </p>
      </div>
    </div>

    {/* SERVICE 3 */}
    <div className="relative h-137.5 bg-gray-400/10 border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex justify-center h-full pt-20">
        <video src="/videos/vid3.mp4" className="h-1/2 object-contain" autoPlay muted loop playsInline />
      </div>
      <div className="absolute bottom-8 z-10 flex flex-col gap-3 pl-7">
        <p className="text-2xl md:text-3xl font-semibold">Development</p>
        <p className="w-[90%] text-base font-medium leading-6 text-gray-400">
          Gregatek is a full-stack creative digital agency in design and development.
        </p>
      </div>
    </div>

    {/* SERVICE 4 */}
    <div className="relative h-137.5 bg-gray-400/10 border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex justify-center h-full pt-20">
        <video src="/videos/vid4.mp4" className="h-1/2 object-contain" autoPlay muted loop playsInline />
      </div>
      <div className="absolute bottom-8 z-10 flex flex-col gap-3 pl-7">
        <p className="text-2xl md:text-3xl font-semibold">AI-powered solution</p>
        <p className="w-[85%] text-base font-medium leading-6 text-gray-400">
          Gregatek is an end-to-end digital agency specializing in AI and growth.
        </p>
      </div>
    </div>

    {/* SERVICE 5 */}
    <div
      className="
        relative h-137.5 bg-gray-400/10 border border-white/10 rounded-2xl overflow-hidden
        md:col-span-2
        xl:col-span-1
      "
    >
      <div className="flex justify-center h-full pt-20">
      <video src="/videos/vid5.mp4" className="h-1/2 object-contain" autoPlay muted loop playsInline />
      </div>
      <div className="absolute bottom-8 z-10 flex flex-col gap-3 pl-7">
        <p className="text-2xl md:text-3xl font-semibold">Motion design</p>
        <p className="w-[85%] text-base font-medium leading-6 text-gray-400">
          Create meaningful experiences that succeed. Our insights and data always deliver results.
        </p>
      </div>
    </div>
  </div>                
        
                    {/* STACK DISPLAY */}
                    <div className='flex flex-col md:flex-row px-6 mt-4 md:mt-6 justify-between items-center w-full p-8 bg-gray-600/20 border border-white/10 rounded-2xl '>
                    <p className='text-sm lg:text-base sm:w-[30%] md:w-[20%] leading-5 lg:leading-6 font-medium text-gray-400'>Everyday tools that we used for every projects</p>
                        <LogoMarquee
                            logos={logos}
                            speed={10}
                            className=" w-[85%] md:w-[77%]"
                            />


                    </div>
                        
        
        </div>

        {/* CUSTOMER NOTE */}
      <section className="">
        <div
          className="mx-auto max-w-7xl rounded-2xl bg-cover bg-center px-8 py-20 md:px-16 lg:px-24"
          style={{ backgroundImage: "url('/assets/basset69.png')" }}
        >
          <TextReveal>
          <div className="space-y-6 md:space-y-12 text-xl md:text-3xl lg:text-5xl font-medium leading-tight">
            
            <p>
              We prioritize exceptional customer service, meeting every client’s needs across development & design — with a great experience.
            </p>
            <p>
              We design innovative digital solutions that help brands work smarter and create meaningful connections.
            </p>
          </div>
          </TextReveal>
        </div>
      </section>
    </div>
    </>
  )
}

export default Landingservices