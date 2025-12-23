const NotableTrace = ({ name, effect, characterName, number }) => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-5">
        <img
          className="w-20 h-20 border-solid border-4 border-white rounded-full"
          src={`${import.meta.env.VITE_API_URL}/images/characters/${characterName} - Trace Large ${number}`}
        />
        <p className="text-white text-2xl font-semibold">{name}</p>
      </div>
      <p className="text-white text-lg px-2">{effect}</p>
    </div>
  )
}

export default NotableTrace