import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import lightconesService from '../../services/lightcones'
import LightconeCard from './components/LightconeCard'

const Lightcones = () => {
  const [lightcones, setLightcones] = useState([])

  useEffect(() => {
    const fetchLightcones = async () => {
      let data = await lightconesService.getAllLightcones()

      setLightcones(data)
    }

    fetchLightcones()
  }, [])

  return (
    <>
      <p>lightcones</p>
      <div className="grid grid-cols-4">
        {
          lightcones.map(l => {
            return <Link to={`/lightcones/${l.id}`} key={l.id}>
              <LightconeCard lightcone={l} />
            </Link>
          })
        }
      </div>
    </>
  )
}

export default Lightcones