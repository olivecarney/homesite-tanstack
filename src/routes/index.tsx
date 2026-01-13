import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Timeline />
      <Contact />
    </div>
  )
}
