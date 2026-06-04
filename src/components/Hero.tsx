import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { HERO } from "../lib/content"
import { fadeUp } from "../lib/animations"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect fill='%23000' width='1' height='1'/%3E%3C/svg%3E"
      >
        <source
          src="https://cdn.pixabay.com/video/2020/09/06/49028-458259092_large.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-[2]" />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse-gold z-[1]" />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] animate-pulse-gold z-[1]"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24 pb-32">
        <motion.div
          {...fadeUp(0)}
          className="liquid-glass rounded-full px-5 py-2 text-xs tracking-[2px] uppercase text-muted-foreground mb-8 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          {HERO.badge}
        </motion.div>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-normal tracking-[-2.5px] leading-[0.93] max-w-5xl"
        >
          {HERO.headingLine1}{" "}
          <em className="not-italic text-primary font-display italic">
            {HERO.headingAccent}
          </em>
          <br />
          {HERO.headingLine2}
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#join"
            className="bg-primary text-primary-foreground rounded-full px-10 py-4 text-base font-medium gold-glow inline-flex items-center justify-center hover:scale-[1.03] transition-transform duration-200"
          >
            {HERO.ctaPrimary}
          </a>
          <a
            href="#philosophy"
            className="liquid-glass rounded-full px-10 py-4 text-base text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center justify-center"
          >
            {HERO.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-5 h-5 text-muted-foreground/40 animate-subtle-float" />
      </div>
    </section>
  )
}
