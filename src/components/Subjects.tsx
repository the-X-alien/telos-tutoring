import {
  Compass,
  FlaskConical,
  BookOpen,
  Landmark,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { SUBJECTS } from "../lib/content"
import { fadeUp, staggerContainer, staggerChild } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"
import { LiquidGlassCard } from "./ui/LiquidGlassCard"

const iconMap: Record<string, LucideIcon> = {
  Compass,
  FlaskConical,
  BookOpen,
  Landmark,
}

export function Subjects() {
  return (
    <section id="subjects" className="py-32 md:py-44 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <SectionLabel text={SUBJECTS.label} />
          <AccentHeading
            text={SUBJECTS.heading}
            className="text-4xl md:text-5xl lg:text-6xl tracking-[-1.5px]"
          />
          <motion.p
            {...fadeUp(0.2)}
            className="text-muted-foreground text-base md:text-lg mt-8 leading-relaxed max-w-2xl"
          >
            {SUBJECTS.subtitle}
          </motion.p>
        </div>

        <motion.div
          {...staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16"
        >
          {SUBJECTS.items.map((subject) => {
            const Icon = iconMap[subject.icon]
            return (
              <motion.div key={subject.title} {...staggerChild}>
                <LiquidGlassCard className="p-8 md:p-10 h-full flex flex-col group">
                  {Icon && (
                    <Icon className="w-10 h-10 text-primary mb-6" />
                  )}
                  <h3 className="text-xl font-display text-foreground mb-4">
                    {subject.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                    {subject.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {subject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </LiquidGlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
