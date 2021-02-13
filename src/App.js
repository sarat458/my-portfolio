import React from 'react'
import About from './About'
import Academics from './Academics'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Skills from './Skills'
import Work from './Work'

const org = 'Tata Consultancy Services'
const role = 'Software Engineer'
const social_icons_size = 28

function App() {
  return (
    <div>
      <Navbar />
      <Home org={org} role={role} />
      <About />
      <Skills />
      <Academics />
      <Work />
      <Contact social_icons_size={social_icons_size} />
    </div>
  )
}

export default App
