const BASE = "https://royalexcasino.com.pk";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

type ArticleSchemaProps = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  author?: string;
};

export default function ArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image = `${BASE}/royal-x-casino-logo.webp`,
  author = "Royal X Casino",
}: ArticleSchemaProps) {
  const fullUrl = url.startsWith("http") ? url : `${BASE}${url}`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    author: { "@type": "Organization", name: author, url: BASE },
    publisher: {
      "@type": "Organization",
      name: "Royal X Casino",
      logo: { "@type": "ImageObject", url: `${BASE}/royal-x-casino-logo.webp` },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { "@type": "WebPage", "@id": fullUrl },
    inLanguage: "en-US",
  };

  return (
    <div suppressHydrationWarning style={{ display: "contents" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(article) }}
      />
    </div>
  );
}
