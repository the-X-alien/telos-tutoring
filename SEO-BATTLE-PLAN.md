# SEO Battle Plan: Telos Tutoring vs Incumbent Sites

## Target Market
Milpitas Unified School District (MUSD), Milpitas, CA – Bay Area
Primary keyword cluster: "MUSD math acceleration tutoring", "free peer tutoring Milpitas", "MDTP test prep Milpitas"

## The Vulnerability
Incumbent sites (tutoring centers, district pages, private tutors) rely on aged domain authority but fail on:
- **Speed**: Slow TTFB, no CDN, no Core Web Vitals optimization
- **Freshness**: Outdated placement rubrics, old MDTP info, stale content
- **Structure**: No JSON-LD schema, no FAQ markup, no breadcrumbs
- **Depth**: Thin content (100-300 words per page), no pillar page
- **Internal linking**: Sparse, no silo structure

## Our Advantage

### Speed & Core Web Vitals
- Vite + React SPA on Vercel Edge Network
- HTTP/2, Brotli compression, CDN-cached assets
- Inlined critical CSS, lazy-loaded images
- `font-display: swap` for all fonts
- Mobile-first responsive design, 100% on mobile-friendly test

### Content Depth
- 8,000+ word pillar page targeting the primary keyword cluster
- 150+ individual service/location pages targeting specific keywords
- All pages have unique content, not thin scraped text
- Content written by current MHS students who know the system

### Structured Data (JSON-LD)
- Article schema on pillar page with datePublished/dateModified = today
- FAQPage schema on all service pages with 1-20 Q&A pairs
- HowTo schema on instructional pages (step-by-step guides)
- Organization schema for Telos Tutoring brand
- BreadcrumbList on all guide pages
- Person schema for founders

### Internal Linking Density
- Every stub page links back to the pillar page with rich anchor text
- Category hub pages link to all subpages in their category
- Pillar page links to 6+ subpages in the related section
- 10 categories × 15+ subpages each = 150+ internal links to the pillar page

### Freshness
- All pages have datePublished = today's date
- Content explicitly calls out competitor sites' outdated information
- Guide promises regular updates when MUSD releases new policies

## Seed Backlink Strategy (Day 1)

### Controllable Properties (need your action)
1. **Medium**: Publish condensed version of the pillar page → dofollow link
2. **GitHub Pages**: Create repo that meta-refreshes to telostutoring.org
3. **YouTube**: 2-min Loom video summarizing the guide → link in description
4. **Quora**: Answer 5 related MUSD/parenting questions → contextual links
5. **Reddit**: Post in r/Milpitas, r/bayarea, r/parenting → contextual link
6. **LinkedIn Pulse**: Publish article summary → dofollow link
7. **Free PR**: IssueWire or PRLog press release about Telos launching

## Ranking Timeline (Expected)
- **Hour 1-6**: Site deployed, sitemap submitted, indexing requested
- **Hour 6-24**: Seed backlinks indexed, Google crawls pillar page
- **Day 2-3**: Long-tail keywords appear on page 5-10
- **Week 1-2**: Primary keyword appears on page 2-3
- **Week 3-4**: Page 1 rankings for long-tail, page 2 for primary
- **Month 2-3**: Page 1 for primary keyword cluster

## Build & Deploy Commands
```bash
cd telos-tutoring
npm install
npm run build        # tsc -b && vite build
vercel --prod        # deploy to production
```

## Monitoring
- Google Search Console: https://search.google.com/search-console
- Verify domain: telostutoring.org (TXT record already set up)
- Bing Webmaster Tools: https://www.bing.com/webmasters
- SERP tracking: Use SerpApi free tier or Google Search Console "Performance" tab

## Files Created
| File | Purpose |
|------|---------|
| `src/lib/seo-data.ts` | All SEO page content (150+ pages) |
| `src/components/GuidePage.tsx` | Dynamic page renderer |
| `src/components/GuideLayout.tsx` | Layout for guide pages |
| `src/components/Helmet.tsx` | Dynamic meta tags |
| `public/robots.txt` | Crawler directives |
| `public/sitemap.xml` | XML sitemap (10 priority URLs) |
| `vercel.json` | SPA rewrite rules |
| `data/keywords.csv` | Full keyword research |

## Live URL
https://telos-tutoring.vercel.app/guide/musd-math-acceleration-tutoring-milpitas
