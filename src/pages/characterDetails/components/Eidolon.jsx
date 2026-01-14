const Eidolon = ({ characterName, eidolon, number }) => {
  return (
    <div className="mb-12">
      <img
        className="w-full max-w-120 mx-auto"
        src={`${import.meta.env.VITE_API_URL}/images/characters/${characterName} - Eidolon ${number} Image`}
      />
      <div className="flex gap-4 items-center mb-5">
        <img
          className="w-20 h-20 border-solid border-4 border-white rounded-full"
          src={`${import.meta.env.VITE_API_URL}/images/characters/${characterName} - Eidolon ${number} Icon`}
        />
        <p className="text-white text-2xl font-semibold">{number}. {eidolon.name}</p>
      </div>
      <p className="text-white text-lg px-2">{eidolon.effect}</p>
    </div>
  )
}

export default Eidolon