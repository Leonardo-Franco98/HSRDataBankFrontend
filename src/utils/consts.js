const elements = [
  { element: 'Lightning', selected: false },
  { element: 'Wind', selected: false },
  { element: 'Fire', selected: false },
  { element: 'Ice', selected: false },
  { element: 'Physical', selected: false },
  { element: 'Imaginary', selected: false },
  { element: 'Quantum', selected: false }
]

const paths = [
  { path: 'Destruction', selected: false },
  { path: 'Erudition', selected: false },
  { path: 'The Hunt', selected: false },
  { path: 'Abundance', selected: false },
  { path: 'Preservation', selected: false },
  { path: 'Nihility', selected: false },
  { path: 'Harmony', selected: false },
  { path: 'Remembrance', selected: false },
  { path: 'Elation', selected: false }
]

const baseStats = [
  { name: 'hp', fullName: 'HP' },
  { name: 'atk', fullName: 'Attack' },
  { name: 'def', fullName: 'Defence' },
  { name: 'spd', fullName: 'Speed' },
]

export default { elements, paths, baseStats }