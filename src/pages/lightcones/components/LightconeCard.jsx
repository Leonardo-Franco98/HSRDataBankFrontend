const LightconeCard = ({ lightcone }) => {

  const rarityColor = lightcone.rarity === 5 ? 'to-five-stars' : lightcone.rarity === 4 ? 'to-four-stars' : 'to-three-stars'

  return (
    <div className="rounded-lg shadow-lg">
      <div className={`bg-linear-to-br from-slate-700 ${rarityColor} p-4 rounded-t-lg`}>
        <img src={`${import.meta.env.VITE_API_URL}/images/lightcones/${lightcone.name} - Preview`} className='h-60 mx-auto' />
      </div>
      <div className="w-full h-auto flex flex-col justify-between bg-slate-900 p-8 rounded-b-lg">
        <p className="text-white text-2xl font-semibold mb-4 h-16">{lightcone.name}</p>
        <div>
          <div className="flex items-center gap-4 mb-2">
            <img src={`${import.meta.env.VITE_API_URL}/images/misc/${lightcone.path}`} className="h-10" />
            <p className="text-white text-xl font-semibold">{lightcone.path}</p>
          </div>
          <img src={`/src/assets/Rarity${lightcone.rarity}.png`} className='h-8' />
        </div>
      </div>
    </div>
  )
}

export default LightconeCard