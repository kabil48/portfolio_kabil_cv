"use client"

import { Code, Layout, AppWindow } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '../contexts/LanguageContext'

export default function Services() {
  const { language } = useLanguage()

  const servicesContent = {
    fr: [
      {
        title: "QA & Tests Unitaires",
        icon: Code,
        description: "Assurer la qualité logicielle grâce à des tests unitaires et des processus rigoureux de contrôle qualité."
      },
      {
        title: "Web Design",
        icon: Layout,
        description: "Développer des sites web modernes et réactifs en utilisant les dernières technologies."
      },
      {
        title: "Conception d'Application Desktop",  
        icon: AppWindow,             
        description: "Créer des applications de bureau modernes et performantes pour offrir une expérience utilisateur fluide et intuitive."
      }
    ],
    en: [
      {
        title: "QA & Unit Tests",
        icon: Code,
        description: "Ensure software quality through unit testing and rigorous quality control processes."
      },
      {
        title: "Web Design",
        icon: Layout,
        description: "Develop modern and responsive websites using the latest technologies."
      },
      {
        title: "Desktop App Design",  
        icon: AppWindow,             
        description: "Create modern and high-performance desktop applications to deliver a smooth and intuitive user experience."
      }
    ]
  }

  return (
    <section id="services" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        {language === 'fr' ? 'Mes' : 'My'} <span className="text-cyan-400">{language === 'fr' ? 'Services' : 'Services'}</span>
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {servicesContent[language].map((service, index) => (
          <Card key={index} className="bg-[#011627] border-cyan-500/20 hover:border-cyan-500 transition-colors">
            <CardHeader>
              <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
