function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export type FaqItem = { q: string; a: string };

/**
 * FAQPage JSON-LD. Pass the SAME array you render visibly so the markup and
 * the page content always match (a Google structured-data requirement).
 */
export default function FaqSchema({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }} />
  );
}
