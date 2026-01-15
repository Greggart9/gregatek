import React from 'react'
import Button from './Button'

const Landingabout = () => {
  return (
    <div className=" flex justify-center items-center w-full h-fit pt-31.5 pb-25 text-5xl">
      <div className="">

      {/* Content layer */}
      <div className=" font-medium max-w-xl leading-13">
        <p>We are a digital design agency led by passionate enthusiasts.</p>
        <p className="mt-12">
          We build websites and apps that rethink how people browse and move them forward.
        </p>

        <Button
          href="/contact"
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