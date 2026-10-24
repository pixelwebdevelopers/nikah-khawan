import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  BookOpen,
  Check,
  Clock,
  FileSignature,
  Globe,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ScrollText,
  ShieldCheck,
  Star,
  Users,
  Video,
  Facebook,
  Instagram,
  Youtube,
  Menu,
  X,
  Award,
  Scale,
  FileCheck2,
  BadgeCheck,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  HeartHandshake,
  AlertCircle,
  Building2,
  ExternalLink,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logo from "@/assets/logo.webp";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import LoadingScreen from "@/components/LoadingScreen";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const PHONE = "03032924813";
const PHONE_INT = "+923032924813";
const WA = "https://wa.me/923032924813";
const EMAIL = "info.nikahkhawan@gmail.com";
const ADDRESS =
  "Office No. 1, Plot No. 694, Block 31/A, Near Rasheedia Masjid, Allah Wala Town, Korangi Crossing, Karachi";
const MAP = "https://maps.app.goo.gl/vFbmoenHbvw3v2wy8?g_st=ac";
const SITE_URL = "https://www.nikahkhawan.com";

const SOCIAL = [
  { icon: Facebook, href: "https://www.facebook.com/share/1M39MCJL71/", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/nikah_khawan_service_karachi?vrfl=MWdjbm1kYmtvYzYycA==",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@nikahkhawannikahservicekarachi?si=yEm7Mvcg2rXNUndm",
    label: "YouTube",
  },
];
const OLX = "https://www.olx.com.pk/en/companies/6431";

// Structured Schema Markup for Google SEO
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LegalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Nikah Khawan & Registered Nikah Registrar Karachi",
      alternateName: "نکاح خواں اور نکاح رجسٹرار کراچی",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.webp`,
      image: `${SITE_URL}/logo.webp`,
      description:
        "Government-registered Nikah Registrar and qualified Nikah Khawan in Karachi. Home, masjid and banquet hall Nikah ceremonies, court marriage, NADRA computerized registration, and online Nikah worldwide.",
      telephone: PHONE_INT,
      email: EMAIL,
      priceRange: "₨₨",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Office No. 1, Plot No. 694, Block 31/A, Near Rasheedia Masjid, Allah Wala Town, Korangi Crossing",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        postalCode: "74900",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.8219,
        longitude: 67.1352,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: [
        "https://www.facebook.com/share/1M39MCJL71/",
        "https://www.instagram.com/nikah_khawan_service_karachi",
        "https://youtube.com/@nikahkhawannikahservicekarachi",
        OLX,
      ],
      areaServed: [
        "Karachi",
        "Clifton",
        "DHA Karachi",
        "Gulshan-e-Iqbal",
        "North Nazimabad",
        "Korangi",
        "Malir",
        "Bahria Town Karachi",
        "Worldwide",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Which documents are required for Nikah in Karachi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Valid CNIC or Smart Card copies of the bride, groom, two adult Muslim male witnesses, and the Wali (guardian), along with passport-size photographs of the couple.",
          },
        },
        {
          "@type": "Question",
          name: "Is an online Nikah valid under Islamic Shariah and Pakistani law?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. When conducted with proper Ijab-o-Qubool (offer and acceptance), verified witnesses, and a legitimate Wakeel (representative), an online Nikah is 100% Shariah-compliant and officially registrable with NADRA.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide Nikah services at homes and banquet halls?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our registered Nikah Registrar travels to any location in Karachi including DHA, Clifton, Gulshan-e-Iqbal, North Nazimabad, Malir, Bahria Town, and all other areas.",
          },
        },
        {
          "@type": "Question",
          name: "Can you arrange a Nikah on short notice or in an emergency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our Nikah Khawan team is available 24/7. We can reach your venue across Karachi within 45 to 60 minutes for urgent ceremonies.",
          },
        },
        {
          "@type": "Question",
          name: "How is the official Nikah Nama registered with the Union Council?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The government-issued Nikah Nama form is signed and stamped at your ceremony. We then submit it to the relevant Union Council to secure your official registration and facilitate your Computerized NADRA Marriage Registration Certificate (MRC).",
          },
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Nikah Khawan Karachi | Registered Nikah Registrar Karachi & Online Nikah" },
      {
        name: "description",
        content:
          "Top-rated Government Registered Nikah Registrar & Qualified Nikah Khawan in Karachi. 24/7 doorstep service for home, banquet hall, mosque, court marriage, NADRA certificate & online Nikah worldwide.",
      },
      {
        name: "keywords",
        content:
          "Best Nikah Khawan in Karachi, Nikah Khawan Karachi, Nikah Registrar Karachi, Registered Nikah Registrar, Court Marriage Karachi, Online Nikah Worldwide, Nikah at Home Karachi, Nikah in Hall Karachi, Nikah in Mosque Karachi, NADRA Marriage Certificate Karachi, Marriage Registrar Karachi, Nikah Nama Registration Karachi",
      },
      { property: "og:title", content: "Nikah Khawan Karachi | Govt Registered Nikah Registrar" },
      {
        property: "og:description",
        content:
          "Respectful, Shariah-compliant Nikah ceremonies with official government registration across Karachi and online worldwide. 24/7 availability.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/logo.webp` },
      { property: "og:site_name", content: "Nikah Khawan & Nikah Registrar Karachi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nikah Khawan Karachi | Govt Registered Nikah Registrar" },
      {
        name: "twitter:description",
        content: "Official Nikah Khawan & Registrar services in Karachi & Online Worldwide.",
      },
      { name: "twitter:image", content: `${SITE_URL}/logo.webp` },
      { name: "geo.region", content: "PK-SD" },
      { name: "geo.placename", content: "Karachi" },
      { name: "geo.position", content: "24.8219;67.1352" },
      { name: "ICBM", content: "24.8219, 67.1352" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schemaData),
      },
    ],
  }),
  component: Index,
});

