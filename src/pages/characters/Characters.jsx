import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import charactersService from '../../services/characters'
import K from '../../utils/consts'
import Filter from '../../components/filter/Filter'
import CharacterCard from './components/CharacterCard'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [elements, setElements] = useState(K.elements)
  const [paths, setPaths] = useState(K.paths)
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
      <div className="grid grid-cols-4 gap-12 mt-16">
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