import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"

interface Review {
  text: string
  name: string
  childAge: string
  formerService: string
}

const REVIEWS: Review[] = [
  { text: "My son used to dread math. After switching from Kumon, he actually looks forward to his sessions with Kai. The difference is night and day.", name: "Sarah M.", childAge: "Grade 4", formerService: "Kumon" },
  { text: "We tried Mathnasium for a year — expensive and our daughter plateaued. Telos is free and she's progressing faster than ever.", name: "James L.", childAge: "Grade 6", formerService: "Mathnasium" },
  { text: "AoPS was way too intense for my 7th grader. The problems were discouraging. Kai adapts to her level and builds confidence first.", name: "Priya K.", childAge: "Grade 7", formerService: "AoPS" },
  { text: "Khan Academy videos are great but my son needs someone to actually work through problems with him. Having an AI tutor that talks back is so much better.", name: "David R.", childAge: "Grade 5", formerService: "Khan Academy" },
  { text: "RSM was $400/month and the homework was crushing my 6th grader. Telos is free and actually explains concepts in a way she understands.", name: "Michelle T.", childAge: "Grade 6", formerService: "RSM" },
  { text: "CK-12 is fine for review but it doesn't adapt when my daughter gets stuck. Kai patiently works through each step until she gets it.", name: "Carlos G.", childAge: "Grade 8", formerService: "CK-12" },
  { text: "Flexi was confusing for my 4th grader — the answers felt generic. Kai speaks to her at her level and makes it fun.", name: "Aisha W.", childAge: "Grade 4", formerService: "Flexi" },
  { text: "Stellar's platform kept glitching and sessions would drop mid-lesson. Telos has been rock solid and my daughter's grades have never been better.", name: "Tom N.", childAge: "Grade 7", formerService: "Stellar" },
  { text: "We were paying $300/month for 2 hours a week at a tutoring center. With Telos my son gets unlimited help anytime — and it's free.", name: "Lisa H.", childAge: "Grade 5", formerService: "Tutoring Center" },
  { text: "My daughter was falling behind in pre-algebra. A friend told us about Telos and within two weeks her test scores went from C to A.", name: "Raj P.", childAge: "Grade 8", formerService: "School Tutoring" },
  { text: "I was spending hours helping with homework I didn't understand myself. Kai explains things clearly to both of us.", name: "Jennifer B.", childAge: "Grade 3", formerService: "Self-taught" },
  { text: "The AI on other platforms sounds robotic. Kai actually feels like talking to a real tutor who cares about my son's progress.", name: "Mark S.", childAge: "Grade 6", formerService: "Other AI Tutors" },
  { text: "Kumon worksheets are repetitive and boring. Kai makes learning feel like a conversation, not a chore.", name: "Emily W.", childAge: "Grade 4", formerService: "Kumon" },
  { text: "Mathnasium was great but we couldn't afford 3x/week. With Telos my daughter can get help every single night for free.", name: "Omar H.", childAge: "Grade 5", formerService: "Mathnasium" },
  { text: "AoPS online classes were too impersonal — 30 kids in a Zoom room. Kai is 1-on-1 and meets my son where he is.", name: "Nancy F.", childAge: "Grade 7", formerService: "AoPS" },
  { text: "My son has ADHD and traditional tutoring centers couldn't hold his attention. Kai adapts to his pace and keeps him engaged.", name: "Tracy L.", childAge: "Grade 5", formerService: "Learning Center" },
  { text: "I tried helping my daughter with geometry homework myself but it had been 20 years. Kai saved us both from frustration.", name: "Brian C.", childAge: "Grade 8", formerService: "Parent Help" },
  { text: "We were about to sign up for an expensive SAT prep program when we found Telos. The math foundations here have been incredible.", name: "Diana M.", childAge: "Grade 8", formerService: "SAT Prep" },
  { text: "Other free platforms bombard you with ads. Telos is truly free with nothing to buy — it's amazing for our family.", name: "Samir P.", childAge: "Grade 6", formerService: "Ad-supported Sites" },
  { text: "The one-size-fits-all approach at big tutoring chains left my daughter bored or lost. Kai personalizes every session.", name: "Katherine D.", childAge: "Grade 7", formerService: "Big Tutoring Chain" },
  { text: "I was skeptical about an AI tutor at first, but Kai explains step-by-step better than some human tutors we've had.", name: "Alex R.", childAge: "Grade 4", formerService: "Human Tutors" },
  { text: "My 3rd grader needed help with word problems and nothing on YouTube quite clicked. Kai breaks it down in a way that makes sense to her.", name: "Heather J.", childAge: "Grade 3", formerService: "YouTube" },
  { text: "Flexi kept giving my son the same cookie-cutter explanations. Kai figures out what he doesn't understand and tries a different approach.", name: "Dan W.", childAge: "Grade 6", formerService: "Flexi" },
  { text: "Stellar's pricing kept changing and they had hidden fees. Telos is completely transparent — zero dollars, zero catches.", name: "Rachel K.", childAge: "Grade 5", formerService: "Stellar" },
  { text: "After-school programs at school were cancelled. We needed something reliable and Telos has been a lifesaver for our family.", name: "Marcus T.", childAge: "Grade 4", formerService: "After-school Programs" },
  { text: "My daughter was embarrassed to ask questions in class. With Kai she can ask anything without judgment and her confidence has soared.", name: "Grace L.", childAge: "Grade 7", formerService: "Classroom Only" },
  { text: "RSM's curriculum was too rigid — when my son struggled with a concept they just pushed ahead. Kai slows down when he needs it.", name: "Andrew B.", childAge: "Grade 5", formerService: "RSM" },
  { text: "We tried three different tutoring apps before Telos. Either they were too expensive or the AI was terrible. Kai is a game changer.", name: "Sophia N.", childAge: "Grade 6", formerService: "Other Apps" },
]

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <div className="telos-surface rounded-2xl p-8 md:p-10 border border-telos-fg/5">
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-telos-accent" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="text-telos-fg text-lg md:text-xl leading-relaxed font-display tracking-[-0.01em] mb-6">
          &ldquo;{review.text}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3 text-sm">
          <span className="w-8 h-8 rounded-full bg-telos-accent/20 flex items-center justify-center text-telos-accent font-semibold font-display">
            {review.name[0]}
          </span>
          <div>
            <p className="text-telos-fg font-medium font-body">{review.name}</p>
            <p className="text-telos-muted/70 font-body text-xs">
              {review.childAge} &middot; Formerly: {review.formerService}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function DotButton({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-2 h-2 rounded-full transition-all duration-300 ${
        active
          ? "bg-telos-accent w-6"
          : "bg-telos-fg/20 hover:bg-telos-fg/40"
      }`}
      aria-label="Go to review"
    />
  )
}

export function ReviewCarousel() {
  const [[page, direction], setPage] = useState([0, 0])
  const totalPages = REVIEWS.length

  const goTo = useCallback((index: number) => {
    setPage(([prev]) => {
      const dir = index > prev ? 1 : -1
      return [index, dir]
    })
  }, [])

  const goNext = useCallback(() => {
    setPage(([prev]) => [(prev + 1) % totalPages, 1])
  }, [totalPages])

  useEffect(() => {
    const t = setInterval(goNext, 5500)
    return () => clearInterval(t)
  }, [goNext])

  return (
    <section className="py-20 md:py-28 px-8 md:px-16 lg:px-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <SectionLabel text="Parent Reviews" />
          <AccentHeading
            text="What *families* are saying"
            className="text-3xl md:text-4xl lg:text-5xl tracking-[-1.5px]"
          />
          <p className="text-telos-muted text-base md:text-lg mt-6 leading-relaxed font-body max-w-2xl mx-auto">
            Real parents share how Telos has transformed their child's learning journey.
          </p>
        </div>

        <div className="max-w-2xl mx-auto min-h-[280px] md:min-h-[240px] flex items-center">
          <AnimatePresence mode="popLayout" custom={direction}>
            <ReviewCard key={REVIEWS[page].name} review={REVIEWS[page]} />
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 flex-wrap max-w-xl mx-auto">
          {REVIEWS.map((r, i) => (
            <DotButton key={r.name} active={i === page} onClick={() => goTo(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
