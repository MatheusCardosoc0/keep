import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../utils/motion'

const Persuade = () => {
  return (
    <section className='w-full h-full bg-no-repeat bg-cover'
      style={{
        backgroundImage: 'url(a.png)'
      }}>

      <div className='mt-80 lg:mt-0 text-xl flex flex-col gap-8 font-bold mx-4 lg:mx-40'>

        <h2 className='text-3xl text-yellow-500 drop-shadow-[1px_1px_1px_black]'>
          Por que preciso da KEEP?
        </h2>

        <p className='text-justify'>
          Cada vez mais pessoas e empresas estão percebendo a importância de uma presença online forte e consistente, e a gestão de redes sociais, um site e logotipo são elementos cruciais para alcançar esse objetivo. Uma boa gestão de redes sociais permite que você estabeleça uma conexão mais próxima com seu público-alvo, aumentando sua visibilidade e interação nas mídias sociais. Com uma equipe especializada para cuidar de suas redes sociais, você pode ter mais tempo para se concentrar em outras áreas de sua vida ou negócio.
        </p>
        <p className='text-justify'>
          Um site profissional é a vitrine virtual da sua marca, produto ou serviço. Ele é o local onde as pessoas podem obter informações sobre o que você faz e como entrar em contato. Ter um site de qualidade é importante para garantir uma presença online forte e credível. Além disso, um site responsivo e com design moderno pode atrair mais visitantes e aumentar a probabilidade de gerar mais negócios ou parcerias.
        </p>
        <p className='text-justify'>
          Um logotipo é a representação visual de sua marca ou negócio. Ele é a identidade visual da sua empresa e, como tal, é importante que seja facilmente reconhecível e transmita os valores da empresa. Um logotipo bem projetado pode ajudar a construir uma identidade forte e coesa para sua marca, tornando-a mais reconhecida no mercado e contribuindo para o aumento da visibilidade e lembrança da marca pelos consumidores.
        </p>


      </div>

      <motion.div variants={slideIn('left', 'tween', 0.25, 1.4)}
        className='flex flex-col lg:flex-row justify-center items-center gap-12 pb-8 bg-purple-700 p-4 rounded-lg mx-8 mt-8 lg:mx-20 drop-shadow-[1px_1px_5px_black]'
        initial="hidden"
        whileInView={'show'}
      >
        <img alt="" src='Assinante da Keep.png'
          className='w-[500px] h-[300px] rounded-lg' />

        <div className='text-justify text-white drop-shadow-[1px_1px_0px_black] text-xl font-extrabold flex flex-col gap-4'>
          <p>
            Para aqueles que desejam uma presença online forte e eficaz, a KEEP é a empresa certa para você. Com soluções personalizadas de gestão de redes sociais, criação de sites responsivos e profissionais e criação de logotipos de qualidade, a KEEP pode ajudar a construir uma identidade digital sólida e coerente com seus valores e objetivos.
          </p>
          <p>
            Com uma equipe de profissionais experientes e comprometidos em oferecer soluções personalizadas para cada cliente, a KEEP é uma opção confiável e eficaz para aqueles que buscam ampliar sua presença online e garantir o sucesso de suas empresas.
          </p>
          <p>
            Entre em contato conosco para saber mais sobre nossos serviços e descobrir como podemos ajudá-lo a alcançar seus objetivos online.
          </p>
        </div>
      </motion.div>

    </section>
  )
}

export default Persuade