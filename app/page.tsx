import Navbar from '../components/navbar'
import Hero from '../components/hero'
import About from '../components/about'
import Services from '../components/services'
import Skills from '../components/skills'
import Experience from '../components/experience'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent blur-2xl" />
      </div>
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

