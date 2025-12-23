const StatTrace = ({ stat, value }) => {
  return (
    <div className="flex items-center gap-4">
      <img
        className="w-16 h-16 border-4 border-solid border-white rounded-full"
        src={`${import.meta.env.VITE_API_URL}/images/misc/${stat}`}
      />
      <p className="text-white text-xl font-semibold">{value}{stat !== 'SPD' ? '%' : ''} {stat}</p>
    </div>
  )
}

export default StatTrace