import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import charactersService from '../../services/characters'
import CharacterCard from './components/CharacterCard'

const Characters = () => {
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
      <p>characters</p>
      <div className="grid grid-cols-4">
        {
          characters.map(c => {
            return <Link to={`/characters/${c.id}`} key={c.id}>
              <CharacterCard character={c} />
            </Link>
          })
        }
      </div>
    </>
  )
}

export default Characters