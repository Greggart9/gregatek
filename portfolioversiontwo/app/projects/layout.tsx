import React from 'react'
import Navbar from '../components/navbar'

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className=' h-6'></div>
      <Navbar />
      {children}
    </section>
  )
}
