const CharacterCard = ({ character }) => {
  return (
    <div>
      <img src={`${import.meta.env.VITE_API_URL}/images/characters/${character.name} - Portrait`} />
      <p>{character.name}</p>
      <p>{character.element}</p>
      <p>{character.path}</p>
      <p>{character.rarity}</p>
    </div>
  )
}

export default CharacterCard