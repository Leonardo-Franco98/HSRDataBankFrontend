import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import relicsService from '../../services/relics'

const RelicDetails = () => {
  const [relic, setRelic] = useState(null)
  const id = useParams().id
  const pieces = ['head', 'hand', 'body', 'feet']
  const [selected, setSelected] = useState('head')

  useEffect(() => {
    const fetchRelic = async () => {
      let data = await relicsService.getRelicById(id)

      setRelic(data)
    }

    fetchRelic()
  }, [id])

  const handleRelicClick = (type) => {
    setSelected(type)
  }

  return (
    <div className="px-30 py-16">
      {
        relic &&
        <>
          <div className='flex gap-40 mb-20'>
            <img className="w-60 h-60" src={`${import.meta.env.VITE_API_URL}/images/relics/${relic.name}`} alt="" />
            <div className='text-white pt-6'>
              <p className='text-3xl text-sky-400 font-semibold mb-4'>{relic.name}</p>
              <p className='text-lg'>2 pieces: {relic.effect2}</p>
              <p className='text-lg'>4 pieces: {relic.effect4}</p>
            </div>
          </div>
          <div className='flex items-center justify-evenly relative mb-20 h-50'>
            {
              pieces.map(p => {
                return <div className='z-10 bg-slate-800 px-4'>
                  <div
                    className={(p === selected ? 'bg-slate-400 w-50 h-50 ' : 'w-40 h-40 ') + 'border-solid border-white border-4 rounded-full p-4 transition-[all] duration-300 delay-50 hover:w-50 hover:h-50'}
                    onClick={() => handleRelicClick(p)}
                  >
                    <img
                      className='w-full h-full'
                      src={`${import.meta.env.VITE_API_URL}/images/relics/${relic[p].name}`} alt=""
                    />
                  </div>
                </div>
              })
            }
            <hr className='absolute text-white w-full border-solid border-2' />
          </div>
          <div className='text-white whitespace-pre-wrap'>
            <p className='text-3xl text-sky-300 font-semibold mb-6'>{relic[selected].name}</p>
            <p className='text-xl mb-12'>{relic[selected].description}</p>
            <p className='text-2xl text-sky-200 font-semibold mb-6'>Story</p>
            <p className='text-lg'>{relic[selected].story}</p>
          </div>
        </>
      }
    </div>
  )
}

export default RelicDetails