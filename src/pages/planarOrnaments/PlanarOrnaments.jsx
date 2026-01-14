import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import planarOrnamentsService from '../../services/planarOrnaments'
import Filter from '../../components/filter/Filter'
import PlanarOrnamentCard from './components/PlanarOrnamentCard'

const PlanarOrnaments = () => {
  const [planarOrnaments, setPlanarOrnaments] = useState([])
  const [search, setSearch] = useState('')

  const getFilteredPlanarOrnaments = () => {
    let filtered = planarOrnaments

    if (search.length !== 0) filtered = filtered.filter(po => po.name.toLowerCase().includes(search))

    return filtered
  }

  const filteredPlanarOrnaments = getFilteredPlanarOrnaments()

  useEffect(() => {
    const fetchPlanarOrnaments = async () => {
      let data = await planarOrnamentsService.getAllPlanarOrnaments()

      setPlanarOrnaments(data)
    }

    fetchPlanarOrnaments()
  }, [])

  return (
    <div className="3xl:px-30 xl:px-20 px-10 py-12">
      <Filter search={search} setSearch={setSearch} />
      <div className="grid 2-5xl:grid-cols-3 vl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 gap-4 mt-16">
        {
          filteredPlanarOrnaments.map(po => {
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