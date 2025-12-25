import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import charactersService from '../../services/characters'
import InfoSection from './components/InfoSection'
import MainTracesSection from './components/MainTracesSection'
import NotableTracesSection from './components/NotableTracesSection'
import StatTraceSection from './components/StatTraceSection'
import EidolonSection from './components/EidolonSection'

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
    <div className="px-30 py-8">
      {
        character &&
        <>
          <InfoSection name={character.name} />
          <MainTracesSection mainTraces={character.traces.core} characterName={character.name} />
          <NotableTracesSection notableTraces={character.traces.large} characterName={character.name} />
          <StatTraceSection statTraces={character.traces.small} />
          <EidolonSection eidolons={character.eidolons} characterName={character.name} />
        </>
      }
    </div>
  )
}

export default CharacterDetails