import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import planarOrnamentsService from '../../services/planarOrnaments'

const CharacterDetails = () => {
  const [planarOrnament, setPlanarOrnament] = useState(null)
  const id = useParams().id
  const pieces = ['sphere', 'rope']
  const [selected, setSelected] = useState('sphere')

  useEffect(() => {
    const fetchPlanarOrnament = async () => {
      let data = await planarOrnamentsService.getPlanarOrnamentById(id)

      setPlanarOrnament(data)
    }

    fetchPlanarOrnament()
  }, [id])

  const handlePlanarOrnamentClick = (type) => {
    setSelected(type)
  }

  return (
    <div className="3xl:px-30 xl:px-20 px-10 py-16">
      {
        planarOrnament &&
        <>
          <div className='md:flex 1-5xl:gap-40 vl:gap-20 gap-8 md:mb-20 mb-10'>
            <img className="w-60 h-60" src={`${import.meta.env.VITE_API_URL}/images/planarOrnaments/${planarOrnament.name}`} alt="" />
            <div className='text-white pt-6'>
              <p className='text-3xl text-sky-400 font-semibold mb-4'>{planarOrnament.name}</p>
              <p className='text-lg'>2 pieces: {planarOrnament.effect}</p>
            </div>
          </div>
          <div className='flex items-center justify-evenly relative md:mb-20 mb-10 h-50'>
            {
              pieces.map(p => {
                return <div className='z-10 bg-slate-800 px-4'>
                  <div
                    className={
                      (p === selected
                        ? 'bg-slate-400 1-5xl:w-50 md:w-40 w-32 1-5xl:h-50 md:h-40 h-32 '
                        : '1-5xl:w-40 w-32 1-5xl:h-40 h-32 ')
                      + 'border-solid border-white border-4 rounded-full p-4 transition-[all] duration-300 delay-50 1-5xl:hover:w-50 1-5xl:hover:h-50 md:hover:w-40 md:hover:h-40 hover:bg-slate-400'
                    }
                    onClick={() => handlePlanarOrnamentClick(p)}
                  >
                    <img
                      className='w-full h-full'
                      src={`${import.meta.env.VITE_API_URL}/images/planarOrnaments/${planarOrnament[p].name}`} alt=""
                    />
                  </div>
                </div>
              })
            }
            <hr className='absolute text-white w-full border-solid border-2' />
          </div>
          <div className='text-white whitespace-pre-wrap'>
            <p className='text-3xl text-sky-300 font-semibold mb-6'>{planarOrnament[selected].name}</p>
            <p className='text-xl mb-12'>{planarOrnament[selected].description}</p>
            <p className='text-2xl text-sky-200 font-semibold mb-6'>Story</p>
            <p className='text-lg'>{planarOrnament[selected].story}</p>
          </div>
        </>
      }
    </div>
  )
}

export default CharacterDetails