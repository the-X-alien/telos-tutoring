import { motion } from "framer-motion"
import { fadeUp } from "../../lib/animations"
import { cn } from "../../lib/utils"

interface AccentHeadingProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3"
  delay?: number
}

export function AccentHeading({ text, className, as: Tag = "h2", delay = 0 }: AccentHeadingProps) {
  const parts = text.split(/(\*[^*]+\*)/g)

  return (
    <motion.div {...fadeUp(delay)}>
      <Tag className={cn("font-display tracking-tight leading-[0.95]", className)}>
        {parts.map((part, i) => {
          if (part.startsWith("*") && part.endsWith("*")) {
            const inner = part.slice(1, -1)
            return (
              <em key={i} className="not-italic text-primary font-display italic">
                {inner}
              </em>
            )
          }
          return <span key={i}>{part}</span>
        })}
      </Tag>
    </motion.div>
  )
}
