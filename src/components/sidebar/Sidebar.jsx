import SidebarTab from './SidebarTab'

const Sidebar = () => {
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
      icon: 'table'
    }
  ]

  return (
    <div>
      <h3>HSR Data Bank</h3>
      <div>
        {
          tabs.map(t => {
            return <SidebarTab key={t.path} tab={t} />
          })
        }
      </div>
    </div>
  )
}

export default Sidebar