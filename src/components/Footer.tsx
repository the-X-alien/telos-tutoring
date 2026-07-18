import { Mail, Globe } from "lucide-react"
import { LINKS } from "../lib/constants"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="telos-pagefoot px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div>
            <a href="#home" className="telos-logo">
              <div className="telos-logo-mark">T</div>
              <span className="telos-logo-text">Telos</span>
              <span className="telos-logo-sub hidden sm:inline" style={{ color: "#c4932a" }}>Tutoring</span>
            </a>
            <p className="text-telos-muted text-sm mt-3 font-body">
              Every student has a purpose.
            </p>
            <p className="text-telos-muted/60 text-xs mt-2 leading-relaxed max-w-[250px] font-body">
              A free peer tutoring nonprofit serving K-8 students in the Bay
              Area. Founded by students at Milpitas High School.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[2px] text-telos-muted mb-5 font-body font-semibold">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
{["Home", "Philosophy", "Subjects", "How It Works", "Team", "Sponsors", "Donate", "Join Us"].map(
                (link) => {
                  const slug = link.toLowerCase().replace(/\s+/g, "-")
                  const href = link === "Home" ? "/" : link === "Sponsors" || link === "Donate" ? `/${slug}` : `/#${slug}`
                  return (
                    <a
                      key={link}
                      href={href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-body"
                    >
                      {link}
                    </a>
                  )
                }
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[2px] text-telos-muted mb-5 font-body font-semibold">
              Get Involved
            </h4>
            <div className="flex flex-col gap-2">
              <a
                href={LINKS.studentForm}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-telos-muted hover:text-telos-fg transition-colors duration-300 font-body"
              >
                Sign Up for Tutoring
              </a>
              <a
                href={LINKS.tutorForm}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-telos-muted hover:text-telos-fg transition-colors duration-300 font-body"
              >
                Become a Tutor
              </a>
              <a
                href={LINKS.email}
                className="text-sm text-telos-muted hover:text-telos-fg transition-colors duration-300 font-body"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[2px] text-telos-muted mb-5 font-body font-semibold">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="telos-surface w-10 h-10 rounded-full flex items-center justify-center hover:border-telos-accent/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Globe className="w-4 h-4 text-telos-muted" />
              </a>
              <a
                href={LINKS.email}
                className="telos-surface w-10 h-10 rounded-full flex items-center justify-center hover:border-telos-accent/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-telos-muted" />
              </a>
            </div>
            <p className="text-telos-muted text-xs mt-4 font-body">
              hello@telost.org / telostutoring@outlook.com
            </p>
            <p className="text-telos-muted/50 text-xs mt-1 font-body">
              Milpitas, California
            </p>
          </div>
        </div>

        <div className="border-t border-telos-fg/8 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-telos-muted/50 text-xs font-body">
            &copy; {year} Telos Tutoring. All rights reserved.
          </p>
          <p className="text-telos-muted/30 text-xs font-body">
            made with {"<3"} by{" "}
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-telos-muted/50 hover:text-telos-fg transition-colors"
            >
              the-X-alien
            </a>{" "}
            ({" "}
            <a
              href={LINKS.linkedinDhiaan}
              target="_blank"
              rel="noopener noreferrer"
              className="text-telos-muted/50 hover:text-telos-fg transition-colors"
            >
              Dhiaan Dave
            </a>{" "}
            )
          </p>
          <p className="text-telos-muted/50 text-xs font-body">
            <a href="/privacy" className="hover:text-telos-fg transition-colors">Privacy Policy</a> &middot;{" "}
            <a href="/terms" className="hover:text-telos-fg transition-colors">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  )
}