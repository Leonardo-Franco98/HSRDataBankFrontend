import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import lightconesService from '../../services/lightcones'
import DetailsSection from './components/DetailsSection'
import EffectSection from './components/EffectSection'
import StorySection from './components/StorySection'

const LightconeDetails = () => {
  const [lightcone, setLightcone] = useState(null)
  const id = useParams().id

  useEffect(() => {
    const fetchLightcone = async () => {
      let data = await lightconesService.getLightconeById(id)

      setLightcone(data)
    }

    fetchLightcone()
  }, [id])

  return (
    <div className="3xl:px-30 xl:px-20 px-10 py-16">
      {
        lightcone &&
        <div className='1-5xl:flex 2xl:gap-30 gap-15'>
          <div className='mb-20'>
            <img
              src={`${import.meta.env.VITE_API_URL}/images/lightcones/${lightcone.name.replace(':', ' +').replace('?', '~')}`}
              className='w-full min-w-120 max-w-160'
            />
          </div>
          <div>
            <DetailsSection name={lightcone.name} path={lightcone.path} rarity={lightcone.rarity} stats={lightcone.stats} />
            <EffectSection effect={lightcone.effect} effectName={lightcone.effectName} superImpositions={lightcone.superImpositions} />
            <StorySection story={lightcone.flavorText} />
          </div>
        </div>
      }
    </div>
  )
}

export default LightconeDetails