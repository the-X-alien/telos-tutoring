import { useEffect, useState } from "react"
import { Cookie } from "lucide-react"

const CONSENT_KEY = "telos-consent"

export function ConsentBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) setShow(true)
    } catch {
      setShow(true)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "1")
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] md:left-auto md:right-6 md:max-w-[440px]">
      <div className="liquid-glass rounded-2xl p-5 border border-white/10 shadow-2xl">
        <div className="flex items-start gap-3">
          <Cookie size={20} className="text-primary mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to improve your experience. By continuing, you consent to
            our{" "}
            <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>,{" "}
            <a href="/terms" className="text-primary hover:underline">Terms</a>, and{" "}
            <a href="/ip" className="text-primary hover:underline">Intellectual Property &amp; Rights</a>.
          </p>
        </div>
        <button
          onClick={accept}
          className="mt-4 w-full bg-primary text-primary-foreground rounded-full py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
