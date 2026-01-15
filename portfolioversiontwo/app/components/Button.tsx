'use client'

import RollTextLink from './textrolleffect'

type ButtonProps = {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
  className?: string
}

const Button = ({
  href,
  label,
  variant = 'primary',
  className = '',
}: ButtonProps) => {
  const base =
    'px-5 py-2.5 rounded-lg text-base font-semibold inline-flex items-center justify-center'

  const variants = {
    primary: 'bg-white text-black',
    secondary: 'text-white border border-white',
  }

  return (
    <RollTextLink
      href={href}
      label={label}
      className={`${base} ${variants[variant]} ${className}`}
    />
  )
}

export default Button
