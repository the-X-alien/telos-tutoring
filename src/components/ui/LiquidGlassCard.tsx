import { useRef, useState, useCallback } from "react"
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
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!hover) return
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setTilt({ x: y * -8, y: x * 8 })
    },
    [hover]
  )

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 })
  }, [])

  const MotionTag = Tag === "button" ? motion.button : motion.div

  return (
    <MotionTag
      ref={ref as never}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("liquid-glass rounded-2xl", className)}
      style={{ transformStyle: "preserve-3d" }}
      animate={
        hover
          ? {
              rotateX: tilt.x,
              rotateY: tilt.y,
            }
          : {}
      }
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onClick={onClick}
    >
      <div style={{ transformStyle: "preserve-3d" }} className="relative z-10">
        {children}
      </div>
    </MotionTag>
  )
}
