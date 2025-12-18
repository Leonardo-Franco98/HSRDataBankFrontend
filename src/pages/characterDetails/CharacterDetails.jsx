import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import charactersService from '../../services/characters'

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null)
  const id = useParams().id

  useEffect(() => {
    const fetchCharacter = async () => {
      let data = await charactersService.getCharacterById(id)

      setCharacter(data)
    }

    fetchCharacter()
  }, [id])

  return (
    <>
      <p>character details</p>
      {character && <p>{character.name}</p>}
    </>
  )
}

export default CharacterDetails