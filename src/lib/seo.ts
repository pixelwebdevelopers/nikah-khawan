import { SITE_CONFIG } from "@/config/site";

interface PageSeoParams {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  schemaType?:
    | "Service"
    | "LegalService"
    | "AboutPage"
    | "ContactPage"
    | "FAQPage"
    | "Blog"
    | "CollectionPage"
    | "ImageGallery";
  category?: string;
  faqs?: { q: string; a: string }[];
}

export function buildPageSeo({
  title,
  description,
  path,
  keywords,
  schemaType = "Service",
  category = "Nikah Service",
  faqs,
}: PageSeoParams) {
  const pageUrl = `${SITE_CONFIG.url}${path}`;
  const fullTitle = `${title} | ${SITE_CONFIG.shortName}`;

  const graphList: Record<string, unknown>[] = [
    {
      "@type": schemaType,
      "@id": `${pageUrl}/#service`,
      name: title,
      url: pageUrl,
      description: description,
      provider: {
        "@type": ["LegalService", "LocalBusiness"],
        name: SITE_CONFIG.name,
        telephone: SITE_CONFIG.phoneInt,
        email: SITE_CONFIG.email,
        url: SITE_CONFIG.url,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address,
          addressLocality: "Karachi",
          addressRegion: "Sindh",
          postalCode: "74900",
          addressCountry: "PK",
        },
      },
      areaServed: ["Karachi", "Sindh", "Pakistan", "Worldwide"],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_CONFIG.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: category,
          item: SITE_CONFIG.url,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: pageUrl,
        },
      ],
    },
  ];

  if (faqs && faqs.length > 0) {
    graphList.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });
  }

  const metaList: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: pageUrl },
    { property: "og:image", content: `${SITE_CONFIG.url}/logo.webp` },
    { property: "og:site_name", content: SITE_CONFIG.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${SITE_CONFIG.url}/logo.webp` },
    { name: "geo.region", content: SITE_CONFIG.geo.region },
    { name: "geo.placename", content: SITE_CONFIG.geo.locality },
    { name: "geo.position", content: `${SITE_CONFIG.geo.lat};${SITE_CONFIG.geo.lng}` },
    { name: "ICBM", content: `${SITE_CONFIG.geo.lat}, ${SITE_CONFIG.geo.lng}` },
  ];

  if (keywords) {
    metaList.push({ name: "keywords", content: keywords });
  }

  return {
    meta: metaList,
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graphList,
        }),
      },
    ],
  };
}
