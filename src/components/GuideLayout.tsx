import { Link } from "react-router-dom"
import { Helmet } from "./Helmet"

interface GuideLayoutProps {
  title: string
  metaDescription: string
  children: React.ReactNode
}

export function GuideLayout({ title, metaDescription, children }: GuideLayoutProps) {
  return (
    <>
      <Helmet title={`${title} – Telos Tutoring`} description={metaDescription} />
      <div className="bg-background text-foreground min-h-screen font-body">
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/" className="text-lg font-display text-foreground hover:text-primary transition-colors">
              Telos Tutoring
            </Link>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/guide" className="text-primary font-medium">
                Guides
              </Link>
              <a
                href="https://forms.gle/ePeNu2Pzx2zfa6Ur7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-white/10 mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-display text-foreground mb-3">Telos Tutoring</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Free peer tutoring for K-8 students in the Bay Area. Founded by students at Milpitas High
                  School.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Quick Links</h4>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                  <Link to="/guide" className="hover:text-primary transition-colors">All Guides</Link>
                  <a href="https://forms.gle/ePeNu2Pzx2zfa6Ur7" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    Sign Up for Tutoring
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">Popular Guides</h4>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <Link to="/guide/musd-math-acceleration-tutoring-milpitas" className="hover:text-primary transition-colors">
                    MUSD Math Acceleration Guide
                  </Link>
                  <Link to="/guide/free-peer-tutoring-milpitas-library" className="hover:text-primary transition-colors">
                    Free Tutoring at Milpitas Library
                  </Link>
                  <Link to="/guide/mathnasium-milpitas-vs-peer-tutoring" className="hover:text-primary transition-colors">
                    Mathnasium vs Peer Tutoring
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Telos Tutoring. Free. Always.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
