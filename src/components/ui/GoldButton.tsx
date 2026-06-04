import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface GoldButtonProps {
  children: string
  href?: string
  className?: string
  variant?: "primary" | "secondary"
}

export function GoldButton({ children, href, className, variant = "primary" }: GoldButtonProps) {
  const base =
    "rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-200 inline-flex items-center justify-center"

  const styles = cn(
    base,
    variant === "primary"
      ? "bg-primary text-primary-foreground gold-glow"
      : "liquid-glass text-foreground border border-primary/30 hover:border-primary/60",
    className
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={styles}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
