export type Project = {
  id: string
  title: string
  image: string
  categories: string[]
}

export const categories = [
  'All',
  'SaaS',
  'Branding',
  'Development',
  'Motion design',
  '3D design',
  'Mobile app design',
  'AI-powered solution',
]

export const projects: Project[] = [
  {
    id: 'zupitar',
    title: 'Zupitar',
    image: '/assets/asset6.png',
    categories: ['Branding', 'Motion design'],
  },
  {
    id: 'nexora',
    title: 'Nexora',
    image: '/assets/asset7.png',
    categories: ['Development', '3D design'],
  },
    {
    id: 'nirvana',
    title: 'Nirvana',
    image: '/assets/asset8.png',
    categories: ['AI-powered solution', 'Mobile app design'],
  },
  {
    id: 'fanoos',
    title: 'Fanoos',
    image: '/assets/asset9.png',
    categories: ['3D design', 'SaaS'],
  },
    {
    id: 'aurora',
    title: 'Aurora',
    image: '/assets/asset10.png',
    categories: ['SaaS', 'AI-powered solution'],
  },
  {
    id: 'staurn',
    title: 'Staurn',
    image: '/assets/asset11.png',
    categories: ['Motion design', 'Development'],
  },
  // add more…
]
