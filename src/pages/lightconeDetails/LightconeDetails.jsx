import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import lightconesService from '../../services/lightcones'

const LightconeDetails = () => {
  const [lightcone, setLightcone] = useState(null)
  const id = useParams().id

  useEffect(() => {
    const fetchLightcone = async () => {
      let data = await lightconesService.getLightconeById(id)

      setLightcone(data)
    }

    fetchLightcone()
  }, [id])

  return (
    <>
      <p>lightcone details</p>
      {lightcone && <p>{lightcone.name}</p>}
    </>
  )
}

export default LightconeDetails