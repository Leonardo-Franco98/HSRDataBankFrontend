import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import planarOrnamentsService from '../../services/planarOrnaments'
import PlanarOrnamentCard from './components/PlanarOrnamentCard'

const PlanarOrnaments = () => {
  const [planarOrnaments, setPlanarOrnaments] = useState([])

  useEffect(() => {
    const fetchPlanarOrnaments = async () => {
      let data = await planarOrnamentsService.getAllPlanarOrnaments()

      setPlanarOrnaments(data)
    }

    fetchPlanarOrnaments()
  }, [])

  return (
    <>
      <p>planar ornaments</p>
      <div className="grid grid-cols-4">
        {
          planarOrnaments.map(po => {
            return <Link to={`/planarOrnaments/${po.id}`} key={po.id}>
              <PlanarOrnamentCard planarOrnament={po} />
            </Link>
          })
        }
      </div>
    </>
  )
}

export default PlanarOrnaments