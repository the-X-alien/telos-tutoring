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
            <a href="mailto:telostutoring@outlook.com" className="text-primary hover:underline">
              telostutoring@outlook.com
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

function LegalPage({ title, content }: { title: string; content: string[] }) {
  return (
    <>
      <Helmet title={`${title} – Telos Tutoring`} description={`${title} for Telos Tutoring, a free peer tutoring nonprofit serving K-8 students in the Bay Area.`} />
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-8 md:px-16 lg:px-28">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-foreground tracking-[-1.5px] mb-8">{title}</h1>
          <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
            {content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const PRIVACY_CONTENT = [
  "Telos Tutoring respects your privacy. This policy explains how we collect, use, and protect your information when you use our tutoring services and website.",
  "We collect only the information you provide through our sign-up forms — name, grade, subjects, and contact details. This information is used solely to match students with tutors and to communicate about scheduling.",
  "We do not sell, share, or distribute your personal information to third parties. All data is stored securely and accessed only by Telos Tutoring administrators for the purpose of coordinating tutoring sessions.",
  "Our website uses Microsoft Clarity to understand how visitors interact with our site. Clarity collects anonymized usage data (clicks, scrolling, page navigation) to help us improve the experience. No personally identifiable information is collected through Clarity.",
  "If you have questions about this policy, contact us at telostutoring@outlook.com.",
]

const TERMS_CONTENT = [
  "Telos Tutoring provides free peer-to-peer tutoring services for K-8 students in the Bay Area. By signing up, you agree to these terms.",
  "Services are provided on a volunteer basis and are completely free of charge. There are no fees, contracts, or obligations of any kind.",
  "Tutors are high school student volunteers who have demonstrated proficiency in their subjects. While we screen our tutors, we make no guarantees about specific academic outcomes.",
  "Sessions may be held online via Zoom or in person at the Milpitas Library. Parents or guardians are responsible for transportation to in-person sessions and for ensuring appropriate supervision during online sessions.",
  "We reserve the right to modify or discontinue services at any time. We also reserve the right to update these terms. Continued use of our services after changes constitutes acceptance of the new terms.",
]

export default function App() {
  return (
    <div className="bg-background text-foreground min-h-screen font-body" style={{ perspective: "1200px" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<GuideIndex />} />
        <Route path="/guide/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/guide/:slug" element={<GuidePage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/privacy" element={<LegalPage title="Privacy Policy" content={PRIVACY_CONTENT} />} />
        <Route path="/terms" element={<LegalPage title="Terms of Service" content={TERMS_CONTENT} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SpeedInsights />
    </div>
  )
}
