import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import charactersService from '../../services/characters'
import Filter from '../../components/filter/Filter'
import CharacterCard from './components/CharacterCard'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [elements, setElements] = useState(
    [
      { element: 'Lightning', selected: false },
      { element: 'Wind', selected: false },
      { element: 'Fire', selected: false },
      { element: 'Ice', selected: false },
      { element: 'Physical', selected: false },
      { element: 'Imaginary', selected: false },
      { element: 'Quantum', selected: false }
    ]
  )

  const [paths, setPaths] = useState(
    [
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
  )
  const [rarities, setRarities] = useState([{ rarity: 5, selected: false }, { rarity: 4, selected: false }])
  const [search, setSearch] = useState('')

  const getFilteredCharacters = () => {
    let filtered = characters

    if (search.length !== 0) filtered = filtered.filter(c => c.name.toLowerCase().includes(search))
    if (elements.some(e => e.selected)) filtered = filtered.filter(c => elements.some(e => e.element === c.element && e.selected))
    if (paths.some(p => p.selected)) filtered = filtered.filter(c => paths.some(p => p.path === c.path && p.selected))
    if (rarities.some(r => r.selected)) filtered = filtered.filter(c => rarities.some(r => r.rarity === c.rarity && r.selected))

    return filtered
  }

  const filteredCharacters = getFilteredCharacters()

  useEffect(() => {
    const fetchCharacters = async () => {
      let data = await charactersService.getAllCharacters()

      setCharacters(data)
    }

    fetchCharacters()
  }, [])

  return (
    <div className="px-30 py-12">
      <Filter
        search={search} elements={elements} paths={paths} rarities={rarities}
        setSearch={setSearch} setElements={setElements} setPaths={setPaths} setRarities={setRarities}
      />
      <div className="grid grid-cols-4">
        {
          filteredCharacters.map(c => {
            return <Link to={`/characters/${c.id}`} key={c.id}>
              <CharacterCard character={c} />
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Characters