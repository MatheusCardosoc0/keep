import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

const LinkBusiness = () => {
  return (
    <a className='flex gap-2 bg-gradient-to-b from-[#f700ff] via-[#000000] to-[#035564] rounded-xl md:p-4 md:text-3xl text-2xl font-black justify-center items-center text-white hover:brightness-150 p-2 w-[90%] sm:mx-auto sd:w-full max-w-[460px]'
      href='https://wa.me/35765179' target={"_blank"}>
      <IoLogoWhatsapp className='text-5xl text-[#3cddd3] bg-white rounded-full' />
      Fale com um especialista
    </a>
  )
}

export default LinkBusiness