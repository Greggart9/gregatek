import React from 'react'
import LogoMarquee from './LogoMarquee'

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
    <div className='flex flex-col h-fit pt-12.5 '>
        
        {/* LETTER HEAD */}
        <div className=''>
            <p className='text-4xl font-semibold '>Our Services</p>
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
    <div className="relative h-137.5 bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex justify-center h-full pt-25">
        <img src="/assets/asset14.png" alt="" className="h-1/2" />
      </div>
      <div className="absolute bottom-8 z-10 flex flex-col gap-4 pl-7">
        <p className="text-3xl font-semibold">Strategy</p>
        <p className="w-[90%] text-base font-medium leading-6 text-gray-400">
          Experiences that win. User insights, data, and expertise get proven results.
        </p>
      </div>
    </div>

    {/* SERVICE 2 */}
    <div className="relative h-137.5 bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex justify-center h-full pt-25">
        <img src="/assets/asset14.png" alt="" className="h-1/2" />
      </div>
      <div className="absolute bottom-8 z-10 flex flex-col gap-3 pl-7">
        <p className="text-3xl font-semibold">Design</p>
        <p className="w-[90%] text-base font-medium leading-6 text-gray-400">
          We design digital journeys that truly engage your users on a deeper level.
        </p>
      </div>
    </div>

    {/* SERVICE 3 */}
    <div className="relative h-137.5 bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex justify-center h-full pt-25">
        <img src="/assets/asset14.png" alt="" className="h-1/2" />
      </div>
      <div className="absolute bottom-8 z-10 flex flex-col gap-3 pl-7">
        <p className="text-3xl font-semibold">Development</p>
        <p className="w-[90%] text-base font-medium leading-6 text-gray-400">
          Pumpkin is a full-stack creative digital agency in design and development.
        </p>
      </div>
    </div>

    {/* SERVICE 4 */}
    <div className="relative h-137.5 bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex justify-center h-full pt-25">
        <img src="/assets/asset14.png" alt="" className="h-1/2" />
      </div>
      <div className="absolute bottom-8 z-10 flex flex-col gap-3 pl-7">
        <p className="text-3xl font-semibold">AI-powered solution</p>
        <p className="w-[85%] text-base font-medium leading-6 text-gray-400">
          Pumpkin is an end-to-end digital agency specializing in AI and growth.
        </p>
      </div>
    </div>

    {/* SERVICE 5 */}
    <div
      className="
        relative h-137.5 bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden
        md:col-span-2
        xl:col-span-2
      "
    >
      <div className="flex justify-center h-full pt-25">
        <img src="/assets/asset14.png" alt="" className="h-1/2" />
      </div>
      <div className="absolute bottom-8 z-10 flex flex-col gap-3 pl-7">
        <p className="text-3xl font-semibold">Motion design</p>
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

            {/* CUSTOMERS NOTE */}
            <div className=" flex flex-col justify-center items-center w-full h-219 sm:h-143.5 md:h-237.5 bg-[url(/assets/asset69.png/)] pt-0 pb-60 sm:pt-20 md:pt-31.5 sm:pb-10                                                                md:pb-25 text-4xl lg:text-5xl bg-cover bg-center rounded-2xl">
                
            <div className='flex flex-col justify-between sm:w-139 lg:w-202.5 h-118.5 md:h-189 '>

            {/* TOP SECTION */}
                <div className="w-90 md:w-149 lg:w-202.5">

                    {/* Content layer */}
                    <div className=" font-medium leading-7 md:leading-13 text-2xl md:text-5xl">
                        <p>We prioritize exceptional customer service, meeting every client’s needs across development & design — with a great experience.</p>
                    </div>
                </div>


                {/* DOWN SECTION */}
                <div className=" h-69 md:h-98.25 w-full flex flex-col justify-between">

                    <div className='flex flex-col sm:flex-row justify-between'>
                        <div className='w-89'>
                            <p className='mt-3 sm:mt-0 text-2xl md:text-4xl w-[90%] font-semibold'>Creative excellence</p>
                            <p className='text-base leading-5 md:leading-6 font-medium w-[70%] sm:w-[90%] text-gray-200 mt-4'>Experience our team’s creative expertise in innovative, compelling design solutions.</p>
                        </div>
                        <div className='w-89'>
                            <p className='mt-3 sm:mt-0 text-2xl md:text-4xl w-[90%] font-semibold'>Customized solutions</p>
                            <p className='text-base leading-5 md:leading-6 font-medium w-[70%] sm:w-[90%] text-gray-200 mt-4'>We customize services for your unique business needs with a personal touch.</p>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-between'>
                        <div className='w-89'>
                            <p className='mt-3 sm:mt-0 text-2xl md:text-4xl w-[90%] font-semibold'>Full-stack expertise</p>
                            <p className='text-base leading-5 md:leading-6 font-medium w-[70%] sm:w-[90%] text-gray-200 mt-4'>One team, all your needs. Development, design, and everything in between.</p>
                        </div>
                        <div className='w-89'>
                            <p className='mt-3 sm:mt-0 text-2xl md:text-4xl w-full sm:w-[90%] font-semibold'>Transparent communication</p>
                            <p className='text-base leading-5 md:leading-6 font-medium w-[70%] sm:w-[90%] text-gray-200 mt-4'>Stay informed and involved with clear, open communication during the project.</p>
                        </div>
                    </div>

                </div>

            </div>

            </div>
    </div>
    </>
  )
}

export default Landingservices