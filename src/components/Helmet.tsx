import { useEffect } from "react"

interface HelmetProps {
  title: string
  description?: string
}

export function Helmet({ title, description }: HelmetProps) {
  useEffect(() => {
    const prev = document.title
    document.title = title
    return () => { document.title = prev }
  }, [title])

  useEffect(() => {
    if (!description) return
    const el = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta")
      m.name = "description"
      document.head.appendChild(m)
      return m
    })()
    const prev = el.getAttribute("content")
    el.setAttribute("content", description)
    return () => { if (prev) el.setAttribute("content", prev) }
  }, [description])

  return null
}
