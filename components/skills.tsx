"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Progress } from '@/components/ui/progress'

export default function Skills() {
  const technicalSkills = [
    { name: 'HTML/CSS', value: 90 },
    { name: 'PHP/Symfony', value: 85 },
    { name: 'JavaScript/jQuery', value: 80 },
    { name: 'Python', value: 65 },
    { name: 'Java', value: 60 },
    { name: 'C#', value: 75 },
    { name: 'SQL', value: 85 },
    { name: 'Node.js', value: 70 },
    { name: 'Next.js', value: 60 } 
  ]

  const professionalSkills = [
    { name: 'Organisation', value: 90 },
    { name: 'Communication', value: 85 },
    { name: 'Adaptation', value: 85 },
    { name: 'Autonomie', value: 90 }
  ]

  const techIcons = [
    { name: "HTML", icon: "/icon/html.svg" },
    { name: "CSS", icon: "/icon/css.svg" },
    { name: "JavaScript", icon: "/icon/javascript.svg" },
    { name: "TypeScript", icon: "/icon/typescript.svg" },
    { name: "React", icon: "/icon/react.svg" },
    { name: "Next.js", icon: "/icon/nextjs.svg" },
    { name: "Tailwind", icon: "/icon/tailwind.svg" },
    { name: "MongoDB", icon: "/icon/mongodb.svg" },
    { name: "MySQL", icon: "/icon/mysql.svg" },
    { name: "PostgreSQL", icon: "/icon/postgresql.svg" },
    { name: "Git", icon: "/icon/git.svg" },
    { name: "Docker", icon: "/icon/docker.svg" },
  ]

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const visibleIcons = isMobile ? 2 : 5

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Mes <span className="text-cyan-400">Compétences</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Compétences Techniques</h3>
          <div className="space-y-6">
            {technicalSkills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <Progress value={skill.value} className="h-2 bg-gray-700" indicatorClassName="bg-cyan-400" />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-6">Compétences Professionnelles</h3>
          <div className="grid grid-cols-2 gap-6">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="relative">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#1a4a5e"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeDasharray={`${skill.value}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">{skill.value}%</span>
                  <span className="text-sm text-gray-400">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section des icônes technologiques */}
      <div className="mt-12 bg-gradient-to-b from-slate-950 to-slate-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden">
            {/* Animation de défilement horizontal continu avec duplication */}
            <motion.div
              className="flex w-full"
              animate={{
                x: "-100%",
                transition: {
                  repeat: Infinity,
                  duration: 30, // Temps pour un cycle complet
                  ease: "linear",
                },
              }}
            >
              {/* Dupliquer les icônes pour un défilement continu */}
              {[...techIcons, ...techIcons].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="w-36 min-w-fit h-fit flex flex-col items-center justify-center m-3 rounded-lg group relative hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  <div className="h-full w-full rounded-lg border border-slate-700 bg-slate-800 shadow-lg group-hover:border-cyan-500 transition-all duration-300">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-6">
                      <div className="h-10 w-10 flex items-center justify-center">
                        <img
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          className="h-full w-auto rounded-lg"
                        />
                      </div>
                      <p className="text-white text-sm sm:text-lg">{tech.name}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
