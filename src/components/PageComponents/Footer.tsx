import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-full py-20 Radial text-white'>
      <div className='flex flex-col items-center justify-center gap-12 w-[90%] max-w-[700px] mx-auto'>
        <img src='/Logo.png' className='w-[200px]' />
        <h3 className='text-lg sm:text-2xl font-bold'>
          KEEP SOLUÇÔES® - Agência de Marketing Digital
        </h3>
        <div className=' sm:text-xl'>
          <p>Telefone:(62) 3576-5179</p>
          <p>Email: lastgyncosta@gmail.com</p>
          <p>Aparecida de Goiânia - GO</p>
        </div>

        <p className='text-xl sm:text-2xl font-bold'>Copyright 2023 - KEEP SOLUÇÔES® Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer