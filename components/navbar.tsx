"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { useLanguage } from '../contexts/LanguageContext'
import { ArrowLeftRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const { language, toggleLanguage } = useLanguage()

  const links = [
    { href: '#home', labelFr: 'Accueil', labelEn: 'Home' },
    { href: '#about', labelFr: 'À propos', labelEn: 'About' },
    { href: '#services', labelFr: 'Services', labelEn: 'Services' },
    { href: '#skills', labelFr: 'Compétences', labelEn: 'Skills' },
    { href: '#experience', labelFr: 'Expérience', labelEn: 'Experience' },
    { href: '#project', labelFr: 'Projets', labelEn: 'Projects' },
    { href: '#contact', labelFr: 'Contact', labelEn: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/10 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 font-bold text-xl bg-gradient-to-r from-purple-400 to-amber-400 bg-clip-text text-transparent">
          Portfolio.
        </div>
        <nav className="flex items-center space-x-6 ml-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={cn(
                "text-sm transition-colors hover:text-purple-400",
                activeSection === link.href.slice(1) 
                  ? "text-purple-400" 
                  : "text-gray-300"
              )}
            >
              {language === 'fr' ? link.labelFr : link.labelEn}
            </Link>
          ))}
          <Button
            onClick={toggleLanguage}
            variant="ghost"
            size="icon"
            className="ml-4"
            aria-label="Toggle language"
          >
            <ArrowLeftRight className="h-4 w-4" />
            <span className="ml-2 text-xs font-semibold">{language.toUpperCase()}</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}

