import { useRef, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PHILOSOPHY } from "../lib/content"
import { fadeUp, scaleIn } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"
import type { MotionValue } from "framer-motion"

function RevealWord({
  word,
  index,
  total,
  scrollYProgress,
}: {
  word: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  const start = index / total
  const end = Math.min((index + 1) / total, 1)
  const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])
  return (
    <motion.span style={{ opacity }} className="text-primary">
      {word}{" "}
    </motion.span>
  )
}

function QuoteReveal() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.15"],
  })

  const words = useMemo(() => PHILOSOPHY.quote.split(" "), [])
  const attributionOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1])

  return (
    <div ref={containerRef} className="relative" style={{ height: "120vh" }}>
      <div className="sticky top-[20vh] border-l-2 border-primary pl-6 py-4">
        <p className="text-foreground text-lg md:text-xl font-display italic leading-relaxed">
          &ldquo;
          {words.map((word, i) => (
            <RevealWord
              key={`${word}-${i}`}
              word={word}
              index={i}
              total={words.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
          &rdquo;
        </p>
        <motion.p
          style={{ opacity: attributionOpacity }}
          className="text-primary text-sm mt-3 not-italic font-body"
        >
          {PHILOSOPHY.quoteAttribution}
        </motion.p>
      </div>
    </div>
  )
}

export function Philosophy() {
  return (
    <section id="philosophy" className="py-16 md:py-24 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div>
          <SectionLabel text={PHILOSOPHY.label} />

          <AccentHeading
            text={PHILOSOPHY.heading}
            className="text-3xl md:text-4xl lg:text-5xl tracking-[-1.5px]"
          />

          <div className="text-muted-foreground text-base md:text-lg leading-relaxed mt-8 space-y-6">
            {PHILOSOPHY.body.map((paragraph, i) => (
              <motion.p key={i} {...fadeUp(0.2 + i * 0.1)}>
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="mt-10">
            <QuoteReveal />
          </div>
        </div>

        <motion.div {...scaleIn(0.2)} className="w-full aspect-square max-w-[500px] mx-auto relative md:sticky md:top-24">
          <div className="absolute inset-0 rounded-full border border-border/30 animate-slow-spin">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/60" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-primary/60" />
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/60" />
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/60" />
          </div>
          <div className="absolute inset-8 rounded-full border border-border/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[120px] md:text-[180px] font-display text-primary/20">
              &tau;
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
