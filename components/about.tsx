"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { language } = useLanguage()

  const content = {
    fr: {

      title: "À propos de",
      subtitle: "Développeur Full Stack",
      description: "Développeur Full Stack avec plus de 2 ans d'expérience, spécialisé en PHP et technologies web modernes. Passionné par la création de solutions innovantes et l'apprentissage continu.",
      location: " Maroc",
      downloadCV: "Télécharger CV"
    },
    en: {
      title: "About",
      subtitle: "Full Stack Developer",
      description: "Full Stack Developer with over 2 years of experience, specialized in PHP and modern web technologies. Passionate about creating innovative solutions and continuous learning.",
      location: " Morocco",
      downloadCV: "Download CV"
    }
  }

  return (
    <section id="about" className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="w-80 h-80 relative mx-auto">
            {/* Background glow effects */}
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl" />
            <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl" />
            
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-500/50 animate-[spin_8s_linear_infinite]" />
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden">
              <Image
                src="/kabil.jpg"
                alt="BOUNOUARA Mohamed Kabil"
                fill
                className="object-cover object-center scale-110"
                priority
              />
            </div>

            {/* Decorative dots */}
            <div className="absolute -z-10 top-0 -right-4 w-4 h-4 rounded-full bg-purple-400" />
            <div className="absolute -z-10 bottom-4 -left-4 w-6 h-6 rounded-full bg-amber-400" />
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">
            {content[language].title} <span className="bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <h3 className="text-xl bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent mb-4">
            {content[language].subtitle}
          </h3>
          <div className="space-y-4 text-gray-300 mb-6">
            <p>
              {content[language].description}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                📍 {content[language].location}
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                📧 Bounouarakabil363@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                📱 +212667021376
              </li>
            </ul>
          </div>
          <Button 
            className="bg-gradient-to-r from-purple-500 to-amber-500 hover:from-purple-600 hover:to-amber-600 text-white"
          >
            <FileText className="mr-2 h-4 w-4" />
            {content[language].downloadCV}
          </Button>
        </div>
      </div>
    </section>
  )
}

