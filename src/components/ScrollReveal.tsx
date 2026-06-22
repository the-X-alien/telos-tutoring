import { useRef, useMemo, Fragment } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SCROLL_REVEAL_TEXT } from "../lib/content"
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
  const overlayOpacity = useTransform(scrollYProgress, [start, end], [1, 0])
  return (
    <span className="inline-grid">
      <span className="col-start-1 row-start-1 text-primary/80">{word}</span>
      <motion.span
        style={{ opacity: overlayOpacity }}
        className="col-start-1 row-start-1 text-foreground"
      >
        {word}
      </motion.span>
    </span>
  )
}

export function ScrollReveal() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  })

  const words = useMemo(() => SCROLL_REVEAL_TEXT.split(" "), [])

  return (
    <section ref={containerRef} className="relative" style={{ height: "600vh" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center px-8 md:px-16 lg:px-28">
        <div className="max-w-[900px]">
          <p className="text-2xl sm:text-3xl md:text-4xl font-display tracking-[-1px] leading-[1.15] text-center">
            {words.map((word, i) => (
              <Fragment key={`${word}-${i}`}>
                <RevealWord
                  word={word}
                  index={i}
                  total={words.length}
                  scrollYProgress={scrollYProgress}
                />
                {" "}
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
