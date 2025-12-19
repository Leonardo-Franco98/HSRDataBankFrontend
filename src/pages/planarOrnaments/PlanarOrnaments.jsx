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
    <div className="px-30 py-8">
      <p className="text-4xl mb-6">Planar Ornament Sets</p>
      <div className="grid grid-cols-3 gap-4">
        {
          planarOrnaments.map(po => {
            return <Link to={`/planarOrnaments/${po.id}`} key={po.id}>
              <PlanarOrnamentCard planarOrnament={po} />
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default PlanarOrnaments