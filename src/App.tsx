import { useRef } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { useScroll, useTransform, motion } from "framer-motion"
import { SpeedInsights } from "@vercel/speed-insights/react"
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
import { Helmet } from "./components/Helmet"
import { GuidePage, GuideIndex, CategoryPage } from "./components/GuidePage"

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

function HomePage() {
  return (
    <>
      <Helmet title="Telos Tutoring – Free Peer Tutoring for K-8 Students in the Bay Area" description="Telos (τέλος) means purpose. We're a free peer tutoring nonprofit helping K-8 students in the Bay Area discover theirs. Founded by students at Milpitas High School." />
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
    </>
  )
}

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen font-body" style={{ perspective: "1200px" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<GuideIndex />} />
        <Route path="/guide/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/guide/:slug" element={<GuidePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SpeedInsights />
    </div>
  )
}
