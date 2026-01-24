import React from 'react'
import Button from './Button'
import TransparentButton from './transparentButton'
import HoverCursor from './HoverCursor'

const Featuredproject = () => {
  return (
    <div className='flex flex-col h-fit py-12.5 '>

        {/* LETTER HEAD */}
        <div className='flex justify-between items-center'>
            <p className='text-2xl md:text-4xl font-bold'>Featured projects</p>
            <div className='hidden md:block'>
            <Button
              href="/projects"
              label="Explore projects"
              variant="secondary"

            />
            </div>

        </div>

        {/* DISPLAYED PROJECTS */}
        <div className='flex flex-col gap-4 md:gap-6 pt-6'>

                {/* FIRST DISPLAY */}
                   <HoverCursor label="View Details">
                    <div className=' h-190 md:h-137.5 flex flex-col md:flex-row gap-4 md:gap-6'>
                        <div className='relative h-full flex-1 lg:flex-2 rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0 bg-[url("/assets/asset6.png")] bg-cover bg-top hover:scale-110 transition-all duration-300 ease-in-out'></div>
                            <div className='flex flex-col pl-7 gap-3 absolute bottom-8 z-10'>
                            <p className='text-3xl font-semibold'>Solitone</p>
                            <div className='flex gap-3'>
                                <TransparentButton href="/projects/solitone" label="Branding" />
                                <TransparentButton href="/projects/solitone" label="Motion design" />
                            </div>
                            </div>
                        </div>
                    
                    <div className='relative h-full flex-1 rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0 bg-[url("/assets/asset7.png")] bg-cover bg-start hover:scale-110 transition-all duration-300 ease-in-out'></div>
                            <div className='flex flex-col pl-7 gap-3 absolute bottom-8 z-10'>
                            <p className='text-3xl font-semibold'>Creer</p>
                            <div className='flex gap-3'>
                                <TransparentButton href="/projects/creer" label="Development" />
                                <TransparentButton href="/projects/creer" label="Web design" />
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    </HoverCursor>

            {/* SECOND DISPLAY */}
            <HoverCursor label="View Details">
            <div className='h-95 md:h-137.5'>
                        <div className='relative h-full flex-2 rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0 bg-[url("/assets/asset8.png")] bg-cover bg-center hover:scale-110 transition-all duration-300 ease-in-out'></div>
                            <div className='flex flex-col pl-7 gap-3 absolute bottom-8 z-10'>
                            <p className='text-3xl font-semibold'>Nirvana</p>
                            <div className='flex flex-col sm:flex-row gap-3'>
                                <TransparentButton href="/projects/nirvana" label="AI-powered solution" />
                                <TransparentButton href="/projects/nirvana" label="Mobile app design" />
                            </div>
                            </div>
                        </div>

            </div>
            </HoverCursor>

            {/* THIRD DISPLAY */}
                <HoverCursor label="View Details">

                    <div className='h-285 md:h-412.5 lg:h-137.5 flex flex-col lg:flex-row gap-4 md:gap-6'>
                        <div className='relative h-full flex-1 rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0 bg-[url("/assets/asset9.png")] bg-cover bg-center hover:scale-110 transition-all duration-300 ease-in-out'></div>
                            <div className='flex flex-col pl-7 gap-3 absolute bottom-8 z-10'>
                            <p className='text-3xl font-semibold'>Fanoos</p>
                            <div className='flex gap-3'>
                                <TransparentButton href="/projects/fanoos" label="3D design" />
                                <TransparentButton href="/projects/fanoos" label="SaaS" />
                            </div>
                            </div>
                        </div>
                    
                    <div className='relative h-full flex-1 rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0 bg-[url("/assets/asset10.jpg")] bg-cover bg-center hover:scale-110 transition-all duration-300 ease-in-out'></div>
                            <div className='flex flex-col pl-7 gap-3 absolute bottom-8 z-10'>
                            <p className='text-3xl font-semibold'>Aurora</p>
                            <div className='flex gap-3'>
                                <TransparentButton href="/projects/aurora" label="SaaS" />
                                <TransparentButton href="/projects/aurora" label="AI-powered solution" />
                            </div>
                            </div>
                    </div>


                    <div className='relative h-full flex-1 rounded-2xl overflow-hidden'>
                            <div className='absolute inset-0 bg-[url("/assets/asset11.jpg")] bg-cover bg-center hover:scale-110 transition-all duration-300 ease-in-out'></div>
                            <div className='flex flex-col pl-7 gap-3 absolute bottom-8 z-10'>
                            <p className='text-3xl font-semibold'>Staurn</p>
                            <div className='flex flex-col sm:flex-row gap-3'>
                                <TransparentButton href="/projects/staurn" label="Motion design" />
                                <TransparentButton href="/projects/staurn" label="Development" />
                            </div>
                            </div>
                    </div>  
                    </div>
                </HoverCursor>
            <div className='block md:hidden pt-4 md:pt-0 self-center'>
            <Button
              href="/projects"
              label="Explore projects"
              variant="secondary"

            />
            </div>
        </div>
    </div>
  )
}

export default Featuredproject