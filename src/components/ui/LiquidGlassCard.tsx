import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import type { ReactNode } from "react"

interface LiquidGlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  as?: "div" | "button"
  onClick?: () => void
}

export function LiquidGlassCard({
  children,
  className,
  hover = true,
  as: Tag = "div",
  onClick,
}: LiquidGlassCardProps) {
  const MotionTag = Tag === "button" ? motion.button : motion.div

  return (
    <MotionTag
      className={cn("liquid-glass rounded-2xl", className)}
      {...(hover
        ? {
            whileHover: { y: -4 },
            transition: { duration: 0.3, ease: "easeOut" },
          }
        : {})}
      onClick={onClick}
    >
      {children}
    </MotionTag>
  )
}
