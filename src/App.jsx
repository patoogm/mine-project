import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ContactUs } from './pages/ContactUs'
import { AboutUs } from './pages/AboutUs'
import { Trajectory } from './pages/Trajectory'
import { Projects } from './pages/Projects'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/trajectory' element={<Trajectory />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactUs />} />     
     </Routes>
    </>
  )
}

export default App
