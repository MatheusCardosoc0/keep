import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Persuade from '../components/Persuade'
import Projects from '../components/Projects'
import Websites from '../components/Websites'

const index = () => {
  return (
    <div className='bg-gradient-to-tr from-cyan-200 to-purple-200'>
      <Navbar />

      <About />

      <Persuade />

      <Projects />

      <Websites />

      {/*<a href='https://wa.me/996042564'>whatsapp</a>*/}
    </div>
  )
}

export default index