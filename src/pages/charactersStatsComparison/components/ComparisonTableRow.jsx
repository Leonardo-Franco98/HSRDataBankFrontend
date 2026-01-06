import { Link } from 'react-router-dom'

const ComparisonTableRow = ({ character }) => {
  return (
    <tr className='bg-slate-900 grid grid-cols-6 text-white text-xl'>
      <td className='col-span-2 py-2 px-4 border-solid'>
        <Link to={`/characters/${character.id}`} className='flex items-center gap-4'>
          <img
            className={(character.rarity === 5 ? 'to-five-stars' : 'to-four-stars') + ' bg-linear-to-br from-slate-700 h-16 w-16 rounded-md'}
            src={`${import.meta.env.VITE_API_URL}/images/characters/${character.name} - Face`}
          />
          <p className='font-semibold'>{character.name}</p>
        </Link>
      </td>
      <td className='text-right py-2 px-6 my-auto'>
        {character.stats.hp}
      </td>
      <td className='text-right py-2 px-6 my-auto'>
        {character.stats.atk}
      </td>
      <td className='text-right py-2 px-6 my-auto'>
        {character.stats.def}
      </td>
      <td className='text-right py-2 px-6 my-auto'>
        {character.stats.spd}
      </td>
    </tr>
  )
}

export default ComparisonTableRow