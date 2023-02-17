import React from 'react'

const About = () => {
  return (
    <section id='about' style={{
      backgroundImage: 'url(Untitled_design__5_-removebg-preview.png)'
    }}
      className='w-full h-full bg-no-repeat bg-cover pt-40 lg:mt-2 flex flex-col lg:flex-row items-center justify-between'>
      <div className='flex flex-col gap-4 mt-4 mb-6 p-4 text-white font-bold bg-gradient-to-tr from-cyan-500 via-purple-500 to-amber-500 text-sm md:text-xl rounded-lg drop-shadow-[1px_1px_12px_black] lg:max-w-[1400px] lg:mx-auto mx-4'>



        <div className='flex flex-col lg:flex-row'>
          <img src='KEEP__3_-removebg-preview.png'
            className='w-[300px] h-[300px] mx-auto' />
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl md:text-4xl font-bold drop-shadow-[1px_1px_4px_black] text-yellow-400 text-left' >
              Sobre a KEEP
            </h2>
            <p className='text-justify drop-shadow-[1px_1px_4px_black]'>
              A KEEP é uma empresa especializada em soluções de marketing digital para empresas que buscam ampliar sua presença online. Com uma equipe qualificada, a KEEP oferece serviços de gestão de redes sociais, criação de sites e logotipos, ajudando as empresas a construir uma identidade digital sólida e coerente com seus valores e objetivos.
            </p>

            <p className='text-justify drop-shadow-[1px_1px_4px_black]'>
              A gestão de redes sociais é uma das principais soluções oferecidas pela KEEP, permitindo que as empresas construam uma estratégia de marketing eficaz para aumentar o engajamento com seu público-alvo. A empresa também oferece serviços de criação de sites responsivos e profissionais, que se adaptam a qualquer dispositivo, e de criação de logotipos, que ajudam a construir a identidade visual da marca.
            </p>
          </div>
        </div>

        <p className='text-justify drop-shadow-[1px_1px_4px_black]'>
          Com uma equipe de profissionais experientes e comprometidos em oferecer soluções personalizadas para cada cliente, a KEEP é uma opção confiável para empresas que buscam ampliar sua presença online. Com soluções eficientes e personalizadas, a empresa ajuda as empresas a construir uma presença online forte e atraente, ampliando suas oportunidades de negócio e garantindo a satisfação de seus clientes.
        </p>
      </div>


    </section>
  )
}

export default About