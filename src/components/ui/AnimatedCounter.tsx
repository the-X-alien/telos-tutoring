import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { cn } from "../../lib/utils"

interface AnimatedCounterProps {
  target: number
  suffix?: string
  label: string
  className?: string
}

export function AnimatedCounter({ target, suffix = "", label, className }: AnimatedCounterProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const startTime = performance.now()

    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [inView, target])

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-4xl md:text-5xl lg:text-6xl font-display text-primary tracking-tight leading-none">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-3 font-body">{label}</div>
    </div>
  )
}
