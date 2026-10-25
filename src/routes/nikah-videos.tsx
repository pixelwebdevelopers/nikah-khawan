import { useState } from "react";
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
  X,
  Globe,
  Home,
  Building2,
  Landmark,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  urduTitle: string;
  category: "Karachi Ceremony" | "Online Nikah" | "Holy Cities";
  venue: string;
  duration: string;
  date: string;
  desc: string;
  isShort?: boolean;
}

const clientVideos: VideoItem[] = [
  {
    id: "online-nikah-full",
    youtubeId: "uj0UWsubwSo",
    title: "Official Online Nikah Live Video Solemnization",
    urduTitle: "آن لائن نکاح خوانی اور بین الاقوامی شریعتی عمل",
    category: "Online Nikah",
    venue: "Live Zoom Video · Overseas Couple & Registrar",
    duration: "Full Video",
    date: "October 2026",
    desc: "Complete Shariah-compliant online video Nikah solemnization session connecting overseas couple with registered Nikah Khawan and verified legal proxy (Wakeel).",
  },
  {
    id: "nikah-in-home",
    youtubeId: "94C1hhVxSWs",
    title: "Nikah In Home — Intimate Residence Sunnah Ceremony",
    urduTitle: "گھر پر مسنون نکاح کی پروقار اور بابرکت تقریب",
    category: "Karachi Ceremony",
    venue: "Family Residence, Karachi",
    duration: "Full Video",
    date: "October 2026",
    desc: "Sunnah Nikah ceremony in comfortable family living room at client residence in Karachi, featuring Masnoon Arabic Khutbah, verbal Ijab-o-Qubool, and official Nikahnama register signing.",
  },
  {
    id: "nikah-in-hall",
    youtubeId: "Q1ToBEqe2Zs",
    title: "Nikah In Hall — Grand Wedding Banquet Stage Ceremony",
    urduTitle: "شادی ہال اور بینکوئٹ میں نکاح خوانی و اجتماعی دعا",
    category: "Karachi Ceremony",
    venue: "Grand Banquet Hall Stage, Karachi",
    duration: "Full Video",
    date: "October 2026",
    desc: "Dignified stage solemnization at wedding banquet hall before guests and family elders, followed by an emotional, soul-stirring collective Dua-e-Khair.",
  },
  {
    id: "nikah-in-pc-hotel",
    youtubeId: "OzbHy123P8o",
    title: "Nikah In PC Hotel — VIP Executive Hotel Solemnization",
    urduTitle: "پی سی ہوٹل کراچی میں پروقار وی آئی پی نکاح تقریب",
    category: "Karachi Ceremony",
    venue: "Pearl Continental (PC) Hotel, Karachi",
    duration: "Full Video",
    date: "October 2026",
    desc: "High-profile executive wedding ceremony at Pearl Continental Hotel Karachi with bilingual Arabic and Urdu Khutbah, official seals, and certified documentation.",
  },
  {
    id: "online-nikah-short",
    youtubeId: "rrBgCXHiIVU",
    title: "Online Nikah Worldwide for Overseas Pakistanis (UK, USA, UAE)",
    urduTitle: "بیرونِ ملک پاکستانیوں کے لیے آن لائن نکاح — اہم جھلکیاں",
    category: "Online Nikah",
    venue: "Global Video Conference · UK · USA · Gulf",
    duration: "Video Short",
    date: "October 2026",
    desc: "Demonstration of quick, lawful video conference Nikah process with legal proxy representation and computerized NADRA marriage registration certificate (MRC).",
    isShort: true,
  },
  {
    id: "nikah-madinah-short",
    youtubeId: "aDldLG6y5oE",
    title: "Blessed Nikah Ceremony Highlights in Holy Madinah al-Munawwarah",
    urduTitle: "مدینہ منورہ مسجد نبوی شریف کے بابرکت سائے میں نکاح",
    category: "Holy Cities",
    venue: "Masjid an-Nabawi Courtyard, Madinah",
    duration: "Video Short",
    date: "October 2026",
    desc: "Spiritual moments of sacred Nikah solemnization in holy Madinah al-Munawwarah near the sacred courtyard of Masjid an-Nabawi filled with Prophetic Barakah.",
    isShort: true,
  },
];

export const Route = createFileRoute("/nikah-videos")({
  head: () =>
    buildPageSeo({
      title: "Nikah Videos | Watch Real Ceremonies, Khutbah & Online Nikah",
      description:
        "Watch real Nikah ceremonies solemnized across Karachi at homes, banquet halls, and 5-star hotels, plus live online video Nikah and blessed Madinah recordings.",
      path: "/nikah-videos",
      keywords:
        "Nikah Videos Karachi, Real Nikah Video Pakistan, Online Nikah Video Proof, PC Hotel Nikah Video, Banquet Hall Nikah Karachi, Madinah Nikah Video, YouTube Nikah Registrar",
      category: "Media & Gallery",
      schemaType: "CollectionPage",
      faqs: [
        {
          q: "Are all the videos on this page actual ceremonies conducted by your team?",
          a: "Yes, all ceremony clips and recitations are recorded during real weddings conducted by our Government Registered Nikah Registrar and Islamic Scholars with the permission of the families.",
        },
        {
          q: "Can you record our online Nikah ceremony for family records?",
          a: "Yes. For online video Nikah ceremonies, upon mutual request we record the high-definition live Zoom session and provide a private MP4 video link for your family archives.",
        },
      ],
    }),
  component: NikahVideosPage,
});

function NikahVideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Karachi Ceremony", "Online Nikah", "Holy Cities"];

  const filteredVideos =
    activeCategory === "All"
      ? clientVideos
      : clientVideos.filter((v) => v.category === activeCategory);

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
              <span>Watch Real Client Ceremonies & Recitations</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              Real Nikah Videos & Ceremony Recordings
            </h1>

            <p className="font-urdu text-xl sm:text-2xl text-gold/90 font-medium" dir="rtl">
              حقیقی نکاح خوانی کی ویڈیوز — گھر، ہال، ہوٹل اور آن لائن پوری دنیا میں
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Explore authentic video recordings of real Nikah ceremonies solemnized by our licensed
              Nikah Registrar across Karachi homes, grand banquet halls, 5-star hotels (PC Hotel),
              live online video conferences, and blessed holy destinations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border border-gold shadow-md"
                    : "bg-background border border-gold/30 text-primary hover:bg-gold/15"
                }`}
              >
                {cat === "All" && "All Videos (6)"}
                {cat === "Karachi Ceremony" && "Karachi (Home, Hall, Hotel)"}
                {cat === "Online Nikah" && "Online Nikah Worldwide"}
                {cat === "Holy Cities" && "Holy Madinah"}
              </button>
            ))}
          </div>

          {/* YouTube Channel Banner */}
          <div className="mt-8 rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-50/50 via-background to-red-50/30 p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 max-w-4xl mx-auto shadow-xs">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl bg-red-600 text-white shadow-md shrink-0">
                <Youtube className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-primary">
                  Official YouTube Channel (@nikahkhawannikahservicekarachi)
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Watch new weekly recitations, Khutbah-e-Nikah sermons, and matrimonial advice.
                </p>
              </div>
            </div>

            <a
              href="https://youtube.com/@nikahkhawannikahservicekarachi?si=yEm7Mvcg2rXNUndm"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-red-700 transition shrink-0"
            >
              <span>Visit YouTube Channel</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Videos Grid */}
          <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((vid) => {
              const thumbUrl = `https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`;

              return (
                <div
                  key={vid.id}
                  className="rounded-3xl border border-gold/25 bg-background overflow-hidden shadow-soft transition-all duration-300 hover:border-gold hover:shadow-xl group flex flex-col justify-between"
                >
                  <div>
                    {/* Video Thumbnail with Play Button */}
                    <div className="relative aspect-16/9 sm:aspect-16/10 overflow-hidden bg-charcoal">
                      <img
                        src={thumbUrl}
                        alt={vid.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() => setSelectedVideo(vid)}
                          className="grid h-14 w-14 place-items-center rounded-full bg-red-600 text-white shadow-2xl transition-all duration-300 hover:scale-115 hover:bg-red-700 group-hover:ring-4 group-hover:ring-red-400/50 cursor-pointer"
                          aria-label={`Play ${vid.title}`}
                        >
                          <Play className="h-6 w-6 ml-0.5 fill-white text-white" />
                        </button>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-champagne border border-gold/40">
                        {vid.category}
                      </div>

                      {/* Duration / Format Badge */}
                      <div className="absolute bottom-3 right-3 rounded-md bg-charcoal/90 px-2 py-0.5 text-[11px] font-semibold text-white">
                        {vid.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 space-y-2">
                      <div className="text-[11px] font-bold text-gold uppercase tracking-wider">
                        {vid.venue}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-gold transition leading-snug">
                        {vid.title}
                      </h3>

                      <p className="font-urdu text-sm text-gold/80" dir="rtl">
                        {vid.urduTitle}
                      </p>

                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {vid.desc}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-5 pb-5 pt-3 border-t border-gold/15 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedVideo(vid)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition cursor-pointer"
                    >
                      <Play className="h-3.5 w-3.5 fill-red-600" />
                      <span>Watch Video</span>
                    </button>

                    <a
                      href={SITE_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-gold transition"
                    >
                      <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Book Scholar</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl border border-gold/40 bg-pearl/60 p-8 text-center max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-primary">
              Ready to Book Your Nikah Ceremony with Our Scholars?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
              Have our certified Islamic Scholar perform the same dignified Masnoon Khutbah and
              official government Nikahnama registration for your family.
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

      {/* Interactive YouTube Video Player Modal */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedVideo.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border-2 border-gold/40 bg-background shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gold/20 bg-pearl px-5 py-4">
              <div className="pr-4">
                <span className="inline-block rounded-full bg-primary/10 border border-gold/30 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase">
                  {selectedVideo.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-primary mt-1 line-clamp-1">
                  {selectedVideo.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 bg-background text-primary transition hover:bg-gold/15 cursor-pointer shrink-0"
                aria-label="Close video player"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Video Iframe Container */}
            <div className="relative aspect-16/9 w-full bg-black">
              <iframe
                title={selectedVideo.title}
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-background p-4 sm:p-5 border-t border-gold/15">
              <p className="text-xs text-muted-foreground text-center sm:text-left line-clamp-2">
                {selectedVideo.desc}
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-red-500/40 bg-red-50 px-4 py-2 text-xs font-bold text-red-600 hover:bg-red-100 transition"
                >
                  <Youtube className="h-3.5 w-3.5" />
                  <span>Open in YouTube</span>
                </a>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-sm hover:brightness-105 transition"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-champagne" />
                  <span>Book Ceremony</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
