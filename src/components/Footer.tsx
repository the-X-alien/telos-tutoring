import { Mail, Globe } from "lucide-react"
import { LINKS } from "../lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/20 pt-16 pb-8 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                <span className="text-primary font-display text-sm">T</span>
              </div>
              <span className="text-xl tracking-tight font-display text-foreground">
                Telos
              </span>
              <span className="text-xl tracking-tight font-display text-muted-foreground">
                Tutoring
              </span>
            </a>
            <p className="text-muted-foreground text-sm mt-3">
              Every student has a purpose.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-2 leading-relaxed max-w-[250px]">
              A free peer tutoring nonprofit serving K-8 students in the Bay
              Area. Founded by students at Milpitas High School.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[2px] text-muted-foreground mb-5 font-medium">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {["Home", "Philosophy", "Subjects", "How It Works", "Team", "Join Us"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[2px] text-muted-foreground mb-5 font-medium">
              Get Involved
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={LINKS.studentForm}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Sign Up for Tutoring
              </a>
              <a
                href={LINKS.tutorForm}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Become a Tutor
              </a>
              <a
                href={LINKS.email}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[2px] text-muted-foreground mb-5 font-medium">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:border-primary/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Globe className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href={LINKS.email}
                className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center hover:border-primary/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
            <p className="text-muted-foreground text-xs mt-4">
              telostutoring@outlook.com
            </p>
            <p className="text-muted-foreground/50 text-xs mt-1">
              Milpitas, California
            </p>
          </div>
        </div>

        <div className="border-t border-border/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground/50 text-xs">
            &copy; {year} Telos Tutoring. All rights reserved.
          </p>
          <p className="text-muted-foreground/30 text-xs">
            Built with purpose in Milpitas, CA
          </p>
          <p className="text-muted-foreground/50 text-xs">
            Privacy Policy &middot; Terms
          </p>
        </div>
      </div>
    </footer>
  )
}
