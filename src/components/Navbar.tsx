import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { NAV } from "../lib/content"

function NavItem({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  if (href.startsWith("/")) {
    return (
      <Link
        to={href}
        onClick={onClick}
        className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
          label === "Home"
            ? "bg-white/15 text-foreground"
            : "text-muted-foreground/70 hover:text-foreground"
        }`}
      >
        {label}
      </Link>
    )
  }
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
        label === "Home"
          ? "bg-white/15 text-foreground"
          : "text-muted-foreground/70 hover:text-foreground"
      }`}
    >
      {label}
    </a>
  )
}

function NavItemMobile({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  if (href.startsWith("/")) {
    return (
      <Link
        to={href}
        onClick={onClick}
        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm transition-colors ${
          label === "Home"
            ? "bg-white/10 text-foreground"
            : "text-muted-foreground/70 hover:text-foreground"
        }`}
      >
        {label}
      </Link>
    )
  }
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm transition-colors ${
        label === "Home"
          ? "bg-white/10 text-foreground"
          : "text-muted-foreground/70 hover:text-foreground"
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
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-primary font-display text-sm">T</span>
            </div>
            <span className="text-lg tracking-tight font-display text-foreground">
              Telos
            </span>
            <span className="text-lg tracking-tight font-display text-muted-foreground hidden sm:inline">
              Tutoring
            </span>
          </a>

          <div className="hidden md:flex liquid-glass items-center gap-1 rounded-xl px-2 py-2">
            {NAV.links.map((link) => (
              <NavItem key={link.label} label={link.label} href={link.href} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#philosophy"
              className="liquid-glass text-muted-foreground text-sm font-medium px-4 py-2 rounded-full hover:bg-white/5 transition-colors"
            >
              Learn
            </a>
            <a
              href="#join"
              className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              {NAV.cta}
            </a>
          </div>

          <button
            className="md:hidden liquid-glass text-foreground p-2 rounded-lg"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-4 right-4 z-40 md:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1"
          >
            {NAV.links.map((link) => (
              <NavItemMobile
                key={link.label}
                label={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              />
            ))}
            <div className="flex gap-2 mt-2 pt-3 border-t border-white/10">
              <a
                href="#philosophy"
                className="flex-1 text-center liquid-glass text-muted-foreground text-sm font-medium px-4 py-2.5 rounded-full"
              >
                Learn
              </a>
              <a
                href="#join"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 rounded-full"
              >
                {NAV.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}