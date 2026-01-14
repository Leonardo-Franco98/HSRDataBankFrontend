import { Link } from 'react-router-dom'

const SidebarTab = ({ name, path, icon, active }) => {
  return (
    <Link to={path} >
      <div className={(active ? 'bg-slate-700' : '') + ' hidden lg:flex items-center gap-4 hover:bg-slate-700 duration-300 px-8 py-2 ml-2 rounded-l-xl'}>
        <img src={`/src/assets/${icon}.png`} className='w-16 h-16' />
        <p className={'text-white text-xl'}>{name}</p>
      </div>
    </Link>
  )
}

export default SidebarTab