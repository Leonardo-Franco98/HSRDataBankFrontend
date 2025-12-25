import { useState } from 'react'

const MainTrace = ({ trace, characterName, traceType, number, maxLevel }) => {

  const [level, setLevel] = useState(maxLevel === 12 ? 10 : 6)

  let src = `${import.meta.env.VITE_API_URL}/images/characters/${characterName} - ${traceType}`
  if (number) src += ` ${number}`

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel)
  }

  const replaceScalings = () => {
    let effectParts = trace.effect.split('#')

    return (
      <>
        {
          effectParts.map((e, index) => {
            return (
              index !== 0 ?
                <span key={index}>
                  <span className='font-bold text-sky-400'>
                    {trace.scaling[index - 1][level - 1]}{e[0] === '%' ? '%' : ''}
                  </span>
                  {e[0] === '%' ? e.slice(1) : e}
                </span> :
                <span key={index}>
                  {e}
                </span>
            )
          })
        }
      </>
    )
  }

  replaceScalings()

  return (
    <div className="mb-12">
      <div className="flex gap-4 items-center mb-5">
        <img
          className="w-20 h-20 border-solid border-4 border-white rounded-full"
          src={src}
        />
        <p className="text-white text-2xl font-semibold">{trace.name}</p>
      </div>
      <div className="px-2">
        <p className="text-white text-xl font-semibold mb-1">{trace.tag}</p>
        <div className="flex justify-between">
          {
            traceType === 'Ultimate' &&
            <p className="text-white text-lg font-semibold mb-4">Cost: {trace.cost.value} {trace.cost.resource}</p>
          }
          {
            trace.generation > 0 &&
            <p className="text-white text-lg font-semibold mb-4">Generation: {trace.generation}</p>
          }
        </div>
        {
          traceType !== 'Technique' &&
          <div>
            <p className="text-white text-lg font-semibold mb-1">Lvl. {level} / {maxLevel}</p>
            <input type="range" min={1} max={maxLevel} className="w-full" value={level} onChange={(e) => handleLevelChange(e.target.value)} />
            <div className='flex justify-between mb-2'>
              <p className="text-white text-lg font-semibold">1</p>
              <p className="text-white text-lg font-semibold">{maxLevel}</p>
            </div>
          </div>
        }
        <p className="text-white text-lg ">{replaceScalings()}</p>
      </div>
    </div>
  )
}

export default MainTrace