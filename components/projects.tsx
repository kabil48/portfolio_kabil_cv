"use client"

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '../contexts/LanguageContext'

export default function Projects() {
  const { language } = useLanguage()

  const projects = {
    fr: [
      {
        title: "Gestion Auto-école",
        image: "/placeholder.svg",
        description: "Application de gestion pour auto-écoles développée en C#"
      },
      {
        title: "Gestion Parapharmacie",
        image: "/placeholder.svg",
        description: "Application web de gestion développée avec ASP.NET et Bootstrap"
      },
      {
        title: "Gestion des Diplômes",
        image: "/placeholder.svg",
        description: "Application Desktop en C# pour la gestion des diplômes des stagiaires"
      }
    ],
    en: [
      {
        title: "Driving School Management",
        image: "/placeholder.svg",
        description: "Management application for driving schools developed in C#"
      },
      {
        title: "Pharmacy Management",
        image: "/placeholder.svg",
        description: "Web management application developed with ASP.NET and Bootstrap"
      },
      {
        title: "Diploma Management",
        image: "/placeholder.svg",
        description: "Desktop application in C# for managing trainee diplomas"
      }
    ]
  }

  return (
    <section id="project" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        {language === 'fr' ? 'Mes' : 'My'} <span className="text-cyan-400">{language === 'fr' ? 'Projets' : 'Projects'}</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects[language].map((project, index) => (
          <Card key={index} className="bg-[#011627] border-cyan-500/20 overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
