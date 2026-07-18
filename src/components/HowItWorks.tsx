import { motion } from "framer-motion"
import { HOW_IT_WORKS } from "../lib/content"
import { fadeUp } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-8 md:px-16 lg:px-28 telos-graph-section">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl">
          <SectionLabel text={HOW_IT_WORKS.label} />
          <AccentHeading
            text={HOW_IT_WORKS.heading}
            className="text-3xl md:text-4xl lg:text-5xl tracking-[-1.5px]"
          />
          <motion.p
            {...fadeUp(0.2)}
            className="text-telos-muted text-base md:text-lg mt-8 leading-relaxed max-w-2xl font-body"
          >
            {HOW_IT_WORKS.subtitle}
          </motion.p>
        </div>

        <div className="relative mt-12 md:mt-16">
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-telos-fg/10 md:-translate-x-px" />

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
                        <span className="text-5xl md:text-6xl font-display text-telos-accent/15 leading-none block mb-3">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-display text-telos-fg mb-3">
                          {step.title}
                        </h3>
                        <p className="text-telos-muted text-sm leading-relaxed font-body">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full telos-surface flex items-center justify-center shadow-sm border border-telos-fg/8">
                      <span className="text-telos-accent font-display text-base font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="md:hidden flex-1">
                    <span className="text-4xl font-display text-telos-accent/15 leading-none block mb-2">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-display text-telos-fg mb-3">
                      {step.title}
                    </h3>
                    <p className="text-telos-muted text-sm leading-relaxed font-body">
                      {step.description}
                    </p>
                  </div>

                  <div className="hidden md:flex md:w-1/2">
                    {!isLeft ? (
                      <div className="max-w-md">
                        <span className="text-5xl md:text-6xl font-display text-telos-accent/15 leading-none block mb-3">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-display text-telos-fg mb-3">
                          {step.title}
                        </h3>
                        <p className="text-telos-muted text-sm leading-relaxed font-body">
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