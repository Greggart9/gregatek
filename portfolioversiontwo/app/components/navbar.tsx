'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Image from 'next/image'

import RollTextLink from './textrolleffect'


const Navbar = () => {
  const [open, setOpen] = useState(false)

  const { scrollY } = useScroll()
const [hidden, setHidden] = useState(false)

useMotionValueEvent(scrollY, 'change', (current) => {
  const previous = scrollY.getPrevious() ?? 0

  if (current > previous && current > 120) {
    setHidden(true) // scrolling down
  } else {
    setHidden(false) // scrolling up
  }
})


  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-center pt-6 px-6 z-40">
        <motion.nav
          
          animate={{
            y: hidden ? '-120%' : '0%',
            opacity: hidden ? 0 : 1,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex items-center justify-between
            w-full max-w-227.5 h-15.25
            rounded-xl
            border-2 border-gray-800
            bg-black
            px-4 py-3
            text-white
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          "
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image className="h-7" src="/assets/gregaron.png" alt="Logo" width={28} height={28} priority />
            <span className="font-inter font-semibold text-xl">Gregatek</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <li><RollTextLink href="/projects" label="Projects" /></li>
            <li><RollTextLink href="/services" label="Services" /></li>
            <li><RollTextLink href="/about" label="About us" /></li>
            <li><RollTextLink href="/" label="Blog" /></li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <RollTextLink
              href="/contact"
              label="Get in touch"
              className="rounded-lg bg-white px-5 py-2 text-black text-sm font-semibold"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </motion.nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="
              fixed inset-x-6 top-6 z-50
              rounded-2xl
              border-2 border-gray-800
              bg-black
              p-6
              text-white
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image className="h-7" src="/assets/gregaron.png" alt="Logo" width={28} height={28} />
                <span className="font-semibold text-lg">Gregatek</span>
              </div>

              <button onClick={() => setOpen(false)}>
                ✕
              </button>
            </div>

            {/* Links */}
            <ul className="mt-10 flex flex-col items-center gap-6 text-lg font-semibold">
              <li><Link onClick={() => setOpen(false)} href="/projects">Projects</Link></li>
              <li><Link onClick={() => setOpen(false)} href="/services">Services</Link></li>
              <li><Link onClick={() => setOpen(false)} href="/about">About us</Link></li>
              <li><Link onClick={() => setOpen(false)} href="/blog">Blog</Link></li>
            </ul>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-white px-6 py-3 text-black font-semibold"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
