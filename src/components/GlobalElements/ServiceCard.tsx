import React from 'react'
import { Service } from '../../constants/servicesArray'

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className='flex flex-col sm:flex-row  p-2 justify-center items-center sm:items-stretch'>
      <img src={service.banner} className='w-[80%] sm:w-[300px] sm:h-[340px] sm:rounded-l-xl rounded-t-xl sm:rounded-tr-none' />
      <div className='flex flex-col items-center justify-center gap-8 sm:gap-20 bg-white sm:rounded-r-xl sm:rounded-bl-none rounded-b-xl w-[80%] sm:w-[440px] h-[340px] py-4'>

        <h3 className='text-3xl underline font-bold text-center'>{service.title}</h3>
        <p className='p-2 text-xl font-bold text-center'>
          {service.description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard