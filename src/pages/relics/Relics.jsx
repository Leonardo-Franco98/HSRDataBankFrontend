import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import relicsService from '../../services/relics'
import RelicCard from './components/RelicCard'

const Relics = () => {
  const [relics, setRelics] = useState([])

  useEffect(() => {
    const fetchRelics = async () => {
      let data = await relicsService.getAllRelics()

      setRelics(data)
    }

    fetchRelics()
  }, [])

  return (
    <div className="px-30 py-8">
      <p className="text-4xl mb-6">Relic Sets</p>
      <div className="grid grid-cols-3 gap-4">
        {
          relics.map(r => {
            return <Link to={`/relics/${r.id}`} key={r.id}>
              <RelicCard relic={r} />
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Relics