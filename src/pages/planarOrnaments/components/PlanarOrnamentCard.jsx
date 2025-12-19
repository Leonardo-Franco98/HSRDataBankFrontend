const PlanarOrnamentCard = ({ planarOrnament }) => {
  return (
    <div className="flex border-solid border-2 min-h-full p-3 gap-6 rounded-md">
      <img className="w-30 h-30" src={`${import.meta.env.VITE_API_URL}/images/planarOrnaments/${planarOrnament.name.replace(':', ' +')}`} alt="" />
      <div>
        <p className="text-xl">{planarOrnament.name}</p>
        <p>2 pieces: {planarOrnament.effect}</p>
      </div>
    </div>
  )
}

export default PlanarOrnamentCard