import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { buildPageSeo } from "@/lib/seo";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export const Route = createFileRoute("/contact-us")({
  head: () =>
    buildPageSeo({
      title: "Contact Us | 24/7 Nikah Registrar Office Karachi & WhatsApp Helpline",
      description:
        "Contact our Government Registered Nikah Registrar office in Karachi. 24/7 helpline (0303-2924813), instant WhatsApp booking, and head office in Korangi Crossing.",
      path: "/contact-us",
      keywords:
        "Contact Nikah Registrar Karachi, Nikah Khawan Phone Number Karachi, Nikah Registrar WhatsApp Karachi, Nikah Office Korangi Crossing, Emergency Nikah Khawan Karachi, Marriage Registrar Address Karachi",
      category: "Contact & Location",
      schemaType: "ContactPage",
      faqs: [
        {
          q: "What is your official phone number and WhatsApp helpline in Karachi?",
          a: "Our official 24/7 phone number is 0303-2924813 (+923032924813) and direct WhatsApp helpline is accessible via https://wa.me/923032924813.",
        },
        {
          q: "What are your office hours in Karachi?",
          a: "Our head office is open Monday through Sunday. Moreover, our on-call Nikah Khawan and emergency registrar dispatch operates 24 hours a day, 7 days a week across all areas of Karachi.",
        },
      ],
    }),
  component: ContactUsPage,
});

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Nikah Khawan Service Karachi",
    venue: "",
    date: "",
    notes: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Assalam-o-Alaikum,
