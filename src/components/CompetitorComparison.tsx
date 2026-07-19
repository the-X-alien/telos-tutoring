import { motion } from "framer-motion"
import { SectionLabel } from "./ui/SectionLabel"
import { AccentHeading } from "./ui/AccentHeading"

type CheckState = "yes" | "no" | "limited" | "paid"

interface CompetitorRow {
  feature: string
  telos: CheckState
  rsm: CheckState
  aops: CheckState
  mathnasium: CheckState
  kumon: CheckState
  khanAcademy: CheckState
  ck12: CheckState
  stellar: CheckState
}

const ROWS: CompetitorRow[] = [
  { feature: "Completely Free", telos: "yes", rsm: "no", aops: "paid", mathnasium: "no", kumon: "no", khanAcademy: "yes", ck12: "yes", stellar: "paid" },
  { feature: "1-on-1 Tutoring", telos: "yes", rsm: "yes", aops: "paid", mathnasium: "yes", kumon: "yes", khanAcademy: "no", ck12: "no", stellar: "yes" },
  { feature: "AI-Powered", telos: "yes", rsm: "no", aops: "no", mathnasium: "no", kumon: "no", khanAcademy: "yes", ck12: "paid", stellar: "yes" },
  { feature: "Available 24/7", telos: "yes", rsm: "no", aops: "limited", mathnasium: "no", kumon: "no", khanAcademy: "yes", ck12: "yes", stellar: "limited" },
  { feature: "Adapts to Student", telos: "yes", rsm: "limited", aops: "limited", mathnasium: "yes", kumon: "limited", khanAcademy: "limited", ck12: "limited", stellar: "yes" },
  { feature: "K–12 Coverage", telos: "yes", rsm: "yes", aops: "limited", mathnasium: "limited", kumon: "limited", khanAcademy: "yes", ck12: "yes", stellar: "yes" },
  { feature: "Homework Help", telos: "yes", rsm: "limited", aops: "no", mathnasium: "limited", kumon: "no", khanAcademy: "limited", ck12: "yes", stellar: "limited" },
  { feature: "Voice Conversations", telos: "yes", rsm: "no", aops: "no", mathnasium: "no", kumon: "no", khanAcademy: "no", ck12: "no", stellar: "paid" },
  { feature: "No Commitment", telos: "yes", rsm: "no", aops: "yes", mathnasium: "no", kumon: "no", khanAcademy: "yes", ck12: "yes", stellar: "limited" },
]

const LABELS: Record<string, string> = {
  telos: "Telos",
  rsm: "RSM",
  aops: "AoPS",
  mathnasium: "Mathnasium",
  kumon: "Kumon",
  khanAcademy: "Khan Academy",
  ck12: "CK-12",
  stellar: "Stellar",
}

const COLUMNS = Object.keys(LABELS)

function CheckIcon({ state }: { state: CheckState }) {
  if (state === "yes") {
    return (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15">
        <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
    )
  }
  if (state === "no") {
    return (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-500/10">
        <svg className="w-3 h-3 text-red-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    )
  }
  if (state === "paid") {
    return <span className="text-[10px] font-semibold text-amber-400 font-body">$</span>
  }
  return (
    <span className="text-[10px] font-medium text-telos-muted/50 font-body">~</span>
  )
}

function ComparisonTable({ showTelos = true }: { showTelos?: boolean }) {
  const cols = showTelos ? COLUMNS : COLUMNS.filter((c) => c !== "telos")

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left py-3 pr-4 text-telos-muted font-medium text-xs tracking-[1px] uppercase font-body sticky left-0 bg-background z-10">
              Feature
            </th>
            {cols.map((key) => (
              <th
                key={key}
                className={`py-3 px-3 text-center font-display text-sm whitespace-nowrap ${
                  key === "telos" ? "text-telos-accent" : "text-telos-fg/60"
                }`}
              >
                {LABELS[key]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr
              key={row.feature}
              className={`border-t border-telos-fg/5 transition-colors ${
                i % 2 === 0 ? "bg-telos-fg/[0.015]" : ""
              } hover:bg-telos-fg/[0.03]`}
            >
              <td className="py-3 pr-4 text-telos-fg text-sm font-body sticky left-0 bg-[inherit]">
                {row.feature}
              </td>
              {cols.map((key) => {
                const val = row[key as keyof CompetitorRow] as CheckState
                return (
                  <td
                    key={key}
                    className={`py-3 px-3 text-center ${
                      key === "telos" ? "bg-telos-accent/[0.03]" : ""
                    }`}
                  >
                    <div className="flex justify-center">
                      <CheckIcon state={val} />
                    </div>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CompetitorComparison() {
  return (
    <section className="py-20 md:py-28 px-8 md:px-16 lg:px-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <SectionLabel text="Compare" />
          <AccentHeading
            text="Telos vs *everyone* else"
            className="text-3xl md:text-4xl lg:text-5xl tracking-[-1.5px]"
          />
          <p className="text-telos-muted text-base md:text-lg mt-6 leading-relaxed font-body max-w-2xl mx-auto">
            No other platform matches Telos on price, availability, and personalization. See for yourself.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="telos-surface rounded-2xl border border-telos-fg/5 p-4 md:p-6"
        >
          <ComparisonTable />
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-5 mt-6 text-xs text-telos-muted/50 font-body">
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-emerald-500/15">
              <svg className="w-2 h-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Yes
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-red-500/10">
              <svg className="w-2 h-2 text-red-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
            No
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[10px] font-semibold text-amber-400 font-body">$</span>
            Paid add-on
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[10px] font-medium text-telos-muted/50 font-body">~</span>
            Limited
          </span>
        </div>
      </div>
    </section>
  )
}
