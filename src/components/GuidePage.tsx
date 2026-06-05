import { useParams, Link } from "react-router-dom"
import { ALL_PAGES, CATEGORIES } from "../lib/seo-data"
import { GuideLayout } from "./GuideLayout"

function SchemaMarkup({ page, slug }: { page: import("../lib/seo-data").SEOPage; slug: string }) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": page.schemaType,
    headline: page.h1,
    description: page.metaDescription,
    url: `https://telostutoring.org/guide/${slug}`,
    datePublished: "2026-06-04",
    dateModified: "2026-06-04",
    author: {
      "@type": "Organization",
      name: "Telos Tutoring",
      url: "https://telostutoring.org",
    },
    publisher: {
      "@type": "Organization",
      name: "Telos Tutoring",
      logo: { "@type": "ImageObject", url: "https://telostutoring.org/favicon.svg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://telostutoring.org/guide/${slug}` },
  }

  if (page.faqs && page.faqs.length > 0) {
    schema.mainEntity = page.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

export function GuidePage() {
  const { slug } = useParams<{ slug: string }>()
  const page = slug ? ALL_PAGES[slug] : undefined
  if (!page || !slug) {
    return (
      <GuideLayout title="Page Not Found" metaDescription="The page you're looking for doesn't exist.">
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-display text-foreground mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            The guide page you're looking for doesn't exist.
          </p>
          <Link
            to="/guide"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Browse All Guides
          </Link>
        </div>
      </GuideLayout>
    )
  }

  const relatedPages = page.relatedSlugs
    .filter((s) => ALL_PAGES[s])
    .slice(0, 6)
    .map((s) => ALL_PAGES[s])

  const catInfo = CATEGORIES.find((c) => c.slug === page.category)

  return (
    <GuideLayout title={page.title} metaDescription={page.metaDescription}>
      <SchemaMarkup page={page} slug={slug} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/guide" className="hover:text-primary transition-colors">Guides</Link>
          <span>/</span>
          {catInfo && (
            <>
              <Link to={`/guide/category/${catInfo.slug}`} className="hover:text-primary transition-colors">
                {catInfo.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-foreground truncate max-w-[200px]">{page.h1}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-6">
          {page.h1}
        </h1>

        {catInfo && (
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-8">
            {catInfo.name}
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          {page.sections.map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-display text-foreground mt-12 mb-6">
                {section.heading}
              </h2>
              <div
                className="text-muted-foreground leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: section.body }}
              />
            </div>
          ))}

          {page.faqs && page.faqs.length > 0 && (
            <div className="mt-16 border-t border-white/10 pt-12">
              <h2 className="text-2xl sm:text-3xl font-display text-foreground mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {page.faqs.map((faq, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {page.schemaType === "HowTo" && page.sections.length > 0 && (
            <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h2 className="text-xl font-display text-foreground mb-4">Need One-on-One Help?</h2>
              <p className="text-muted-foreground mb-6">
                Follow this guide step by step, or get personalized support from a Telos Tutoring peer tutor. We
                serve K-8 students in the Milpitas area completely free.
              </p>
              <a
                href="https://forms.gle/ePeNu2Pzx2zfa6Ur7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get a Free Tutor
              </a>
            </div>
          )}
        </div>

        {relatedPages.length > 0 && (
          <div className="mt-20 border-t border-white/10 pt-12">
            <h2 className="text-2xl font-display text-foreground mb-8">Related Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPages.map((p) => (
                <Link
                  key={p.slug}
                  to={`/guide/${p.slug}`}
                  className="bg-white/5 hover:bg-white/10 rounded-xl p-5 transition-colors group"
                >
                  <div className="text-xs text-primary mb-2">{CATEGORIES.find((c) => c.slug === p.category)?.name || p.category}</div>
                  <h3 className="text-foreground font-medium group-hover:text-primary transition-colors line-clamp-2">
                    {p.h1}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </GuideLayout>
  )
}

export function GuideIndex() {
  return (
    <GuideLayout title="Free Tutoring Guides – Milpitas, CA" metaDescription="Browse our complete library of free tutoring guides for MUSD students and parents in Milpitas, California.">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-4">
          Free Tutoring Guides & Resources
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mb-12">
          Everything you need to know about math acceleration, free peer tutoring, test prep, and academic
          support across Milpitas Unified School District.
        </p>

        {CATEGORIES.map((cat) => {
          const catPages = Object.values(ALL_PAGES).filter((p) => p.category === cat.slug)
          return (
            <div key={cat.slug} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-display text-foreground">{cat.name}</h2>
                  <p className="text-muted-foreground text-sm mt-1">{cat.description}</p>
                </div>
                <Link
                  to={`/guide/category/${cat.slug}`}
                  className="text-primary text-sm hover:underline whitespace-nowrap"
                >
                  View all &rarr;
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catPages.slice(0, 6).map((p) => (
                  <Link
                    key={p.slug}
                    to={`/guide/${p.slug}`}
                    className="bg-white/5 hover:bg-white/10 rounded-xl p-5 transition-colors group"
                  >
                    <div className="text-xs text-primary mb-2 capitalize">{p.contentType}</div>
                    <h3 className="text-foreground font-medium group-hover:text-primary transition-colors line-clamp-2 text-sm">
                      {p.h1}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-2 line-clamp-2">{p.metaDescription}</p>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </GuideLayout>
  )
}

export function CategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const catInfo = CATEGORIES.find((c) => c.slug === categorySlug)
  const catPages = Object.values(ALL_PAGES).filter((p) => p.category === categorySlug)

  if (!catInfo) {
    return (
      <GuideLayout title="Category Not Found" metaDescription="">
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-display text-foreground mb-4">Category Not Found</h1>
          <Link to="/guide" className="text-primary hover:underline">Browse all guides</Link>
        </div>
      </GuideLayout>
    )
  }

  return (
    <GuideLayout title={`${catInfo.name} – Free Tutoring Guides`} metaDescription={catInfo.description}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/guide" className="hover:text-primary transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-foreground">{catInfo.name}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-display text-foreground mb-4">{catInfo.name}</h1>
        <p className="text-muted-foreground max-w-2xl mb-12">{catInfo.description}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catPages.map((p) => (
            <Link
              key={p.slug}
              to={`/guide/${p.slug}`}
              className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors group"
            >
              <div className="text-xs text-primary mb-2 capitalize">{p.contentType}</div>
              <h2 className="text-foreground font-medium group-hover:text-primary transition-colors line-clamp-2 mb-2">
                {p.h1}
              </h2>
              <p className="text-muted-foreground text-sm line-clamp-3">{p.metaDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </GuideLayout>
  )
}
