import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildPageSeo } from "@/lib/seo";
import {
  Video,
  Play,
  Youtube,
  Calendar,
  Sparkles,
  ChevronRight,
  ExternalLink,
  MessageCircle,
  Phone,
  CheckCircle2,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import { SITE_CONFIG } from "@/config/site";

const videoList = [
  {
    title: "Masnoon Khutbah-e-Nikah Recitation & Sacred Dua-e-Khair",
    category: "Khutbah Recitation",
    duration: "12:45",
    date: "October 2026",
    desc: "A spiritually uplifting recitation of the prophetic Arabic Khutbah-e-Nikah delivered by our certified Islamic Scholar at a grand wedding hall in Karachi.",
    img: hero,
    youtubeUrl: "https://youtube.com/@nikahkhawannikahservicekarachi",
  },
  {
    title: "Live Online Nikah Demonstration for Overseas Pakistanis",
    category: "Online Nikah Guide",
    duration: "15:20",
    date: "September 2026",
    desc: "Step-by-step video demonstration illustrating how an overseas groom in the UK connects via Zoom with the bride and registrar in Karachi with proper Shariah Wakeel representation.",
    img: g1,
    youtubeUrl: "https://youtube.com/@nikahkhawannikahservicekarachi",
  },
  {
    title: "Court Marriage Law & Procedure in Karachi (Advocate Explanation)",
    category: "Legal Lecture",
    duration: "18:10",
    date: "August 2026",
    desc: "Our senior High Court family advocate explains Article 35 of the Constitution, the Sindh Child Marriage Restraint Act, and drafting of free will affidavits.",
    img: g2,
    youtubeUrl: "https://youtube.com/@nikahkhawannikahservicekarachi",
  },
  {
    title: "Blessed Friday Jummah Nikah Ceremony inside Karachi Mosque",
    category: "Masjid Nikah",
    duration: "09:30",
    date: "July 2026",
    desc: "Highlights of a serene Sunnah Nikah solemnization following Friday congregation prayer, followed by traditional date distribution (Nisar-e-Khajoor).",
    img: g3,
    youtubeUrl: "https://youtube.com/@nikahkhawannikahservicekarachi",
  },
];

export const Route = createFileRoute("/nikah-videos")({
  head: () =>
    buildPageSeo({
      title: "Nikah Videos | Khutbah-e-Nikah & Islamic Marriage Sermons",
      description:
        "Watch ceremonial highlights, Khutbah-e-Nikah recitations, online video Nikah demonstrations, and legal educational lectures by registered Nikah Registrar Karachi.",
      path: "/nikah-videos",
      keywords:
        "Nikah Videos Karachi, Khutbah e Nikah Video, Islamic Marriage Sermon Video, Online Nikah Video Pakistan, Nikah Ceremony Clips Karachi, YouTube Nikah Registrar Karachi",
      category: "Media & Gallery",
      schemaType: "CollectionPage",
      faqs: [
        {
          q: "Where can I watch more full-length ceremony recordings and lectures?",
          a: "You can visit our official YouTube Channel (@nikahkhawannikahservicekarachi) to watch complete recitations, Islamic marriage lectures, and client case studies.",
        },
        {
          q: "Do you record private ceremonies for couples?",
          a: "Yes. For online video Nikah ceremonies, we can record the full high-definition Zoom session upon mutual client consent and provide the MP4 recording for family memories.",
        },
      ],
    }),
  component: NikahVideosPage,
});

function NikahVideosPage() {
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
            <span className="text-gold font-semibold">Nikah Videos</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Watch Real Ceremonies & Islamic Guidance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              Nikah Videos, Khutbah Recitations & Legal Lectures
            </h1>

            <p className="font-urdu text-xl sm:text-2xl text-gold/90 font-medium" dir="rtl">
              نکاح کی مسنون ویڈیوز، خطبہ نکاح اور معلوماتی بیانات
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Explore our video archive featuring authentic Khutbah-e-Nikah recitations, online
              video solemnizations, and informative lectures on marriage laws in Pakistan by
              qualified Islamic scholars and legal advocates.
            </p>
          </div>

          {/* YouTube Channel Banner */}
          <div className="mt-10 rounded-3xl border border-red-500/30 bg-red-50/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-xs">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-red-600 text-white shadow-md shrink-0">
                <Youtube className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-primary">
                  Official YouTube Channel
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Subscribe to @nikahkhawannikahservicekarachi for ceremony clips & weekly Islamic
                  family lectures.
                </p>
              </div>
            </div>

            <a
              href="https://youtube.com/@nikahkhawannikahservicekarachi?si=yEm7Mvcg2rXNUndm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-red-700 transition shrink-0"
            >
              <span>Subscribe on YouTube</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Videos Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {videoList.map((vid, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-gold/25 bg-background overflow-hidden shadow-soft transition hover:border-gold hover:shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/9 overflow-hidden bg-pearl">
                    <img
                      src={vid.img}
                      alt={vid.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[1px] flex items-center justify-center transition group-hover:bg-charcoal/30">
                      <a
                        href={vid.youtubeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-14 w-14 place-items-center rounded-full bg-red-600 text-white shadow-2xl transition-transform group-hover:scale-110"
                        aria-label={`Watch ${vid.title}`}
                      >
                        <Play className="h-6 w-6 ml-0.5 fill-white" />
                      </a>
                    </div>

                    <div className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-bold text-champagne border border-gold/40">
                      {vid.category}
                    </div>

                    <div className="absolute bottom-4 right-4 rounded-md bg-charcoal/80 px-2 py-0.5 text-[11px] font-semibold text-white">
                      {vid.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3.5 w-3.5 text-gold" />
                      <span>{vid.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-primary group-hover:text-gold transition">
                      {vid.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {vid.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gold/15 flex items-center justify-between">
                  <a
                    href={vid.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition"
                  >
                    <Youtube className="h-4 w-4" />
                    <span>Watch on YouTube</span>
                  </a>

                  <a
                    href={SITE_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-gold transition"
                  >
                    <span>Book this Scholar</span>
                    <ChevronRight className="h-3 w-3 text-gold" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl border border-gold/40 bg-pearl/60 p-8 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              Ready to Book Your Nikah Ceremony in Karachi?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
              Have our certified Islamic Scholar perform the same dignified Masnoon Khutbah and
              official Nikahnama registration for your family.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold bg-primary px-7 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4 text-champagne" />
                <span>Book on WhatsApp</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-background px-7 py-3 text-xs sm:text-sm font-bold text-primary transition hover:bg-gold/15"
              >
                <Phone className="h-4 w-4 text-gold" />
                <span>Call: {SITE_CONFIG.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
