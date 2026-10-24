import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildPageSeo } from "@/lib/seo";
import {
  Star,
  MapPin,
  ExternalLink,
  CheckCircle2,
  MessageCircle,
  Phone,
  ChevronRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const googleReviewsList = [
  {
    author: "Kamran Siddiqui",
    rating: 5,
    time: "2 weeks ago",
    content:
      "Undoubtedly the best Nikah Registrar service in Karachi. We contacted them late evening for a Nikah ceremony at our residence in DHA Phase 5. Maulana arrived with all official government papers and completed everything with great poise and barakah. Highly impressed by their professionalism!",
  },
  {
    name: "Aamir & Sara Khan",
    rating: 5,
    time: "1 month ago",
    content:
      "5 stars are not enough! Super smooth process. They guided us on the Haq-Mehr, witness documents, and issued our computer-ready Nikahnama on the spot. Later, they also handled our NADRA marriage certificate. Thank you so much!",
  },
  {
    name: "Waqas Ali (Dubai, UAE)",
    rating: 5,
    time: "1 month ago",
    content:
      "Conducted our Online Nikah from Dubai. Very trustworthy scholars. They provided live Zoom link, had two witnesses present, and took our consent according to proper Shariah rules. My wife received the original Nikahnama in Karachi the next day.",
  },
  {
    name: "Naveed Akhtar",
    rating: 5,
    time: "2 months ago",
    content:
      "Punctual and courteous. Booked for our family Nikah at a banquet hall in Gulshan. Arrived on time, performed a wonderful recitation of Khutbah-e-Nikah that everyone appreciated. Official seals and copies were given right away.",
  },
  {
    name: "Rao Zubair",
    rating: 5,
    time: "3 months ago",
    content:
      "Legal and authentic service. We visited their head office in Korangi Crossing for a simple, budget-friendly Nikah. Clean and respectful environment, very cooperative staff. Zero hidden charges.",
  },
  {
    name: "Fatima Noor",
    rating: 5,
    time: "3 months ago",
    content:
      "Very humble and knowledgeable Islamic scholar. He answered all our questions regarding the bride's rights and Nikahnama clauses patiently. Highly recommended for every family in Karachi.",
  },
];

export const Route = createFileRoute("/google-reviews")({
  head: () =>
    buildPageSeo({
      title: "Google Reviews | 5-Star Rated Nikah Registrar Karachi",
      description:
        "Check verified 5-star Google Maps reviews for Nikah Khawan and Government Registered Nikah Registrar Karachi. Highly rated for punctuality, Shariah compliance & NADRA registration.",
      path: "/google-reviews",
      keywords:
        "Google Reviews Nikah Registrar Karachi, 5 Star Nikah Khawan Karachi, Google Maps Nikah Registrar, Best Rated Nikah Khawan, Verified Nikah Reviews Karachi",
      category: "Reviews & Testimonials",
      schemaType: "CollectionPage",
      faqs: [
        {
          q: "Where can I view your official Google Maps business profile?",
          a: "You can view our verified Google Business Profile and customer reviews directly at: https://maps.app.goo.gl/vFbmoenHbvw3v2wy8",
        },
        {
          q: "What is your average rating on Google Maps?",
          a: "Our Nikah Registrar service maintains a pristine 5.0-star rating across hundreds of verified family solemnizations in Karachi and international online Nikahs.",
        },
      ],
    }),
  component: GoogleReviewsPage,
});

function GoogleReviewsPage() {
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
            <Link to="/feedback-reviews" className="hover:text-primary transition font-medium">
              Reviews
            </Link>
            <ChevronRight className="h-3 w-3 text-gold" />
            <span className="text-gold font-semibold">Google Reviews</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Verified Google Maps Reviews</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              Google Maps 5-Star Public Reviews
            </h1>

            <p className="font-urdu text-xl sm:text-2xl text-gold/90 font-medium" dir="rtl">
              گوگل میپس پر ہمارے معزز صارفین کی تصدیق شدہ آراء
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Explore public, unedited Google reviews left by families, newlyweds, and overseas
              Pakistanis who have experienced our promptness, religious dignity, and transparent
              marriage registration.
            </p>
          </div>

          {/* Google Badge Card */}
          <div className="mt-10 max-w-xl mx-auto rounded-3xl border-2 border-gold/40 bg-background p-6 text-center shadow-soft">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-extrabold text-primary">5.0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <p className="text-xs font-semibold text-muted-foreground">
              Based on 100+ Verified Public Ratings on Google
            </p>

            <div className="mt-4 pt-4 border-t border-gold/20 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE_CONFIG.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-gold/60 bg-pearl px-5 py-2 text-xs font-bold text-primary transition hover:bg-gold/15"
              >
                <MapPin className="h-3.5 w-3.5 text-gold" />
                <span>Open Google Maps Listing</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs font-bold text-primary-foreground shadow-xs transition hover:bg-primary/90"
              >
                <MessageCircle className="h-3.5 w-3.5 text-champagne" />
                <span>Book Nikah Now</span>
              </a>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {googleReviewsList.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gold/20 bg-background p-5 shadow-xs flex flex-col justify-between transition hover:border-gold hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-gold/20 text-xs font-bold text-primary">
                        {(item.author || item.name || "U")[0]}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary">
                          {item.author || item.name}
                        </div>
                        <div className="text-[10px] text-muted-foreground">{item.time}</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Verified
                    </span>
                  </div>

                  <div className="flex gap-0.5 mb-2.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs text-foreground/90 leading-relaxed">"{item.content}"</p>
                </div>

                <div className="mt-4 pt-3 border-t border-gold/15 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  <span>Posted on Google Maps</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom link */}
          <div className="mt-12 text-center">
            <Link
              to="/feedback-reviews"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-gold transition underline underline-offset-4"
            >
              <span>← View Full Client Testimonials & Feedback Stories</span>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
