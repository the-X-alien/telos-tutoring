import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Philosophy } from "./components/Philosophy"
import { ScrollReveal } from "./components/ScrollReveal"
import { Subjects } from "./components/Subjects"
import { HowItWorks } from "./components/HowItWorks"
import { Stats } from "./components/Stats"
import { Team } from "./components/Team"
import { FAQ } from "./components/FAQ"
import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <ScrollReveal />
        <Subjects />
        <HowItWorks />
        <Stats />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
