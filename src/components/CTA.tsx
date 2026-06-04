import { motion } from "framer-motion"
import { GraduationCap, Heart } from "lucide-react"
import { CTA_SECTION } from "../lib/content"
import { fadeUp } from "../lib/animations"
import { LINKS } from "../lib/constants"

export function CTA() {
  return (
    <section
      id="join"
      className="relative py-40 md:py-52 px-8 md:px-16 lg:px-28 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full border border-primary/10 animate-slow-spin" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[300px] h-[300px] rounded-full border border-primary/10 animate-slow-spin"
          style={{ animationDirection: "reverse" }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.p
          {...fadeUp(0)}
          className="text-xs tracking-[3px] uppercase text-primary mb-6 text-center font-body"
        >
          {CTA_SECTION.label}
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-display text-center tracking-[-2.5px] leading-[0.95]"
          style={{ transitionDuration: "1s" }}
        >
          Find your{" "}
          <em className="not-italic text-primary font-display italic">
            telos.
          </em>
        </motion.h2>

        <motion.p
          {...fadeUp(0.15)}
          className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mt-6 leading-relaxed"
        >
          {CTA_SECTION.subtitle}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mt-16">
          <motion.div
            {...fadeUp(0.25)}
            className="liquid-glass rounded-2xl p-8 md:p-10 text-center group"
          >
            <GraduationCap className="w-10 h-10 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-display text-foreground mb-4">
              {CTA_SECTION.studentCard.heading}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {CTA_SECTION.studentCard.description}
            </p>
            <a
              href={LINKS.studentForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm font-medium gold-glow hover:scale-[1.03] transition-transform duration-200"
            >
              {CTA_SECTION.studentCard.cta}
            </a>
            <p className="text-muted-foreground/50 text-xs mt-3">
              {CTA_SECTION.studentCard.note}
            </p>
          </motion.div>

          <motion.div
            {...fadeUp(0.35)}
            className="liquid-glass rounded-2xl p-8 md:p-10 text-center group"
          >
            <Heart className="w-10 h-10 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-display text-foreground mb-4">
              {CTA_SECTION.tutorCard.heading}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {CTA_SECTION.tutorCard.description}
            </p>
            <a
              href={LINKS.tutorForm}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block liquid-glass rounded-full px-8 py-3.5 text-sm font-medium text-foreground border border-primary/30 hover:border-primary/60 transition-colors duration-200 hover:scale-[1.03] transition-transform duration-200"
            >
              {CTA_SECTION.tutorCard.cta}
            </a>
            <p className="text-muted-foreground/50 text-xs mt-3">
              {CTA_SECTION.tutorCard.note}
            </p>
          </motion.div>
        </div>

        <motion.p
          {...fadeUp(0.45)}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          {CTA_SECTION.trustLine}
        </motion.p>
      </div>
    </section>
  )
}
