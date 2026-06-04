import { motion } from "framer-motion"
import { STATS } from "../lib/content"
import { fadeUp, staggerContainer, staggerChild } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"
import { AnimatedCounter } from "./ui/AnimatedCounter"

export function Stats() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel text={STATS.label} />
          <AccentHeading
            text={STATS.heading}
            className="text-4xl md:text-5xl lg:text-6xl tracking-[-1.5px]"
          />
        </div>

        <motion.div
          {...staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mt-16 md:mt-20"
        >
          {STATS.items.map((stat) => (
            <motion.div key={stat.label} {...staggerChild}>
              <AnimatedCounter
                target={stat.number}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-3xl mx-auto text-center mt-16 md:mt-20 pt-10 border-t border-border/20">
          <motion.blockquote {...fadeUp(0)}>
            <p className="text-foreground text-lg md:text-xl font-display italic leading-relaxed">
              &ldquo;{STATS.founderQuote}&rdquo;
            </p>
            <p className="text-primary text-sm mt-4 not-italic font-body">
              {STATS.founderAttribution}
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
