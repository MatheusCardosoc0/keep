import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

const LinkBusiness = () => {
  return (
    <button className='flex gap-2 bg-gradient-to-b from-pink-600 to-sky-400 rounded-xl md:p-4 md:text-3xl font-black justify-center items-center text-white hover:brightness-150 p-2 sm:w-[60%] sm:mx-auto md:w-full'>
      <IoLogoWhatsapp className='md:text-5xl text-2xl text-[#9400f6] bg-white rounded-full' />
      Fale com um especialista
    </button>
  )
}

export default LinkBusiness