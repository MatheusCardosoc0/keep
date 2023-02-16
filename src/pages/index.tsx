import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Persuade from '../components/Persuade'
import Projects from '../components/Projects'
import Websites from '../components/Websites'
import {IoLogoWhatsapp} from 'react-icons/io'

const index = () => {
  return (
    <div className='bg-gradient-to-tr from-cyan-200 to-purple-200 overflow-x-hidden'>
      <Navbar />

      <About />

      <Persuade />

      <Projects />

      <Websites />

      <Footer />

      <a className='fixed bottom-2 right-0 bg-white p-0 rounded-full' href='https://wa.me/35761579'>
        <IoLogoWhatsapp className='text-5xl text-[#34af23] inverter' />
        </a>
    </div>
  )
}

export default index