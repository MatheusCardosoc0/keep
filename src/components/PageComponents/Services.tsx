import React from 'react'

const Services = () => {
  return (
    <section className='bg-gradient-to-br from-amber-500 via-sky-500 to-pink-500 h-screen w-full'>
      <h2 className='w-full text-center py-12 text-6xl font-black text-white bg-gradient-to-r from-black to-cyan-700'>
        Nossos Serviços
      </h2>

      <div className='flex justify-center py-20'>
        <div className='flex p-2'>
          <img src='traficIcon.png' className='w-[300px] h-[300px] rounded-l-xl' />
          <div className='flex flex-col items-center justify-center gap-20 bg-white rounded-r-xl w-[90%] sm:max-w-[440px]'>
            <h3 className='text-3xl underline font-bold'>Criação de sites</h3>
            <p className='p-2 text-xl font-bold text-center'>CRIAÇÃO DE SITES PERSONALIZADOS E VELOZES PARA O SEU NEGÓCIO DECOLAR!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services