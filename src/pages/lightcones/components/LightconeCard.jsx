const LightconeCard = ({ lightcone }) => {
  return (
    <div>
      <img src={`${import.meta.env.VITE_API_URL}/images/lightcones/${lightcone.name}`} />
      <p>{lightcone.name}</p>
      <p>{lightcone.path}</p>
      <p>{lightcone.rarity}</p>
    </div>
  )
}

export default LightconeCard