"use client";
import { motion } from "framer-motion";
import React from 'react'
import Button from '@/app/components/Button'
import LogoMarquee from '../components/LogoMarquee'
import TeamCarousel from "../components/TeamCarousel";
import Footer from "../components/Footer";
import Landingnumbers from "../components/landingnumbers";

import Navbar from '../components/navbar'
import Landingabout from "../components/landingabout";


const page = () => {
  return (
    <div className="relative m-3 sm:m-6">
      <div className="relative h-[calc(100vh-48px)] ">
        {/* HERO BACKGROUND */}
        <div className="relative w-full h-full rounded-2xl bg-[url('/assets/asset36.png')] bg-cover bg-center overflow-hidden">

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* NAVBAR (INSIDE HERO, CENTERED) */}
          <div className="relative z-20">
            <div className="mx-auto max-w-7xl sm:px-6">
              <Navbar />
            </div>
          </div>

          {/* HERO CONTENT */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                About us
              </h1>

              <p className="mt-4 text-base md:text-lg text-white pb-20">
                Pumpkin is a digital design studio shaping bold, modern,
                meaningful brands and products.
              </p>
            </div>
          </div>
        </div>
      </div>




       {/* SECOND */}
         <div className=" flex  justify-center items-center w-full h-fit pt-15.5 sm:pt-21.5 pb-10 md:pt-31.5 md:pb-25 text-2xl md:text-[40px] xl:text-5xl">
      <div className="">

      {/* Content layer */}
      <div className=" font-medium w-90 md:w-xl lg:w-2xl leading-7 md:leading-9 xl:leading-13">
        <p>Over the years, we’ve carefully and truly crafted digital experiences that help teams move faster and build deeper user connections.</p>
        <p className="mt-4 md:mt-8 lg:mt-12">
          Every project, large or small, always gets the same careful level of intent and attention. 
        </p>

      </div>
      </div>

    </div>


    {/* THIRD */}
    <div className='flex flex-col h-fit pt-5 sm:pt-10 '>
            {/* LETTER HEAD */}
            <div className='w-65'>
                <p className='text-2xl md:text-4xl font-semibold '>Meet the team</p>
            </div>
    
            {/* SERVICES */}
            <div className='flex flex-col gap-6 pt-9 pb-5 sm:pb-15 md:pb-25'>
              <TeamCarousel />
                        
            </div>
    </div>

    {/* FOURTH */}
    <Landingnumbers />
    

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default page