import { motion } from "framer-motion"
import { fadeUp } from "../../lib/animations"
import { cn } from "../../lib/utils"

interface SectionLabelProps {
  text: string
  gold?: boolean
  delay?: number
}

export function SectionLabel({ text, gold = true, delay = 0 }: SectionLabelProps) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className={cn(
        "text-xs tracking-[3px] uppercase mb-6 font-body",
        gold ? "text-primary" : "text-muted-foreground"
      )}
    >
      {text}
    </motion.div>
  )
}
