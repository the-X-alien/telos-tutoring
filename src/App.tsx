import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { Analytics } from "@vercel/analytics/react"
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

function Scene3D({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.97])

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, y, scale }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen font-body" style={{ perspective: "1200px" }}>
      <Navbar />
      <main>
        <Hero />
        <Scene3D><Philosophy /></Scene3D>
        <Scene3D><ScrollReveal /></Scene3D>
        <Scene3D><Subjects /></Scene3D>
        <Scene3D><HowItWorks /></Scene3D>
        <Scene3D><Stats /></Scene3D>
        <Scene3D><Team /></Scene3D>
        <Scene3D><FAQ /></Scene3D>
        <Scene3D><CTA /></Scene3D>
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
