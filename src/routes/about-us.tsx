import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildPageSeo } from "@/lib/seo";
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
  HeartHandshake,
  Scale,
  Building2,
  Phone,
  MessageCircle,
} from "lucide-react";
import logo from "@/assets/logo.webp";
import { SITE_CONFIG } from "@/config/site";

const coreValues = [
  {
    title: "Strict Shariah Compliance",
    desc: "Every Nikah is solemnized strictly adhering to classical Quranic principles and the authentic Sunnah of the Prophet Muhammad (ﷺ). We maintain zero compromise on the sacred conditions of mutual consent, witnesses, and Haq-Mehr.",
  },
  {
    title: "Official Government Authorization",
    desc: "We are licensed Nikah Registrars under the Muslim Family Laws Ordinance 1961 and Sindh Local Government. Every document signed is authentic, legally binding, and registrable with NADRA and foreign embassies.",
  },
  {
    title: "Punctuality & Reliability",
    desc: "In Karachi's bustling wedding calendar, timing is critical. Our team guarantees punctual attendance at banquet halls, residences, and masajid, respecting your schedule and guest comfort.",
  },
  {
    title: "Absolute Privacy & Discretion",
    desc: "Whether conducting an intimate family home ceremony or confidential court marriage proceedings, we treat your personal family records and identity data with highest confidentiality.",
  },
];

export const Route = createFileRoute("/about-us")({
  head: () =>
    buildPageSeo({
      title: "About Us | Registered Nikah Registrar & Islamic Scholars Karachi",
      description:
        "Learn about our government-registered Nikah Registrar credentials, qualified Islamic scholars, legal authority, and 15+ years of trusted Nikah solemnization services in Karachi.",
      path: "/about-us",
      keywords:
        "About Nikah Khawan Karachi, Registered Nikah Registrar Karachi, Islamic Scholars Karachi, Government Authorized Nikah Registrar, Shariah Compliant Marriage Pakistan",
      category: "About & Organization",
      schemaType: "AboutPage",
      faqs: [
        {
          q: "What makes your Nikah service different from informal Nikah reciters?",
          a: "Unlike informal reciters who do not possess government licenses, our Nikah Registrars are officially licensed by the Government of Sindh. We maintain official government registers, apply authorized serial seals, and guarantee valid Union Council filing and NADRA Computerized Marriage Certificate issuance.",
        },
        {
          q: "Do you have advocates for court marriage and legal documentation?",
          a: "Yes. Our team includes experienced High Court family law advocates who handle legal affidavits, age verification, court marriage proceedings before Judicial Magistrates, and police protection petitions.",
        },
      ],
    }),
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden py-12 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-25">
          <div className="h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-gold/20 to-champagne/15 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary transition font-medium">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-gold" />
            <span className="text-gold font-semibold">About Us</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Dedicated to Sacred Matrimonial Covenants</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              About Nikah Khawan & Registrar Service Karachi
            </h1>

            <p className="font-urdu text-xl sm:text-2xl text-gold/90 font-medium" dir="rtl">
              ہمارے بارے میں — دینی تقدس، مسنون خوانی اور قانونی سند کا معتبر ادارہ
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Founded on the principles of Islamic piety, legal integrity, and family dignity, we
              are Karachi's premier Government Registered Nikah Registrar and qualified Islamic
              Scholar network, serving couples and families locally across Karachi and online
              worldwide.
            </p>
          </div>

          {/* Mission & Vision Section */}
          <div className="mt-14 rounded-3xl border border-gold/30 bg-background p-6 sm:p-10 shadow-soft">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold">
                  Our Mission & Mandate
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-1 mb-4">
                  Bridging Prophetic Sunnah with Complete Legal Security
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  A Nikah is not merely a legal contract; it is a profound Sunnah of the Prophet
                  Muhammad (ﷺ) that establishes the sacred foundation of a family. For over 15
                  years, our mission has been to provide families with a seamless, religiously
                  uplifting, and legally airtight marriage experience.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  We eliminate bureaucratic confusion, prevent fraudulent documentation, and ensure
                  that every bride and groom enters into their holy matrimony with complete peace of
                  mind, proper Haq-Mehr records, and immediate computerized NADRA registration
                  support.
                </p>
              </div>

              <div className="rounded-2xl border border-gold/25 bg-pearl/40 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-gold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary">Government Authorized</h3>
                    <p className="text-xs text-muted-foreground">
                      Sindh Local Govt. Nikah Registrar License
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-gold">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary">Qualified Muftis & Scholars</h3>
                    <p className="text-xs text-muted-foreground">
                      Shahadat-ul-Aalamia (Wifaq-ul-Madaris)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-gold">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary">High Court Advocates</h3>
                    <p className="text-xs text-muted-foreground">
                      Expert Family Law & Court Marriage Protection
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-gold">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary">5,000+ Happy Couples</h3>
                    <p className="text-xs text-muted-foreground">
                      Across Karachi, UK, USA, UAE & Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-1">
                The 4 Pillars of Our Service
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-gold/25 bg-background p-6 sm:p-8 shadow-soft transition hover:border-gold hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-pearl border border-gold/40 text-gold text-sm font-bold shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-primary">{val.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Office & Contact Box */}
          <div className="mt-16 rounded-3xl border border-gold/40 bg-gradient-to-r from-primary to-[#4a0d78] p-8 sm:p-12 text-center text-primary-foreground shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Consult Our Nikah Registrar in Karachi Today
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-primary-foreground/90 max-w-lg mx-auto">
              We are available 24 hours a day, 7 days a week to answer your marriage questions,
              inspect documents, or schedule your ceremony.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-7 py-3 text-xs sm:text-sm font-bold text-primary shadow-md hover:brightness-105 transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-champagne/60 bg-white/10 px-7 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition"
              >
                <Building2 className="h-4 w-4 text-champagne" />
                <span>Visit Our Office & Map →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
