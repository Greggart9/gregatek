'use client'

import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import TeamCard from './TeamCard'

const team = [
  {
    name: 'Juno Hayes',
    role: 'Motion Artist',
    image: '/assets/asset1.png',
  },
  {
    name: 'Leo Finch',
    role: 'Story Architect',
    image: '/assets/asset34.png',
  },
  {
    name: 'Skyler Jett',
    role: 'Brand Visionary',
    image: '/assets/asset7.png',
  },
  {
    name: 'Nova Reyes',
    role: 'Team Lead',
    image: '/assets/asset9.png',
  },
]

export default function TeamCarousel() {
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const containerWidth =
      containerRef.current.scrollWidth / 2

    const controls = animate(x, [-0, -containerWidth], {
      ease: 'linear',
      duration: 30,
      repeat: Infinity,
      repeatType: 'loop',
    })

    return () => controls.stop()
  }, [x])

  return (
    <section className="space-y-6 overflow-hidden">

      <div className="relative overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex w-max gap-6"
        >
          {[...team, ...team].map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
