import React from 'react'
import Navbar from '../components/navbar'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}
