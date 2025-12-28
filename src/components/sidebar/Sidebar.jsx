import { useLocation } from 'react-router-dom'
import SidebarTab from './SidebarTab'

const Sidebar = () => {

  const location = useLocation().pathname

  const tabs = [
    {
      name: 'Characters',
      path: '/characters',
      icon: 'character'
    },
    {
      name: 'Lightcones',
      path: '/lightcones',
      icon: 'lightcone'
    },
    {
      name: 'Relics',
      path: '/relics',
      icon: 'relic'
    },
    {
      name: 'Planar Ornaments',
      path: '/planarOrnaments',
      icon: 'planarOrnament'
    },
    {
      name: 'Characters Stats',
      path: '/charactersStatComparison',
      icon: 'characterStats'
    }
  ]

  return (
    <div className='min-w-80 max-w-80 h-full bg-stone-950 py-8 fixed'>
      <div className='justify-items-center px-8'>
        <img src="/src/assets/dataBank.png" className='h-40 w-40 mb-4' />
        <h3 className='text-white text-3xl'>HSR Data Bank</h3>
      </div>
      <hr className='my-12 text-white mx-12' />
      <div>
        {
          tabs.map(t => {
            return <SidebarTab
              key={t.path} name={t.name} path={t.path} icon={t.icon}
              active={location === t.path || location.includes(`${t.path}/`)}
            />
          })
        }
      </div>
    </div>
  )
}

export default Sidebar