import React from 'react'
import LinkBusiness from '../GlobalElements/LinkBusiness'

const Conclusion = () => {
  return (
    <section className='w-full h-full flex justify-center flex-col items-center gap-16 py-12 bg-gradient-to-tr from-[#50053c] via-[#b2d8dc] to-[#000000]'>
      <img src='/value.png' className='sm:w-[500px] sm:h-[600px]' />

      <h2 className='w-[90%] text-center sm:text-start sm:w-[500px] text-2xl font-bold'>
        Não desperdice mais tempo e dinheiro com estratégias ultrapassadas. Deixe a equipe da Keep cuidar do seu negócio e decola-lo no digital.
      </h2>
      <LinkBusiness />
    </section>
  )
}

export default Conclusion