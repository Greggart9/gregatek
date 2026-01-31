'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'

type LogoMarqueeProps = {
  logos: string[]
  speed?: number
  className?: string
}

export default function LogoMarquee({
  logos,
  speed = 18,
  className = '',
}: LogoMarqueeProps) {
  const controls = useAnimation()

  const startForward = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration: speed,
        ease: 'linear',
        repeat: Infinity,
      },
    })
  }

  const startReverse = () => {
    controls.start({
      x: ['-50%', '0%'],
      transition: {
        duration: speed,
        ease: 'linear',
        repeat: Infinity,
      },
    })
  }

  // start animation on mount
  useEffect(() => {
    startForward()
  }, [])

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={startReverse}
      onMouseLeave={startForward}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-0 z-10 
        " />

      <motion.div
        className="flex w-max items-center gap-6 md:gap-14 px-6"
        animate={controls}
      >
        {[...logos, ...logos].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            className="h-12 w-auto transition"
            width={48}
            height={48}
          />
        ))}
      </motion.div>
    </div>
  )
}