I want to inquire/book a Nikah ceremony:
*Name:* ${formData.name || "N/A"}
*Phone:* ${formData.phone || "N/A"}
*Service:* ${formData.service}
*Venue/Area:* ${formData.venue || "N/A"}
*Date:* ${formData.date || "N/A"}
*Notes:* ${formData.notes || "None"}`;

    const url = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

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
            <span className="text-gold font-semibold">Contact Us</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>24/7 On-Call Support Across Karachi</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              Contact Nikah Registrar Karachi & 24/7 Helpline
            </h1>

            <p className="font-urdu text-xl sm:text-2xl text-gold/90 font-medium" dir="rtl">
              ہم سے رابطہ کریں — 24 گھنٹے فوری سروس، فون کال اور واٹس ایپ
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Have an urgent ceremony, need document consultation, or wish to schedule your Nikah
              date? Call our 24/7 direct helpline, message us on WhatsApp, or visit our registrar
              office in Karachi.
            </p>
          </div>

          {/* Contact Details & Quick Info Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="rounded-3xl border border-gold/25 bg-background p-6 shadow-soft transition hover:border-gold hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-pearl border border-gold/30 text-gold mb-4 group-hover:bg-gold/15 transition">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-primary">Direct Phone Helpline</h3>
                <p className="text-xs text-muted-foreground mt-1">24/7 Immediate Response</p>
                <div className="mt-3 text-base font-extrabold text-gold">
                  {SITE_CONFIG.phoneFormatted}
                </div>
              </div>
              <span className="text-xs font-bold text-primary group-hover:text-gold transition mt-4 flex items-center gap-1">
                Call Now <ChevronRight className="h-3 w-3" />
              </span>
            </a>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-gold/25 bg-background p-6 shadow-soft transition hover:border-gold hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-600 mb-4 group-hover:bg-emerald-100 transition">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-primary">WhatsApp 24/7 Chat</h3>
                <p className="text-xs text-muted-foreground mt-1">Send Docs & Booking Inquiries</p>
                <div className="mt-3 text-base font-extrabold text-emerald-600">
                  +92 303 2924813
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-700 group-hover:text-emerald-800 transition mt-4 flex items-center gap-1">
                Chat on WhatsApp <ChevronRight className="h-3 w-3" />
              </span>
            </a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="rounded-3xl border border-gold/25 bg-background p-6 shadow-soft transition hover:border-gold hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-pearl border border-gold/30 text-gold mb-4 group-hover:bg-gold/15 transition">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-primary">Official Email</h3>
                <p className="text-xs text-muted-foreground mt-1">Inquiries & Overseas Records</p>
                <div className="mt-3 text-xs font-semibold text-primary break-all">
                  {SITE_CONFIG.email}
                </div>
              </div>
              <span className="text-xs font-bold text-primary group-hover:text-gold transition mt-4 flex items-center gap-1">
                Send Email <ChevronRight className="h-3 w-3" />
              </span>
            </a>

            <div className="rounded-3xl border border-gold/25 bg-background p-6 shadow-soft flex flex-col justify-between">
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-pearl border border-gold/30 text-gold mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-primary">Operating Hours</h3>
                <p className="text-xs text-muted-foreground mt-1">Karachi & International</p>
                <div className="mt-3 text-xs font-bold text-primary">
                  Office: 9:00 AM – 10:00 PM
                  <br />
                  Emergency On-Call: 24/7
                </div>
              </div>
              <span className="text-[11px] text-emerald-600 font-bold mt-4 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Always Open Online
              </span>
            </div>
          </div>

          {/* Form & Map Section */}
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Direct WhatsApp Booking Form */}
            <div className="rounded-3xl border border-gold/30 bg-background p-6 sm:p-10 shadow-soft">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                Fast Online Reservation Form
              </h2>
              <p className="text-xs text-muted-foreground mb-6">
                Fill this form for instant verification on WhatsApp. Our registrar confirms dates in
                minutes.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gold/30 bg-pearl/40 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-gold focus:outline-hidden"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="03XX-XXXXXXX"
                      className="w-full rounded-xl border border-gold/30 bg-pearl/40 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-gold focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">
                      Select Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-gold/30 bg-pearl/40 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-gold focus:outline-hidden"
                    >
                      <option value="Nikah Khawan Service Karachi">
                        Nikah Khawan Service Karachi
                      </option>
                      <option value="Nikah In Hall">Nikah In Hall (Banquet/Lawn)</option>
                      <option value="Nikah In Home">Nikah In Home (Doorstep)</option>
                      <option value="Nikah In Mosque">Nikah In Mosque (Masjid)</option>
                      <option value="Nikah In Hotel">Nikah In Hotel (4/5 Star)</option>
                      <option value="Nikah In Our Office">Nikah In Our Office</option>
                      <option value="Court Marriage">Court Marriage & Legal Registration</option>
                      <option value="Online Nikah Worldwide">
                        Online Nikah Worldwide (Zoom/Video)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">
                      Venue / Area in Karachi
                    </label>
                    <input
                      type="text"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      placeholder="e.g. DHA, Gulshan, Banquet Name"
                      className="w-full rounded-xl border border-gold/30 bg-pearl/40 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-gold focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">
                      Intended Date & Time
                    </label>
                    <input
                      type="text"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      placeholder="e.g. 25th Dec, 8:00 PM"
                      className="w-full rounded-xl border border-gold/30 bg-pearl/40 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-gold focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-primary mb-1">
                    Special Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention timing constraints, overseas bride/groom details, or Wali requirements"
                    className="w-full rounded-xl border border-gold/30 bg-pearl/40 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-gold focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-gradient-to-r from-gold to-champagne px-6 py-3.5 text-sm font-bold text-primary shadow-soft hover:brightness-105 transition cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Reservation via WhatsApp</span>
                </button>
              </form>
            </div>

            {/* Office Address & Location Card */}
            <div className="rounded-3xl border border-gold/30 bg-background p-6 sm:p-10 shadow-soft flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span>Head Office Location</span>
                </h2>
                <p className="text-xs text-muted-foreground mb-6">
                  Visit our official registrar chambers for private solemnization or legal
                  consultations.
                </p>

                <div className="rounded-2xl border border-gold/25 bg-pearl/50 p-5 space-y-3 mb-6">
                  <div className="text-xs font-bold text-gold uppercase tracking-wider">
                    Official Registered Address
                  </div>
                  <p className="text-xs sm:text-sm text-foreground font-medium leading-relaxed">
                    {SITE_CONFIG.address}
                  </p>
                  <div className="text-xs text-muted-foreground pt-1">
                    📍 Landmarks: Near Rasheedia Masjid, Allah Wala Town, Korangi Crossing (Minutes
                    from DHA Phase 7 Ext & Qayyumabad).
                  </div>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Air-Conditioned Private Solemnization Rooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Free Parking & Dedicated Waiting Lounge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Official Stamp Paper & Seal Depository on Premises</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition"
                >
                  <Phone className="h-4 w-4 text-champagne" />
                  <span>Call: {SITE_CONFIG.phoneFormatted}</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-pearl px-6 py-3 text-xs font-bold text-primary hover:bg-gold/15 transition"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Registrar</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Google Maps Section */}
        <section
          aria-label="Head Office Location Map"
          className="mt-16 md:mt-20 w-full border-t border-b border-gold/30 bg-pearl/40"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider mb-1">
                  <MapPin className="h-4 w-4" />
                  <span>Interactive Location Map</span>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 ml-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Verified Office
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  Official Nikah Registrar Office Location
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {SITE_CONFIG.address} · Near Rasheedia Masjid, Allah Wala Town, Korangi Crossing
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <a
                  href={SITE_CONFIG.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-md hover:bg-primary/90 transition"
                >
                  <MapPin className="h-3.5 w-3.5 text-champagne" />
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Full Screen Width Map Container */}
          <div className="w-full relative bg-charcoal/5 border-t border-gold/20">
            <iframe
              title="Nikah Registrar Karachi Office Location Map Full Width"
              src="https://maps.google.com/maps?q=Rasheedia+Masjid+Allah+Wala+Town+Korangi+Crossing+Karachi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] sm:h-[460px] md:h-[520px] block"
            />
          </div>

          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-primary">🚗 Easy Highway Access:</span>
              <span>
                Direct approach from Korangi Crossing, DHA Phase 7 Ext, and Qayyumabad Flyover.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span>🅿️ Dedicated On-Premises Parking</span>
              <span>❄️ Air-Conditioned Registry Chambers</span>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
