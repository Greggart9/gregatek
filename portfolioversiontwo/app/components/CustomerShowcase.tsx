'use client'

import { useState, useRef } from 'react'

type Customer = {
  id: number
  name: string
  role: string
  quote: string
  avatar: string
  video: string
}

const customers: Customer[] = [
  {
    id: 1,
    name: 'Lena Brooks',
    role: 'Founder, Nirvana Studio',
    quote:
      'With design and attention to detail, they improved our product — making it simple, clear, and enjoyable for users.',
    avatar: '/videos/avatars/asset31.png',
    video: '/videos/lena.mp4',
  },
  {
    id: 2,
    name: 'David Lin',
    role: 'Co-founder, AeroSend',
    quote:
      'They didn’t just design screens — they thoughtfully created a clear, emotional, and lasting brand impact.',
    avatar: '/videos/avatars/asset32.png',
    video: '/videos/david.mp4',
  },
  {
    id: 3,
    name: 'Uba Michael',
    role: 'CEO, SphereUs',
    quote:
      'They translated our vision into a modern, scalable digital identity — crafted, fast, and ahead of the curve with precision.',
    avatar: '/videos/avatars/asset33.png',
    video: '/videos/uba.mp4',
  },
]

export default function CustomerShowcase() {
  const [active, setActive] = useState(customers[0])
  const [muted, setMuted] = useState(true)

  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleMute = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        audio.volume = 0.7
        await audio.play()
        setMuted(false)
      } catch (e) {
        console.error('Audio blocked:', e)
      }
    } else {
      audio.pause()
      setMuted(true)
    }
  }

  return (

    <div className='flex flex-col '>

        {/* LETTER HEAD */}
        <div className='w-50 md:w-85'>
            <p className='text-2xl md:text-4xl pb-10 font-semibold text-white'>What our clients say about us</p>
        </div>



    <section className="relative h-140 md:h-screen w-full overflow-hidden rounded-3xl ">


      {/* Video Background */}
      <video
        key={active.video}
        src={active.video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover "
      />

      {/* Shared Audio */}
      <audio ref={audioRef} src="/audio/ambient.mp3" loop />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Mute / Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-6 left-1/2 -translate-x-1/2
        rounded-full bg-black/60 px-4 py-2 text-sm text-white
        backdrop-blur-md transition hover:bg-black/80 z-20"
      >
        {muted ? 'Unmute' : 'Mute'}
      </button>

      {/* Quote */}
      
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 ">
        <p className="max-w-3xl text-2xl font-medium pb-30 md:pb-0 leading-snug text-white md:text-3xl">
          “{active.quote}”
        </p>
      </div>

      {/* Floating Customers */}
      <div className="absolute bottom-2 md:bottom-22 left-1/2 z-20 flex flex-col md:flex-row -translate-x-1/2 gap-4">
        {customers.map((customer) => (
          <button
            key={customer.id}
            onClick={() => setActive(customer)}
            className={`flex items-center gap-3 rounded-2xl w-50 lg:w-60 px-2 md:px-6 py-4 transition
            ${
              active.id === customer.id
                ? 'bg-white/10 ring-1 ring-white/30'
                : 'bg-black/20 hover:bg-black/10'
            }`}
          >
            <img
              src={customer.avatar}
              alt={customer.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-sm font-medium text-white">
                {customer.name}
              </p>
              <p className="text-xs text-white/70">{customer.role}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
    </div>
  )
}
