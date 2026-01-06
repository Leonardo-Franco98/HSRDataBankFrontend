import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import lightconesService from '../../services/lightcones'
import K from '../../utils/consts'
import Filter from '../../components/filter/Filter'
import LightconeCard from './components/LightconeCard'

const Lightcones = () => {
  const [lightcones, setLightcones] = useState([])
  const [paths, setPaths] = useState(K.paths)
  const [rarities, setRarities] = useState([{ rarity: 5, selected: false }, { rarity: 4, selected: false }, { rarity: 3, selected: false }])
  const [search, setSearch] = useState('')

  const getFilteredLightcones = () => {
    let filtered = lightcones

    if (search.length !== 0) filtered = filtered.filter(l => l.name.toLowerCase().includes(search))
    if (paths.some(p => p.selected)) filtered = filtered.filter(l => paths.some(p => p.path === l.path && p.selected))
    if (rarities.some(r => r.selected)) filtered = filtered.filter(l => rarities.some(r => r.rarity === l.rarity && r.selected))

    return filtered
  }

  const filteredLightcones = getFilteredLightcones()

  useEffect(() => {
    const fetchLightcones = async () => {
      let data = await lightconesService.getAllLightcones()

      setLightcones(data)
    }

    fetchLightcones()
  }, [])

  return (
    <div className="px-30 py-12">
      <Filter
        search={search} paths={paths} rarities={rarities}
        setSearch={setSearch} setPaths={setPaths} setRarities={setRarities}
      />
      <div className="grid grid-cols-4 gap-12 mt-16">
        {
          filteredLightcones.map(l => {
            return <Link to={`/lightcones/${l.id}`} key={l.id}>
              <LightconeCard lightcone={l} />
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Lightcones