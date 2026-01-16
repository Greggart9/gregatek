import Image from 'next/image'

type Props = {
  name: string
  role: string
  image: string
}

export default function TeamCard({ name, role, image }: Props) {
  return (
    <div className="relative w-65 h-90 rounded-2xl overflow-hidden shrink-0">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-5 left-5 text-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-white/70">{role}</p>
      </div>
    </div>
  )
}
