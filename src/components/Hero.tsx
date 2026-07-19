import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { HERO } from "../lib/content"

export function Hero() {
  const ref = useRef(null)
  const [messageIndex, setMessageIndex] = useState(() =>
    Math.floor(Math.random() * HERO.messages.length)
  )

  useEffect(() => {
    const id = setInterval(() => {
      setMessageIndex((i) => (i + 1) % HERO.messages.length)
    }, 8000)
    return () => clearInterval(id)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: videoScale, opacity: videoOpacity }}
      >
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%23000' width='1' height='1'/%3E%3C/svg%3E"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-telos-bg via-telos-bg/60 to-telos-bg/20 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-telos-bg/40 to-transparent z-[1]" />

      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-telos-accent/5 rounded-full blur-[150px] animate-pulse-gold z-[1]" />
      <div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-telos-accent/4 rounded-full blur-[120px] animate-pulse-gold z-[1]"
        style={{ animationDelay: "1.5s" }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 px-8 md:px-16 lg:px-28 pb-16 sm:pb-20"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[1400px] mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={messageIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="telos-hero-title"
            >
              <span style={{ color: "#c4932a" }}>{HERO.messages[messageIndex].line1}</span>{" "}
              <em className="not-italic telos-marker" style={{ fontStyle: "normal", color: "#d1563c" }}>
                {HERO.messages[messageIndex].accent}
              </em>
              {HERO.messages[messageIndex].line2 && (
                <>
                  <br />
                  <span style={{ color: "#c4932a" }}>{HERO.messages[messageIndex].line2}</span>
                </>
              )}
            </motion.h1>
          </AnimatePresence>

          <div className="flex items-center gap-3 mt-6">
            <div className="telos-sticky telos-sticky-rot1">
              Free K-8 tutoring, always.
            </div>
          </div>

          <p className="text-telos-muted text-base sm:text-lg max-w-2xl mt-8 leading-relaxed font-body">
            {HERO.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="https://kairos.telost.org/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="telos-btn-primary"
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="https://kairos.telost.org"
              target="_blank"
              rel="noopener noreferrer"
              className="telos-btn-secondary"
            >
              {HERO.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ opacity: contentOpacity }}
      >
        <ChevronDown className="w-5 h-5 text-telos-muted/40 animate-subtle-float" />
      </motion.div>
    </section>
  )
}