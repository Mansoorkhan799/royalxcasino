import Link from "next/link";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { BLOG_CATEGORIES, BLOG_POSTS, formatPostDate } from "@/lib/blog-posts";
import { SITE_URL } from "@/lib/config";

const TITLE = "Royal X Casino Blog: Guides, Reviews and Game Tips";
const DESCRIPTION =
  "Royal X Casino guides written for Pakistani players: app reviews, safety checks, bonus breakdowns, game tutorials and comparisons with other Teen Patti apps.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    siteName: "Royal X Casino",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/royal-x-casino.webp`,
        width: 1200,
        height: 1200,
        alt: "Royal X Casino app icon: gold logo with a casino chip on a golden casino hall background",
      },
    ],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/royal-x-casino.webp`] },
};

function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

export default function Blog() {
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    isPartOf: { "@type": "WebSite", name: "Royal X Casino", url: SITE_URL },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: BLOG_POSTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(collectionSchema) }} />
      <Breadcrumb
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Royal X Casino Blog</h1>
      <p className="text-gray-300 mb-3 text-lg max-w-3xl">
        {BLOG_POSTS.length} guides for Royal X Casino players in Pakistan: honest reviews, safety and legality checks,
        bonus breakdowns with exact amounts, game tutorials and comparisons with other Teen Patti apps.
      </p>
      <p className="text-gray-400 mb-8 text-sm max-w-3xl">
        Looking for setup help instead? See the{" "}
        <Link href="/royal-x-casino-download" className="text-accent hover:underline">download guide</Link>,{" "}
        <Link href="/how-to-register-royal-x-casino" className="text-accent hover:underline">registration steps</Link>,{" "}
        <Link href="/royal-x-casino-deposit-guide" className="text-accent hover:underline">deposit guide</Link> or{" "}
        <Link href="/royal-x-casino-withdraw-guide" className="text-accent hover:underline">withdrawal guide</Link>.
      </p>

      <nav aria-label="Blog categories" className="flex flex-wrap gap-2 mb-10">
        {BLOG_CATEGORIES.map((c) => (
          <a
            key={c}
            href={`#${c.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            className="px-3 py-1 rounded-full border border-gray-700 text-sm text-gray-300 hover:border-accent hover:text-accent"
          >
            {c}
          </a>
        ))}
      </nav>

      <section className="mb-12">
        <article className="bg-secondary px-8 py-8 rounded-lg border-2 border-[#FFA500]">
          <p className="inline-block bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Featured</p>
          <h2 className="text-2xl font-bold mb-3 text-white">
            <Link href={`/blog/${featured.slug}`} className="hover:text-accent">
              {featured.title}
            </Link>
          </h2>
          <p className="text-gray-300 mb-4">{featured.description}</p>
          <p className="text-sm text-gray-400">
            <time dateTime={featured.datePublished}>{formatPostDate(featured.datePublished)}</time> · {featured.readMinutes} min read
          </p>
        </article>
      </section>

      {BLOG_CATEGORIES.map((category) => {
        const posts = BLOG_POSTS.filter((p) => p.category === category);
        return (
          <section key={category} id={category.toLowerCase().replace(/[^a-z]+/g, "-")} className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-6 text-accent">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-secondary px-6 py-6 rounded-lg border-2 border-gray-700 hover:border-accent transition-colors flex flex-col"
                >
                  <h3 className="text-xl font-bold mb-3 text-white">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-300 mb-4 flex-1">{post.description}</p>
                  <p className="text-sm text-gray-400">
                    <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time> · {post.readMinutes} min read
                  </p>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
