import { motion } from "framer-motion"
import { PHILOSOPHY } from "../lib/content"
import { fadeUp, scaleIn } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 md:py-44 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <SectionLabel text={PHILOSOPHY.label} />

          <AccentHeading
            text={PHILOSOPHY.heading}
            className="text-4xl md:text-5xl lg:text-6xl tracking-[-1.5px]"
          />

          <div className="text-muted-foreground text-base md:text-lg leading-relaxed mt-8 space-y-6">
            {PHILOSOPHY.body.map((paragraph, i) => (
              <motion.p key={i} {...fadeUp(0.2 + i * 0.1)}>
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div {...fadeUp(0.4)} className="border-l-2 border-primary pl-6 mt-10">
            <p className="text-foreground text-lg md:text-xl font-display italic leading-relaxed">
              &ldquo;{PHILOSOPHY.quote}&rdquo;
            </p>
            <p className="text-primary text-sm mt-3 not-italic font-body">
              {PHILOSOPHY.quoteAttribution}
            </p>
          </motion.div>
        </div>

        <motion.div {...scaleIn(0.2)} className="w-full aspect-square max-w-[500px] mx-auto relative">
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
