import { motion } from "framer-motion"
import { HOW_IT_WORKS } from "../lib/content"
import { fadeUp } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <SectionLabel text={HOW_IT_WORKS.label} />
          <AccentHeading
            text={HOW_IT_WORKS.heading}
            className="text-3xl md:text-4xl lg:text-5xl tracking-[-1.5px]"
          />
          <motion.p
            {...fadeUp(0.2)}
            className="text-muted-foreground text-base md:text-lg mt-8 leading-relaxed max-w-2xl"
          >
            {HOW_IT_WORKS.subtitle}
          </motion.p>
        </div>

        <div className="relative mt-12 md:mt-16">
          <div className="absolute left-[29px] md:left-1/2 top-0 bottom-0 w-px bg-border/30 md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
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
                        <span className="text-5xl md:text-6xl font-display text-primary/20 leading-none block mb-3">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-display text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center">
                      <span className="text-primary font-display text-base">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="md:hidden flex-1">
                    <h3 className="text-xl font-display text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="hidden md:flex md:w-1/2">
                    {!isLeft ? (
                      <div className="max-w-md">
                        <span className="text-5xl md:text-6xl font-display text-primary/20 leading-none block mb-3">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-display text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
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
