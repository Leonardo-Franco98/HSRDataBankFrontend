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
    <div className="px-30 py-16">
      {
        lightcone &&
        <div className='flex gap-30'>
          <div className='min-w-2/5'>
            <img src={`${import.meta.env.VITE_API_URL}/images/lightcones/${lightcone.name}`} className='w-full' />
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