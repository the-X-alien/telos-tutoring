import { motion } from "framer-motion"
import { Heart, BookOpen, TrendingUp } from "lucide-react"
import { TEAM } from "../lib/content"
import { fadeUp, staggerContainer, staggerChild } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"
import { LiquidGlassCard } from "./ui/LiquidGlassCard"
import { GoldButton } from "./ui/GoldButton"
import { LINKS } from "../lib/constants"

export function Team() {
  return (
    <section id="team" className="py-20 md:py-28 px-8 md:px-16 lg:px-28 telos-graph-section">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <SectionLabel text={TEAM.label} />
          <AccentHeading
            text={TEAM.heading}
            className="text-3xl md:text-4xl lg:text-5xl tracking-[-1.5px]"
          />
          <motion.p
            {...fadeUp(0.2)}
            className="text-telos-muted text-base md:text-lg mt-8 leading-relaxed max-w-2xl font-body"
          >
            {TEAM.subtitle}
          </motion.p>
        </div>

        <motion.div
          {...staggerContainer}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          {TEAM.founders.map((founder) => (
            <motion.div key={founder.name} {...staggerChild}>
              <LiquidGlassCard className="text-center">
                <div className="w-24 h-24 rounded-full bg-telos-accent/10 border-2 border-telos-accent/20 flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-display text-telos-accent font-bold">
                    {founder.initials}
                  </span>
                </div>
                <h3 className="text-2xl font-display text-telos-fg">
                  {founder.name === "Dhiaan Dave" ? (
                    <a
                      href={LINKS.linkedinDhiaan}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-telos-accent transition-colors"
                    >
                      {founder.name}
                    </a>
                  ) : (
                    <a
                      href={LINKS.linkedinNeal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-telos-accent transition-colors"
                    >
                      {founder.name}
                    </a>
                  )}
                </h3>
                <p className="text-telos-accent text-sm mt-1 font-body font-medium">
                  {founder.title}
                </p>
                <p className="text-telos-muted text-sm leading-relaxed mt-4 font-body">
                  {founder.bio}
                </p>
              </LiquidGlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.3)} className="mt-10">
          <LiquidGlassCard className="text-center">
            <h3 className="text-2xl md:text-3xl font-display text-telos-fg">
              {TEAM.recruitment.heading}
            </h3>
            <p className="text-telos-muted text-base max-w-2xl mx-auto mt-5 leading-relaxed font-body">
              {TEAM.recruitment.body}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-7 text-sm text-telos-muted font-body">
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-telos-accent" />
                Curriculum
              </span>
              <span className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-telos-accent" />
                Growth
              </span>
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-telos-accent" />
                Finance
              </span>
            </div>
            <div className="mt-8">
              <GoldButton href={LINKS.tutorForm}>
                {TEAM.recruitment.cta}
              </GoldButton>
            </div>
            <p className="text-telos-muted/50 text-xs mt-4 font-body">
              {TEAM.recruitment.note}
            </p>
          </LiquidGlassCard>
        </motion.div>
      </div>
    </section>
  )
}