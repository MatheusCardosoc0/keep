export type Service = {
  title: string
  description: string
  banner: string
}


export const services: Service[] = [
  {
    banner: '/designIcon.png',
    title: 'Design',
    description: 'Fortaleça a imagem do seu negócio com logos únicos e conteúdo criativo para as mídias sociais.'
  },
  {
    banner: '/siteIcon.png',
    description: 'Tenha um site, landing page ou micro site personalizado e profissional para decolar na web, construído por especialistas em web design.',
    title: 'Criação de trafego'
  },
  {
    banner: '/mediaIcon.png',
    description: 'Conquiste um público fiel com conteúdo criativo e estratégias de Social Media. Deixe-nos cuidar da sua presença online.',
    title: 'Gestão de redes sociais'
  },
  {
    banner: 'traficIcon.png',
    description: "Aumente a conversão de leads em vendas com a Gestão de Tráfego da Keep. Deixe-nos cuidar da sua presença digital.",
    title: "Gestão de trafico"
  }
]