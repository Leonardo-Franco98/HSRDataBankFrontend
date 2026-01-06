import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import relicsService from '../../services/relics'
import Filter from '../../components/filter/Filter'
import RelicCard from './components/RelicCard'

const Relics = () => {
  const [relics, setRelics] = useState([])
  const [search, setSearch] = useState('')

  const getFilteredRelics = () => {
    let filtered = relics

    if (search.length !== 0) filtered = filtered.filter(r => r.name.toLowerCase().includes(search))

    return filtered
  }

  const filteredRelics = getFilteredRelics()

  useEffect(() => {
    const fetchRelics = async () => {
      let data = await relicsService.getAllRelics()

      setRelics(data)
    }

    fetchRelics()
  }, [])

  return (
    <div className="px-30 py-12">
      <Filter search={search} setSearch={setSearch} />
      <div className="grid grid-cols-3 gap-4 mt-16">
        {
          filteredRelics.map(r => {
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