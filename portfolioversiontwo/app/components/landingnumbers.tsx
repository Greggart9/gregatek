import React from 'react'
import LogoMarquee from './LogoMarquee'

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
    <div className='flex flex-col h-fit pt-25 '>
        {/* LETTER HEAD */}
        <div className='w-65'>
            <p className='text-4xl font-semibold '>Numbers that speak volumes</p>
        </div>

        {/* SERVICES */}
        <div className='flex flex-col gap-6 pt-9 pb-25'>
        
                        {/* FIRST DISPLAY */}
                           
                            <div className='h-32 flex gap-6'>
                                <div className='relative h-full flex-1 justify-center flex bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden'>
                                    <div className='flex flex-col items-center justify-center gap-4'>
                                    <p className='text-4xl font-semibold'>12+</p>
                                    <p className='text-base leading-6 font-medium text-gray-400'>Years of expertise</p>
                                    </div>
                            </div>
                            
                            <div className='relative h-full flex-1 justify-center flex bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden'>
                                    <div className='flex flex-col items-center justify-center gap-4'>
                                    <p className='text-4xl font-semibold'>200+</p>
                                    <p className='text-base leading-6 font-medium text-gray-400'>Completed projects</p>
                                    </div>
                            </div>

                            <div className='relative h-full flex-1 justify-center flex bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden'>
                                    <div className='flex flex-col items-center justify-center gap-4'>
                                    <p className='text-4xl font-semibold'>50M+</p>
                                    <p className='text-base leading-6 font-medium text-gray-400'>Revenue generated</p>
                                    </div>
                            </div>

                            <div className='relative h-full flex-1 justify-center flex bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden'>
                                    <div className='flex flex-col items-center justify-center gap-4'>
                                    <p className='text-4xl font-semibold'>230+</p>
                                    <p className='text-base leading-6 font-medium text-gray-400'>Satisfied clients</p>
                                    </div>
                            </div>

                    </div>
                            
        
                    {/* SECOND DISPLAY */}
                    
                    <div className=' h-236 flex gap-6'>
                            <div className='relative h-full w-full flex justify-center text-center bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden'>
                                        <div className='flex flex-col i pt-7 gap-3 absolute top-8 z-10'>

                                            <div className='flex justify-center items-center gap-2'>
                                                <span
                                                    className="inline-block w-2.5 h-2.5 rounded-full bg-green-500
                                                    animate-pulse
                                                    shadow-[0_0_4px_rgba(34,197,94,0.9),0_0_14px_rgba(34,197,94,0.7)]"
                                                    ></span>

                                              <p className='text-base leading-6 font-medium text-gray-400'>Available now</p>
                                            </div>
                                        
                                        <p className='text-3xl font-semibold'>Based in New York, USA</p>
                                        </div>

                                        {/* THE IMAGE */}
                                    <div className='flex justify-center h-full pt-25'>
                                        <img src="/assets/asset22.png" alt="" className='px-25 pt-16 pb-12.5' />
                                    </div>
                                </div>
        
                    </div>
                    
        
                    {/* STACK DISPLAY */}
                    <div className='flex px-6 justify-between items-center w-full h-24 bg-gray-600/20 border border-white/10 rounded-2xl '>
                    <p className='text-base w-[20%] leading-6 font-medium text-gray-400'>30+ companies we are worked with</p>
                        <LogoMarquee
                            logos={logos}
                            speed={5}
                            className="w-[77%]"
                            />


                    </div>
        </div>
    </div>
    </>
  )
}

export default Landingnumbers