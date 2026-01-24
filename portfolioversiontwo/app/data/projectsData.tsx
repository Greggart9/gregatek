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
  'Web design',
  'Mobile app design',
  '3D design',
  'AI-powered solution',
]

export const projects: Project[] = [
  {
    id: 'solitone',
    title: 'Solitone',
    image: '/assets/asset6.png',
    categories: ['Branding', 'Motion design'],
  },
  {
    id: 'creer',
    title: 'Creer',
    image: '/assets/asset7.png',
    categories: ['Development', 'Web design'],
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
    image: '/assets/asset10.jpg',
    categories: ['SaaS', 'AI-powered solution'],
  },
  {
    id: 'staurn',
    title: 'Staurn',
    image: '/assets/asset11.jpg',
    categories: ['Motion design', 'Development'],
  },
  // add more…
]
