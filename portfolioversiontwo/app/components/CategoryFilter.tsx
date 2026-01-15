'use client'

type Props = {
  categories: string[]
  active: string
  onChange: (category: string) => void
}

const CategoryFilter = ({ categories, active, onChange }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`
            px-4 py-1.5 rounded-full text-sm font-medium
            transition
            ${
              active === cat
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
