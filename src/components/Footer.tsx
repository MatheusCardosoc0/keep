import React from 'react'

const Footer = () => {
  return (
    <section className='w-full bg-zinc-900 mt-20'>
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
    </section>
  )
}

export default Footer