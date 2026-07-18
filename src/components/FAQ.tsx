import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FAQ_ITEMS } from "../lib/content"
import { fadeUp, staggerContainer, staggerChild } from "../lib/animations"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-telos-fg/10">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-telos-accent focus-visible:ring-offset-2 focus-visible:ring-offset-telos-bg rounded-sm"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base md:text-lg font-medium transition-colors duration-300 pr-4 font-display ${
            isOpen ? "text-telos-accent" : "text-telos-fg"
          }`}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-telos-muted shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-telos-muted text-sm md:text-base pb-6 leading-relaxed pr-8 font-body">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 px-8 md:px-16 lg:px-28">
      <div className="max-w-[900px] mx-auto">
        <div className="max-w-3xl">
          <SectionLabel text="QUESTIONS" />
          <AccentHeading
            text="Everything you need to *know.*"
            className="text-3xl md:text-4xl lg:text-5xl tracking-[-1.5px]"
          />
          <motion.p
            {...fadeUp(0.2)}
            className="text-telos-muted text-base md:text-lg mt-8 leading-relaxed font-body"
          >
            If your question isn't answered here, reach out to us directly
            &mdash; we're always happy to help.
          </motion.p>
        </div>

        <motion.div
          {...staggerContainer}
          className="mt-12 telos-surface rounded-2xl px-6 md:px-8"
        >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div key={i} {...staggerChild}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}