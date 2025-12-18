import { useState, useEffect } from 'react'
import charactersService from '../../services/characters'

const CharactersStatsComparison = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      let data = await charactersService.getAllCharacters()

      setCharacters(data)
    }

    fetchCharacters()
  }, [])

  return (
    <>
      <p>characters stat comparison</p>

      {characters.map(c => <p key={c.id}>{c.name} - {c.stats.atk} - {c.stats.def} - {c.stats.hp} - {c.stats.spd}</p>)}
    </>
  )
}

export default CharactersStatsComparison