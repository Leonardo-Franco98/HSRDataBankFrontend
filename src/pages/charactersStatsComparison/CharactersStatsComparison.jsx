import { useState, useEffect } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import charactersService from '../../services/characters'
import K from '../../utils/consts'
import Filter from '../../components/filter/Filter'
import ComparisonTableRow from './components/ComparisonTableRow'

const CharactersStatsComparison = () => {
  const [characters, setCharacters] = useState([])
  const [elements, setElements] = useState(K.elements)
  const [paths, setPaths] = useState(K.paths)
  const [rarities, setRarities] = useState([{ rarity: 5, selected: false }, { rarity: 4, selected: false }])
  const [search, setSearch] = useState('')
  const stats = K.baseStats
  const [sortField, setSortField] = useState('name')
  const [sortOrder, setSortOrder] = useState(-1)

  const getFilteredCharacters = () => {
    let filtered = characters

    if (search.length !== 0) filtered = filtered.filter(c => c.name.toLowerCase().includes(search))
    if (elements.some(e => e.selected)) filtered = filtered.filter(c => elements.some(e => e.element === c.element && e.selected))
    if (paths.some(p => p.selected)) filtered = filtered.filter(c => paths.some(p => p.path === c.path && p.selected))
    if (rarities.some(r => r.selected)) filtered = filtered.filter(c => rarities.some(r => r.rarity === c.rarity && r.selected))

    if (sortField) filtered = filtered.sort((c1, c2) => (c1.stats[sortField] - c2.stats[sortField]) * sortOrder)

    return filtered
  }

  const filteredCharacters = getFilteredCharacters()

  useEffect(() => {
    const fetchCharacters = async () => {
      let data = await charactersService.getAllCharacters()

      setCharacters(data)
    }

    fetchCharacters()
  }, [])

  const handleStatClick = (stat) => {
    setSortOrder(sortField === stat ? sortOrder * -1 : -1)
    setSortField(stat)
  }

  return (
    <div className="px-60 py-16">
      {
        characters &&
        <>
          <Filter
            search={search} elements={elements} paths={paths} rarities={rarities}
            setSearch={setSearch} setElements={setElements} setPaths={setPaths} setRarities={setRarities}
          />
          <table className='w-full'>
            <thead>
              <tr className='grid grid-cols-6 text-white text-xl bg-slate-950'>
                <th className='col-span-2 text-left py-4 px-4'></th>
                {
                  stats.map(s => {
                    return <th
                      key={s.name}
                      className='col-span-1 text-right py-4 px-4 flex items-center justify-end gap-2 cursor-pointer hover:bg-slate-700 duration-300'
                      onClick={() => handleStatClick(s.name)}
                    >
                      <p>{s.fullName}</p>
                      {
                        sortField === s.name ? (
                          sortOrder === 1 ? <ExpandLessIcon style={{ 'color': 'white', 'fontSize': '24px' }} />
                            : <ExpandMoreIcon style={{ 'color': 'white', 'fontSize': '24px' }} />
                        ) : <UnfoldMoreIcon style={{ 'color': 'white', 'fontSize': '24px' }} />
                      }
                    </th>
                  })
                }
              </tr>
            </thead>
            <tbody className='divide-solid divide-slate-600 divide-y-1'>
              {
                filteredCharacters.map(c => {
                  return <ComparisonTableRow key={c.id} character={c} />
                })
              }
            </tbody>
          </table>
        </>
      }
    </div>
  )
}

export default CharactersStatsComparison