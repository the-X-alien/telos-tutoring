import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { HERO } from "../lib/content"

export function Hero() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.15

    const seekAndPlay = () => {
      audio.currentTime = 42
      audio.play().catch(() => {})
    }

    if (audio.readyState >= 2) {
      seekAndPlay()
    } else {
      audio.addEventListener("loadedmetadata", seekAndPlay, { once: true })
    }

    const unmute = () => {
      audio.muted = false
      document.removeEventListener("click", unmute)
      document.removeEventListener("touchstart", unmute)
    }
    document.addEventListener("click", unmute)
    document.addEventListener("touchstart", unmute)
    return () => {
      document.removeEventListener("click", unmute)
      document.removeEventListener("touchstart", unmute)
    }
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: videoScale, opacity: videoOpacity }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%23000' width='1' height='1'/%3E%3C/svg%3E"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent z-[1]" />

      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse-gold z-[1]" />
      <div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[120px] animate-pulse-gold z-[1]"
        style={{ animationDelay: "1.5s" }}
      />

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 px-8 md:px-16 lg:px-28 pb-16 sm:pb-20 max-w-[1400px] mx-auto"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs tracking-[2px] uppercase text-muted-foreground inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {HERO.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-[-2px] leading-[0.93] text-foreground">
            {HERO.headingLine1}{" "}
            <em className="not-italic text-primary font-display italic">
              {HERO.headingAccent}
            </em>
            <br />
            {HERO.headingLine2}
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
            {HERO.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#join"
              className="bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm sm:text-base font-medium gold-glow hover:scale-[1.03] transition-transform duration-200"
            >
              {HERO.ctaPrimary}
            </a>
            <a
              href="#philosophy"
              className="liquid-glass text-foreground text-sm sm:text-base font-medium px-8 py-3.5 rounded-full hover:text-primary transition-colors duration-200"
            >
              {HERO.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </motion.div>

      <audio
        ref={audioRef}
        preload="auto"
        loop
        muted
      >
        <source src="/golden-hour-instrumental.m4a" type="audio/mp4" />
        <source src="/golden-hour-instrumental.webm" type="audio/webm" />
      </audio>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ opacity: contentOpacity }}
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground/40 animate-subtle-float" />
      </motion.div>
    </section>
  )
}
