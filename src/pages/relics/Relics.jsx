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
    <div className="3xl:px-30 xl:px-20 px-10 py-12">
      <Filter search={search} setSearch={setSearch} />
      <div className="grid 2-5xl:grid-cols-3 vl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 gap-4 mt-16">
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