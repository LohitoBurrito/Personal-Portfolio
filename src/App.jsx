import React from 'react' 
import Contact from './components/contact/Contact'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Home from './components/home/Home'
import AboutMe from './components/aboutMe/AboutMe'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <div className="mock" id="Home"></div>
      <Projects/>
      <AboutMe/>
      <Contact/>
    </>
  )
}

export default App