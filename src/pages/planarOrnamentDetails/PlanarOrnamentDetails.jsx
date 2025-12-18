import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import planarOrnamentsService from '../../services/planarOrnaments'

const CharacterDetails = () => {
  const [planarOrnament, setPlanarOrnament] = useState(null)
  const id = useParams().id

  useEffect(() => {
    const fetchPlanarOrnament = async () => {
      let data = await planarOrnamentsService.getPlanarOrnamentById(id)

      setPlanarOrnament(data)
    }

    fetchPlanarOrnament()
  }, [id])

  return (
    <>
      <p>planar ornament details</p>
      {planarOrnament && <p>{planarOrnament.name}</p>}
    </>
  )
}

export default CharacterDetails