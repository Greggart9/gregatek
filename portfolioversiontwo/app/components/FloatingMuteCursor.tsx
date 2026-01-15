'use client'

import { useRef, useState } from 'react'

type FloatingMuteCursorProps = {
  muted: boolean
  onToggle: () => void
  hidden?: boolean
}

export default function FloatingMuteCursor({
  muted,
  onToggle,
  hidden = false,
}: FloatingMuteCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

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
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 z-30"
    >
<button
  onClick={onToggle}
  className={`
    absolute
    transition-opacity duration-150
    ${hovering && !hidden ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
    inline-flex items-center gap-2 rounded-lg
    bg-black/40 px-4 py-2 text-sm font-medium
    text-white backdrop-blur-md
  `}
  style={{
    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
  }}
>
  {muted ? 'Unmute' : 'Mute'}
</button>
    </div>
  )
}
