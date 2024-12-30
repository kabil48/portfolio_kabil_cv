"use client"

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
    </section>
  )
}

