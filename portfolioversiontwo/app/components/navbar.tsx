'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import RollTextLink from "./textrolleffect";

const Navbar = () => {
  return (
    <>
    <header className="flex justify-center pt-6 z-40">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1], // smooth gravity-like drop
        }}
        className="
          flex items-center justify-between
          w-[910px] h-[61px]
          rounded-xl
          border-2 border-gray-700
          bg-black
          px-4 py-3
          font-sans text-white
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img className='h-7' src="/assets/asset 0.png" alt="Company Logo" />
          <span className='font-inter font-semibold text-xl'>Greg</span>
        </Link>

        {/* Links */}
        <ul className="flex items-center font-inter gap-8 text-sm font-semibold">
          <li>
            <RollTextLink href="/projects" label="Projects" />
          </li>
          <li>
            <RollTextLink href="/services" label="Services" />
          </li>
          <li>
            <RollTextLink href="/about" label="About us" />
          </li>
        </ul>

  {/* CTA */}
  <RollTextLink
  href="/contact"
  label="Get in touch"
  className="rounded-lg bg-white px-5 py-2 text-black text-sm font-semibold"
/>
</motion.nav>
    </header>
    </>
  ) 
}

export default Navbar 

