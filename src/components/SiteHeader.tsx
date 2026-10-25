import { useState, useRef, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Building2,
  Home as HomeIcon,
  Globe,
  Star,
  Video,
  Image as ImageIcon,
  BookOpen,
  HelpCircle,
  Info,
  Scale,
  Award,
  Facebook,
  Instagram,
  Youtube,
  Clock,
  Landmark,
} from "lucide-react";
import logo from "@/assets/logo.webp";
import { SITE_CONFIG } from "@/config/site";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-gold/70 bg-primary px-6 py-2.5 text-xs font-bold text-primary-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-champagne hover:shadow-lg active:translate-y-0";

const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-background/80 backdrop-blur px-5 py-2.5 text-xs font-semibold text-primary transition-all duration-200 hover:bg-champagne/20 hover:border-gold active:translate-y-0";

export function SiteHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Mobile accordion states (all closed by default)
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Close dropdown and drawer on route change
  useEffect(() => {
    setActiveDropdown(null);
    setSidebarOpen(false);
    setOpenSection(null);
  }, [currentPath]);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      {/* 24/7 Top Bar: Desktop Full Layout */}
      <div className="hidden md:block border-b border-gold/20 bg-primary px-4 py-2 text-xs text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold text-champagne">24/7 Immediate Availability:</span>
            <span className="opacity-90">
              Registered Nikah Registrar on call across all Karachi towns & Online Worldwide
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-1.5 transition hover:text-champagne"
            >
              <Phone className="h-3 w-3 text-gold" /> {SITE_CONFIG.phoneFormatted}
            </a>
            <span className="opacity-40">|</span>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-champagne hover:underline"
            >
              <MessageCircle className="h-3 w-3 text-emerald-400" /> Quick WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 24/7 Top Bar: Mobile Marquee Ticker */}
      <div className="relative flex items-center overflow-hidden border-b border-gold/25 bg-primary py-2 text-xs text-primary-foreground md:hidden select-none">
        {/* Pinned Left 24/7 Status Pill */}
        <div className="z-10 flex shrink-0 items-center gap-1.5 bg-primary pl-3 pr-2.5 text-[11px] font-bold text-champagne shadow-[4px_0_12px_rgba(55,8,88,0.9)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>24/7 LIVE</span>
          <span className="text-gold/60">|</span>
        </div>

        {/* Right Fade Vignette for smooth exit */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-primary to-transparent z-10" />

        {/* Endless Marquee Stream */}
        <div className="flex w-full overflow-hidden whitespace-nowrap">
          <div className="flex w-max animate-marquee animate-marquee-medium">
            <div className="flex shrink-0 items-center gap-6 pr-6 text-[11px] font-medium text-primary-foreground">
              <span className="flex items-center gap-2">
                <span>Nikah Registrar on call across all Karachi towns & Online Worldwide</span>
                <span className="text-gold">✦</span>
              </span>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-1 font-semibold text-champagne hover:underline"
              >
                <Phone className="h-3 w-3 text-gold" /> Call: {SITE_CONFIG.phoneFormatted}
                <span className="ml-1 text-gold">✦</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 font-semibold text-champagne hover:underline"
              >
                <MessageCircle className="h-3 w-3 text-emerald-400" /> WhatsApp Us
                <span className="ml-1 text-gold">✦</span>
              </a>
              <span className="flex items-center gap-2">
                <span>Home, Masjid, Banquet Hall & Court Marriage Ceremonies</span>
                <span className="text-gold">✦</span>
              </span>
            </div>

            <div
              className="flex shrink-0 items-center gap-6 pr-6 text-[11px] font-medium text-primary-foreground"
              aria-hidden="true"
            >
              <span className="flex items-center gap-2">
                <span>Nikah Registrar on call across all Karachi towns & Online Worldwide</span>
                <span className="text-gold">✦</span>
              </span>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-1 font-semibold text-champagne hover:underline"
              >
                <Phone className="h-3 w-3 text-gold" /> Call: {SITE_CONFIG.phoneFormatted}
                <span className="ml-1 text-gold">✦</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 font-semibold text-champagne hover:underline"
              >
                <MessageCircle className="h-3 w-3 text-emerald-400" /> WhatsApp Us
                <span className="ml-1 text-gold">✦</span>
              </a>
              <span className="flex items-center gap-2">
                <span>Home, Masjid, Banquet Hall & Court Marriage Ceremonies</span>
                <span className="text-gold">✦</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-gold/20 bg-background/95 backdrop-blur-md transition-all shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Nikah Khawan Karachi Home"
          >
            <img
              src={logo}
              alt="Nikah Khawan & Registrar Karachi"
              className="h-10 w-auto sm:h-12 md:h-13 transition-transform group-hover:scale-102"
              width={170}
              height={52}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
            {/* Home Link */}
            <Link
              to="/"
              className={`transition-colors hover:text-gold relative py-1.5 ${
                currentPath === "/"
                  ? "text-gold font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold"
                  : "text-primary"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 py-1.5 transition-colors hover:text-gold cursor-pointer ${
                  currentPath.includes("/nikah-in-") ||
                  currentPath.includes("service-karachi") ||
                  currentPath === "/court-marriage"
                    ? "text-gold font-bold"
                    : "text-primary"
                }`}
                aria-expanded={activeDropdown === "services"}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-1 w-80 rounded-2xl border border-gold/30 bg-background/98 p-3 shadow-2xl backdrop-blur-xl animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="mb-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
                    Karachi Nikah Services
                  </div>
                  <div className="space-y-1">
                    {SITE_CONFIG.services.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`flex items-start gap-2.5 rounded-xl p-2.5 transition ${
                          currentPath === item.href
                            ? "bg-gold/15 text-gold font-semibold"
                            : "text-primary hover:bg-pearl/80 hover:text-gold"
                        }`}
                      >
                        <Sparkles className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold leading-tight">{item.title}</div>
                          <div className="text-[11px] text-muted-foreground leading-snug line-clamp-1">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Nikkah in Saudia Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("saudia")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 py-1.5 transition-colors hover:text-gold cursor-pointer ${
                  currentPath.includes("makkah") || currentPath.includes("madin")
                    ? "text-gold font-bold"
                    : "text-primary"
                }`}
                aria-expanded={activeDropdown === "saudia"}
              >
                <span>Nikkah in Saudia</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeDropdown === "saudia" ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>

              {activeDropdown === "saudia" && (
                <div className="absolute top-full left-0 mt-1 w-76 rounded-2xl border border-gold/30 bg-background/98 p-3 shadow-2xl backdrop-blur-xl animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="mb-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
                    Holy Destinations in Saudi Arabia
                  </div>
                  <div className="space-y-1">
                    {SITE_CONFIG.saudia.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`flex items-start gap-2.5 rounded-xl p-2.5 transition ${
                          currentPath === item.href
                            ? "bg-gold/15 text-gold font-semibold"
                            : "text-primary hover:bg-pearl/80 hover:text-gold"
                        }`}
                      >
                        <Landmark className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold leading-tight">{item.title}</div>
                          <div className="text-[11px] text-muted-foreground leading-snug line-clamp-1">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Online Nikah Separate Menu Link */}
            <Link
              to="/online-nikah-worldwide"
              className={`transition-colors hover:text-gold relative py-1.5 ${
                currentPath === "/online-nikah-worldwide"
                  ? "text-gold font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold"
                  : "text-primary"
              }`}
            >
              <span>Online Nikah</span>
            </Link>

            {/* Reviews & Media Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("media")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`flex items-center gap-1 py-1.5 transition-colors hover:text-gold cursor-pointer ${
                  currentPath.includes("reviews") ||
                  currentPath.includes("videos") ||
                  currentPath.includes("scholar")
                    ? "text-gold font-bold"
                    : "text-primary"
                }`}
                aria-expanded={activeDropdown === "media"}
              >
                <span>Reviews & Media</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    activeDropdown === "media" ? "rotate-180 text-gold" : ""
                  }`}
                />
              </button>

              {activeDropdown === "media" && (
                <div className="absolute top-full left-0 mt-1 w-80 rounded-2xl border border-gold/30 bg-background/98 p-3 shadow-2xl backdrop-blur-xl animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="mb-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold">
                    Reviews, Photos & Videos
                  </div>
                  <div className="space-y-1">
                    {SITE_CONFIG.reviewsMedia.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`flex items-start gap-2.5 rounded-xl p-2.5 transition ${
                          currentPath === item.href
                            ? "bg-gold/15 text-gold font-semibold"
                            : "text-primary hover:bg-pearl/80 hover:text-gold"
                        }`}
                      >
                        <Star className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold leading-tight">{item.title}</div>
                          <div className="text-[11px] text-muted-foreground leading-snug line-clamp-1">
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blogs */}
            <Link
              to="/blogs"
              className={`transition-colors hover:text-gold relative py-1.5 ${
                currentPath === "/blogs" ? "text-gold font-bold" : "text-primary"
              }`}
            >
              Blogs
            </Link>

            {/* Q&A */}
            <Link
              to="/q-and-a"
              className={`transition-colors hover:text-gold relative py-1.5 ${
                currentPath === "/q-and-a" ? "text-gold font-bold" : "text-primary"
              }`}
            >
              Q&A
            </Link>

            {/* About Us */}
            <Link
              to="/about-us"
              className={`transition-colors hover:text-gold relative py-1.5 ${
                currentPath === "/about-us" ? "text-gold font-bold" : "text-primary"
              }`}
            >
              About Us
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact-us"
              className={`transition-colors hover:text-gold relative py-1.5 ${
                currentPath === "/contact-us" ? "text-gold font-bold" : "text-primary"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={btnPrimary}
            >
              <MessageCircle className="h-4 w-4 text-champagne" />
              <span>Book Nikah</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="xl:hidden p-2 rounded-xl border border-gold/40 text-primary transition hover:bg-gold/10"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-Over Sidebar Menu */}
      <aside
        className={`fixed top-0 right-0 z-50 flex h-[100dvh] w-[88%] max-w-sm flex-col border-l border-gold/30 bg-background shadow-2xl transition-transform duration-300 ease-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        aria-label="Mobile Navigation Sidebar"
      >
        {/* Pinned Top Bar: Logo & Close */}
        <div className="flex shrink-0 items-center justify-between border-b border-gold/20 bg-background px-5 py-4">
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            <img src={logo} alt="Nikah Khawan Karachi" className="h-10 w-auto" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-full border border-gold/30 p-2 text-primary transition hover:bg-gold/15"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Middle: Navigation Links */}
        <div className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-5 py-4">
          {/* 24/7 Availability Badge */}
          <div className="flex items-center gap-2 rounded-xl border border-gold/30 bg-pearl p-3 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>24/7 On-Call in Karachi & Online Worldwide</span>
          </div>

          {/* Quick Primary Navigation */}
          <div className="space-y-1">
            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                currentPath === "/" ? "bg-gold/15 text-gold" : "text-primary hover:bg-lavender"
              }`}
            >
              <span className="flex items-center gap-2">
                <HomeIcon className="h-4 w-4 text-gold" /> Home
              </span>
              <ChevronRight className="h-4 w-4 text-gold" />
            </Link>
          </div>

          {/* Karachi Nikah Services Accordion */}
          <div className="rounded-xl border border-gold/20 overflow-hidden">
            <button
              onClick={() => toggleSection("services")}
              className="flex w-full items-center justify-between bg-pearl/60 px-4 py-3 text-sm font-bold text-primary transition"
            >
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-gold" /> Karachi Nikah Services
              </span>
              <ChevronDown
                className={`h-4 w-4 text-gold transition-transform duration-200 ${
                  openSection === "services" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "services" && (
              <div className="divide-y divide-gold/10 bg-background/50 px-2 py-1">
                {SITE_CONFIG.services.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition ${
                      currentPath === item.href
                        ? "bg-gold/15 text-gold font-bold"
                        : "text-primary hover:bg-pearl"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="h-3 w-3 text-gold/60" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Nikkah in Saudia Accordion */}
          <div className="rounded-xl border border-gold/20 overflow-hidden">
            <button
              onClick={() => toggleSection("saudia")}
              className="flex w-full items-center justify-between bg-pearl/60 px-4 py-3 text-sm font-bold text-primary transition"
            >
              <span className="flex items-center gap-2">
                <Landmark className="h-4 w-4 text-gold" /> Nikkah in Saudia
              </span>
              <ChevronDown
                className={`h-4 w-4 text-gold transition-transform duration-200 ${
                  openSection === "saudia" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "saudia" && (
              <div className="divide-y divide-gold/10 bg-background/50 px-2 py-1">
                {SITE_CONFIG.saudia.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition ${
                      currentPath === item.href
                        ? "bg-gold/15 text-gold font-bold"
                        : "text-primary hover:bg-pearl"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="h-3 w-3 text-gold/60" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Online Nikah Separate Mobile Item */}
          <Link
            to="/online-nikah-worldwide"
            onClick={() => setSidebarOpen(false)}
            className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition border border-gold/20 ${
              currentPath === "/online-nikah-worldwide"
                ? "bg-gold/15 text-gold font-bold"
                : "bg-pearl/30 text-primary hover:bg-lavender"
            }`}
          >
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gold" /> Online Nikah Worldwide
            </span>
            <ChevronRight className="h-4 w-4 text-gold" />
          </Link>

          {/* Reviews & Media Accordion */}
          <div className="rounded-xl border border-gold/20 overflow-hidden">
            <button
              onClick={() => toggleSection("media")}
              className="flex w-full items-center justify-between bg-pearl/60 px-4 py-3 text-sm font-bold text-primary transition"
            >
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-gold" /> Reviews & Media
              </span>
              <ChevronDown
                className={`h-4 w-4 text-gold transition-transform duration-200 ${
                  openSection === "media" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "media" && (
              <div className="divide-y divide-gold/10 bg-background/50 px-2 py-1">
                {SITE_CONFIG.reviewsMedia.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition ${
                      currentPath === item.href
                        ? "bg-gold/15 text-gold font-bold"
                        : "text-primary hover:bg-pearl"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="h-3 w-3 text-gold/60" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Information Pages */}
          <div className="space-y-1 pt-2">
            <Link
              to="/blogs"
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                currentPath === "/blogs" ? "bg-gold/15 text-gold" : "text-primary hover:bg-lavender"
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-gold" /> Blogs
              </span>
              <ChevronRight className="h-4 w-4 text-gold" />
            </Link>

            <Link
              to="/q-and-a"
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                currentPath === "/q-and-a"
                  ? "bg-gold/15 text-gold"
                  : "text-primary hover:bg-lavender"
              }`}
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-gold" /> Q&A
              </span>
              <ChevronRight className="h-4 w-4 text-gold" />
            </Link>

            <Link
              to="/about-us"
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                currentPath === "/about-us"
                  ? "bg-gold/15 text-gold"
                  : "text-primary hover:bg-lavender"
              }`}
            >
              <span className="flex items-center gap-2">
                <Info className="h-4 w-4 text-gold" /> About Us
              </span>
              <ChevronRight className="h-4 w-4 text-gold" />
            </Link>

            <Link
              to="/contact-us"
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                currentPath === "/contact-us"
                  ? "bg-gold/15 text-gold"
                  : "text-primary hover:bg-lavender"
              }`}
            >
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" /> Contact Us
              </span>
              <ChevronRight className="h-4 w-4 text-gold" />
            </Link>
          </div>
        </div>

        {/* Pinned Bottom Actions */}
        <div className="shrink-0 border-t border-gold/25 bg-background/98 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-lg space-y-2.5">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setSidebarOpen(false)}
            className={btnPrimary + " w-full !py-3 justify-center text-xs shadow-md"}
          >
            <MessageCircle className="h-4 w-4 text-champagne" />
            <span>Book on WhatsApp</span>
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            onClick={() => setSidebarOpen(false)}
            className={btnOutline + " w-full !py-2.5 justify-center text-xs"}
          >
            <Phone className="h-3.5 w-3.5 text-gold" />
            <span>Call {SITE_CONFIG.phoneFormatted}</span>
          </a>

          <div className="flex items-center justify-center gap-3 pt-1">
            {SITE_CONFIG.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="grid h-8 w-8 place-items-center rounded-full border border-gold/40 text-primary transition hover:bg-gold/15"
              >
                {item.label === "Facebook" && <Facebook className="h-3.5 w-3.5" />}
                {item.label === "Instagram" && <Instagram className="h-3.5 w-3.5" />}
                {item.label === "YouTube" && <Youtube className="h-3.5 w-3.5" />}
              </a>
            ))}
            <a
              href={SITE_CONFIG.olxUrl}
              target="_blank"
              rel="noreferrer"
              className="grid h-8 place-items-center rounded-full border border-gold/40 px-2.5 text-[10px] font-bold text-primary hover:bg-gold/15 transition"
            >
              OLX
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
