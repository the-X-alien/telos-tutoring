import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { NAV } from "../lib/content"

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  const isHome = label === "Home"
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 font-body font-medium ${
        isHome
          ? "bg-telos-accent text-white"
          : "text-white hover:text-white/80"
      }`}
    >
      {label}
    </a>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 telos-nav px-6 py-3">
        <div className="telos-container flex items-center justify-between">
          <a href="#home" className="telos-logo">
            <div className="telos-logo-mark">T</div>
            <span className="telos-logo-text">Telos</span>
            <span className="telos-logo-sub hidden sm:inline">Tutoring</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV.links.map((link) => (
              <NavLink key={link.label} label={link.label} href={link.href} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://kairos.telost.org"
              target="_blank"
              rel="noopener noreferrer"
              className="telos-btn-secondary"
            >
              Learn
            </a>
            <a href="#join" className="telos-btn-primary">
              {NAV.cta}
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-telos-fg hover:bg-black/5 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-4 right-4 z-40 md:hidden telos-surface rounded-2xl p-5 flex flex-col gap-1"
          >
            {NAV.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-body font-medium transition-colors ${
                  link.label === "Home"
                    ? "bg-telos-accent/10 text-telos-accent"
                    : "text-white hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-black/8">
              <a
                href="https://kairos.telost.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center telos-btn-secondary text-sm py-2.5"
              >
                Learn
              </a>
              <a
                href="#join"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center telos-btn-primary text-sm py-2.5"
              >
                {NAV.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}