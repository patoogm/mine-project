import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ContactUs } from './pages/ContactUs'
import { AboutUs } from './pages/AboutUs'
import { Projects } from './pages/Projects'
import { OurTeam } from './pages/OurTeam'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactUs />} />     
     </Routes>
    </>
  )
}

export default App
