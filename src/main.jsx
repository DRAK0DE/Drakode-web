import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import Skills from  './pages/skills.jsx'
import Journey from './pages/journey.jsx';
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';
import Footer from './components/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar></Navbar>
            {/* <Home></Home>
      <Skills></Skills>
      <Journey></Journey>
      <Projects></Projects>
      <Contact></Contact> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/journey' element={<Journey/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  </StrictMode>
)
