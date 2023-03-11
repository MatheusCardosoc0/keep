import Head from 'next/head'
import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
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
      </Head>


      <Header />

      <Services />

     
    </div>
  )
}

export default index