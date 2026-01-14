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
    <div className="3xl:px-30 xl:px-20 px-10 py-16">
      {
        relic &&
        <>
          <div className='md:flex 1-5xl:gap-40 vl:gap-20 gap-8 md:mb-20 mb-14'>
            <img className="w-60 h-60" src={`${import.meta.env.VITE_API_URL}/images/relics/${relic.name}`} alt="" />
            <div className='text-white pt-6'>
              <p className='text-3xl text-sky-400 font-semibold mb-4'>{relic.name}</p>
              <p className='text-lg'>2 pieces: {relic.effect2}</p>
              <p className='text-lg'>4 pieces: {relic.effect4}</p>
            </div>
          </div>
          <div className='flex items-center md:justify-evenly relative md:mb-20 mb-14 md:h-50 grid md:grid-cols-4 grid-cols-2'>
            {
              pieces.map(p => {
                return <div className='z-10 bg-slate-800 1-5xl:px-4 px-2 md:mb-0 mb-4 mx-auto'>
                  <div
                    className={
                      (p === selected
                        ? 'bg-slate-400 1-5xl:w-50 md:w-40 w-32 1-5xl:h-50 md:h-40 h-32 '
                        : '1-5xl:w-40 w-32 1-5xl:h-40 h-32 ')
                      + 'border-solid border-white border-4 rounded-full p-4 transition-[all] duration-300 delay-50 1-5xl:hover:w-50 1-5xl:hover:h-50 md:hover:w-40 md:hover:h-40 hover:bg-slate-400'
                    }
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
            <hr className='md:absolute text-white w-full border-solid md:border-2 border-0' />
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