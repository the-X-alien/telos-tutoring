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
    "rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-200 inline-flex items-center justify-center font-body"

  const styles = cn(
    base,
    variant === "primary"
      ? "bg-telos-accent text-white hover:bg-telos-accent/90"
      : "telos-surface text-telos-fg border border-telos-fg/10 hover:border-telos-accent/50 hover:text-telos-accent",
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