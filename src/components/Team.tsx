import { motion } from "framer-motion"
import { Heart, Clock, Trophy } from "lucide-react"
import { TEAM } from "../lib/content"
import { fadeUp, staggerContainer, staggerChild } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"
import { LiquidGlassCard } from "./ui/LiquidGlassCard"
import { GoldButton } from "./ui/GoldButton"
import { LINKS } from "../lib/constants"

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <SectionLabel text={TEAM.label} />
          <AccentHeading
            text={TEAM.heading}
            className="text-4xl md:text-5xl lg:text-6xl tracking-[-1.5px]"
          />
          <motion.p
            {...fadeUp(0.2)}
            className="text-muted-foreground text-base md:text-lg mt-8 leading-relaxed max-w-2xl"
          >
            {TEAM.subtitle}
          </motion.p>
        </div>

        <motion.div
          {...staggerContainer}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {TEAM.founders.map((founder) => (
            <motion.div key={founder.name} {...staggerChild}>
              <LiquidGlassCard className="p-8 md:p-10 text-center">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-display text-primary">
                    {founder.initials}
                  </span>
                </div>
                <h3 className="text-2xl font-display text-foreground">
                  {founder.name}
                </h3>
                <p className="text-primary text-sm mt-1 font-body">
                  {founder.title}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-5">
                  {founder.bio}
                </p>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.3)} className="mt-12">
          <LiquidGlassCard className="p-10 md:p-14 text-center" hover={false}>
            <h3 className="text-3xl md:text-4xl font-display text-foreground">
              {TEAM.recruitment.heading}
            </h3>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto mt-6 leading-relaxed">
              {TEAM.recruitment.body}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Service Hours
              </span>
              <span className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                Leadership
              </span>
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                Mentorship
              </span>
            </div>
            <div className="mt-10">
              <GoldButton href={LINKS.tutorForm}>
                {TEAM.recruitment.cta}
              </GoldButton>
            </div>
            <p className="text-muted-foreground/50 text-xs mt-4">
              {TEAM.recruitment.note}
            </p>
          </LiquidGlassCard>
        </motion.div>
      </div>
    </section>
  )
}
