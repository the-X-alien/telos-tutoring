export const fadeUp = (delay: number = 0) =>
  ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }) as const

export const fadeIn = (delay: number = 0) =>
  ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  }) as const

export const scaleIn = (delay: number = 0) =>
  ({
    initial: { opacity: 0, scale: 0.92 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }) as const

export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.12 },
  },
  viewport: { once: true, margin: "-100px" },
}

export const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}
