const BASE = "https://royalexcasino.com.pk";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export type HowToStep = { name: string; text: string };

type BlogPostSchemaProps = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  breadcrumbOnly?: boolean;
  /** Optional: Add HowTo schema for step-by-step guides. AI assistants (Google AI, ChatGPT, Perplexity) parse this. */
  howToSteps?: HowToStep[];
};

export default function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  image = `${BASE}/royal-x-casino-logo.webp`,
  breadcrumbOnly = false,
  howToSteps,
}: BlogPostSchemaProps) {
  const url = `${BASE}/blog/${slug}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    author: { "@type": "Organization", name: "Royal X Casino", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "Royal X Casino",
      logo: { "@type": "ImageObject", url: `${BASE}/royal-x-casino-logo.webp` },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-US",
  };

  const howTo =
    howToSteps && howToSteps.length > 0
      ? {
          "@context": "https://schema.org" as const,
          "@type": "HowTo" as const,
          name: title,
          description,
          url,
          image,
          totalTime: "PT5M",
          step: howToSteps.map((s, i) => ({
            "@type": "HowToStep" as const,
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
        }
      : null;

  return (
    <div suppressHydrationWarning style={{ display: "contents" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumb) }}
      />
      {!breadcrumbOnly && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
        />
      )}
      {howTo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(howTo) }}
        />
      )}
    </div>
  );
}
