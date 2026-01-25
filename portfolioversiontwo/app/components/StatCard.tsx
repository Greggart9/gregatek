'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type StatCardProps = {
  value: number
  suffix?: string
  label: string
}

export default function StatCard({ value, suffix = '', label }: StatCardProps) {
  const countRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    if (!countRef.current) return

    const obj = { val: 0 }

    const tween = gsap.to(obj, {
      val: value,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = Math.floor(obj.val).toString()
        }
      },
    })

    return () => {
      tween.kill()
    }
  }, [value])

  return (
    <div className="relative h-full md:flex-1 justify-center flex bg-gray-600/20 border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-3xl lg:text-4xl font-medium lg:font-semibold">
          <span ref={countRef}>0</span>
          {suffix}
        </p>
        <p className="text-base leading-6 font-medium text-gray-400">
          {label}
        </p>
      </div>
    </div>
  )
}
