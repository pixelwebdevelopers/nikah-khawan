import { Link } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  MapPin,
  Building2,
  ChevronRight,
  ShieldCheck,
  Scale,
  FileCheck2,
  HelpCircle,
  Award,
  Users,
  Check,
  Camera,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE_CONFIG } from "@/config/site";

export interface ServiceImage {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
}

export interface ServiceDetailConfig {
  slug: string;
  category: string;
  title: string;
  h1: string;
  urduTitle: string;
  metaDescription: string;
  heroIntro: string;
  images?: ServiceImage[];
  whyChooseHeading: string;
  whyChoosePoints: {
    title: string;
    description: string;
  }[];
  procedureSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  documentsRequired: {
    party: string;
    items: string[];
  }[];
  coverageAreas?: string[];
  faqs: {
    q: string;
    a: string;
  }[];
  relatedServices?: {
    title: string;
    href: string;
    desc: string;
  }[];
}

interface ServicePageDetailProps {
  data: ServiceDetailConfig;
}

export function ServicePageDetail({ data }: ServicePageDetailProps) {
  const whatsappUrl = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    `Assalam-o-Alaikum, I am inquiring about *${data.title}* service.`,
  )}`;

  return (
    <div className="relative overflow-hidden py-10 md:py-16">
      {/* Background Decorative Element */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-25">
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-gold/20 via-champagne/15 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* 1. Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"
        >
          <Link to="/" className="hover:text-primary transition font-medium">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-gold" />
          <span className="text-primary font-medium">{data.category}</span>
          <ChevronRight className="h-3 w-3 text-gold" />
          <span className="text-gold font-semibold truncate">{data.title}</span>
        </nav>

        {/* 2. Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-4 py-1.5 text-xs font-semibold text-primary shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span>{data.category}</span>
            <span className="text-gold">✦</span>
            <span className="text-emerald-700 font-bold">24/7 Available in Karachi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary leading-tight">
            {data.h1}
          </h1>

          <p className="font-urdu text-xl sm:text-2xl text-gold/90 font-medium pt-1" dir="rtl">
            {data.urduTitle}
          </p>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2">
            {data.heroIntro}
          </p>

          {/* Quick Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-champagne hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4 text-champagne" />
              <span>Book via WhatsApp</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-pearl px-8 py-3.5 text-sm font-bold text-primary transition hover:bg-gold/15"
            >
              <Phone className="h-4 w-4 text-gold" />
              <span>Call: {SITE_CONFIG.phoneFormatted}</span>
            </a>
          </div>

          {/* Trust Highlights Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gold/20 text-xs">
            <div className="flex items-center justify-center gap-2 rounded-xl bg-pearl/60 p-2.5 font-medium text-primary border border-gold/20">
              <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
              <span>Govt. Registered</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-pearl/60 p-2.5 font-medium text-primary border border-gold/20">
              <Award className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>100% Shariah Sunnah</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-pearl/60 p-2.5 font-medium text-primary border border-gold/20">
              <FileCheck2 className="h-4 w-4 text-gold shrink-0" />
              <span>NADRA MRC Support</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-pearl/60 p-2.5 font-medium text-primary border border-gold/20">
              <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>24/7 On-Call Dispatch</span>
            </div>
          </div>
        </div>

        {/* 2.5. Authentic Ceremony & Visual Showcase (2-3 realistic images) */}
        {data.images && data.images.length > 0 && (
          <section className="mt-12 md:mt-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold flex items-center justify-center gap-1.5">
                <Camera className="h-3.5 w-3.5 text-gold" />
                <span>Authentic Ceremony Highlights</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Real Ceremony & Solemnization Moments
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Documented moments of our licensed Qazi solemnizing sacred Nikah ceremonies and
                attesting official government marriage registers.
              </p>
            </div>

            <div
              className={`grid gap-6 ${
                data.images.length >= 3
                  ? "grid-cols-1 md:grid-cols-3"
                  : data.images.length === 2
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-1 max-w-2xl mx-auto"
              }`}
            >
              {data.images.map((img, idx) => (
                <figure
                  key={idx}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/30 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    />
                    {img.badge && (
                      <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-black/65 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-champagne shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{img.badge}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-75" />
                  </div>
                  {img.caption && (
                    <figcaption className="p-4 text-xs sm:text-sm font-medium text-foreground/90 bg-card/95 border-t border-gold/15 flex items-start gap-2.5 flex-1">
                      <span className="text-gold font-bold shrink-0 mt-0.5">✦</span>
                      <span className="leading-relaxed">{img.caption}</span>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* 3. Why Choose Us / Key Features Grid */}
        <section className="mt-16 rounded-3xl border border-gold/25 bg-background p-6 sm:p-10 shadow-soft">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
              Excellence & Dignity
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">{data.whyChooseHeading}</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {data.whyChoosePoints.map((pt, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gold/20 bg-pearl/40 p-5 transition hover:border-gold hover:shadow-md"
              >
                <div className="flex items-start gap-3.5">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary text-champagne text-xs font-bold shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-primary">{pt.title}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Step-by-Step Procedure */}
        <section className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
              Simple & Transparent
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Step-by-Step Nikah Solemnization Procedure
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              How our government-registered Nikah Registrar ensures a hassle-free and legally
              binding ceremony.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.procedureSteps.map((st, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-gold/20 bg-background p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block rounded-lg bg-gold/20 px-2.5 py-1 text-[11px] font-bold text-gold mb-3">
                    {st.step}
                  </div>
                  <h3 className="text-sm font-bold text-primary">{st.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Documents Checklist */}
        <section className="mt-16 rounded-3xl border border-gold/25 bg-pearl/30 p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
              Legal Compliance
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Required Documents for Official Nikah Registration
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Under the Muslim Family Laws Ordinance 1961 and Sindh local government marriage
              registration regulations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.documentsRequired.map((doc, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gold/20 bg-background p-5 shadow-xs"
              >
                <h3 className="text-sm font-bold text-primary border-b border-gold/20 pb-2.5 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>{doc.party}</span>
                </h3>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {doc.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="text-gold font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Karachi Coverage Areas */}
        {data.coverageAreas && data.coverageAreas.length > 0 && (
          <section className="mt-16 rounded-2xl border border-gold/20 bg-background p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gold/20 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span>Areas Covered Across Karachi</span>
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Our Nikah Khawan team reaches any location in Karachi within 45 to 60 minutes.
                </p>
              </div>
              <span className="text-xs font-bold text-gold uppercase tracking-wider">
                Full City Coverage
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {data.coverageAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-gold/30 bg-pearl px-3 py-1 text-xs font-medium text-primary"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* 7. Detailed FAQs Accordion */}
        <section className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
              Got Questions?
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Everything you need to know about {data.title.toLowerCase()} in Karachi.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border border-gold/20 bg-background p-4 sm:p-6 shadow-soft">
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-gold/15">
                  <AccordionTrigger className="text-left text-sm font-semibold text-primary hover:text-gold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 8. Conversion Call-To-Action Banner */}
        <div className="mt-16 rounded-3xl border-2 border-gold/40 bg-gradient-to-r from-primary via-[#450a6e] to-primary p-8 sm:p-12 text-center text-primary-foreground shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="rounded-full bg-gold/20 px-3.5 py-1 text-xs font-semibold text-champagne border border-gold/40">
              Immediate 24/7 Service Reservation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Ready to Schedule Your {data.title}?
            </h2>
            <p className="text-xs sm:text-sm text-primary-foreground/90 leading-relaxed max-w-lg mx-auto">
              Speak directly with our authorized Nikah Registrar right now. We confirm your date,
              review documents, and guarantee punctual arrival anywhere in Karachi or online.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-champagne/60 bg-white/10 backdrop-blur px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4 text-champagne" />
                <span>Call {SITE_CONFIG.phoneFormatted}</span>
              </a>
            </div>
            <p className="text-[11px] text-champagne/80 pt-1">
              ⚡ Available 24 Hours · Immediate Response · Strict Shariah Compliance
            </p>
          </div>
        </div>

        {/* 9. Related Services Internal Cross-Links */}
        {data.relatedServices && data.relatedServices.length > 0 && (
          <section className="mt-16 border-t border-gold/20 pt-12">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">
              Explore Related Nikah & Legal Services
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {data.relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  to={rel.href}
                  className="rounded-2xl border border-gold/20 bg-background p-4 transition hover:border-gold hover:shadow-md group"
                >
                  <h4 className="text-sm font-bold text-primary group-hover:text-gold transition flex items-center justify-between">
                    <span>{rel.title}</span>
                    <ChevronRight className="h-4 w-4 text-gold shrink-0 transition-transform group-hover:translate-x-1" />
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{rel.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
