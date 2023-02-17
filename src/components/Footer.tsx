import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <section id="contact" className='w-full bg-zinc-900 mt-20 flex justify-between items-center px-4 lg:px-16 flex-col md:flex-row'>
      <div className='text-white p-4 flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>
          Entre em contato conosco:
        </h2>
        <div className='flex gap-5'>
          <span className='flex flex-col gap-2'>
            <p>
              Rua 42E Qd 74 Lt 30
            </p>
            <p>
              St Garavelo Residencial Park
            </p>
          </span>
          <span className='flex flex-col gap-2'>
            <p>
              Aparecida de Goiânia - Goiás
            </p>
            <p>
              Tel /WhatsApp (62) 99990-6983
            </p>
          </span>
        </div>
      </div>

      <a href='https://www.instagram.com/keepdivulgacoes/' target={"_blank"}>
        <AiFillInstagram className='text-7xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-amber-500 rounded-xl text-white drop-shadow-[1px_1px_4px_black]' />
      </a>
    </section>
  )
}

export default Footer