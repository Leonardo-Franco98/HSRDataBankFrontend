const CharacterCard = ({ character }) => {

  const rarityColor = character.rarity === 5 ? 'to-five-stars' : 'to-four-stars'

  return (
    <div className="relative">
      <div className={`bg-linear-to-br from-slate-700 ${rarityColor} rounded-t-lg h-70`}>
        <img src={`/src/assets/Rarity${character.rarity}.png`} className='h-8 absolute top-2 right-2 rotate-y-180' />
        <img src={`${import.meta.env.VITE_API_URL}/images/characters/${character.name} - Preview`} className='mx-auto rounded-t-lg' />
      </div>
      <div className="w-full h-auto flex flex-col justify-between bg-linear-to-b to-slate-900 px-8 py-6 rounded-b-lg">
        <p className="text-white text-2xl font-semibold mb-4 h-16">{character.name}</p>
        <div>
          <div className="flex items-center gap-4 mb-2">
            <img src={`${import.meta.env.VITE_API_URL}/images/misc/${character.path}`} className="h-10" />
            <p className="text-white text-xl font-semibold">{character.path}</p>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <img src={`${import.meta.env.VITE_API_URL}/images/misc/${character.element}`} className="h-10" />
            <p className="text-white text-xl font-semibold">{character.element}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard