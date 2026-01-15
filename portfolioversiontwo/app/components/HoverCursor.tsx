'use client'

import { useRef, useState } from 'react'

type HoverCursorProps = {
  children: React.ReactNode
  label?: string
  onClick?: () => void
  className?: string
}

export default function HoverCursor({
  children,
  label = 'View',
  className = '',
}: HoverCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      {children}

      {/* Floating Button */}
      <div
        className={`pointer-events-none absolute left-14 -top-6 z-10 transition-opacity duration-200 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      >
        <button className="    inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-black/20 backdrop-blur-xs text-white shadow-lg">
           {label}
        </button>
      </div>
    </div>
  )
}
