import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar'
import Characters from './pages/characters/Characters'
import CharacterDetails from './pages/characterDetails/CharacterDetails'
import Lightcones from './pages/lightcones/Lightcones'
import LightconeDetails from './pages/lightconeDetails/LightconeDetails'
import Relics from './pages/relics/Relics'
import RelicDetails from './pages/relicDetails/RelicDetails'
import PlanarOrnaments from './pages/planarOrnaments/PlanarOrnaments'
import PlanarOrnamentDetails from './pages/planarOrnamentDetails/PlanarOrnamentDetails'
import CharactersStatComparison from './pages/charactersStatsComparison/CharactersStatsComparison'

function App() {
  return (
    <div className='flex bg-slate-800'>
      <Sidebar />
      <div className='lg:pl-80 w-full min-h-screen'>
        <Routes>
          <Route path="/" element={<Navigate to={'/characters'} replace />} />
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/characters/:id" element={<CharacterDetails />}></Route>
          <Route path="/lightcones" element={<Lightcones />}></Route>
          <Route path="/lightcones/:id" element={<LightconeDetails />}></Route>
          <Route path="/relics" element={<Relics />}></Route>
          <Route path="/relics/:id" element={<RelicDetails />}></Route>
          <Route path="/planarOrnaments" element={<PlanarOrnaments />}></Route>
          <Route path="/planarOrnaments/:id" element={<PlanarOrnamentDetails />}></Route>
          <Route path="/charactersStatsComparison" element={<CharactersStatComparison />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
