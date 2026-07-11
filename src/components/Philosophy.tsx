import { motion } from "framer-motion"
import { VideoOff, PenLine, MessageSquare, ScreenShare } from "lucide-react"
import { PHILOSOPHY } from "../lib/content"
import { fadeUp, scaleIn } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"

function SessionRoomAnimation() {
  return (
    <div className="w-full aspect-[4/3] max-w-[520px] mx-auto rounded-2xl overflow-hidden border border-border/20 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] liquid-glass">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/15">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-500"
          />
          <span className="text-xs font-medium text-foreground">Live Session</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <VideoOff size={12} />
          <span>Camera off</span>
          <span className="text-primary font-mono">12:34</span>
        </div>
      </div>

      <div className="flex gap-3 p-3">
        {/* Whiteboard */}
        <div className="relative flex-1 rounded-xl bg-background/70 border border-border/15 overflow-hidden" style={{ backgroundImage: "linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)", backgroundSize: "22px 22px" }}>
          <div className="absolute top-2 left-3 flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <PenLine size={11} className="text-primary" />
            <span>Whiteboard</span>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 font-mono">
            <span className="text-foreground text-lg md:text-xl">2x + 5 = 13</span>
            <span className="text-muted-foreground text-sm">2x = 8</span>
            <span className="text-primary text-lg md:text-xl font-semibold">x = 4</span>
          </div>
          <motion.div
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            className="absolute left-6 bottom-5 w-10 h-10 border-2 border-primary/50 rounded-full"
            style={{ rotate: -20 }}
          />
        </div>

        {/* Participant column */}
        <div className="flex flex-col gap-3 w-24">
          <div className="rounded-xl bg-primary/10 border border-primary/20 p-2 flex flex-col items-center justify-center gap-1.5">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-xs">
              AI
            </div>
            <span className="text-[10px] text-foreground font-medium">Coach Mike</span>
            <div className="flex items-end gap-[2px] h-3">
              {[1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  animate={{ height: [3, 10, 3] }}
                  transition={{ duration: 1 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[2px] rounded-full bg-primary/50"
                />
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-background/70 border border-border/15 p-2 flex flex-col items-center justify-center gap-1.5">
            <div className="w-9 h-9 rounded-full bg-muted-foreground/15 flex items-center justify-center text-base">
              &#x1f9d1;&#x200d;&#x1f393;
            </div>
            <span className="text-[10px] text-muted-foreground">Sarah</span>
          </div>
        </div>
      </div>

      {/* Bottom chat + screen share */}
      <div className="flex items-center gap-2 px-3 pb-3">
        <div className="flex items-center gap-1.5 liquid-glass rounded-full px-2.5 py-1.5 text-[10px] text-muted-foreground">
          <ScreenShare size={11} className="text-primary" />
          <span>Sharing screen</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex-1 flex items-center gap-1.5 liquid-glass rounded-full px-3 py-1.5"
        >
          <MessageSquare size={11} className="text-primary shrink-0" />
          <span className="text-[10px] text-muted-foreground truncate">
            Nice! Now plug x = 4 back in to check.
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export function Philosophy() {
  return (
    <section id="philosophy" className="py-16 md:py-24 px-8 md:px-16 lg:px-28">
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

        <motion.div {...scaleIn(0.2)}>
          <SessionRoomAnimation />
        </motion.div>
      </div>
    </section>
  )
}
