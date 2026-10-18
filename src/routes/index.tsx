import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  BookOpen, Check, Clock, FileSignature, Globe, Home, Mail, MapPin, MessageCircle,
  Phone, ScrollText, ShieldCheck, Star, Users, Video, Facebook, Instagram, Youtube, Menu, X,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/logo.webp.asset.json";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";

const PHONE = "03032924813";
const WA = "https://wa.me/923032924813";
const EMAIL = "info.nikahkhawan@gmail.com";
const ADDRESS = "Office No. 1, Plot No. 694, Block 31/A, Near Rasheedia Masjid, Allah Wala Town, Korangi Crossing, Karachi";
const MAP = "https://maps.app.goo.gl/vFbmoenHbvw3v2wy8?g_st=ac";
const SOCIAL = [
  { icon: Facebook, href: "https://www.facebook.com/share/1M39MCJL71/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/nikah_khawan_service_karachi?vrfl=MWdjbm1kYmtvYzYycA==", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@nikahkhawannikahservicekarachi?si=yEm7Mvcg2rXNUndm", label: "YouTube" },
];
const OLX = "https://www.olx.com.pk/en/companies/6431";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikah Khawan — Nikah Registrar Service Karachi & Online Worldwide" },
      { name: "description", content: "Trusted Nikah Khawan and registered Nikah Registrar in Karachi. Home, masjid & hall Nikah, court marriage, NADRA registration and online Nikah worldwide." },
      { property: "og:title", content: "Nikah Khawan — Registrar Service Karachi & Online Worldwide" },
      { property: "og:description", content: "Respectful, Shariah-compliant Nikah ceremonies with official registration — in Karachi and online worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Services", "#services"], ["Why Us", "#why"], ["Process", "#process"],
  ["Gallery", "#gallery"], ["FAQ", "#faq"], ["Contact", "#contact"],
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
      <span className="h-px w-8 bg-gold" />{children}<span className="h-px w-8 bg-gold" />
    </div>
  );
}

