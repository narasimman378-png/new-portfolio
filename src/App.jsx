import { useEffect, useState } from 'react'
import About from './components/sections/About.jsx'
import Contact from './components/sections/Contact.jsx'
import Education from './components/sections/education.jsx'
import Experience from './components/sections/experience.jsx'
import Footer from './components/sections/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Marquee from './components/sections/Marquee.jsx'
import Skills from './components/sections/skills.jsx'
import Voices from './components/sections/Voices.jsx'
import Work from './components/sections/Work.jsx'
import Cursor from './components/ui/Cursor.jsx'
import LoadingScreen from './components/ui/LoadingScreen.jsx'
import Nav from './components/ui/Nav.jsx'
import { PROFILE } from './data/portfolio.js'
import usePageEffects from './hooks/usePageEffects.js'

export default function App() {
  usePageEffects()
  const [progress, setProgress] = useState(0)
  const done = progress >= 100

  useEffect(() => {
    if (done) return
    const interval = setInterval(() => {
      setProgress((value) => Math.min(100, value + Math.ceil(Math.random() * 7)))
    }, 60)
    return () => clearInterval(interval)
  }, [done])

  useEffect(() => {
    document.body.style.overflow = done ? '' : 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [done])

  return (
    <div className="overflow-x-clip">
      <LoadingScreen progress={progress} done={done} name={PROFILE.name} />
      <div id="bar" className="fixed left-0 top-0 z-[80] h-1 w-full origin-left scale-x-0 bg-accent" />
      <Cursor />
      <Nav />
      <main>
        <Hero go={done} />
        <Marquee />
        <Work />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Voices />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
