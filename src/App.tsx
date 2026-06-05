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

function SponsorsPage() {
  return (
    <>
      <Helmet title="Sponsors – Telos Tutoring" description="Support Telos Tutoring's free peer tutoring program. Sponsor our mission to help K-8 students in the Bay Area discover their purpose." />
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-8">
            <span className="text-2xl text-primary font-display">S</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display text-foreground tracking-[-1px] mb-4">
            Sponsors
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-2">
            We're building something meaningful — free peer tutoring for every K-8 student in the Bay Area.
          </p>
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-6 py-3 mt-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-medium text-sm tracking-wide">Coming Soon</span>
          </div>
          <p className="text-muted-foreground/60 text-sm mt-8 max-w-sm mx-auto leading-relaxed">
            Interested in sponsoring? Reach out to us at{" "}
            <a href="mailto:telostutoring@gmail.com" className="text-primary hover:underline">
              telostutoring@gmail.com
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

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
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SpeedInsights />
    </div>
  )
}
