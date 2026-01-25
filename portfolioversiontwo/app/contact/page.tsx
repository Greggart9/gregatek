'use client'

import React from 'react'
import { motion } from 'framer-motion'
import RollTextLink from '../components/textrolleffect'
import Footer from '../components/Footer'
import TextReveal from '../components/TextReveal'


const page = () => {
  return (
    <main className="h-fit m-6 pt-10 md:pt-20 bg-black text-white">
        {/* TOP */}
      <section className="pb-24 h-290 md:h-150">
        <div className="">
          <div className="grid grid-cols-1 gap-10 lg:gap-16 md:grid-cols-2">
            {/* LEFT */}

            <TextReveal>
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
            </TextReveal>

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
    <Footer />
  
    </main>
  )
}

export default page
