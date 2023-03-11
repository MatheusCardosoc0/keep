import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import LinkBusiness from '../GlobalElements/LinkBusiness'

const Header = () => {
  return (
    <header className='h-[600px] md:h-[800px] bg-center md:bg-top w-full bg-cover bg-no-repeat lg:h-[900px] flex justify-center md:justify-start bg-fixed'
      style={{
        backgroundImage: 'url(/background2.png)'
      }}>
      <div className='md:w-[540px] w-[90%] md:ml-8 pt-12 glass rounded-xl p-4 md:h-[680px] h-[80%] mt-8 flex flex-col gap-8'>
        <img src='/Logo.png'
          className='md:w-[240px] w-[140px] h-[140px] md:h-[240px] mx-auto drop-shadow-[8px_-1px_0px_cyan]' />
        <h1 className='md:text-[48.5px] text-[24px] font-black md:w-[500px] drop-shadow-[2px_1px_1px_black] bg-gradient-to-tr from-amber-100 via-cyan-100 to-pink-100 bg-clip-text text-transparent md:leading-[54px] text-center'>
          DECOLAGEM DIGITAL COM AS SOLUÇÕES COMPLETAS DA KEEP PARA O SEU NEGÓCIO!
        </h1>
        <LinkBusiness />
      </div>
    </header>
  )
}

export default Header