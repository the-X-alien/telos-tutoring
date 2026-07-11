import { Heart } from "lucide-react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { Helmet } from "./Helmet"

export function DonatePage() {
  return (
    <>
      <Helmet
        title="Donate – Telos Tutoring"
        description="Support Telos Tutoring's free AI-powered tutoring. Your tax-deductible donation keeps Telos free for every student."
      />
      <Navbar />
      <main className="min-h-screen pt-28 pb-20 px-8 md:px-16 lg:px-28">
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto">
            <Heart size={28} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display text-foreground tracking-[-1.5px]">
            Support Telos
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Your tax-deductible donation helps keep Telos free for every student.
            Telos Tutoring is fiscally sponsored by a registered 501(c)(3), so
            every gift goes straight to infrastructure and access — never
            salaries or ads.
          </p>
        </div>

        <div className="liquid-glass rounded-2xl p-8 max-w-[800px] mx-auto mt-12 text-sm text-muted-foreground space-y-3">
          <p>
            Telos Tutoring is fiscally sponsored by an official 501(c)(3)
            nonprofit. All donations are tax-deductible to the fullest extent of
            US law.
          </p>
          <p>
            Our registered EIN is <strong>81-2908499</strong>.
          </p>
        </div>

        <div className="liquid-glass rounded-2xl p-2 max-w-[800px] mx-auto mt-12 overflow-hidden">
          <iframe
            src="https://hcb.hackclub.com/donations/start/telos"
            title="Donate to Telos Tutoring via HCB"
            className="w-full border-0 rounded-xl"
            style={{ height: "640px" }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>

        <div className="max-w-[800px] mx-auto space-y-4 text-sm text-muted-foreground mt-12">
          <h2 className="text-foreground font-medium text-base">Why donate?</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Every dollar goes directly to infrastructure, not salaries or marketing.</li>
            <li>Telos is entirely student-run and volunteer-built.</li>
            <li>
              We will never charge students or show ads — donations keep that
              promise.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
