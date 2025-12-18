const PlanarOrnamentCard = ({ planarOrnament }) => {
  return (
    <div className="flex">
      <img src={`${import.meta.env.VITE_API_URL}/images/planarOrnaments/${planarOrnament.name.replace(':', ' +')}`} alt="" />
      <div>
        <p>{planarOrnament.name}</p>
        <p>{planarOrnament.effect}</p>
      </div>
    </div>
  )
}

export default PlanarOrnamentCard