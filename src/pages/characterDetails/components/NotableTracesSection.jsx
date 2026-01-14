import NotableTrace from './NotableTrace'

const NotableTracesSection = ({ notableTraces, characterName }) => {
  return (
    <div className='mb-16'>
      <p className='text-4xl text-sky-300 font-semibold mb-10'>Notable Traces</p>
      <div className='mb-8 bg-linear-to-r from-sky-300 to-slate-800 w-1/2 h-px'></div>
      <div className='flex grid vl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 gap-8'>
        {
          notableTraces.map((nt, index) => {
            return <NotableTrace key={nt.name} name={nt.name} effect={nt.effect} characterName={characterName} number={index + 1} />
          })
        }
      </div>
    </div>
  )
}

export default NotableTracesSection