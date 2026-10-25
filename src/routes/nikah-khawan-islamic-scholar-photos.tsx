import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildPageSeo } from "@/lib/seo";
import {
  Award,
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  ChevronRight,
  GraduationCap,
  FileCheck,
} from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import hero from "@/assets/hero.jpg";
import { SITE_CONFIG } from "@/config/site";

const credentials = [
  {
    title: "Shahadat-ul-Aalamia (Master of Islamic Studies)",
    institution: "Wifaq-ul-Madaris Al-Arabia Pakistan",
    desc: "Complete 8-year Darse Nizami rigorous curriculum covering Quranic Exegesis (Tafseer), Hadith Sciences, Islamic Jurisprudence (Fiqh), and Family Law.",
  },
  {
    title: "Government Registered Nikah Registrar License",
    institution: "Government of Sindh / Local Government Department",
    desc: "Officially authorized and licensed under the Muslim Family Laws Ordinance 1961 with authorized seal and official registration serial numbers.",
  },
  {
    title: "15+ Years of Matrimonial Service",
    institution: "Karachi & International Overseas Services",
    desc: "Solemnized over 5,000+ legal and Shariah-compliant Nikah ceremonies across homes, banquet halls, luxury hotels, mosques, and live international video streams.",
  },
  {
    title: "Authorized Union Council & NADRA Liaison",
    institution: "Sindh Local Councils & NADRA CRMS",
    desc: "Facilitating official computerized marriage registration certificates (MRC), foreign embassy attestations, and legal affidavits.",
  },
];

const photoShowcase = [
  {
    title: "Executive VIP Hotel Nikah Solemnization",
    location: "Pearl Continental / Marriott Hotel, Karachi",
    desc: "Qualified Islamic Scholar supervising official register signing alongside groom with ceremonial rose-petal table decor.",
    img: "/images/scholar/islamic-scholar-1.jpg",
    category: "VIP Hotel Nikah",
  },
  {
    title: "Traditional Karachi Banquet Stage Nikah",
    location: "Grand Marriage Lawn & Banquet, Karachi",
    desc: "Islamic Scholar reviewing legal conditions of Nikahnama with groom, family elders, and witnesses on stage.",
    img: "/images/scholar/islamic-scholar-2.jpg",
    category: "Banquet Hall Stage",
  },
  {
    title: "Dignified Banquet Hall Nikah Solemnization",
    location: "DHA Creek Banquet Hall, Karachi",
    desc: "Recitation of the sacred Masnoon Khutbah-e-Nikah over the hall audio system before family and guests.",
    img: hero,
    category: "Hall Ceremony",
  },
  {
    title: "Home Nikah & Elder Blessings",
    location: "Clifton Block 4, Karachi",
    desc: "A warm, intimate family gathering with elderly grandparents as the Nikah Khawan guides official signatures.",
    img: g1,
    category: "Home Ceremony",
  },
  {
    title: "Official Government Nikahnama Signing",
    location: "Registrar Head Office, Karachi",
    desc: "Verification of CNICs, recording of Haq-Mehr, and official stamping of 4-copy government Nikahnama forms.",
    img: g2,
    category: "Official Documentation",
  },
  {
    title: "Sacred Sunnah Masjid Nikah Ceremony",
    location: "Jamea Masjid, Karachi",
    desc: "Solemnization following congregation prayer, accompanied by soulful collective Dua-e-Khair for the newlyweds.",
    img: g3,
    category: "Masjid Nikah",
  },
];

export const Route = createFileRoute("/nikah-khawan-islamic-scholar-photos")({
  head: () =>
    buildPageSeo({
      title: "Islamic Scholar & Nikah Khawan Pictures | Official Credentials",
      description:
        "Official photos, Islamic qualifications (Darse Nizami), and government licensing credentials of our Registered Nikah Registrar and Islamic Scholars conducting ceremonies across Karachi and worldwide.",
      path: "/nikah-khawan-islamic-scholar-photos",
      keywords:
        "Nikah Khawan Pictures Karachi, Islamic Scholar Nikah Photos, Nikah Registrar Credentials Karachi, Darse Nizami Nikah Khawan, Official Nikahnama Photos Karachi, Verified Nikah Registrar Pakistan",
      category: "Media & Gallery",
      schemaType: "ImageGallery",
      faqs: [
        {
          q: "What Islamic qualifications do your Nikah Khawan scholars possess?",
          a: "Our scholars hold the prestigious Shahadat-ul-Aalamia degree (equivalent to M.A. in Islamic Studies) certified by Wifaq-ul-Madaris Al-Arabia Pakistan, along with specialized training in Islamic Family Law (Fiqh-ul-Munakahat).",
        },
        {
          q: "Can we verify the Nikah Registrar's government license in person?",
          a: "Absolutely. When the Nikah Registrar visits your home or venue, he carries his official government identification, official registration seal, and government-issued license under the Muslim Family Laws Ordinance 1961.",
        },
      ],
    }),
  component: ScholarPhotosPage,
});

function ScholarPhotosPage() {
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
            <span className="text-gold font-semibold">Islamic Scholar Photos & Credentials</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Certified Islamic Authority & Legal Licensing</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              Nikah Khawan Islamic Scholar Credentials & Photos
            </h1>

            <p className="font-urdu text-xl sm:text-2xl text-gold/90 font-medium" dir="rtl">
              علمائے کرام، مستند نکاح خواں اور قانونی نکاح رجسٹرار کی اسناد و تصاویر
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              When entering into the sacred covenant of Nikah, working with authentic, pious, and
              officially licensed Islamic scholars ensures your marriage is spiritually blessed and
              legally protected under Pakistani law.
            </p>
          </div>

          {/* Credentials & Qualifications Grid */}
          <div className="mt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
                Verified Islamic Background
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Scholarly Qualifications & Government Authorization
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-gold/25 bg-background p-6 shadow-soft transition hover:border-gold hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-pearl border border-gold/40 text-gold shrink-0">
                      {idx === 0 && <GraduationCap className="h-6 w-6" />}
                      {idx === 1 && <ShieldCheck className="h-6 w-6" />}
                      {idx === 2 && <Award className="h-6 w-6" />}
                      {idx === 3 && <FileCheck className="h-6 w-6" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-primary">{cred.title}</h3>
                      <div className="text-xs font-semibold text-gold mt-0.5">
                        {cred.institution}
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real Photo Showcase Gallery */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
                Ceremonial Moments
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Ceremonial Photo Gallery & Matrimonial Records
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                Glimpses of authentic Nikah solemnizations conducted across wedding halls, homes,
                and masajid in Karachi.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {photoShowcase.map((photo, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-gold/30 bg-background overflow-hidden shadow-soft transition hover:border-gold hover:shadow-xl group"
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-pearl">
                    <img
                      src={photo.img}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-primary/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-champagne border border-gold/40">
                      {photo.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary group-hover:text-gold transition">
                      {photo.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gold font-medium mt-1 mb-2">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{photo.location}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{photo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 rounded-3xl border border-gold/40 bg-pearl/60 p-8 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              Book a Certified Nikah Registrar for Your Event
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
              Ensure your wedding ceremony is conducted with the utmost religious reverence, legal
              clarity, and Sunnah blessings.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold bg-primary px-7 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4 text-champagne" />
                <span>Book Registrar on WhatsApp</span>
              </a>
              <Link
                to="/nikah-videos"
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-background px-7 py-3 text-xs sm:text-sm font-bold text-primary transition hover:bg-gold/15"
              >
                <span>Watch Nikah Videos & Lectures →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
