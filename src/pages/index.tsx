import Head from 'next/head'
import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import Conclusion from '../components/PageComponents/Conclusion'
import Footer from '../components/PageComponents/Footer'
import Header from '../components/PageComponents/Header'
import Services from '../components/PageComponents/Services'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet" />
        <title>KEEP-SLUÇÕES</title>
      </Head>


      <Header />

      <Services />

      <Conclusion />

      <Footer />

      <a className='fixed bottom-2 right-0 md:right-2 bg-white p-0 rounded-full' href='https://wa.me/35765179' target={"_blank"}>
        <IoLogoWhatsapp className='text-5xl md:text-6xl text-[#34af23] inverter' />
      </a>


    </div>
  )
}

export default index