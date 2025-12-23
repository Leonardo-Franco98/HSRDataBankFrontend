import StatTrace from './StatTrace'

const StatTraceSection = ({ statTraces }) => {
  return (
    <div className='mb-16'>
      <p className='text-4xl text-sky-300 font-semibold mb-8'>Stat Traces</p>
      <div className='flex justify-center gap-32'>
        {
          statTraces.map(st => {
            return <StatTrace key={st.stat} stat={st.stat} value={st.value} />
          })
        }
      </div>
    </div>
  )
}

export default StatTraceSection