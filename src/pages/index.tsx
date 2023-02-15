import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Persuade from '../components/Persuade'

const index = () => {
  return (
    <div className='bg-gradient-to-tr from-cyan-200 to-purple-200'>
      <Navbar />

      <About />

      <Persuade />

      {/*<a href='https://wa.me/996042564'>whatsapp</a>*/}
    </div>
  )
}

export default index