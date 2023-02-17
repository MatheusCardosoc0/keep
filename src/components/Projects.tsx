import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { zoomIn } from '../utils/motion'

const Projects = () => {

  const [active, setActive] = useState(0)

  return (
    <section id='projects' style={{
      backgroundImage: 'url(Untitled_design__7_-removebg-preview.png)'
    }}
      className="w-full h-full bg-cover bg-no-repeat mt-20 pb-[100px]">
      <motion.div variants={zoomIn(0.25,0.5)}
       initial={"hidden"}
       whileInView={"show"}
       className='flex flex-col items-center mx-4 lg:mx-40 mt-12 text-justify justify-center gap-16 bg-gradient-to-tr from-cyan-500 via-purple-500 to-amber-500 p-4 rounded-lg drop-shadow-[1px_1px_5px_black]'>
        <h2 className='text-xl md:text-4xl font-bold text-yellow-500 drop-shadow-[1px_1px_1px_black]'>
          Logotipos feitas por nós
        </h2>

        <div>
          <p className='md:text-justify text-center text-white drop-shadow-[1px_1px_1px_black] md:text-xl font-bold mx-8 lg:mx-28 mb-8'>
            Na KEEP, entendemos a importância de um logotipo bem projetado para a identidade visual da sua empresa. Nossos projetos de logotipo são personalizados e levam em consideração os valores e objetivos da sua marca para garantir uma identidade visual forte e coesa.
          </p>

          <div className='w-[90%] xl:w-[800px] xl:h-[500px] mx-auto mt-4 rounded-lg h-[300px] bg-yellow-500 flex flex-row gap-2 p-2'>

            <div className={` flex-1 rounded-l-lg ${active == 0 && 'flex-[5] text-4xl'} transition-all duration-1000 cursor-pointer bg-contain bg-no-repeat bg-white `} onClick={() => setActive(0)}
            style={{backgroundImage: 'url(Pt.png)'}}>
              <button className='relative top-[85%] font-bold text-white drop-shadow-[1px_1px_1px_black]'>Logo 1</button>
            </div>

            <div className={` flex-1 rounded-lg ${active == 1 && 'flex-[5] text-4xl'} transition-all duration-1000 cursor-pointer bg-contain bg-white bg-no-repeat`} onClick={() => setActive(1)}
            style={{backgroundImage: 'url(H.png)'}}>
              <button className='relative top-[85%] font-bold text-white drop-shadow-[1px_1px_1px_black]'>Logo 2</button>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Projects