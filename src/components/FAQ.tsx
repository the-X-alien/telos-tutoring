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
    <div className="border-b border-border/20">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
        aria-expanded={isOpen}
      >
        <span
          className={`text-base md:text-lg font-medium transition-colors duration-300 pr-4 ${
            isOpen ? "text-primary" : "text-foreground"
          }`}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
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
            <p className="text-muted-foreground text-sm md:text-base pb-6 leading-relaxed pr-8">
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
    <section className="py-32 md:py-44 px-8 md:px-16 lg:px-28">
      <div className="max-w-[900px] mx-auto">
        <div className="max-w-3xl">
          <SectionLabel text="QUESTIONS" />
          <AccentHeading
            text="Everything you need to *know.*"
            className="text-4xl md:text-5xl lg:text-6xl tracking-[-1.5px]"
          />
          <motion.p
            {...fadeUp(0.2)}
            className="text-muted-foreground text-base md:text-lg mt-8 leading-relaxed"
          >
            If your question isn't answered here, reach out to us directly
            &mdash; we're always happy to help.
          </motion.p>
        </div>

        <motion.div
          {...staggerContainer}
          className="mt-16"
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
