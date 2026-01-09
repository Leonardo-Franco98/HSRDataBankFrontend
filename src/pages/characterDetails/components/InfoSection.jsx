const InfoSection = ({ name, path, element, rarity, stats, intro, voice }) => {
  return (
    <div className="flex mb-30 gap-20">
      <div className="min-w-3/5">
        <img src={`${import.meta.env.VITE_API_URL}/images/characters/${name}`} />
      </div>
      <div>
        <p className='text-white font-semibold text-5xl mb-12'>{name}</p>
        <p className='text-sky-300 font-semibold text-3xl mb-4'>Details</p>
        <div className='mb-8 bg-linear-to-r from-sky-300 to-slate-800 w-1/2 h-px'> </div>
        <div className="flex gap-20 mb-8">
          <div className='flex gap-4 items-center'>
            <img src={`${import.meta.env.VITE_API_URL}/images/misc/${path}`} className='h-16' />
            <p className='text-white text-2xl'>{path}</p>
          </div>
          <div className='flex gap-4 items-center'>
            <img src={`${import.meta.env.VITE_API_URL}/images/misc/${element}`} className='h-16' />
            <p className='text-white text-2xl'>{element}</p>
          </div>
        </div>
        <img src={`/src/assets/Rarity${rarity}.png`} className='h-10 mb-8' />
        <div className='flex justify-between w-80 mb-8'>
          <div className="flex gap-2 items-center">
            <img src={`${import.meta.env.VITE_API_URL}/images/misc/HP`} className='h-12' />
            <p className='text-white text-xl'>{stats.hp}</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={`${import.meta.env.VITE_API_URL}/images/misc/ATK`} className='h-12' />
            <p className='text-white text-xl'>{stats.atk}</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={`${import.meta.env.VITE_API_URL}/images/misc/DEF`} className='h-12' />
            <p className='text-white text-xl'>{stats.def}</p>
          </div>
        </div>
        <p className="text-white text-xl mb-12">{intro}</p>
        <div>
          <p className="text-white text-2xl font-semibold mb-4 w-fit mx-auto">Voice</p>
          <div className="flex justify-evenly">
            <p className="text-white text-xl">EN: {voice.english}</p>
            <p className="text-white text-xl">JP: {voice.japanese}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSection