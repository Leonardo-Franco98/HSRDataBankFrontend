import SearchIcon from '@mui/icons-material/Search'

const Filter = (props) => {

  const handleElementClick = (element) => {
    let newElements = props.elements.map(e => e.element === element ? { element: element, selected: !e.selected } : e)

    props.setElements(newElements)
  }

  const handlePathClick = (path) => {
    let newPaths = props.paths.map(p => p.path === path ? { path: path, selected: !p.selected } : p)

    props.setPaths(newPaths)
  }

  const handleRarityClick = (rarity) => {
    let newRarities = props.rarities.map(r => r.rarity === rarity ? { rarity: rarity, selected: !r.selected } : r)

    props.setRarities(newRarities)
  }

  return (
    <div className="w-fit min-w-5xl m-auto bg-black p-4 rounded-xl mb-8">
      <div className={(props.elements || props.paths || props.rarities ? 'mb-4 ' : '') + 'flex gap-4 items-center'}>
        <input
          type="text"
          placeholder="Search"
          className={'bg-slate-700 text-white text-xl rounded-lg p-2 w-full'}
          onChange={(e) => props.setSearch(e.target.value)} />
        <SearchIcon style={{ 'color': 'white', 'fontSize': '32px' }} />
      </div>
      <div className="flex gap-4">
        {
          props.elements &&
          <div className="flex gap-1">
            {
              props.elements.map(e => {
                return <div
                  key={e.element}
                  className={(e.selected ? 'bg-slate-200 ' : 'hover:bg-slate-600 ') + 'border-2 border-solid border-white rounded-md h-14 w-14 p-1 transition-[all] duration-200'}
                  onClick={() => handleElementClick(e.element)}
                >
                  <img src={`${import.meta.env.VITE_API_URL}/images/misc/${e.element}`} />
                </div>
              })
            }
          </div>
        }
        {
          props.paths &&
          <div className="flex gap-1">
            {
              props.paths.map(p => {
                return <div
                  key={p.path}
                  className={(p.selected ? 'bg-slate-200 ' : 'hover:bg-slate-600 ') + 'border-2 border-solid border-white rounded-md h-14 w-14 p-1 transition-[all] duration-200'}
                  onClick={() => handlePathClick(p.path)}
                >
                  <img
                    src={`${import.meta.env.VITE_API_URL}/images/misc/${p.path}`}
                    className={(p.selected ? 'invert' : '') + ' transition-[all] duration-300'}
                  />
                </div>
              })
            }
          </div>
        }
        {
          props.rarities &&
          <div className="flex gap-1">
            {
              props.rarities.map(r => {
                return <div
                  key={r.rarity}
                  className={(r.selected ? 'bg-slate-200 ' : 'hover:bg-slate-600 ') + 'border-2 border-solid border-white rounded-md h-14 w-14 items-center flex justify-center transition-[all] duration-200'}
                  onClick={() => handleRarityClick(r.rarity)}
                >
                  <p className={(r.selected ? 'text-black ' : 'text-white ') + 'text-xl transition-[all] duration-300'}>{r.rarity}</p>
                  <img
                    src={`${import.meta.env.VITE_API_URL}/images/misc/Star`}
                    className={(r.selected ? 'invert ' : '') + 'w-6 h-6 transition-[all] duration-300'}
                  />
                </div>
              })
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Filter