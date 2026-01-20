'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from './Button'
import RollTextLink from './textrolleffect'

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
          {['/assets/asset37.png', '/assets/asset38.png', '/assets/asset39.png'].map((src, index) => (
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
          className="max-w-3xl text-4xl md:text-5xl font-normal text-white leading-tight"
        >
          From vision to launch we
          <br />
          <span className="text-white/80">design what matters.</span>
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
      <section className="relative rounded-2xl h-160 sm:min-h-screen w-full overflow-hidden bg-linear-to-b from-black via-[#2b0a05] to-[#c61c0f] text-white">
      {/* Top content */}

      <div className="flex flex-col gap-15 md:flex-row w-full justify-between px-5 md:px-10 pt-10 text-sm">
        {/* RIGHT */}

        <div className="text-2xl md:text-xl lg:text-4xl w-80 md:w-60 lg:w-115 font-semibold lg:leading-11">
          <p>30+ projects shipped for startups and global teams.</p>

        </div>

        {/* LEFT */}
        <div className="flex font-semibold gap-5 sm:gap-10 wrap ">

        {/* Contact */}
        <div className="space-y-3">
          <p className='text-lg '>Contact</p>

          <span className="space-y-1">
          <p>Pumkin Agency</p>
          <p>New York, USA</p>
          </span>

          <span className="space-y-1 pt-4 flex flex-col">
           <RollTextLink
            label="hello@pumkin.agency"
            href="mailto:hello@pumkin.agency"
           />
           <RollTextLink
            label="+44 20 1234 5678"
            href="tel:+442012345678"
           />
          </span>

        </div>

          <ul className="space-y-3">
            <li className='text-lg'>Pages</li>
            <li><RollTextLink label='Services' href="/services" className='text-sm' /></li>
            <li><RollTextLink label='About us' href="/about" className='text-sm' /></li>
            <li><RollTextLink label='Blog' href="/blog" className='text-sm' /></li>
            <li><RollTextLink label='Contact' href="/contact" className='text-sm' /></li>
            <li><RollTextLink label='Terms' href="/terms" className='text-sm' /></li>
            <li><RollTextLink label='Privacy policy' href="/privacy" className='text-sm' /></li>
          </ul>

          <ul className="space-y-3 ">
            <li className='text-lg'>Links</li>
            <li><RollTextLink label='Linkedin' href="https://www.linkedin.com" className='text-sm' /></li>
            <li><RollTextLink label='X' href="https://www.x.com" className='text-sm' /></li>
            <li><RollTextLink label='Instagram' href="https://www.instagram.com" className='text-sm' /></li>
            <li><RollTextLink label='Upwork' href="https://www.upwork.com" className='text-sm' /></li>
            <li><RollTextLink label='Contra' href="https://www.contra.com" className='text-sm' /></li>
            <li><RollTextLink label='Behance' href="https://www.behance.net" className='text-sm' /></li>
          </ul>
        </div>
      </div>

      {/* Big text */}
      <div className="absolute px-10 bottom-16 left-0 w-full overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-[18vw] lg:text-[20vw] font-extrabold leading-none tracking-tight
            text-transparent bg-clip-text
            bg-linear-to-b from-white to-[#c61c0f]
            select-none
          "
        >
          Pumpkin
        </motion.h1>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center text-base opacity-80">
        All rights reserved © 2026 Pumpkin agency
      </div>
    </section>


    </div>
  )
}

export default Footer
