const RelicCard = ({ relic }) => {
  return (
    <div className="flex min-h-full p-6 gap-6 rounded-xl bg-slate-900">
      <img className="w-30 h-30" src={`${import.meta.env.VITE_API_URL}/images/relics/${relic.name}`} alt="" />
      <div>
        <p className="text-white text-xl font-semibold mb-2">{relic.name}</p>
        <p className="text-white text-md">2 pieces: {relic.effect2}</p>
        <p className="text-white text-md">4 pieces: {relic.effect4}</p>
      </div>
    </div>
  )
}

export default RelicCard