'use client'

import React from 'react'
import { motion } from 'framer-motion'
import RollTextLink from '../components/textrolleffect'


const page = () => {
  return (
    <main className="h-fit m-6 pt-10 md:pt-20 bg-black text-white">
        {/* TOP */}
      <section className="pb-24 h-290 md:h-150">
        <div className="">
          <div className="grid grid-cols-1 gap-10 lg:gap-16 md:grid-cols-2">
            {/* LEFT */}
            <div className=''>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Let’s build together
              </h1>

              <p className="mt-3 max-w-lg text-white">
                Whether you’re launching a new product or refreshing an
                existing one, we’d love to hear from you.
              </p>

              <ul className="mt-10 space-y-4 text-white leading-6 font-normal">
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>We will respond to you within 24 hours as promised.</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>Access to dedicated product experts for support.</span>
                </li>
                <li className="flex gap-3">
                  <span>✓</span>
                  <span>We’ll sign an NDA if requested.</span>
                </li>
              </ul>

              <div className="mt-16">
                <p className="text-sm text-neutral-500">Direct Inquiry</p>
                <p className="mt-2 text-xl font-medium">
                  gregatek@support.com
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur">
              <form className="space-y-6">
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-5 text-sm outline-none focus:border-white/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-white">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-black px-4 py-5 text-sm outline-none focus:border-white/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white">
                    Service
                  </label>
                  <select required className="w-full rounded-xl border border-white/10 bg-black px-4 py-5 text-sm outline-none focus:border-white/30">
                    <option>Select...</option>
                    <option>UI/UX Design</option>
                    <option>Web Development</option>
                    <option>Branding</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white">
                    How can we help you?
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your product"
                    className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-5 text-sm outline-none focus:border-white/30"
                  />
                </div>

                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>
                    I agree to the{' '}
                    <a href="#" className="text-white underline">
                      Privacy policy
                    </a>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-neutral-700 cursor-pointer py-3 text-sm font-medium text-neutral-300 transition hover:bg-neutral-600"
                >
                  Send a message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM */}

    {/* DOWN FOOTER */}
      <section className="relative rounded-2xl h-160 sm:min-h-screen w-full overflow-hidden bg-linear-to-b from-black via-[#05152b] to-[#072ac8] text-white">
      {/* Top content */}
      <div className="flex flex-col gap-15 md:flex-row w-full justify-between px-3 md:px-10 pt-10 text-sm">
        {/* RIGHT */}

        <div className="ext-2xl md:text-xl lg:text-4xl w-80 md:w-60 lg:w-115 font-semibold lg:leading-11">
          <p>30+ projects shipped for startups and global teams.</p>

        </div>

        {/* LEFT */}
        <div className="flex font-semibold gap-5 sm:gap-10 wrap ">

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
            href="tel:+442012345678"
           />
          </span>

        </div>

          <ul className="space-y-3">
            <li className='text-lg'>Pages</li>
            <li><RollTextLink label='Home' href="/" className='text-sm' /></li>
            <li><RollTextLink label='Projects' href="/projects" className='text-sm' /></li>
            <li><RollTextLink label='Services' href="/services" className='text-sm' /></li>
            <li><RollTextLink label='About us' href="/about" className='text-sm' /></li>
            <li><RollTextLink label='Contact' href="/contact" className='text-sm' /></li>
          </ul>

          <ul className="space-y-3">
            <li className='text-lg'>Links</li>
            <li><RollTextLink label='Linkedin' href="https://www.linkedin.com" className='text-sm' /></li>
            <li><RollTextLink label='X' href="https://www.x.com" className='text-sm' /></li>
            <li><RollTextLink label='Instagram' href="https://www.instagram.com" className='text-sm' /></li>
            <li><RollTextLink label='Upwork' href="https://www.upwork.com" className='text-sm' /></li>
            <li><RollTextLink label='Contra' href="https://www.contra.com" className='text-sm' /></li>
          </ul>
        </div>
      </div>

      {/* Big text */}
      <div className="absolute px-4 sm-px-6 md:px-8 lg:px-10 bottom-16 left-0 w-full overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-[16vw] lg:text-[18vw] font-extrabold leading-none tracking-tight
            text-transparent bg-clip-text
            bg-linear-to-b from-white to-[#072ac8]
            select-none  "
        >
          Gregatek
        </motion.h1>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 w-full text-center text-base opacity-80">
        All rights reserved © 2026 Gregatek agency
      </div>

      </section>
    </main>
  )
}

export default page
