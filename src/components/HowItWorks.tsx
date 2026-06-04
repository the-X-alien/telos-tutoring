import { motion } from "framer-motion"
import { HOW_IT_WORKS } from "../lib/content"
import { fadeUp } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 md:py-44 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <SectionLabel text={HOW_IT_WORKS.label} />
          <AccentHeading
            text={HOW_IT_WORKS.heading}
            className="text-4xl md:text-5xl lg:text-6xl tracking-[-1.5px]"
          />
          <motion.p
            {...fadeUp(0.2)}
            className="text-muted-foreground text-base md:text-lg mt-8 leading-relaxed max-w-2xl"
          >
            {HOW_IT_WORKS.subtitle}
          </motion.p>
        </div>

        <div className="relative mt-20 md:mt-28">
          <div className="absolute left-[29px] md:left-1/2 top-0 bottom-0 w-px bg-border/30 md:-translate-x-px" />

          <div className="space-y-16 md:space-y-24">
            {HOW_IT_WORKS.steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={step.number}
                  {...fadeUp(0.1 * i)}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:flex md:w-1/2 justify-end">
                    {isLeft ? (
                      <div className="max-w-md">
                        <span className="text-7xl md:text-8xl font-display text-primary/20 leading-none block mb-4">
                          {step.number}
                        </span>
                        <h3 className="text-2xl font-display text-foreground mb-4">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full liquid-glass flex items-center justify-center">
                      <span className="text-primary font-display text-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="md:hidden flex-1">
                    <h3 className="text-2xl font-display text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="hidden md:flex md:w-1/2">
                    {!isLeft ? (
                      <div className="max-w-md">
                        <span className="text-7xl md:text-8xl font-display text-primary/20 leading-none block mb-4">
                          {step.number}
                        </span>
                        <h3 className="text-2xl font-display text-foreground mb-4">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
