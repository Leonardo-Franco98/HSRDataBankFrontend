import MainTrace from './MainTrace'

const MainTracesSection = ({ mainTraces, characterName }) => {
  return (
    <div className="mb-16">
      <p className='text-4xl text-sky-300 font-semibold mb-8'>Main Traces</p>
      <div className='mb-8 bg-linear-to-r from-sky-300 to-slate-800 w-1/2 h-px'></div>
      <div className='mb-8'>
        <p className='text-3xl text-sky-200 font-semibold mb-6'>Basic ATK</p>
        <div className="grid grid-cols-2 gap-16">
          {
            mainTraces.basic.map((t, index) => {
              return <MainTrace key={index} trace={t} characterName={characterName} number={index + 1} traceType="Basic" maxLevel={7} />
            })
          }
        </div>
      </div>
      <div className='mb-8'>
        <p className='text-3xl text-sky-200 font-semibold mb-6'>Skill</p>
        <div className="grid grid-cols-2 gap-16">
          {
            mainTraces.skill.map((t, index) => {
              return <MainTrace key={index} trace={t} characterName={characterName} number={index + 1} traceType="Skill" maxLevel={12} />
            })
          }
        </div>
      </div>
      <div className='mb-8'>
        <p className='text-3xl text-sky-200 font-semibold mb-6'>Ultimate</p>
        <div className="grid grid-cols-2 gap-16">
          {
            mainTraces.ultimate.map((t, index) => {
              return <MainTrace key={index} trace={t} characterName={characterName} number={index + 1} traceType="Ultimate" maxLevel={12} />
            })
          }
        </div>
      </div>
      <div className='mb-8'>
        <p className='text-3xl text-sky-200 font-semibold mb-6'>Talent</p>
        <div className="grid grid-cols-2 gap-16">
          {
            mainTraces.talent.map((t, index) => {
              return <MainTrace key={index} trace={t} characterName={characterName} number={index + 1} traceType="Talent" maxLevel={12} />
            })
          }
        </div>
      </div>
      <div className='mb-8'>
        <p className='text-3xl text-sky-200 font-semibold mb-6'>Technique</p>
        <div className="grid grid-cols-2 gap-16">
          <MainTrace trace={mainTraces.technique} characterName={characterName} traceType="Technique" />
        </div>
      </div>
      {
        mainTraces.memospriteSkill.length > 0 &&
        <div className='mb-8'>
          <p className='text-3xl text-sky-200 font-semibold mb-6'>Memosprite Skill</p>
          <div className="grid grid-cols-2 gap-16">
            {
              mainTraces.memospriteSkill.map((t, index) => {
                return <MainTrace key={index} trace={t} characterName={characterName} number={index + 1} traceType="Memosprite Skill" maxLevel={7} />
              })
            }
          </div>
        </div>
      }
      {
        mainTraces.memospriteTalent.length > 0 &&
        <div className='mb-8'>
          <p className='text-3xl text-sky-200 font-semibold mb-6'>Memosprite Talent</p>
          <div className="grid grid-cols-2 gap-16">
            {
              mainTraces.memospriteTalent.map((t, index) => {
                return <MainTrace key={index} trace={t} characterName={characterName} number={index + 1} traceType="Memosprite Talent" maxLevel={7} />
              })
            }
          </div>
        </div>
      }
    </div>
  )
}

export default MainTracesSection