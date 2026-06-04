import { useRef, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SCROLL_REVEAL_TEXT } from "../lib/content"

function Word({
  word,
  index,
  total,
  scrollYProgress,
  isHighlight,
}: {
  word: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
  isHighlight: boolean
}) {
  const start = index / total
  const end = Math.min((index + 1) / total, 1)
  const opacity = useTransform(scrollYProgress, [start, end], [0.12, 1])
  return (
    <motion.span
      style={{ opacity }}
      className={isHighlight ? "text-primary" : "text-foreground"}
    >
      {word}{" "}
    </motion.span>
  )
}

import type { MotionValue } from "framer-motion"

export function ScrollReveal() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  })

  const words = useMemo(() => SCROLL_REVEAL_TEXT.split(" "), [])
  const highlightWords = useMemo(
    () => new Set(["extraordinary", "uncover", "meant", "to", "become"]),
    []
  )

  return (
    <section ref={ref} className="py-16 md:py-24 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-2xl sm:text-3xl md:text-4xl font-display tracking-[-1px] leading-[1.15] text-center">
          {words.map((word, i) => (
            <Word
              key={`${word}-${i}`}
              word={word}
              index={i}
              total={words.length}
              scrollYProgress={scrollYProgress}
              isHighlight={highlightWords.has(word.replace(/[^a-zA-Z]/g, ""))}
            />
          ))}
        </p>
      </div>
    </section>
  )
}
