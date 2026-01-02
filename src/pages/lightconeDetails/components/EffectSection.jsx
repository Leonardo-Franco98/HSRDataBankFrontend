import { useState } from 'react'

const EffectSection = ({ effect, effectName, superImpositions }) => {

  const [superImposition, setSuperImposition] = useState(1)

  const replaceScalings = () => {
    let effectParts = effect.split('#')

    return (
      <>
        {
          effectParts.map((e, index) => {
            return (
              index !== 0 ?
                <span key={index}>
                  <span className='font-bold text-sky-400'>
                    {superImpositions[index - 1][superImposition - 1]}{e[0] === '%' ? '%' : ''}
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

  return (
    <div className="mb-20">
      <p className='text-sky-300 font-semibold text-3xl mb-4'>Effect</p>
      <div className='mb-8 bg-linear-to-r from-sky-300 to-slate-800 w-1/2 h-px'> </div>
      <div className='flex grid grid-cols-2 gap-8 items-center mb-6'>
        <p className='text-white font-semibold text-2xl'>{effectName}</p>
        <div>
          <div className='flex justify-between'>
            <p className="text-white text-lg font-semibold">Super Imposition</p>
            <p className="text-white text-lg font-semibold">{superImposition} / 5</p>
          </div>
          <input
            type="range" min={1} max={5}
            className="w-full range rounded-full accent-white"
            value={superImposition} onChange={(e) => setSuperImposition(e.target.value)}
          />
          <div className='flex justify-between'>
            <p className="text-white text-lg font-semibold">1</p>
            <p className="text-white text-lg font-semibold">5</p>
          </div>
        </div>
      </div>
      <p className='text-white text-xl'>{replaceScalings()}</p>
    </div>
  )
}

export default EffectSection