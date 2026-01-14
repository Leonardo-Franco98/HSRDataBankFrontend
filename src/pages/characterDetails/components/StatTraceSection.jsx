import StatTrace from './StatTrace'

const StatTraceSection = ({ statTraces }) => {
  return (
    <div className='mb-24'>
      <p className='text-4xl text-sky-300 font-semibold mb-10'>Stat Traces</p>
      <div className='mb-16 bg-linear-to-r from-sky-300 to-slate-800 w-1/2 h-px'></div>
      <div className='vl:flex justify-center 2xl:gap-32 xl:gap-12 gap-6'>
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