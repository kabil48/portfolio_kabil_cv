"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { language } = useLanguage()

  const content = {
    fr: {
      title: "BOUNOUARA Mohamed Kabil",
      subtitle: "Développeur Full Stack",
      description: "Passionné de l'informatique, je suis à la recherche d'expériences et de défis pouvant me permettre de m'améliorer afin d'exploiter au mieux mes capacités et ainsi apporter les meilleures solutions informatiques aux problèmes souvent rencontrés.",
      cta: "Contactez-moi"
    },
    en: {
      title: "BOUNOUARA Mohamed Kabil",
      subtitle: "Full Stack Developer",
      description: "Passionate about computer science, I am looking for experiences and challenges that can allow me to improve in order to make the best use of my abilities and thus provide the best IT solutions to problems often encountered.",
      cta: "Contact Me"
    }
  }

  return (
    <section id="home" className="py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">
        {content[language].title}
      </h1>
      <h2 className="text-2xl text-cyan-400 mb-6">{content[language].subtitle}</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        {content[language].description}
      </p>
      <Button className="bg-cyan-500 hover:bg-cyan-600">
        {content[language].cta} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </section>
  )
}

