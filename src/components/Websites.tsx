import React, { useState } from 'react'
import { BsEye, BsFillEyeFill } from 'react-icons/bs'

const Websites = () => {

  const [active, setActive] = useState(0)

  return (
    <section style={{ backgroundImage: 'url(Untitled_design__8_-removebg-preview.png)' }}
      className="w-full h-screen bg-cover">
      <div className='flex flex-col items-center mx-4 lg:mx-40 mt-12 text-justify justify-center gap-16 bg-gradient-to-tr from-cyan-500 via-purple-500 to-amber-500 p-4 rounded-lg'>
        <h2 className='text-4xl font-bold text-yellow-500 drop-shadow-[1px_1px_1px_black]'>
          Exemplos de sites feitos por nós
        </h2>

        <div>
          <p className='text-justify text-white drop-shadow-[1px_1px_1px_black] text-xl font-bold mx-8 lg:mx-28 mb-8'>
            Os sites da KEEP são a escolha certa para quem busca uma presença online forte e eficaz. Nossos sites são responsivos, modernos e profissionais. Além disso, cada site é criado levando em consideração as necessidades e objetivos de cada cliente, garantindo assim uma experiência personalizada e única.
          </p>

          <div className='w-[90%] lg:w-[1000px] lg:h-[500px] mx-auto mt-4 rounded-lg h-[300px] bg-yellow-500 flex flex-row gap-2 p-2'>

            <div className={` flex-1 rounded-l-lg bg-center
             ${active == 0 && 'flex-[5] text-8xl bg-cover'}
              transition-all duration-1000 cursor-pointer bg-no-repeat  bg-white `} onClick={() => setActive(0)}
              style={{ backgroundImage: 'url(Sorveloteria.png)' }}>

              <a className={`relative top-[50%] w-[100px] left-1/2 font-bold text-white drop-shadow-[1px_1px_1px_black] ${active !== 0 && 'hidden'}`}
                href="https://sorveloteria.netlify.app/">
                <BsFillEyeFill />
              </a>
            </div>

            <div className={` flex-1 rounded-l-lg bg-center
             ${active == 1 && 'flex-[5] text-8xl bg-cover'}
              transition-all duration-1000 cursor-pointer bg-no-repeat  bg-white `} onClick={() => setActive(1)}
              style={{ backgroundImage: 'url(7.png)' }}>

              <a className={`relative top-[50%] left-1/2 -translate-x-1/2 font-bold text-white drop-shadow-[1px_1px_1px_black] ${active !== 1 && 'hidden'}`}
                href="https://ecommerce-eta-coral.vercel.app/">
                <BsFillEyeFill />
              </a>
            </div>

            <div className={` flex-1 rounded-l-lg bg-center
             ${active == 2 && 'flex-[5] text-8xl bg-cover'}
              transition-all duration-1000 cursor-pointer bg-no-repeat  bg-white `} onClick={() => setActive(2)}
              style={{ backgroundImage: 'url(19.png)' }}>

              <a className={`relative top-[50%] left-1/2 -translate-x-1/2 font-bold text-white drop-shadow-[1px_1px_1px_black] ${active !== 2 && 'hidden'}`}
                href="https://mks-sistema-teste.vercel.app/">
                <BsFillEyeFill />
              </a>
            </div>



          </div>
        </div>
      </div>
    </section>
  )
}

export default Websites