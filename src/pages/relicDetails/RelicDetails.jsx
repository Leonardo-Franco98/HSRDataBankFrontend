import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import relicsService from '../../services/relics'

const RelicDetails = () => {
  const [relic, setRelic] = useState(null)
  const id = useParams().id

  useEffect(() => {
    const fetchRelic = async () => {
      let data = await relicsService.getRelicById(id)

      setRelic(data)
    }

    fetchRelic()
  }, [id])

  return (
    <>
      <p>relic details</p>
      {relic && <p>{relic.name}</p>}
    </>
  )
}

export default RelicDetails