const nav = [
  ["Services", "#services"],
  ["Packages", "#packages"],
  ["Why Us", "#why"],
  ["Process", "#process"],
  ["Coverage", "#coverage"],
  ["Gallery", "#gallery"],
  ["Testimonials", "#testimonials"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-gold/70 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-champagne hover:shadow-lg active:translate-y-0";

const btnGold =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-7 py-3.5 text-sm font-bold text-primary shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0";

const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-gold/70 bg-background/80 backdrop-blur px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-200 hover:bg-champagne/25 hover:border-gold active:translate-y-0";

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
      {children}
      <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}

function Heading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-sm md:text-base text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-gold/30 selection:text-primary">
      {/* 0. Cinematic Loading Screen / Intro (Plays once per session) */}
      <LoadingScreen />

      {/* JSON-LD Schema for direct DOM guarantee */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Unified Site Header with Dropdowns and Mobile Drawer */}
      <SiteHeader />

      {/* Hero Section */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-b from-pearl via-background to-pearl/60 py-16 md:py-24"
      >
        {/* Subtle Ambient Decorative Glows */}
        <div className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-96 w-96 rounded-full bg-purple/5 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:gap-12 px-5 lg:grid-cols-2">
          {/* Hero Visual Column (Appears FIRST on mobile, RIGHT on desktop) */}
          <div className="relative order-1 lg:order-2">
            {/* Ornamental Gold Offset Frame */}
            <div className="absolute -inset-3 rounded-[2.2rem] border-2 border-gold/30 -rotate-1 hidden sm:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/40 shadow-soft">
              <img
                src={hero}
                alt="Nikah Khawan performing official Nikah ceremony in Karachi"
                width={1280}
                height={1536}
                className="aspect-[4/3] sm:aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            {/* Floating Badge 1: Online Nikah Worldwide */}
            <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-4 rounded-2xl border border-gold/40 bg-background/95 p-3 sm:p-4 shadow-soft backdrop-blur md:-left-8 animate-float">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-lavender border border-gold/30">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-primary">
                    Online Nikah Worldwide
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">
                    UK · USA · UAE · Canada · Europe
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge 2: NADRA & Govt Certified */}
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 rounded-2xl border border-gold/40 bg-background/95 p-2.5 sm:p-3.5 shadow-soft backdrop-blur flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-gold" />
              <div className="text-[11px] sm:text-xs font-bold text-primary">
                Govt. Registered & NADRA Verified
              </div>
            </div>
          </div>

          {/* Hero Content Column (Appears SECOND on mobile, LEFT on desktop) */}
          <div className="order-2 lg:order-1 pt-4 lg:pt-0">
            {/* Islamic Calligraphy */}
            <p
              className="mb-4 font-urdu text-2xl md:text-3xl leading-loose text-gold text-center lg:text-left"
              dir="rtl"
              lang="ur"
            >
              بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِیْمِ
            </p>

            {/* Official Registration Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/90 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>Government Registered Nikah Registrar · Karachi</span>
            </div>

            {/* Keyword-Rich High SEO H1 Heading */}
            <h1 className="text-3xl font-semibold leading-[1.15] sm:text-4xl md:text-5xl lg:text-5xl">
              Official <span className="gold-gradient-text">Nikah Khawan</span> & Nikah Service
              Karachi
            </h1>

            <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              Solemnizing sacred matrimonial bonds with dignity, legal perfection and Sunnah
              barakah. Available for home, masjid, and banquet ceremonies across all Karachi areas —
              plus legitimate Online Nikah for couples worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap gap-3.5 sm:gap-4 items-center">
              <a href={WA} target="_blank" rel="noreferrer" className={btnGold}>
                <MessageCircle className="h-4 w-4" />
                <span>Book on WhatsApp</span>
              </a>
              <a href={`tel:${PHONE}`} className={btnOutline}>
                <Phone className="h-4 w-4 text-gold" />
                <span>Call {PHONE}</span>
              </a>
            </div>

            {/* Fast Stats with Luxury Cards */}
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-4 border-t border-gold/20 pt-6 sm:pt-8">
              {[
                ["10+", "Years of Trust", "Serving families across Karachi"],
                ["5,000+", "Nikahs Performed", "100% Shariah compliant"],
                ["24/7", "Immediate Dispatch", "Short notice & urgent Nikah"],
              ].map(([num, label, desc]) => (
                <div key={label} className="text-left">
                  <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                    {num}
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-gold mt-1">{label}</div>
                  <div className="text-[10px] sm:text-[11px] text-muted-foreground hidden sm:block mt-0.5">
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Official Compliance Infinite Marquee Strip */}
      <section className="relative overflow-hidden border-y border-gold/30 bg-primary py-3.5 md:py-4 text-primary-foreground select-none">
        {/* Left & Right Smooth Edge Fade Vignettes */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 md:w-24 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 md:w-24 bg-gradient-to-l from-primary to-transparent" />

        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex shrink-0 items-center gap-6 sm:gap-8 md:gap-12 text-xs sm:text-sm font-semibold tracking-wide">
            {/* First Half */}
            {[
              { icon: ShieldCheck, text: "Govt. Registered Registrar" },
              { icon: FileCheck2, text: "Official Nikah Nama & Seal" },
              { icon: Award, text: "NADRA MRC Assistance" },
              { icon: Clock, text: "24/7 Express Service" },
              { icon: ShieldCheck, text: "Govt. Registered Registrar" },
              { icon: FileCheck2, text: "Official Nikah Nama & Seal" },
              { icon: Award, text: "NADRA MRC Assistance" },
              { icon: Clock, text: "24/7 Express Service" },
            ].map(({ icon: I, text }, i) => (
              <div key={`item-a-${i}`} className="flex items-center gap-2.5 shrink-0">
                <I className="h-4 w-4 md:h-4.5 md:w-4.5 text-champagne shrink-0" />
                <span className="text-champagne font-semibold">{text}</span>
                <span className="text-gold/50 ml-6 sm:ml-8 md:ml-12">✦</span>
              </div>
            ))}

            {/* Second Half (Exact Duplicate for Seamless Loop at -50% translate) */}
            {[
              { icon: ShieldCheck, text: "Govt. Registered Registrar" },
              { icon: FileCheck2, text: "Official Nikah Nama & Seal" },
              { icon: Award, text: "NADRA MRC Assistance" },
              { icon: Clock, text: "24/7 Express Service" },
              { icon: ShieldCheck, text: "Govt. Registered Registrar" },
              { icon: FileCheck2, text: "Official Nikah Nama & Seal" },
              { icon: Award, text: "NADRA MRC Assistance" },
              { icon: Clock, text: "24/7 Express Service" },
            ].map(({ icon: I, text }, i) => (
              <div key={`item-b-${i}`} className="flex items-center gap-2.5 shrink-0">
                <I className="h-4 w-4 md:h-4.5 md:w-4.5 text-champagne shrink-0" />
                <span className="text-champagne font-semibold">{text}</span>
                <span className="text-gold/50 ml-6 sm:ml-8 md:ml-12">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* NEW: Transparent Service Packages */}
      <Packages />

      {/* Why Choose Us */}
      <Why />

      {/* Step-by-Step Nikah Process */}
      <Process />

      {/* NEW: Karachi Towns Service Coverage Guide */}
      <Coverage />

      {/* NEW: Required Documents Checklist */}
      <DocumentsChecklist />

      {/* NEW: Knowledge & Trust Hub */}
      <KnowledgeHub />

      {/* Gallery */}
      <Gallery />

      {/* Client Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <Faq />

      {/* Contact & Booking Form */}
      <Contact />

      {/* Footer */}
      <SiteFooter />

      {/* Floating 24/7 WhatsApp Quick Button */}
      <FloatingWhatsApp />
    </div>
  );
}

const services = [
  {
    icon: Home,
    t: "Nikah at Home",
    d: "Our qualified Nikah Khawan visits your residence anywhere in Karachi with complete official documents, performing the Sunnah ceremony with warmth and elegance.",
    href: "/nikah-in-home",
  },
  {
    icon: BookOpen,
    t: "Banquet Hall & Marquee",
    d: "Respectful, dignified attendance at banquets, marriage halls, marquees, and wedding venues across Karachi with strictly punctual arrival and legal documentation.",
    href: "/nikah-in-hall",
  },
  {
    icon: Video,
    t: "Online Nikah Worldwide",
    d: "100% Shariah-compliant and legally recognized online Nikah via Zoom or WhatsApp Video for overseas Pakistanis in UK, USA, UAE, Canada, and worldwide.",
    href: "/online-nikah-worldwide",
  },
  {
    icon: Scale,
    t: "Court Marriage Legal Assistance",
    d: "100% confidential and legal court marriage in Karachi backed by qualified High Court advocates, police protection, free will affidavit, and NADRA registration.",
    href: "/court-marriage",
  },
  {
    icon: FileSignature,
    t: "Nikah in Our Office",
    d: "Simple, dignified, and budget-friendly Nikah solemnization directly at our registrar office in Korangi Crossing, Karachi with immediate official copies.",
    href: "/nikah-in-our-office",
  },
  {
    icon: Building2,
    t: "Luxury Hotel Nikah",
    d: "Executive Nikah Registrar service for 4-star and 5-star hotel weddings in Karachi (Mövenpick, PC, Marriott, Avari) with bilingual English and Urdu Khutbah.",
    href: "/nikah-in-hotel",
  },
  {
    icon: ScrollText,
    t: "Nikah in Mosque (Masjid)",
    d: "Revive the sacred Sunnah with a blessed Nikah ceremony in major Masajid across Karachi with official government stamping on-site.",
    href: "/nikah-in-mosque",
  },
  {
    icon: ShieldCheck,
    t: "Nikah Khawan Service Karachi",
    d: "Full-service Nikah solemnization, legal documentation, and Union Council marriage registration across all Karachi towns with 24/7 emergency dispatch.",
    href: "/nikah-khawan-service-karachi",
  },
];

function Services() {
  return (
    <section id="services" className="bg-lavender py-24 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-5">
        <Heading
          eyebrow="Comprehensive Services"
          title="Every Nikah Service Under One Roof"
          sub="From sacred Masnoon Khutbah recitation to official government registration and NADRA certificate issuance."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: I, t, d, href }) => (
            <div
              key={t}
              className="group relative rounded-2xl border border-gold/25 bg-background p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-gold/40 bg-pearl transition-colors group-hover:bg-gold/15">
                  <I className="h-5 w-5 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-primary group-hover:text-gold transition">
                  <Link to={href}>{t}</Link>
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{d}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold/15 flex flex-col gap-2">
                <Link
                  to={href}
                  className="text-xs font-bold text-primary group-hover:text-gold transition flex items-center justify-between"
                >
                  <span>View Details & Guide</span>
                  <ChevronRight className="h-3.5 w-3.5 text-gold" />
                </Link>
                <a
                  href={`${WA}?text=${encodeURIComponent(`Assalam-o-Alaikum, I am inquiring about: ${t}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-semibold text-muted-foreground hover:text-emerald-600 transition flex items-center gap-1"
                >
                  <MessageCircle className="h-3 w-3 text-emerald-500" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// NEW: Transparent Packages Section
function Packages() {
  const packages = [
    {
      title: "Home / Masjid Nikah",
      subtitle: "For family ceremonies at your residence or local masjid",
      badge: "Most Popular",
      href: "/nikah-in-home",
      features: [
        "Qualified Nikah Khawan arrives at your home/masjid",
        "Masnoon Arabic Khutbah & soulful Dua-e-Khair",
        "Official Govt. Nikah Nama signed on the spot",
        "4 Original copies provided to Bride, Groom & Registrar",
        "Witness & Wali documentation verification",
        "Union Council submission guidance",
      ],
      cta: "Book Home Nikah",
    },
    {
      title: "Banquet Hall & Marquee",
      subtitle: "For grand wedding receptions and banquet halls",
      badge: "VIP Service",
      href: "/nikah-in-hall",
      features: [
        "Strictly punctual arrival at your wedding venue",
        "Dignified attire and respectful stage coordination",
        "Official seal and high-grade presentation folder",
        "Covers all Karachi banquet halls & marquees",
        "Family counseling and smooth document signing",
        "Priority Union Council registration assistance",
      ],
      cta: "Book Banquet Nikah",
    },
    {
      title: "Online Nikah Worldwide",
      subtitle: "For overseas Pakistanis living in UK, USA, UAE, Canada, etc.",
      badge: "International",
      href: "/online-nikah-worldwide",
      features: [
        "Live High-Definition Zoom / WhatsApp Video session",
        "Shariah-compliant Wakeel (Proxy) appointment",
        "Full legal verification of overseas ID & passport",
        "NADRA Computerized Marriage Certificate processing",
        "International DHL / FedEx document dispatch",
        "Embassy & immigration compliant documentation",
      ],
      cta: "Book Online Nikah",
    },
    {
      title: "Court Marriage & Legal",
      subtitle: "Confidential legal marriage with complete privacy & protection",
      badge: "100% Confidential",
      href: "/court-marriage",
      features: [
        "Solemnized by certified registrar & advocate high court",
        "Free will affidavit drafting and judicial registration",
        "Protection against unlawful police harassment",
        "Discreet private office or court setting",
        "Official Nikah Nama & NADRA MRC processing",
        "Complete confidentiality guaranteed",
      ],
      cta: "Inquire Court Marriage",
    },
  ];

  return (
    <section id="packages" className="bg-background py-24 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-5">
        <Heading
          eyebrow="Transparent Offerings"
          title="Tailored Nikah Packages"
          sub="Select the package tailored to your ceremony needs. Transparent guidance with zero hidden charges."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="flex flex-col justify-between rounded-3xl border border-gold/30 bg-pearl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl relative"
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-6 rounded-full border border-gold/50 bg-primary px-3 py-0.5 text-[11px] font-bold text-champagne uppercase tracking-wider">
                  {pkg.badge}
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-primary mt-2">
                  <Link to={pkg.href} className="hover:text-gold transition">
                    {pkg.title}
                  </Link>
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed min-h-[36px]">
                  {pkg.subtitle}
                </p>

                <div className="gold-rule my-5" />

                <ul className="space-y-3 text-xs text-primary">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-gold/20 flex flex-col gap-2.5">
                <Link
                  to={pkg.href}
                  className="text-xs font-bold text-center text-primary hover:text-gold transition flex items-center justify-center gap-1"
                >
                  <span>Read Full Guide & Checklist</span>
                  <ChevronRight className="h-3 w-3 text-gold" />
                </Link>
                <a
                  href={`${WA}?text=${encodeURIComponent(`Assalam-o-Alaikum, I want to book the package: ${pkg.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={btnPrimary + " w-full !py-2.5 !text-xs justify-center"}
                >
                  <MessageCircle className="h-3.5 w-3.5 text-champagne" />
                  <span>{pkg.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const points = [
    "Qualified Islamic scholar & respected Nikah Khawan",
    "Government-registered Nikah Registrar with official authority",
    "Meticulously accurate Nikah Nama entries — zero clerical errors",
    "24/7 Availability, including urgent same-day bookings",
    "Overseas Online Nikah specialized service with embassy validity",
    "100% Transparent fees with no hidden costs",
    "Complete confidentiality for private & court marriages",
    "Direct assistance for Computerized NADRA Marriage Certificate",
  ];

  return (
    <section id="why" className="bg-pearl py-24 scroll-mt-12">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.2rem] border-2 border-gold/40 rotate-1 hidden sm:block" />
          <img
            src={g3}
            alt="Nikah Khawan reciting Masnoon Khutbah at Karachi ceremony"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative aspect-square w-full rounded-[1.75rem] object-cover shadow-soft"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-background/90 backdrop-blur p-4 border border-gold/30">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-gold shrink-0" />
              <div>
                <div className="text-sm font-bold text-primary">
                  Over 10 Years of Faithful Service
                </div>
                <div className="text-xs text-muted-foreground">
                  Certified registrar trusted by prominent families across Karachi.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Why Choose Us
          </div>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Trusted by Thousands of Families Across Karachi
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A Nikah is not just a legal contract; it is a sacred Sunnah and the foundation of a new
            family. We perform every ceremony with utmost dignity, religious reverence, and legal
            accuracy — so your family can celebrate with complete peace of mind.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold bg-gold/10">
                  <Check className="h-3.5 w-3.5 text-gold" />
                </span>
                <span className="text-sm font-medium text-primary">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-gold/20 flex flex-wrap gap-4 items-center">
            <a href={WA} target="_blank" rel="noreferrer" className={btnPrimary}>
              <MessageCircle className="h-4 w-4 text-champagne" />
              <span>Contact Us Today</span>
            </a>
            <div className="text-xs text-muted-foreground">
              ⚡ Average response time: Under 5 minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      t: "1. Contact & Booking",
      d: "Call or WhatsApp us with your intended date, venue (home, masjid, hall) or online requirement.",
    },
    {
      t: "2. Document Verification",
      d: "Share CNIC copies of the couple, witnesses and Wali. We verify details before the ceremony.",
    },
    {
      t: "3. Sacred Solemnization",
      d: "Nikah Khawan recites the Masnoon Khutbah, conducts Ijab-o-Qubool, and guides signature signing.",
    },
    {
      t: "4. Official Registration",
      d: "Your Nikah Nama is officially registered with the Union Council and NADRA certificate is prepared.",
    },
  ];

  return (
    <section id="process" className="bg-background py-24 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-5">
        <Heading
          eyebrow="Simple Roadmap"
          title="Four Seamless Steps to Your Blessed Nikah"
          sub="No confusion, no bureaucratic delays. We manage the paperwork while you celebrate."
        />

        <div className="relative grid gap-8 md:grid-cols-4">
          <div className="gold-rule absolute left-[12%] right-[12%] top-8 hidden md:block" />
          {steps.map((s, i) => (
            <div
              key={s.t}
              className="relative text-center rounded-2xl border border-gold/20 bg-pearl p-6 transition hover:shadow-lg"
            >
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-gold bg-background font-display text-2xl font-bold text-primary shadow-soft">
                {i + 1}
              </div>
              <h3 className="mt-6 text-xl font-bold text-primary">{s.t}</h3>
              <p className="mx-auto mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// NEW: Karachi Coverage Section
function Coverage() {
  const areas = [
    "DHA Karachi (Phases 1-8)",
    "Clifton (Blocks 1-9)",
    "Gulshan-e-Iqbal & Gulistan-e-Jauhar",
    "North Nazimabad & Nazimabad",
    "PECHS, Tariq Road & Bahadurabad",
    "Bahria Town Karachi & Scheme 33",
    "Korangi, Landhi & Allah Wala Town",
    "Malir, Cantt & Model Colony",
    "Saddar, Garden & Kharadar",
    "Federal B Area & Gulberg",
    "Karachi Court & Civil Courts",
    "Overseas Worldwide (Online)",
  ];

  return (
    <section id="coverage" className="bg-lavender py-24 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-5">
        <Heading
          eyebrow="Local Availability"
          title="Serving All Areas of Karachi & Worldwide"
          sub="Our registered Nikah Khawans are stationed across the city to reach your venue promptly."
        />

        <div className="rounded-3xl border border-gold/30 bg-background p-8 md:p-12 shadow-soft">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-xl border border-gold/20 bg-pearl p-3 text-xs font-semibold text-primary transition hover:border-gold hover:bg-champagne/20"
              >
                <MapPin className="h-4 w-4 text-gold shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-gold/40 bg-pearl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-gold shrink-0" />
              <div>
                <div className="text-sm font-bold text-primary">Need an Urgent Nikah Today?</div>
                <div className="text-xs text-muted-foreground">
                  Our emergency registrar can reach your Karachi venue within 45–60 minutes.
                </div>
              </div>
            </div>
            <a href={`tel:${PHONE}`} className={btnPrimary + " shrink-0 !py-2.5"}>
              <Phone className="h-4 w-4 text-champagne" />
              <span>Call Emergency Line</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// NEW: Required Documents Checklist
function DocumentsChecklist() {
  const checklist = [
    {
      title: "Groom Requirements",
      items: [
        "Original CNIC / Smart Card copy",
        "2 Passport-size recent photographs",
        "Attested Divorce / Death certificate of previous spouse (if applicable)",
      ],
    },
    {
      title: "Bride Requirements",
      items: [
        "Original CNIC / Smart Card copy",
        "2 Passport-size recent photographs",
        "Valid proof of legal age (18+ as per Sindh Child Marriage Restraint Act)",
      ],
    },
    {
      title: "Witnesses & Wali",
      items: [
        "2 Sane Adult Muslim Male Witnesses with valid CNIC copies",
        "Wali (Father, Brother, or Legal Guardian) CNIC copy",
        "For Online Nikah: Authorized Wakeel with documented consent",
      ],
    },
    {
      title: "Mahr (Haq Meher) Details",
      items: [
        "Agreed amount in PKR or Gold (Mu'ajjal or Ghair Mu'ajjal)",
        "Specified conditions or deferred payment terms clearly stated",
        "Documented in all four copies of the government Nikah Nama",
      ],
    },
  ];

  return (
    <section className="bg-pearl py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Heading
          eyebrow="Preparation Guide"
          title="Required Documents for Nikah"
          sub="Ensure a smooth ceremony by having these necessary documents ready beforehand."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {checklist.map((col) => (
            <div
              key={col.title}
              className="rounded-2xl border border-gold/25 bg-background p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-primary flex items-center gap-2 pb-3 border-b border-gold/20">
                <FileSignature className="h-4 w-4 text-gold" />
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground">
                {col.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KnowledgeHub() {
  const hubs = [
    {
      title: "Educational Blogs & Legal Guides",
      desc: "Complete guides on NADRA marriage certificate issuance, court marriage rights in Pakistan, and Islamic Haq-Mehr rules.",
      href: "/blogs",
      badge: "In-Depth Guides",
    },
    {
      title: "Comprehensive Q&A Knowledge Base",
      desc: "Instant authoritative answers to 15+ common questions regarding witnesses, Wali permissions, age rules, and second marriages.",
      href: "/q-and-a",
      badge: "Instant Clarifications",
    },
    {
      title: "Client Feedback & Testimonials",
      desc: "Heartfelt stories and verified wedding feedback from families across Karachi and overseas couples.",
      href: "/feedback-reviews",
      badge: "Real Experiences",
    },
    {
      title: "Google Maps 5-Star Reviews",
      desc: "Over 100+ unedited public reviews rating our punctuality, religious dignity, and transparent documentation.",
      href: "/google-reviews",
      badge: "5.0 Rated",
    },
    {
      title: "Islamic Scholar Credentials & Photos",
      desc: "Official Shahadat-ul-Aalamia qualifications, government registrar licenses, and real ceremony photo gallery.",
      href: "/nikah-khawan-islamic-scholar-photos",
      badge: "Certified Scholars",
    },
    {
      title: "Nikah Videos & Khutbah Recitations",
      desc: "Watch ceremonial highlights, prophetic Khutbah-e-Nikah recitations, and legal lectures on our YouTube channel.",
      href: "/nikah-videos",
      badge: "Video Highlights",
    },
  ];

  return (
    <section className="bg-lavender py-24 scroll-mt-12">
      <div className="mx-auto max-w-7xl px-5">
        <Heading
          eyebrow="Knowledge & Trust Hub"
          title="Explore Our Comprehensive Marriage Resources"
          sub="Empowering families with authentic Shariah knowledge, legal clarity, and verified customer trust."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub) => (
            <Link
              key={hub.title}
              to={hub.href}
              className="group flex flex-col justify-between rounded-3xl border border-gold/25 bg-background p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-xl"
            >
              <div>
                <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold text-gold border border-gold/30 mb-3">
                  {hub.badge}
                </span>
                <h3 className="text-xl font-bold text-primary group-hover:text-gold transition">
                  {hub.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{hub.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gold/15 flex items-center justify-between text-xs font-bold text-primary group-hover:text-gold transition">
                <span>Explore Resource</span>
                <ChevronRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY_ROW_1 = [
  {
    src: "/images/services/nikah-in-hall-1.jpg",
    alt: "Grand Banquet Hall Nikah Ceremony Karachi",
    title: "Grand Banquet Hall Solemnization",
    location: "DHA Creek Banquet, Karachi",
    badge: "Hall Ceremony",
  },
  {
    src: "/images/services/nikah-in-home-1.jpg",
    alt: "Intimate Home Living Room Nikah Solemnization",
    title: "Intimate Family Living Room Nikah",
    location: "Clifton Block 4, Karachi",
    badge: "Home Ceremony",
  },
  {
    src: "/images/services/nikah-in-mosque-1.jpg",
    alt: "Sunnah Masjid Prayer Hall Nikah Ceremony",
    title: "Sunnah Masjid Prayer Hall Solemnization",
    location: "Bait-ul-Mukarram, Gulshan",
    badge: "Mosque Sunnah",
  },
  {
    src: "/images/services/nikah-in-hotel-1.jpg",
    alt: "5-Star Luxury Ballroom Nikah Setup",
    title: "5-Star Luxury Ballroom Celebration",
    location: "Pearl Continental Hotel, Karachi",
    badge: "5-Star Hotel",
  },
  {
    src: "/images/services/nikah-in-makkah-1.jpg",
    alt: "Umrah Sacred Nikah in Masjid al-Haram Makkah",
    title: "Holy Umrah Pilgrimage Nikah Blessing",
    location: "Masjid al-Haram, Makkah",
    badge: "Holy Makkah",
  },
  {
    src: "/images/services/online-nikah-1.jpg",
    alt: "Live HD Video Conference Online Nikah",
    title: "Worldwide Live Video Solemnization",
    location: "London UK & Karachi Video Live",
    badge: "Online Worldwide",
  },
];

const GALLERY_ROW_2 = [
  {
    src: "/images/services/nikah-in-hall-2.jpg",
    alt: "Official Urdu Nikahnama Registration with Gold Pen",
    title: "Official Government Nikahnama Registry",
    location: "Sindh Local Govt 4-Copy Register",
    badge: "Legal Document",
  },
  {
    src: "/images/services/nikah-in-home-2.jpg",
    alt: "Pakistani Bride Signing Nikahnama at Home",
    title: "Bride Nikahnama Sign-off with Family",
    location: "North Nazimabad, Karachi",
    badge: "Dignified Sign-off",
  },
  {
    src: "/images/services/nikah-in-mosque-2.jpg",
    alt: "Congregational Dua-e-Khair in Mosque",
    title: "Sunlit Congregational Dua-e-Khair",
    location: "Masjid-e-Tooba, DHA Karachi",
    badge: "Sacred Dua",
  },
  {
    src: "/images/services/nikah-in-hotel-2.jpg",
    alt: "Bilingual Khutbah on Luxury Hotel Stage",
    title: "Bilingual Khutbah & Marital Guidance",
    location: "Mövenpick Hotel, Karachi",
    badge: "Executive VIP",
  },
  {
    src: "/images/services/nikah-in-madinah-1.jpg",
    alt: "Prophetic Mosque Courtyard in Madinah",
    title: "Prophetic Sunnah Nikah in Madinah",
    location: "Masjid an-Nabawi, Madinah",
    badge: "Holy Madinah",
  },
  {
    src: "/images/services/court-marriage-1.jpg",
    alt: "Judicial Legal Protection & Court Marriage",
    title: "Judicial Legal Counsel & Protection",
    location: "City Court Chambers, Karachi",
    badge: "Article 35 Law",
  },
];

const GALLERY_ROW_3 = [
  {
    src: "/images/services/nikah-in-hall-3.jpg",
    alt: "Heartfelt Family Dua on Banquet Wedding Stage",
    title: "Emotional Family Dua & Blessings",
    location: "Karsaz Banquet Lawn, Karachi",
    badge: "Family Dua",
  },
  {
    src: "/images/services/nikah-in-home-3.jpg",
    alt: "Traditional Mithai Sweets Distribution with Qazi",
    title: "Traditional Mithai Celebratory Sweets",
    location: "Gulshan-e-Iqbal, Karachi",
    badge: "Celebration",
  },
  {
    src: "/images/services/nikah-in-mosque-3.jpg",
    alt: "Prophetic Sunnah Date Distribution Khajoor Taqseem",
    title: "Prophetic Sunnah Khajoor Date Taqseem",
    location: "Memon Masjid, Karachi",
    badge: "Sunnah Taqseem",
  },
  {
    src: "/images/services/nikah-in-hotel-3.jpg",
    alt: "Official Marriage Contract on Podium with Rings",
    title: "VIP Executive Registry & Rings",
    location: "Marriott Hotel, Karachi",
    badge: "VIP Presentation",
  },
  {
    src: "/images/services/nikah-in-office-1.jpg",
    alt: "Authorized Nikah Registrar Office in Karachi",
    title: "Direct Registrar Chamber Solemnization",
    location: "Korangi Crossing, Karachi",
    badge: "Office Suite",
  },
  {
    src: "/images/services/court-marriage-2.jpg",
    alt: "Official Marriage Registration Affidavit & Seals",
    title: "NADRA Verified Statutory Documentation",
    location: "Sindh Family Court Jurisdiction",
    badge: "NADRA Verified",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="relative bg-background py-20 sm:py-28 overflow-hidden scroll-mt-12"
    >
      {/* Decorative ambient background blur */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 -z-10 h-96 w-[700px] rounded-full bg-gradient-to-r from-gold/15 via-champagne/10 to-primary/10 blur-3xl opacity-70" />

      <div className="mx-auto max-w-7xl px-5 mb-12 sm:mb-16">
        <Heading
          eyebrow="Moments of Grace"
          title="Moments of Sacred Barakah"
          sub="Glimpses of joyful, Shariah-compliant Nikah ceremonies solemnized across Karachi, the Holy Cities, and worldwide."
        />
      </div>

      {/* 3-Row Continuous Marquee Gallery with Narrow Edge Fades Covering All Rows */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-6">
        {/* Row 1: Left to Right */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle Narrow Left & Right Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-12 md:w-16 bg-gradient-to-r from-background to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-12 md:w-16 bg-gradient-to-l from-background to-transparent z-20" />

          <div className="flex w-max animate-marquee-reverse animate-marquee-medium">
            <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
              {GALLERY_ROW_1.map((item, idx) => (
                <div
                  key={`r1-a-${idx}`}
                  className="group relative w-72 sm:w-84 md:w-96 shrink-0 aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-card shadow-soft transition-all duration-300 hover:border-gold hover:shadow-2xl hover:scale-[1.02]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-champagne shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{item.badge}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs sm:text-sm font-bold leading-tight drop-shadow-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-pearl/80">
                      <MapPin className="h-3 w-3 text-gold shrink-0" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6"
              aria-hidden="true"
            >
              {GALLERY_ROW_1.map((item, idx) => (
                <div
                  key={`r1-b-${idx}`}
                  className="group relative w-72 sm:w-84 md:w-96 shrink-0 aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-card shadow-soft transition-all duration-300 hover:border-gold hover:shadow-2xl hover:scale-[1.02]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-champagne shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{item.badge}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs sm:text-sm font-bold leading-tight drop-shadow-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-pearl/80">
                      <MapPin className="h-3 w-3 text-gold shrink-0" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle Narrow Left & Right Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-12 md:w-16 bg-gradient-to-r from-background to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-12 md:w-16 bg-gradient-to-l from-background to-transparent z-20" />

          <div className="flex w-max animate-marquee animate-marquee-slow">
            <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
              {GALLERY_ROW_2.map((item, idx) => (
                <div
                  key={`r2-a-${idx}`}
                  className="group relative w-72 sm:w-84 md:w-96 shrink-0 aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-card shadow-soft transition-all duration-300 hover:border-gold hover:shadow-2xl hover:scale-[1.02]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-champagne shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{item.badge}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs sm:text-sm font-bold leading-tight drop-shadow-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-pearl/80">
                      <MapPin className="h-3 w-3 text-gold shrink-0" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6"
              aria-hidden="true"
            >
              {GALLERY_ROW_2.map((item, idx) => (
                <div
                  key={`r2-b-${idx}`}
                  className="group relative w-72 sm:w-84 md:w-96 shrink-0 aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-card shadow-soft transition-all duration-300 hover:border-gold hover:shadow-2xl hover:scale-[1.02]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-champagne shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{item.badge}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs sm:text-sm font-bold leading-tight drop-shadow-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-pearl/80">
                      <MapPin className="h-3 w-3 text-gold shrink-0" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Left to Right */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle Narrow Left & Right Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-12 md:w-16 bg-gradient-to-r from-background to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-12 md:w-16 bg-gradient-to-l from-background to-transparent z-20" />

          <div className="flex w-max animate-marquee-reverse animate-marquee-medium">
            <div className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
              {GALLERY_ROW_3.map((item, idx) => (
                <div
                  key={`r3-a-${idx}`}
                  className="group relative w-72 sm:w-84 md:w-96 shrink-0 aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-card shadow-soft transition-all duration-300 hover:border-gold hover:shadow-2xl hover:scale-[1.02]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-champagne shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{item.badge}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs sm:text-sm font-bold leading-tight drop-shadow-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-pearl/80">
                      <MapPin className="h-3 w-3 text-gold shrink-0" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex shrink-0 items-center gap-4 sm:gap-6 pr-4 sm:pr-6"
              aria-hidden="true"
            >
              {GALLERY_ROW_3.map((item, idx) => (
                <div
                  key={`r3-b-${idx}`}
                  className="group relative w-72 sm:w-84 md:w-96 shrink-0 aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 bg-card shadow-soft transition-all duration-300 hover:border-gold hover:shadow-2xl hover:scale-[1.02]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-champagne shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{item.badge}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-xs sm:text-sm font-bold leading-tight drop-shadow-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] text-pearl/80">
                      <MapPin className="h-3 w-3 text-gold shrink-0" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Ahmed & Ayesha",
    location: "Gulshan-e-Iqbal, Karachi",
    service: "Home Nikah Ceremony",
    rating: 5,
    tag: "Verified Nikah",
    quote:
      "Maulana sahab arrived 15 minutes before time and explained every clause of the Nikah Nama with clarity. The Union Council registration was completed within the week. Highly recommended!",
  },
  {
    name: "Usman & Hira",
    location: "London, UK (Online)",
    service: "Online Nikah Worldwide",
    rating: 5,
    tag: "Embassy Attested",
    quote:
      "We solemnized our Nikah online while my family was in Karachi and I was in London. The Zoom ceremony was flawless and our NADRA computerized certificate reached London via DHL in 4 days.",
  },
  {
    name: "Bilal & Sana",
    location: "DHA Phase 6, Karachi",
    service: "Banquet Hall Nikah",
    rating: 5,
    tag: "Stage Ceremony",
    quote:
      "Very dignified and respectful service. Our family elders were truly impressed by the beautiful Masnoon Khutbah and the meticulous care taken with the official documentation.",
  },
  {
    name: "Dr. Hamza & Mahnoor",
    location: "North Nazimabad, Karachi",
    service: "Masjid Nikah Ceremony",
    rating: 5,
    tag: "Sunnah Masjid",
    quote:
      "Conducted our Sunnah Nikah after Jummah prayer at the grand mosque. The scholar brought official registers and distributed dates according to the Prophet's Sunnah.",
  },
  {
    name: "Zubair & Fatima",
    location: "Korangi, Karachi",
    service: "Urgent Same-Day Nikah",
    rating: 5,
    tag: "Express Service",
    quote:
      "We needed a Nikah Khawan urgently on a Sunday evening due to an unexpected family departure. The registrar arrived promptly within 50 minutes with all official forms. Lifesavers!",
  },
  {
    name: "Tariq & Zainab",
    location: "Toronto, Canada",
    service: "Overseas Proxy Nikah",
    rating: 5,
    tag: "Canadian Visa",
    quote:
      "Smooth coordination with Power of Attorney and legal Wakeel. The Nikahnama and MOFA attested certificate arrived right on schedule for our Canadian spouse visa petition.",
  },
  {
    name: "Saad & Nida",
    location: "Clifton Block 4, Karachi",
    service: "Luxury Hotel Nikah",
    rating: 5,
    tag: "5-Star Hotel VIP",
    quote:
      "The scholar conducted the ceremony in our 5-star hotel ballroom with impeccable etiquette and bilingual English/Urdu explanation of marital responsibilities.",
  },
  {
    name: "Farhan & Maryam",
    location: "Bahria Town, Karachi",
    service: "Court Marriage & Protection",
    rating: 5,
    tag: "NADRA Registered",
    quote:
      "Complete confidentiality, respect, and zero legal complications. The advocates drafted our free-will affidavits and handled the NADRA marriage certificate seamlessly.",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-lavender/50 py-20 sm:py-28 overflow-hidden scroll-mt-12"
    >
      {/* Decorative ambient background */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 -z-10 h-96 w-[600px] rounded-full bg-gradient-to-tr from-gold/15 to-pearl/40 blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-5 mb-12 sm:mb-16">
        <Heading
          eyebrow="Verified Feedback"
          title="Words of Appreciation from Blessed Families"
          sub="Read real experiences from couples and parents who trusted our Nikah Khawan services across Karachi and internationally."
        />
      </div>

      {/* Modern Single-Row Continuous Marquee with Subtle Edge Vignettes */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Subtle Narrow Left & Right Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-12 md:w-16 bg-gradient-to-r from-lavender/90 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-12 md:w-16 bg-gradient-to-l from-lavender/90 to-transparent z-20" />

        {/* Single Row: Continuous Uninterrupted Twin-Track Flow */}
        <div className="flex w-max animate-marquee animate-marquee-slow">
          <div className="flex shrink-0 items-center gap-6 pr-6">
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={`t-a-${idx}`}
                className="group w-80 sm:w-96 shrink-0 flex flex-col justify-between rounded-3xl border border-gold/30 bg-background/95 backdrop-blur-md p-6 sm:p-7 shadow-soft transition-all duration-300 hover:border-gold hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                      <span className="ml-1 text-xs font-bold text-primary">5.0</span>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{t.tag}</span>
                    </span>
                  </div>

                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                    {t.service}
                  </div>

                  <blockquote className="mt-3 text-xs sm:text-sm leading-relaxed text-charcoal/90 italic">
                    “{t.quote}”
                  </blockquote>
                </div>

                <figcaption className="mt-6 border-t border-gold/20 pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 border border-gold/40 grid place-items-center font-bold text-xs text-primary shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm leading-snug">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gold/80" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={`t-b-${idx}`}
                className="group w-80 sm:w-96 shrink-0 flex flex-col justify-between rounded-3xl border border-gold/30 bg-background/95 backdrop-blur-md p-6 sm:p-7 shadow-soft transition-all duration-300 hover:border-gold hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                      ))}
                      <span className="ml-1 text-xs font-bold text-primary">5.0</span>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{t.tag}</span>
                    </span>
                  </div>

                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                    {t.service}
                  </div>

                  <blockquote className="mt-3 text-xs sm:text-sm leading-relaxed text-charcoal/90 italic">
                    “{t.quote}”
                  </blockquote>
                </div>

                <figcaption className="mt-6 border-t border-gold/20 pt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-primary/10 border border-gold/40 grid place-items-center font-bold text-xs text-primary shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm leading-snug">{t.name}</div>
                    <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-gold/80" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    [
      "Which documents are required for Nikah in Karachi?",
      "CNIC or Smart Card copies of the bride, groom, two adult Muslim male witnesses, and the Wali (guardian), plus 2 to 4 passport-size photographs of the couple. Both bride and groom must be at least 18 years of age under Sindh law.",
    ],
    [
      "Is an online Nikah valid under Shariah and recognized by NADRA?",
      "Yes, absolutely. When conducted with legitimate Ijab-o-Qubool (offer & acceptance) via video call, presence of witnesses, and an authorized Wakeel (representative), an online Nikah is 100% Shariah-compliant and officially registered with NADRA.",
    ],
    [
      "Do you travel to our home, masjid or banquet hall?",
      "Yes, we provide doorstep Nikah Khawan services all over Karachi — including DHA, Clifton, Gulshan-e-Iqbal, North Nazimabad, Malir, Korangi, Bahria Town, and all banquet halls.",
    ],
    [
      "Can you arrange a Nikah on short notice or in an emergency?",
      "Yes, our registrar team is on call 24 hours a day, 7 days a week. For urgent bookings, our registrar can reach your venue across Karachi in approximately 45 to 60 minutes.",
    ],
    [
      "How do we obtain the Computerized NADRA Marriage Certificate (MRC)?",
      "After the Nikah ceremony is completed, the registered Nikah Nama is submitted to the local Union Council. Once registered, the Computerized NADRA Marriage Registration Certificate (MRC) is issued. We guide and facilitate this entire process.",
    ],
    [
      "Do you provide legal assistance for Court Marriage?",
      "Yes, we provide discrete and confidential court marriage services handled by certified advocates of the High Court, ensuring full legal protection, affidavits of free will, and official registration.",
    ],
  ];

  return (
    <section id="faq" className="bg-pearl py-24 scroll-mt-12">
      <div className="mx-auto max-w-3xl px-5">
        <Heading
          eyebrow="Clarity & Guidance"
          title="Frequently Asked Questions"
          sub="Everything you need to know about Nikah solemnization, registration, and legal validity."
        />
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(([q, a], i) => (
            <AccordionItem
              key={q}
              value={`i${i}`}
              className="rounded-2xl border border-gold/30 bg-background px-6 transition hover:border-gold"
            >
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-4">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-4">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Assalam-o-Alaikum, I want to book a Nikah service.\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nDate: ${f.get("date")}\nService: ${f.get("service")}\nVenue / Town: ${f.get("area")}\nDetails: ${f.get("msg")}`;
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-champagne/50";

  return (
    <section id="contact" className="bg-background py-24 scroll-mt-12">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-8 bg-gold" />
            Direct Contact
          </div>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Let Us Make Your Wedding Day Blessed
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            Reach our registered Nikah Registrar any time. We are pleased to provide courteous
            advice, schedule checks, and immediate bookings.
          </p>

          <div className="mt-8 space-y-5">
            {[
              { i: Phone, l: "Call / WhatsApp Helpline", v: PHONE, h: `tel:${PHONE}` },
              { i: MessageCircle, l: "Instant WhatsApp Chat", v: "Chat 24/7 on WhatsApp", h: WA },
              { i: Mail, l: "Official Email", v: EMAIL, h: `mailto:${EMAIL}` },
              { i: MapPin, l: "Office Address", v: ADDRESS, h: MAP },
              { i: Clock, l: "Service Timings", v: "24 Hours a Day · 7 Days a Week", h: undefined },
            ].map(({ i: I, l, v, h }) => (
              <a
                key={l}
                href={h}
                target={h?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-start gap-4 group"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-gold/50 bg-lavender transition group-hover:bg-gold/20">
                  <I className="h-5 w-5 text-gold" />
                </span>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    {l}
                  </span>
                  <span className="text-sm font-semibold text-primary group-hover:text-gold transition">
                    {v}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <form
          onSubmit={submit}
          className="rounded-[2rem] border border-gold/30 bg-pearl p-8 shadow-soft md:p-10 lg:col-span-3 flex flex-col justify-between"
        >
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary">Book Nikah Ceremony</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Fill the form below and your booking details will open directly in WhatsApp for
                instant confirmation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-primary mb-1">
                  Your Full Name *
                </label>
                <input required name="name" placeholder="e.g. Muhammad Farhan" className={field} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary mb-1">
                  Contact Number *
                </label>
                <input required name="phone" placeholder="0300-1234567" className={field} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary mb-1">
                  Proposed Nikah Date
                </label>
                <input name="date" type="date" className={field} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary mb-1">
                  Service Type
                </label>
                <select name="service" className={field} defaultValue="Nikah at Home">
                  {services.map((s) => (
                    <option key={s.t}>{s.t}</option>
                  ))}
                  <option>Urgent / Same-Day Nikah</option>
                  <option>Court Marriage Legal Assistance</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-primary mb-1">
                  Area / Venue in Karachi
                </label>
                <input
                  name="area"
                  placeholder="e.g. DHA Phase 5, Banquet Hall or Home address"
                  className={field}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-primary mb-1">
                  Additional Requirements / Notes
                </label>
                <textarea
                  name="msg"
                  rows={3}
                  placeholder="Mention timings, Wali status, or any special documentation needs"
                  className={field}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className={btnGold + " w-full justify-center !py-4 shadow-lg text-base"}
            >
              <MessageCircle className="h-5 w-5" />
              <span>Confirm & Send via WhatsApp</span>
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              ⚡ Instant dispatch to Nikah Registrar on WhatsApp · No waiting
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
