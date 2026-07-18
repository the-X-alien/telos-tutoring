import { motion } from "framer-motion"
import { PHILOSOPHY } from "../lib/content"
import { fadeUp, scaleIn } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"

function SessionIllustration() {
  return (
    <div className="w-full telos-surface p-6 rounded-2xl border border-telos-fg/8">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-3 h-3 rounded-full bg-telos-accent/20" />
        <div className="w-3 h-3 rounded-full bg-telos-accent/15" />
        <div className="w-3 h-3 rounded-full bg-telos-accent/10" />
      </div>

      <div className="space-y-3">
        <div className="telos-sticky telos-sticky-rot1 p-4 text-base leading-snug">
          Every student has a telos — a purpose they're growing toward.
        </div>

        <div className="flex gap-3">
          <div className="flex-1 telos-sticky telos-sticky-rot2 p-4 text-sm leading-snug">
            What's yours?
          </div>
          <div className="flex-1 telos-sticky telos-sticky-rot3 p-4 text-sm leading-snug">
            Not sure yet — but I'm finding out.
          </div>
        </div>

        <div className="bg-telos-bg rounded-xl p-4 border border-dashed border-telos-fg/10">
          <p className="text-xs font-mono text-telos-muted mb-2">// telos.js</p>
          <p className="text-sm font-mono text-telos-fg/70">
            <span className="text-telos-accent">while</span> (student.alive) {"{"}<br />
            &nbsp;&nbsp;student.grow();<br />
            &nbsp;&nbsp;student.discoverPurpose();<br />
            {"}"}
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 telos-sticky telos-sticky-rot1 p-3 text-sm">
            <span className="text-telos-accent font-semibold">Goal:</span> Growth
          </div>
          <div className="flex-1 telos-sticky telos-sticky-rot2 p-3 text-sm">
            <span className="text-telos-marker font-semibold telos-marker">Method:</span> Curiosity
          </div>
        </div>
      </div>
    </div>
  )
}

export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 md:py-28 px-8 md:px-16 lg:px-28 telos-graph-section">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel text={PHILOSOPHY.label} />

          <AccentHeading
            text={PHILOSOPHY.heading}
            className="text-3xl md:text-4xl lg:text-5xl tracking-[-1.5px]"
          />

          <div className="text-telos-muted text-base md:text-lg leading-relaxed mt-8 space-y-6 font-body">
            {PHILOSOPHY.body.map((paragraph, i) => (
              <motion.p key={i} {...fadeUp(0.2 + i * 0.1)}>
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div {...fadeUp(0.4)} className="border-l-4 border-telos-accent pl-6 mt-10">
            <p className="text-telos-fg text-lg md:text-xl font-display italic leading-relaxed">
              &ldquo;{PHILOSOPHY.quote}&rdquo;
            </p>
            <p className="text-telos-accent text-sm mt-3 not-italic font-body font-medium">
              {PHILOSOPHY.quoteAttribution}
            </p>
          </motion.div>
        </div>

        <motion.div {...scaleIn(0.2)}>
          <SessionIllustration />
        </motion.div>
      </div>
    </section>
  )
}