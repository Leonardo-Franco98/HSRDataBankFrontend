import Eidolon from './Eidolon'

const EidolonSection = ({ eidolons, characterName }) => {
  return (
    <div>
      <p className='text-4xl text-sky-300 font-semibold mb-6'>Eidolons</p>
      <div className="grid grid-cols-3">
        {
          eidolons.map((e, index) => {
            return <Eidolon key={index} characterName={characterName} eidolon={e} number={index + 1} />
          })
        }
      </div>
    </div>
  )
}

export default EidolonSection