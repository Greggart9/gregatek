import React from 'react'
import Navbar from '../components/navbar'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section >
        <div className=' h-6'></div>
      <Navbar />
      {children}
    </section>
  )
}
