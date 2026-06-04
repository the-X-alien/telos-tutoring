import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useScrollPosition } from "../hooks/useScrollPosition"
import { NAV } from "../lib/content"

export function Navbar() {
  const scrolled = useScrollPosition()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/20"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-8 md:px-16 lg:px-28 py-5 max-w-[1400px] mx-auto w-full">
          <a href="#home" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-primary font-display text-lg">T</span>
            </div>
            <span className="text-2xl tracking-tight font-display text-foreground">
              Telos
            </span>
            <span className="text-2xl tracking-tight font-display text-muted-foreground">
              Tutoring
            </span>
          </a>

          <div className="hidden md:flex items-center gap-5">
            {NAV.links.map((link, i) => (
              <span key={link.label} className="flex items-center gap-5">
                {i > 0 && (
                  <span className="text-muted-foreground/30">&middot;</span>
                )}
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-300 ${
                    link.label === "Home"
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          <a
            href="#join"
            className="hidden md:inline-flex bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-medium gold-glow hover:scale-[1.03] transition-transform duration-200"
          >
            {NAV.cta}
          </a>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-8 text-foreground"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.08 } },
              }}
              className="flex flex-col items-center gap-8"
            >
              {NAV.links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                  className="text-3xl font-display text-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#join"
                onClick={() => setMobileOpen(false)}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                className="mt-4 bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium"
              >
                {NAV.cta}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
