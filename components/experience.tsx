import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Experience() {
  const experiences = [
    {
      period: "Avril 2022 – Août 2024",
      title: "DEVELOPPEUR FULL STACK PHP",
      company: "TELCODEV (Groupe ALPHALINK)",
      location: "Fès, Maroc",
      tasks: [
        "Conception des spécifications techniques à partir des besoins du client",
        "Création de MCD et requêtes SQL pour la gestion de la base de données",
        "Développement Front-End et Back-End avec PHP, HTML, CSS, JavaScript, jQuery, Smarty et Ajax",
        "Rédaction de cahiers de recette pour valider les livraisons",
        "Tests et résolution des anomalies détectées",
        "Création et suivi des tests automatisés avec Selenium"
      ]
    },
    {
      period: "Février 2021 – Mars 2022",
      title: "Technicien d'étude FTTH Réseaux et Télécom",
      company: "Cemos Telecom",
      location: "Fès, Maroc",
      tasks: [
        "Technicien Bureau Etudes FTTH (calculs de charges des supports Aériens sous COMAC)"
      ]
    },
    {
      period: "Octobre 2020 – Février 2021",
      title: "Développeur C#",
      company: "JHB PLUS",
      location: "Fès, Maroc",
      tasks: [
        "Modifications des applications (Gestion des Auto-école et Free-Test)"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Mon <span className="text-cyan-400">Expérience</span>
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-[#011627] border-cyan-500/20">
            <CardHeader>
              <div className="text-sm text-cyan-400 mb-2">{exp.period}</div>
              <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
              <div className="text-gray-400">{exp.company} - {exp.location}</div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {exp.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