function Heading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:border-champagne";
const btnOutline = "inline-flex items-center justify-center gap-2 rounded-full border border-gold px-7 py-3.5 text-sm font-semibold text-primary transition hover:bg-champagne/30";

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gold/20 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#top"><img src={logo.url} alt="Nikah Khawan" className="h-12 w-auto md:h-14" /></a>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-sm font-medium text-primary transition hover:text-gold">{l}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={`tel:${PHONE}`} className="text-sm font-semibold text-primary">{PHONE}</a>
            <a href={WA} target="_blank" rel="noreferrer" className={btnPrimary + " !py-2.5 !px-5"}>Book Nikah</a>
          </div>
          <button className="lg:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-gold/20 bg-background px-5 py-4 lg:hidden">
            {nav.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 font-medium text-primary">{l}</a>
            ))}
            <a href={WA} className={btnPrimary + " mt-2"}>Book on WhatsApp</a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-pearl">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-urdu text-2xl leading-loose text-gold" dir="rtl" lang="ur">بِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِیْمِ</p>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background px-4 py-1.5 text-xs font-semibold text-primary">
              <ShieldCheck className="h-4 w-4 text-gold" /> Registered Nikah Registrar · Karachi
            </div>
            <h1 className="text-5xl font-semibold leading-[1.05] md:text-7xl">
              Begin your forever with a <em className="text-gold">blessed</em> Nikah
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Respectful, Shariah-compliant Nikah ceremonies with official registration — at your home, masjid or
              hall in Karachi, and online for couples worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA} target="_blank" rel="noreferrer" className={btnPrimary}><MessageCircle className="h-4 w-4" /> WhatsApp Us</a>
              <a href={`tel:${PHONE}`} className={btnOutline}><Phone className="h-4 w-4" /> Call {PHONE}</a>
            </div>
            <div className="mt-10 flex gap-10">
              {[["10+", "Years of service"], ["5,000+", "Nikahs performed"], ["24/7", "Availability"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-semibold text-primary">{n}</div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-gold/40" />
            <img src={hero} alt="Pakistani couple signing Nikah Nama with Nikah Khawan" width={1280} height={1536}
              className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-soft" />
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-gold/30 bg-background p-4 shadow-soft md:-left-8">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-lavender"><Globe className="h-5 w-5 text-gold" /></div>
                <div>
                  <div className="text-sm font-semibold text-primary">Online Nikah</div>
                  <div className="text-xs text-muted-foreground">UK · USA · UAE · Canada & more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Why />
      <Process />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />

      <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border-2 border-gold bg-primary text-primary-foreground shadow-soft transition hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

const services = [
  { icon: Home, t: "Nikah at Home", d: "Our Nikah Khawan comes to your home anywhere in Karachi with all documents." },
  { icon: BookOpen, t: "Masjid & Hall Nikah", d: "Dignified ceremonies at your masjid, banquet or marquee of choice." },
  { icon: Video, t: "Online Nikah Worldwide", d: "Valid Nikah via video call for couples and families living abroad." },
  { icon: FileSignature, t: "Nikah Registration", d: "Official Nikah Nama filled, signed and registered with the Union Council." },
  { icon: ScrollText, t: "NADRA Marriage Certificate", d: "Complete guidance for computerized NADRA marriage registration certificates." },
  { icon: Users, t: "Court Marriage", d: "Legal court marriage assistance handled with privacy and care." },
];

function Services() {
  return (
    <section id="services" className="bg-lavender py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Heading eyebrow="Our Services" title="Every Nikah, handled with care" sub="From the Khutbah to official registration — one trusted service for your entire Nikah." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: I, t, d }) => (
            <div key={t} className="group rounded-2xl border border-gold/20 bg-background p-8 transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-gold/50 bg-pearl">
                <I className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-2xl font-semibold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const points = [
    "Qualified, experienced and respected Nikah Khawan",
    "Government-registered Nikah Registrar",
    "Correct, complete Nikah Nama — no errors, no delays",
    "Available 24/7, including short-notice bookings",
    "Online Nikah for overseas Pakistanis",
    "Transparent fees, no hidden charges",
  ];
  return (
    <section id="why" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
        <img src={g3} alt="Nikah Khawan reciting at a ceremony" loading="lazy" width={1024} height={1024}
          className="aspect-square w-full rounded-[1.75rem] object-cover shadow-soft" />
        <div>
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold"><span className="h-px w-8 bg-gold" />Why Choose Us</div>
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">Trusted by thousands of families across Karachi</h2>
          <p className="mt-4 text-muted-foreground">A Nikah is a sacred Sunnah. We perform it with dignity, accuracy and warmth — so your family can focus on the blessing.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold"><Check className="h-3.5 w-3.5 text-gold" /></span>
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { t: "Contact Us", d: "Call or WhatsApp with your date, time and venue." },
    { t: "Share Documents", d: "Send CNIC copies of bride, groom, witnesses and wali." },
    { t: "Nikah Ceremony", d: "Khutbah, Ijab-o-Qubool and Dua performed with grace." },
    { t: "Registration", d: "Nikah Nama registered and certificate delivered." },
  ];
  return (
    <section id="process" className="bg-pearl py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Heading eyebrow="How It Works" title="Four simple steps" />
        <div className="relative grid gap-10 md:grid-cols-4">
          <div className="gold-rule absolute left-[12%] right-[12%] top-8 hidden md:block" />
          {steps.map((s, i) => (
            <div key={s.t} className="relative text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold bg-background font-display text-2xl font-semibold text-primary shadow-soft">{i + 1}</div>
              <h3 className="mt-6 text-2xl font-semibold">{s.t}</h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Heading eyebrow="Gallery" title="Moments of barakah" />
        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <img src={g2} alt="Couple with family at Nikah" loading="lazy" width={1024} height={1280} className="h-full w-full rounded-2xl object-cover md:row-span-2" />
          <img src={g1} alt="Bride signing Nikah Nama" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-2xl object-cover" />
          <img src={hero} alt="Nikah ceremony" loading="lazy" width={1280} height={1536} className="aspect-square w-full rounded-2xl object-cover object-top" />
          <img src={g3} alt="Nikah Khawan" loading="lazy" width={1024} height={1024} className="aspect-[2/1] w-full rounded-2xl object-cover md:col-span-2" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { n: "Ahmed & Ayesha", c: "Gulshan-e-Iqbal, Karachi", q: "Maulana sahab arrived on time and explained everything beautifully. The registration was done the same week." },
    { n: "Usman & Hira", c: "London, UK", q: "We did our Nikah online with families in Karachi. Professional, clear and completely valid — highly recommended." },
    { n: "Bilal & Sana", c: "DHA, Karachi", q: "Very respectful service. Our elders were impressed by the Khutbah and the care taken with the Nikah Nama." },
  ];
  return (
    <section className="bg-lavender py-24">
      <div className="mx-auto max-w-7xl px-5">
        <Heading eyebrow="Testimonials" title="Words from our families" />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.n} className="rounded-2xl border border-gold/20 bg-background p-8 shadow-soft">
              <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <blockquote className="mt-5 font-display text-xl leading-snug text-charcoal">“{t.q}”</blockquote>
              <figcaption className="mt-6 border-t border-gold/20 pt-4">
                <div className="font-semibold text-primary">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    ["Which documents are required for Nikah?", "CNIC copies of the bride, groom, two witnesses and the wali (guardian), plus passport-size photos of the couple."],
    ["Is an online Nikah valid?", "Yes. When performed correctly with Ijab-o-Qubool, witnesses and a wakeel, an online Nikah is valid and can be registered officially."],
    ["Do you come to our home or venue?", "Yes, we serve all areas of Karachi — homes, masjids, banquet halls and marquees."],
    ["How soon will we receive the Nikah Nama?", "The Nikah Nama is completed at the ceremony; registration and NADRA certificate guidance follow promptly."],
    ["Can you arrange a Nikah at short notice?", "Yes, we are available 24/7. Call or WhatsApp us and we'll do our best to accommodate you."],
  ];
  return (
    <section id="faq" className="bg-pearl py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Heading eyebrow="FAQ" title="Questions, answered" />
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`i${i}`} className="rounded-xl border border-gold/25 bg-background px-6">
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
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
    const msg = `Assalam-o-Alaikum, I'd like to book a Nikah.\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nDate: ${f.get("date")}\nService: ${f.get("service")}\nDetails: ${f.get("msg")}`;
    window.open(`${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-champagne/50";
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold"><span className="h-px w-8 bg-gold" />Book Your Nikah</div>
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">Let us make your day blessed</h2>
          <p className="mt-4 text-muted-foreground">Reach us any time — we'll respond quickly with availability and guidance.</p>
          <div className="mt-8 space-y-5">
            {[
              { i: Phone, l: "Call / WhatsApp", v: PHONE, h: `tel:${PHONE}` },
              { i: Mail, l: "Email", v: EMAIL, h: `mailto:${EMAIL}` },
              { i: MapPin, l: "Office", v: ADDRESS, h: MAP },
              { i: Clock, l: "Hours", v: "Open 24/7, all days", h: undefined },
            ].map(({ i: I, l, v, h }) => (
              <a key={l} href={h} target={h?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50 bg-lavender"><I className="h-5 w-5 text-gold" /></span>
                <span><span className="block text-xs uppercase tracking-wider text-muted-foreground">{l}</span><span className="text-sm font-medium text-primary">{v}</span></span>
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={submit} className="rounded-[1.75rem] border border-gold/30 bg-pearl p-8 shadow-soft md:p-10 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required name="name" placeholder="Your name" className={field} />
            <input required name="phone" placeholder="Phone number" className={field} />
            <input name="date" type="date" className={field} />
            <select name="service" className={field} defaultValue="Nikah at Home">
              {services.map((s) => <option key={s.t}>{s.t}</option>)}
            </select>
            <textarea name="msg" rows={4} placeholder="Venue, city or any details" className={field + " sm:col-span-2"} />
          </div>
          <button type="submit" className={btnPrimary + " mt-6 w-full"}><MessageCircle className="h-4 w-4" /> Send via WhatsApp</button>
          <p className="mt-3 text-center text-xs text-muted-foreground">Your request opens directly in WhatsApp.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-block rounded-xl bg-background p-3"><img src={logo.url} alt="Nikah Khawan" className="h-14 w-auto" /></div>
          <p className="mt-5 max-w-sm text-sm opacity-80">Nikah Khawan & Registrar Service — Karachi and online worldwide. Performing Nikah with dignity, accuracy and barakah.</p>
          <div className="mt-6 flex gap-3">
            {SOCIAL.map(({ icon: I, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-champagne/40 text-champagne transition hover:bg-champagne/10"><I className="h-4 w-4" /></a>
            ))}
            <a href={OLX} target="_blank" rel="noreferrer" className="grid h-10 place-items-center rounded-full border border-champagne/40 px-4 text-xs font-bold text-champagne hover:bg-champagne/10">OLX</a>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-display text-xl text-champagne">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">{nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-champagne">{l}</a></li>)}</ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-xl text-champagne">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li><a href={`tel:${PHONE}`}>{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="break-all">{EMAIL}</a></li>
            <li><a href={MAP} target="_blank" rel="noreferrer">{ADDRESS}</a></li>
            <li><a href="https://www.nikahkhawan.com">www.nikahkhawan.com</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5"><div className="gold-rule" /></div>
      <p className="py-6 text-center text-xs opacity-70">© {new Date().getFullYear()} Nikah Khawan. All rights reserved.</p>
    </footer>
  );
}
