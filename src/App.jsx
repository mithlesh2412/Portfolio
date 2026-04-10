import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="noise-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-8 text-muted text-sm font-display">
        <p>Built with React + Tailwind · © 2025 Mithlesh Paswan</p>
      </footer>
    </div>
  )
}
