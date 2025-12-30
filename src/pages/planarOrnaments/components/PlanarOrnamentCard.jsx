const PlanarOrnamentCard = ({ planarOrnament }) => {
  return (
    <div className="flex min-h-full p-6 gap-6 rounded-xl bg-slate-900">
      <img className="w-30 h-30" src={`${import.meta.env.VITE_API_URL}/images/planarOrnaments/${planarOrnament.name.replace(':', ' +')}`} alt="" />
      <div>
        <p className="text-white text-xl font-semibold mb-2">{planarOrnament.name}</p>
        <p className="text-white text-md">2 pieces: {planarOrnament.effect}</p>
      </div>
    </div>
  )
}

export default PlanarOrnamentCard