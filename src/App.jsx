import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Partners from './components/Partners'
import Footer from './components/Footer'

import teamMembers from './teamMembers.js'
import Team from './components/Team.jsx'

function App() {

  return (
    <>
     <Header />
     <Hero />
     {/* <About /> */}
     {/* <Events /> */}
     {/* <Partners /> */}
     {/* <Team teamMembers={teamMembers} /> */}
     {/* <Footer /> */}
    </>
  )
}

export default App
