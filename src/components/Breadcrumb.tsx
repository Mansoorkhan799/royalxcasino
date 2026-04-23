import Link from "next/link";

const BASE = "https://royalexcasino.com.pk";

export type BreadcrumbItem = {
  name: string;
  url: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

/**
 * Renders both a visible breadcrumb navigation UI and the matching
 * BreadcrumbList JSON-LD schema for SEO. The last item is rendered as
 * plain text (current page) instead of a link.
 */
export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE}${item.url}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`text-sm text-gray-400 mb-6 ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-x-2">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-x-2">
                {isLast ? (
                  <span className="text-gray-300" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.url}
                      className="hover:text-[#FFA500] transition-colors"
                    >
                      {item.name}
                    </Link>
                    <span className="text-gray-500" aria-hidden="true">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
