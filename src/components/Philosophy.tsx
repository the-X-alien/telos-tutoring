import { motion } from "framer-motion"
import { PHILOSOPHY } from "../lib/content"
import { fadeUp } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"

function VideoCallAnimation() {
  return (
    <div className="w-full aspect-[4/3] max-w-[500px] mx-auto relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/[0.02] border border-border/20">
      {/* Main tutor tile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" as const }}
        className="absolute inset-4 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
      >
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[10px] text-muted-foreground font-medium">AI Tutor</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="liquid-glass rounded-lg px-3 py-2 text-xs text-muted-foreground">
            So let&apos;s solve for x. What happens when we subtract 5 from both sides?
          </div>
        </div>
        {/* Animated waveform dots */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end gap-[3px] h-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ height: 4 }}
              animate={{ height: [4, 16 + i * 4, 4] }}
              transition={{ duration: 1.2 + i * 0.2, repeat: Infinity, ease: "easeInOut" as const }}
              className="w-[3px] rounded-full bg-primary/40"
            />
          ))}
        </div>
      </motion.div>

      {/* Small participant tiles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" as const }}
        className="absolute top-3 right-3 w-20 h-14 rounded-lg overflow-hidden border border-border/20 bg-background/80 backdrop-blur-sm"
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-lg">&#x1f9d1;</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" as const }}
        className="absolute bottom-16 right-3 w-20 h-14 rounded-lg overflow-hidden border border-border/20 bg-background/80 backdrop-blur-sm"
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-lg">&#x1f9d1;&#x200d;&#x1f393;</span>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-background/60 backdrop-blur-sm border-t border-border/20 flex items-center justify-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-green-500"
        />
        <span className="text-[10px] text-muted-foreground">Session active</span>
      </div>
    </div>
  )
}

export function Philosophy() {
  return (
    <section id="about" className="py-16 md:py-24 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
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

          <motion.div {...fadeUp(0.4)} className="border-l-2 border-primary pl-6 mt-10">
            <p className="text-foreground text-lg md:text-xl font-display italic leading-relaxed">
              &ldquo;{PHILOSOPHY.quote}&rdquo;
            </p>
            <p className="text-primary text-sm mt-3 not-italic font-body">
              {PHILOSOPHY.quoteAttribution}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <VideoCallAnimation />
        </motion.div>
      </div>
    </section>
  )
}
