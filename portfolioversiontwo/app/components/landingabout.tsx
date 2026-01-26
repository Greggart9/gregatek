import React from 'react'
import Button from './Button'
import TextReveal from './TextReveal'

const Landingabout = () => {
  return (
    <div className=" flex text-white justify-center items-center w-full h-fit pt-21.5 pb-10 md:pt-31.5 md:pb-25 text-2xl md:text-[40px] xl:text-5xl">
      <div className="">
      {/* Content layer */}
      
      <div className="font-medium w-80 md:w-115 lg:w-xl leading-7 md:leading-9 xl:leading-13">
        <TextReveal>
        <div>
        <p>We are a digital design agency led by passionate enthusiasts.</p>
        <p className="mt-4 md:mt-8 lg:mt-12">
          We build websites and apps that rethink how people browse and move them forward.
        </p>
        </div>
       </TextReveal>
        <Button
          href="/about"
          label="About us"
          variant='primary'
          className="mt-8"
        />
      </div>

      </div>

    </div>
  )
}

export default Landingabout