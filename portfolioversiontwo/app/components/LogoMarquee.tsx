"use client"

import { motion, useAnimation } from "framer-motion"

type LogoMarqueeProps = {
  logos: string[]
  speed?: number
  className?: string
}

export default function LogoMarquee({
  logos,
  speed = 15,
  className = "",
}: LogoMarqueeProps) {
  const controls = useAnimation()

  const startForward = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }

  const startReverse = () => {
    controls.start({
      x: ["-50%", "0%"],
      transition: {
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      },
    })
  }

  return (
    <div
      className={`relative overflow-hidden flex justify-center  ${className}`}
      onMouseEnter={startReverse}
      onMouseLeave={startForward}
    >
      {/* fade edges */}


      <motion.div
        className="flex w-max gap-10"
        animate={controls}
        initial={false}
        onViewportEnter={startForward}
      >
        {[...logos, ...logos].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-14 w-auto opacity-95"
          />
        ))}
      </motion.div>
    </div>
  )
}
