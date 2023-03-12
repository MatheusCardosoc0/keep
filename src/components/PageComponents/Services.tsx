import React from 'react'
import { services } from '../../constants/servicesArray'
import LinkBusiness from '../GlobalElements/LinkBusiness'
import ServiceCard from '../GlobalElements/ServiceCard'

const Services = () => {
  return (
    <section className='bg-gradient-to-br from-amber-500 via-sky-500 to-pink-500 h-full w-full'>
      <h2 className='w-full text-center py-12 text-6xl font-black text-white bg-gradient-to-r from-black to-cyan-700'>
        Nossos Serviços
      </h2>

      <div className='flex flex-col gap-12 justify-center items-center py-20'>
        {services.map(service => (
          <ServiceCard service={service} />
        ))}
        <LinkBusiness />
      </div>
    </section>
  )
}

export default Services