import { writeFileSync } from "fs"
import { resolve } from "path"

const BASE = "https://telostutoring.org"
const TODAY = new Date().toISOString().split("T")[0]

const staticPages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/guide", priority: "0.9", changefreq: "daily" },
]

const slugs = Object.keys(require("../src/lib/seo-data").ALL_PAGES)
const guidePages = slugs.map((slug) => ({
  loc: `/guide/${slug}`,
  priority: "0.8",
  changefreq: "weekly",
}))

const categorySlugs = require("../src/lib/seo-data").CATEGORIES.map((c: { slug: string }) => c.slug)
const categoryPages = categorySlugs.map((slug: string) => ({
  loc: `/guide/category/${slug}`,
  priority: "0.7",
  changefreq: "weekly",
}))

const allPages = [...staticPages, ...guidePages, ...categoryPages]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map((p) => `  <url>\n    <loc>${BASE}${p.loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`).join("\n")}
</urlset>`

writeFileSync(resolve(__dirname, "../dist/sitemap.xml"), xml, "utf-8")
console.log(`Sitemap generated: ${allPages.length} URLs`)
