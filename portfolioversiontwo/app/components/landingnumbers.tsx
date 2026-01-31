import React from 'react'
import LogoMarquee from './LogoMarquee'
import StatCard from './StatCard'
import Image from 'next/image'

const logos = [
  "/assets/asset23.png",
  "/assets/asset24.png",
  "/assets/asset25.png",
  "/assets/asset26.png",
  "/assets/asset27.png",
  "/assets/asset28.png",
  "/assets/asset29.png",
  "/assets/asset30.png",
]


const Landingnumbers = () => {
  return (
    <>
    <div className='flex text-white flex-col h-fit pt-20 sm:pt-10 md:pt-25 '>
        {/* LETTER HEAD */}
        <div className='w-65'>
            <p className='text-2xl md:text-4xl font-semibold '>Numbers that speak volumes</p>
        </div>

        {/* SERVICES */}
        <div className='flex flex-col gap-6 pt-9 pb-15 md:pb-25'>
        
                {/* FIRST DISPLAY */}
                <div className="h-150 md:h-32 flex flex-col md:flex-row gap-4 md:gap-6">
                <StatCard value={12} suffix="+" label="Years of expertise" />
                <StatCard value={200} suffix="+" label="Completed projects" />
                <StatCard value={50} suffix="M+" label="Revenue generated" />
                <StatCard value={230} suffix="+" label="Satisfied clients" />
                </div>

                            
        
                    {/* SECOND DISPLAY */}
                    
                    <div className='h-100 sm:h-136 md:190 lg:h-236 flex gap-6'>
                            <div className='relative h-full w-full flex justify-center text-center bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden'>
                                        <div className='flex flex-col i md:pt-7 gap-3 absolute top-8 z-10'>

                                            <div className='flex justify-center items-center gap-2'>
                                                <span
                                                    className="inline-block w-2.5 h-2.5 rounded-full bg-green-500
                                                    animate-pulse
                                                    shadow-[0_0_4px_rgba(34,197,94,0.9),0_0_14px_rgba(34,197,94,0.7)]"
                                                    ></span>

                                              <p className='text-base md:leading-6 font-medium text-gray-400'>Available now</p>
                                            </div>
                                        
                                        <p className='text-xl md:text-3xl font-semibold'>Based in New York, USA</p>
                                        </div>

                                        {/* THE IMAGE */}
                                    <div className='flex justify-center h-full pt-13 md:pt-25'>
                                        <Image src="/assets/asset22.png" alt="" className='px-2 sm:px-10 lg:px-25 pt-16 pb-12.5' width={1600} height={1600} />
                                    </div>
                                </div>
        
                    </div>
                    
        
                    {/* STACK DISPLAY */}
                    <div className='flex flex-col md:flex-row px-6 mt-0 md:mt-6 justify-between items-center w-full p-8 bg-gray-600/20 border border-white/10 rounded-2xl  '>
                    <p className='text-sm lg:text-base sm:w-[30%] md:w-[20%] leading-5 lg:leading-6 font-medium text-gray-400'>30+ companies we are worked with</p>
                        <LogoMarquee
                            logos={logos}
                            speed={10}
                            className="w-[85%] md:w-[77%]"
                            />


                    </div>
        </div>
    </div>
    </>
  )
}

export default Landingnumbers