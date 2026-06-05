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

interface PageProps {
  title: string
  description: string
  children: React.ReactNode
}

function Page({ title, description, children }: PageProps) {
  return (
    <>
      <Helmet title={title} description={description} />
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </>
  )
}

function HomePage() {
  return (
    <Page
      title="Telos Tutoring – Free Peer Tutoring for K-8 Students in the Bay Area"
      description="Telos (τέλος) means purpose. We're a free peer tutoring nonprofit helping K-8 students in the Bay Area discover theirs. Founded by students at Milpitas High School."
    >
      <Hero />
      <Scene3D><Philosophy /></Scene3D>
      <Scene3D><ScrollReveal /></Scene3D>
      <Scene3D><Subjects /></Scene3D>
      <Scene3D><HowItWorks /></Scene3D>
      <Scene3D><Stats /></Scene3D>
      <Scene3D><Team /></Scene3D>
      <Scene3D><FAQ /></Scene3D>
      <Scene3D><CTA /></Scene3D>
    </Page>
  )
}

function PhilosophyPage() {
  return (
    <Page
      title="Our Philosophy – Telos Tutoring"
      description="Telos (τέλος) means purpose. Learn how Aristotle's philosophy guides our approach to free peer tutoring in Milpitas."
    >
      <Scene3D><Philosophy /></Scene3D>
      <Scene3D><ScrollReveal /></Scene3D>
      <Scene3D><CTA /></Scene3D>
    </Page>
  )
}

function SubjectsPage() {
  return (
    <Page
      title="Subjects We Tutor – Telos Tutoring"
      description="Free peer tutoring in Math, Science, English, and History for K-8 students in the Bay Area. Math acceleration and MDTP prep available."
    >
      <Scene3D><Subjects /></Scene3D>
      <Scene3D><Stats /></Scene3D>
      <Scene3D><CTA /></Scene3D>
    </Page>
  )
}

function HowItWorksPage() {
  return (
    <Page
      title="How It Works – Telos Tutoring"
      description="Free peer tutoring in 4 simple steps: Sign Up, Get Matched, Start Learning, Grow. Online or in person at Milpitas Library."
    >
      <Scene3D><HowItWorks /></Scene3D>
      <Scene3D><Stats /></Scene3D>
      <Scene3D><CTA /></Scene3D>
    </Page>
  )
}

function TeamPage() {
  return (
    <Page
      title="Our Team – Telos Tutoring"
      description="Meet Dhiaan Dave and Neal Panuganti, the co-founders of Telos Tutoring. High school students building free peer tutoring for K-8 students."
    >
      <Scene3D><Team /></Scene3D>
      <Scene3D><Stats /></Scene3D>
      <Scene3D><CTA /></Scene3D>
    </Page>
  )
}

function FAQPage() {
  return (
    <Page
      title="FAQ – Telos Tutoring"
      description="Frequently asked questions about Telos Tutoring's free peer tutoring program. Is it really free? Who are the tutors? How do sessions work?"
    >
      <Scene3D><FAQ /></Scene3D>
      <Scene3D><CTA /></Scene3D>
    </Page>
  )
}

function JoinPage() {
  return (
    <Page
      title="Join Telos Tutoring – Free Peer Tutoring for K-8 Students"
      description="Sign up for free peer tutoring in Milpitas. Math, Science, English, and History. Online or in person. No fees, no catch."
    >
      <Scene3D><Stats /></Scene3D>
      <Scene3D><CTA /></Scene3D>
    </Page>
  )
}

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen font-body" style={{ perspective: "1200px" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/guide" element={<GuideIndex />} />
        <Route path="/guide/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/guide/:slug" element={<GuidePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SpeedInsights />
    </div>
  )
}