import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-zinc-900 p-2 flex justify-between items-center fixed w-full top-0 z-10'>
      <span className='flex text-2xl items-center'>
        <img src='KEEP__3_-removebg-preview.png'
          width={100} />
        <h1 className=' flex flex-col'>
          <b className='drop-shadow-[2px_1px_0px_white] text-5xl font-bold bg-gradient-to-b from-cyan-400 via-purple-500 to-amber-500 bg-clip-text text-transparent'>KEEP</b>
          <b className='text-xl text-cyan-400'>Maeketing e divulgações</b>
        </h1>
      </span>

      <span className='flex gap-4 text-2xl text-purple-400'>
        <a href='#about' className='text-white hover:text-amber-400 hover:underline cursor-pointer font-bold'>Sobre</a> |
        <a href='#projects' className='text-white hover:text-amber-400 hover:underline cursor-pointer font-bold'>Projetos</a> |
        <a href='#contact' className='text-white hover:text-amber-400 hover:underline cursor-pointer font-bold'>Contato</a>
      </span>
    </nav>
  )
}

export default Navbar