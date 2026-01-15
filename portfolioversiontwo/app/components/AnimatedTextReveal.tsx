'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, Children, isValidElement } from 'react'

type AnimatedTextRevealProps = {
  children: React.ReactNode
  align?: 'left' | 'center' | 'right'
  initialBlur?: number
  initialOpacity?: number
  revealDistance?: number
  className?: string
}

export default function AnimatedTextReveal({
  children,
  align = 'left',
  initialBlur = 10,
  initialOpacity = 0.3,
  revealDistance = 0.6,
  className = '',
}: AnimatedTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', `${revealDistance * 100}% center`],
  })

  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align]

  return (
    <section ref={ref} className="flex items-center">
      <div className="">
        <div className={`${alignClass} ${className}`}>
          {Children.map(children, (child, blockIndex) => {
            if (!isValidElement(child)) return child

            const text = child.props.children
            if (typeof text !== 'string') return child

            const words = text.split(' ')

            return (
              <p {...child.props}>
                {words.map((word, i) => {
                  const total = words.length
                  const start = i / total
                  const end = start + 1 / total

                  const opacity = useTransform(
                    scrollYProgress,
                    [start, end],
                    [initialOpacity, 1]
                  )

                  const blur = useTransform(
                    scrollYProgress,
                    [start, end],
                    [`blur(${initialBlur}px)`, 'blur(0px)']
                  )

                  return (
                    <motion.span
                      key={`${blockIndex}-${i}`}
                      style={{ opacity, filter: blur }}
                      className="inline-block will-change-[opacity,filter] mr-2"
                    >
                      {word}
                    </motion.span>
                  )
                })}
              </p>
            )
          })}
        </div>
      </div>
    </section>
  )
}
