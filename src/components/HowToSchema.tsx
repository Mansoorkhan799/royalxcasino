const BASE = "https://royalexcasino.com.pk";

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export type HowToStepInput = {
  name: string;
  text: string;
};

type HowToSchemaProps = {
  name: string;
  description: string;
  steps: HowToStepInput[];
  image?: string;
  url?: string;
};

export default function HowToSchema({
  name,
  description,
  steps,
  image = `${BASE}/royal-x-casino-logo.webp`,
  url,
}: HowToSchemaProps) {
  const pageUrl = url ? (url.startsWith("http") ? url : `${BASE}${url}`) : undefined;
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    image,
    ...(pageUrl && { url: pageUrl }),
    step: steps.map((s) => ({
      "@type": "HowToStep" as const,
      name: s.name,
      text: s.text,
    })),
    publisher: {
      "@type": "Organization",
      name: "Royal X Casino",
      logo: { "@type": "ImageObject", url: `${BASE}/royal-x-casino-logo.webp` },
    },
    inLanguage: "en-US",
  };

  return (
    <div suppressHydrationWarning style={{ display: "contents" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(howTo) }}
      />
    </div>
  );
}
