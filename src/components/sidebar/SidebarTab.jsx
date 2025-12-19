import { Link } from 'react-router-dom'

const SidebarTab = ({ name, path, icon }) => {
  return (
    <Link to={path} >
      <div className='flex items-center gap-4 mb-2'>
        <img src={`/src/assets/${icon}.png`} className='w-16 h-16' />
        <p className='text-white text-xl'>{name}</p>
      </div>
    </Link>
  )
}

export default SidebarTab