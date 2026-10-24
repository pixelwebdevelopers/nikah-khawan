import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
  MapPin,
  Building2,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface PagePlaceholderProps {
  title: string;
  urduTitle?: string;
  category?: string;
  description?: string;
  slug: string;
}

export function PagePlaceholder({
  title,
  urduTitle,
  category = "Nikah Service Karachi",
  description = "Official Government Registered Nikah Registrar & Qualified Islamic Scholar service. Available 24/7 across Karachi and Online Worldwide.",
  slug,
}: PagePlaceholderProps) {
  const whatsappBookingUrl = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    `Assalam-o-Alaikum, I am inquiring about *${title}* service.`,
  )}`;

  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      {/* Background Islamic Geometric Subtle Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30">
        <div className="h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-gold/15 to-champagne/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs text-muted-foreground"
        >
          <Link to="/" className="hover:text-primary transition">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-gold" />
          <span className="text-primary font-medium">{category}</span>
          <ChevronRight className="h-3 w-3 text-gold" />
          <span className="text-gold font-semibold truncate max-w-[200px] sm:max-w-none">
            {title}
          </span>
        </nav>

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-4 py-1.5 text-xs font-semibold text-primary shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span>{category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
            {title}
          </h1>

          {urduTitle && (
            <p className="font-urdu text-xl sm:text-2xl text-gold/90 font-medium pt-1" dir="rtl">
              {urduTitle}
            </p>
          )}

          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Clean Placeholder Main Card */}
        <div className="mt-10 rounded-3xl border border-gold/30 bg-background/95 p-6 sm:p-10 shadow-soft backdrop-blur-sm max-w-3xl mx-auto">
          {/* Status Badge */}
          <div className="flex items-center justify-between border-b border-gold/20 pb-5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-primary">
                Official Government Registered Service
              </span>
            </div>
            <span className="text-xs text-gold font-semibold uppercase tracking-wider">
              24/7 Available
            </span>
          </div>

          {/* Quick Highlight Points */}
          <div className="py-6 space-y-3.5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-foreground">
                <strong className="text-primary font-semibold">
                  100% Shariah Compliant Ceremony:
                </strong>{" "}
                Qualified Islamic Scholar conducts Nikah with authentic Khutbah-e-Nikah and Sunnah
                Ijab-o-Qubool.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-foreground">
                <strong className="text-primary font-semibold">Official Legal Registration:</strong>{" "}
                Authorized Government Nikah Registrar with official Nikahnama and NADRA computerized
                marriage certificate assistance.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-foreground">
                <strong className="text-primary font-semibold">Prompt 24/7 Service:</strong> On-call
                availability at your doorstep, halls, masajid, hotel venues, or online via live
                video worldwide.
              </p>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="border-t border-gold/20 pt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-primary px-6 py-3.5 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg hover:border-champagne"
            >
              <MessageCircle className="h-4 w-4 text-champagne" />
              <span>Book via WhatsApp</span>
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-pearl px-6 py-3.5 text-xs sm:text-sm font-bold text-primary transition hover:bg-gold/15"
            >
              <Phone className="h-4 w-4 text-gold" />
              <span>Call: {SITE_CONFIG.phoneFormatted}</span>
            </a>
          </div>

          {/* Note */}
          <p className="mt-4 text-center text-[11px] text-muted-foreground">
            Complete details and multimedia showcase are being prepared. For immediate reservations,
            contact our Registrar directly above.
          </p>
        </div>

        {/* Office & Location Quick Box */}
        <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-gold/20 bg-pearl/40 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-gold shrink-0" />
            <div>
              <div className="font-semibold text-primary">Head Office Karachi</div>
              <div className="line-clamp-1">{SITE_CONFIG.address}</div>
            </div>
          </div>
          <a
            href={SITE_CONFIG.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-gold font-bold hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
