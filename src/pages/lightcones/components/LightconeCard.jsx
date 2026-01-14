const LightconeCard = ({ lightcone }) => {

  const rarityColor = lightcone.rarity === 5 ? 'to-five-stars' : lightcone.rarity === 4 ? 'to-four-stars' : 'to-three-stars'

  const replaceScalings = () => {
    let effectParts = lightcone.effect.split('#')

    return (
      <>
        {
          effectParts.map((e, index) => {
            return (
              index !== 0 ?
                <span key={index}>
                  <span className='font-bold text-sky-400'>
                    {lightcone.superImpositions[index - 1][0]}-{lightcone.superImpositions[index - 1][4]}{e[0] === '%' ? '%' : ''}
                  </span>
                  {e[0] === '%' ? e.slice(1) : e}
                </span> :
                <span key={index}>
                  {e}
                </span>
            )
          })
        }
      </>
    )
  }

  return (
    <div className="flip-card h-125 perpective-distant group max-w-90">
      <div className="flip-card-inner relative w-full h-full transform-3d group-hover:rotate-y-180 duration-800">
        <div className="absolute backface-hidden w-full h-full">
          <div className={`bg-linear-to-br from-slate-700 ${rarityColor} p-4 rounded-t-lg`}>
            <img src={`${import.meta.env.VITE_API_URL}/images/lightcones/${lightcone.name.replace(':', ' +').replace('?', '~')} - Preview`} className='h-60 mx-auto' />
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
        <div className="absolute rotate-y-180 bg-slate-900 backface-hidden w-full h-full px-8 py-6 rounded-lg overflow-y-scroll no-scrollbar">
          <p className="text-sky-300 text-2xl font-semibold mb-4">{lightcone.name}</p>
          <p className="text-white text-md">{replaceScalings()}</p>
        </div>
      </div>
    </div>
  )
}


export default LightconeCard