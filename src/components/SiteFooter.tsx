import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  ChevronRight,
  Facebook,
  Instagram,
  Youtube,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/logo.webp";
import { SITE_CONFIG } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-gold/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 lg:grid-cols-5">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="inline-block rounded-2xl bg-background p-3 border border-gold/30 shadow-md">
            <Link to="/">
              <img
                src={logo}
                alt="Nikah Khawan & Nikah Registrar Karachi"
                className="h-12 w-auto"
                width={170}
                height={48}
              />
            </Link>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-relaxed opacity-85">
            Official Nikah Khawan and Government Registered Nikah Registrar serving Karachi and
            online worldwide. Conducting sacred ceremonies with religious integrity, official
            documentation, and the Sunnah blessing.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="rounded-full bg-gold/20 px-3 py-1 text-[11px] font-semibold text-champagne border border-gold/30">
              Govt. Registered Registrar
            </span>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-300 border border-emerald-400/30">
              100% Shariah Compliant
            </span>
          </div>

          <div className="flex gap-2.5 pt-2">
            {SITE_CONFIG.social.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-champagne/40 text-champagne transition hover:bg-champagne/15 hover:scale-105"
              >
                {label === "Facebook" && <Facebook className="h-4 w-4" />}
                {label === "Instagram" && <Instagram className="h-4 w-4" />}
                {label === "YouTube" && <Youtube className="h-4 w-4" />}
              </a>
            ))}
            <a
              href={SITE_CONFIG.olxUrl}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 place-items-center rounded-full border border-champagne/40 px-3.5 text-xs font-bold text-champagne hover:bg-champagne/15 transition hover:scale-105"
            >
              OLX
            </a>
          </div>
        </div>

        {/* Column 2: Karachi Services */}
        <div>
          <h4 className="mb-4 font-display text-base sm:text-lg text-champagne flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-gold" /> Karachi Services
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm opacity-85">
            {SITE_CONFIG.services.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="hover:text-champagne transition flex items-center gap-1.5"
                >
                  <ChevronRight className="h-3 w-3 text-gold shrink-0" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Holy Cities & International & Media */}
        <div>
          <h4 className="mb-4 font-display text-base sm:text-lg text-champagne flex items-center gap-1.5">
            <Globe className="h-4 w-4 text-gold" /> Holy Cities & Media
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm opacity-85">
            {SITE_CONFIG.international.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="hover:text-champagne transition flex items-center gap-1.5"
                >
                  <ChevronRight className="h-3 w-3 text-gold shrink-0" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
            {SITE_CONFIG.reviewsMedia.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="hover:text-champagne transition flex items-center gap-1.5"
                >
                  <ChevronRight className="h-3 w-3 text-gold shrink-0" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Registrar Contact & Info */}
        <div>
          <h4 className="mb-4 font-display text-base sm:text-lg text-champagne">
            Contact Registrar
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm opacity-85">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold shrink-0" />
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="hover:text-champagne transition font-semibold"
              >
                {SITE_CONFIG.phoneFormatted}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold shrink-0" />
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="break-all hover:text-champagne transition text-xs"
              >
                {SITE_CONFIG.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-1" />
              <a
                href={SITE_CONFIG.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-champagne transition text-xs leading-relaxed"
              >
                {SITE_CONFIG.address}
              </a>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <Globe className="h-4 w-4 text-gold shrink-0" />
              <Link to="/" className="hover:text-champagne transition">
                www.nikahkhawan.com
              </Link>
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-gold/20">
            <div className="text-xs text-champagne/90 font-medium mb-1.5">Quick Links</div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs opacity-80">
              <Link to="/about-us" className="hover:text-champagne underline underline-offset-2">
                About Us
              </Link>
              <Link to="/contact-us" className="hover:text-champagne underline underline-offset-2">
                Contact
              </Link>
              <Link to="/blogs" className="hover:text-champagne underline underline-offset-2">
                Blogs
              </Link>
              <Link to="/q-and-a" className="hover:text-champagne underline underline-offset-2">
                Q&A
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5">
        <div className="gold-rule opacity-50" />
      </div>

      {/* Bottom Legal & Developer Credits */}
      <div className="mx-auto max-w-7xl px-5 pt-6 pb-24 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-center md:text-left opacity-90">
        <p>
          © {new Date().getFullYear()} Nikah Khawan & Nikah Service Karachi. All rights reserved.
        </p>
        <p className="text-xs text-champagne">
          Developed by{" "}
          <a
            href="https://pixelwebdevelopers.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-champagne underline decoration-gold/60 underline-offset-4 transition-colors hover:text-white"
          >
            Pixel Web Developers
          </a>
        </p>
        <p className="text-[11px] opacity-80">Strictly Shariah Compliant & Government Authorized</p>
      </div>
    </footer>
  );
}
