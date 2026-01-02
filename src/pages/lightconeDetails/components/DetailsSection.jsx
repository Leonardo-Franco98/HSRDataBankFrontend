const DetailsSection = ({ name, path, rarity, stats }) => {
  return (
    <div className="mb-20">
      <p className='text-white font-semibold text-5xl mb-12'>{name}</p>
      <p className='text-sky-300 font-semibold text-3xl mb-4'>Details</p>
      <div className='mb-8 bg-linear-to-r from-sky-300 to-slate-800 w-1/2 h-px'> </div>
      <div className='flex gap-16 items-center mb-6'>
        <div className='flex gap-4 items-center'>
          <img src={`${import.meta.env.VITE_API_URL}/images/misc/${path}`} className='h-16' />
          <p className='text-white text-2xl'>{path}</p>
        </div>
        <img src={`/src/assets/Rarity${rarity}.png`} className='h-10' />
      </div>
      <div className='flex justify-between w-80'>
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
    </div>
  )
}

export default DetailsSection