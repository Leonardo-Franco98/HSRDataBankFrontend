const RelicCard = ({ relic }) => {
  return (
    <div className="flex border-solid border-2 min-h-full p-3 gap-6 rounded-md">
      <img className="w-30 h-30" src={`${import.meta.env.VITE_API_URL}/images/relics/${relic.name}`} alt="" />
      <div>
        <p className="text-xl">{relic.name}</p>
        <p>2 pieces: {relic.effect2}</p>
        <p>4 pieces: {relic.effect4}</p>
      </div>
    </div>
  )
}

export default RelicCard