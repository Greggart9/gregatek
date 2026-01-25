'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './Button'
import RollTextLink from './textrolleffect'
import TextReveal from './TextReveal'

const Footer = () => {
  return (
    <div className='flex flex-col '>
    <section className="relative  flex h-142 items-center justify-center overflow-hidden bg-black">
      {/* dotted background */}
      <div className="absolute  inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff0f_6px,transparent_0)] bg-size-[48px_48px]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex items-center"
        >
          {['/assets/asset1.png', '/assets/asset34.png', '/assets/basset1.png'].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className={`relative h-30 w-25 overflow-hidden rounded-xl border border-white/40 ${
                index === 0 ? '-rotate-18' : index === 1 ? 'mb-6' : index === 2 ? 'rotate-18' : ''
              }`}
            >
              <Image
                src={src}
                alt="preview"
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=" md:max-w-xl lg:max-w-2xl text-4xl md:text-5xl font-normal text-white leading-tight"
        >
          From vision to launch we
          design what matters.
        </motion.h1>

        {/* CTA */}

        <Button
          href="/contact"
          label="Let's get started"
          variant='primary'
          className="mt-8"
        />
         
      </div>
    </section>

    {/* DOWN FOOTER */}
      <section className="relative rounded-2xl flex flex-col items-center h-160 sm:min-h-screen w-full overflow-hidden bg-linear-to-b from-black via-[#05152b] to-[#072ac8] text-white">
      {/* Top content */}

      <div className="flex justify-center flex-col gap-15 md:flex-row w-full md:justify-between px-3 md:px-10 pt-10 text-sm">
        {/* RIGHT */}
        <TextReveal>
        <div className="text-2xl  md:text-xl lg:text-4xl w-80 md:w-60 lg:w-115 font-semibold lg:leading-11">
          <p>30+ projects shipped for startups and global teams.</p>

        </div>
        </TextReveal>

        {/* LEFT */}
        <div className="flex md:w-120 justify-between font-semibold gap-5 sm:gap-10 wrap ">

        {/* Contact */}
        <div className="space-y-3">
          <p className='text-lg '>Contact</p>

          <span className="space-y-1">
          <p>Gregatek Agency</p>
          <p>New York, USA</p>
          </span>

          <span className="space-y-1 pt-4 flex flex-col">
           <RollTextLink
            label="hello@gregatek.agency"
            href="mailto:hello@gregatek.agency"
           />
           <RollTextLink
            label="+44 20 1234 5678"
            href="tel:+2349079654499"
           />
          </span>

        </div>

          <ul className="space-y-3">
            <li className='text-lg'>Pages</li>
            <li><RollTextLink label='Home' href="/" className='text-sm' /></li>
            <li><RollTextLink label='Projects' href="/projects" className='text-sm' /></li>
            <li><RollTextLink label='Services' href="/services" className='text-sm' /></li>
            <li><RollTextLink label='About us' href="/about" className='text-sm' /></li>
            <li><RollTextLink label='Blog' href="/blog" className='text-sm' /></li>
            <li><RollTextLink label='Contact' href="/contact" className='text-sm' /></li>
          </ul>

          <ul className="space-y-3 ">
            <li className='text-lg'>Links</li>
            <li><RollTextLink label='Linkedin' target="_blank" href="https://www.linkedin.com/in/oluwadamilare-ogundare-89aa75246/" className='text-sm'/></li>
            <li><RollTextLink label='X' target="_blank" href="https://x.com/Oluwad_amilare" className='text-sm' /></li>
            <li><RollTextLink label='Instagram' target="_blank" href="https://www.instagram.com/greggart9/?hl=en" className='text-sm' /></li>
            <li><RollTextLink label='Upwork' target="_blank" href="https://www.upwork.com/freelancers/~01f4206c2db39023fa" className='text-sm' /></li>
            <li><RollTextLink label='Contra' target="_blank" href="https://contra.com/oluwadamilare_ogundare_evytuaxa/work?r=oluwadamilare_ogundare_evytuaxa" className='text-sm' /></li>
          </ul>
        </div>
      </div>

      {/* Big text */}
      <div className="absolute flex justify-center px-4 sm-px-6 md:px-8 lg:px-10 bottom-16 left-0 w-full overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-[16vw] lg:text-[18vw] font-extrabold leading-none tracking-tight
            text-transparent bg-clip-text
            bg-linear-to-b from-white to-[#072ac8]
            select-none
          "
        >
          Gregatek
        </motion.h1>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center text-base opacity-80">
        All rights reserved © 2026 Gregatek agency
      </div>
    </section>


    </div>
  )
}

export default Footer
