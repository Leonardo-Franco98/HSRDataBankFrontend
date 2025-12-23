import NotableTrace from './NotableTrace'

const NotableTracesSection = ({ notableTraces, characterName }) => {
  return (
    <div className='mb-16'>
      <p className='text-4xl text-sky-300 font-semibold mb-8'>Notable Traces</p>
      <div className='flex grid grid-cols-3'>
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