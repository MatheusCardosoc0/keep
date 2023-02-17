import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'

const Navbar = () => {

  const [menuView, setMenuView] = useState(false)

  return (
    <nav className='bg-zinc-900 p-2 flex justify-between items-center fixed w-full top-0 z-10'>
      <span className='flex text-2xl items-center'>
        <img src='KEEP__3_-removebg-preview.png'
          className='md:w-[100px] w-[50px]'
        />
        <h1 className=' flex flex-col'>
          <b className='drop-shadow-[2px_1px_0px_white] md:text-5xl font-bold bg-gradient-to-b from-cyan-400 via-purple-500 to-amber-500 bg-clip-text text-transparent'>KEEP</b>
          <b className='md:text-xl text-sm text-cyan-400'>Maeketing e divulgações</b>
        </h1>
      </span>

      <button className='text-white text-5xl hover:text-amber-400 flex md:hidden z-10'
        onClick={() => setMenuView(prev => !prev)}>
        <BiMenu />
      </button>

      <span className='md:flex gap-4 text-2xl text-purple-400 hidden'>
        <a href='#about' className='text-white hover:text-amber-400 hover:underline cursor-pointer font-bold'>Sobre</a> |
        <a href='#projects' className='text-white hover:text-amber-400 hover:underline cursor-pointer font-bold'>Projetos</a> |
        <a href='#contact' className='text-white hover:text-amber-400 hover:underline cursor-pointer font-bold'>Contato</a>
      </span>

      {menuView && (
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-4xl gap-8 text-yellow-300 w-full h-screen text-center justify-center bg-purple-900/40'
        onClick={() => setMenuView(false)}>
          <a href='#about' className=' hover:text-cyan-400 drop-shadow-[1px_1px_2px_black] hover:underline cursor-pointer font-bold'>Sobre</a>
          <a href='#projects' className=' hover:text-cyan-400 drop-shadow-[1px_1px_2px_black] hover:underline cursor-pointer font-bold'>Projetos</a>
          <a href='#contact' className=' hover:text-cyan-400 drop-shadow-[1px_1px_2px_black] hover:underline cursor-pointer font-bold'>Contato</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar