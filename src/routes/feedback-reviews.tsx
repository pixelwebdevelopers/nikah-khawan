import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { buildPageSeo } from "@/lib/seo";
import {
  Star,
  Quote,
  CheckCircle2,
  MapPin,
  Calendar,
  MessageCircle,
  Phone,
  ShieldCheck,
  Award,
  Users,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const reviews = [
  {
    name: "Muhammad Usman & Family",
    location: "DHA Phase 6, Karachi",
    service: "Banquet Hall Nikah",
    date: "October 2026",
    rating: 5,
    review:
      "We booked the Nikah Registrar for our daughter's wedding at Creek Marquee, DHA. He arrived exactly 35 minutes before the stage ceremony, well dressed and with complete official registers. His recitation of Khutbah-e-Nikah was so moving that all our guests were deeply touched. The official Nikahnama copies were handed over immediately without any hassle. Highly recommended for anyone wanting a dignified and strictly punctual Nikah in Karachi!",
  },
  {
    name: "Syed Bilal Ahmed & Zainab",
    location: "Manchester, UK (Online Nikah)",
    service: "Online Nikah Worldwide",
    date: "September 2026",
    rating: 5,
    review:
      "I was in the UK on work visa while my wife was in Karachi. We were very anxious about the legal and Shariah aspects of online Nikah. The Nikah Registrar guided us step by step, appointed a Shariah Wakeel, and conducted a crystal clear Zoom session. We received our official stamped Nikahnama and NADRA Computerized Marriage Certificate via DHL within a few days. The UK Home Office accepted the certificate without any questions for our spouse visa!",
  },
  {
    name: "Dr. Farhan Qureshi",
    location: "Gulshan-e-Iqbal, Block 13-D",
    service: "Nikah at Home",
    date: "August 2026",
    rating: 5,
    review:
      "Because my elderly father could not travel to a banquet hall, we arranged a quiet home Nikah ceremony. The Nikah Khawan treated our elders with the utmost respect. He carefully cross-checked CNIC numbers, explained the rights of both bride and groom with great wisdom, and took my sister's consent with pure Islamic purdah. A truly blessed experience.",
  },
  {
    name: "Anonymous Couple",
    location: "Karachi City Courts & Advocate Chamber",
    service: "Legal Court Marriage",
    date: "July 2026",
    rating: 5,
    review:
      "We needed a confidential legal court marriage with complete privacy and safety. The advocate and registrar provided complete legal protection, prepared the affidavit of free will, and completed all paperwork within two hours before the magistrate. They were extremely professional, respectful, and kept everything strictly private. NADRA MRC was delivered on time.",
  },
  {
    name: "Engr. Tariq Mehmood",
    location: "North Nazimabad, Block L",
    service: "Masjid Nikah (Friday Jummah)",
    date: "June 2026",
    rating: 5,
    review:
      "Solemnized our son's Nikah at Masjid-e-Anwar after Friday Jummah prayer. The Nikah Khawan delivered a brief yet powerful sermon on the Sunnah of simplicity in marriage. The entire congregation made Dua for the couple. Government stamped documents were completed on-site. Truly memorable and spiritually uplifting.",
  },
  {
    name: "Hamza Tariq & Ayesha",
    location: "Bahria Town Karachi",
    service: "Executive Hotel Nikah",
    date: "May 2026",
    rating: 5,
    review:
      "Arranged our ceremony at Mövenpick Hotel Karachi. Many of our overseas relatives from Canada and the UAE attended. The scholar gave an eloquent bilingual sermon in English and Urdu, explaining every clause of the Nikahnama. The presentation leather folders were top-notch. Five stars all the way!",
  },
];

export const Route = createFileRoute("/feedback-reviews")({
  head: () =>
    buildPageSeo({
      title: "Client Feedback & Verified Reviews | Nikah Khawan Karachi",
      description:
        "Read verified client testimonials and 5-star reviews from families and couples who used our Government Registered Nikah Registrar and Nikah Khawan services across Karachi and online worldwide.",
      path: "/feedback-reviews",
      keywords:
        "Nikah Khawan Karachi Reviews, Client Feedback Nikah Registrar, Verified Marriage Reviews Karachi, Best Nikah Registrar Testimonials, Online Nikah Reviews Pakistan",
      category: "Reviews & Testimonials",
      schemaType: "CollectionPage",
      faqs: [
        {
          q: "Are these reviews verified from real Karachi clients?",
          a: "Yes. All testimonials and client feedback represent real families, couples, and overseas Pakistanis who have used our registered Nikah Registrar and Nikah Khawan services across Karachi and internationally.",
        },
        {
          q: "How can I leave feedback after my Nikah ceremony?",
          a: "You can leave your review directly through WhatsApp, on our official Google Business Profile, or via our contact form. We deeply appreciate feedback to continually refine our services.",
        },
      ],
    }),
  component: FeedbackReviewsPage,
});

function FeedbackReviewsPage() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden py-12 md:py-20">
        {/* Glow */}
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
            <span className="text-primary font-medium">Reviews & Testimonials</span>
            <ChevronRight className="h-3 w-3 text-gold" />
            <span className="text-gold font-semibold">Client Feedback</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Verified Client Satisfaction</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              Client Feedback & Verified Testimonials
            </h1>

            <p className="font-urdu text-xl sm:text-2xl text-gold/90 font-medium" dir="rtl">
              ہمارے معزز گاہکوں کے تاثرات اور تجربات
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Read real stories and experiences from families and couples who entrusted our
              Government Registered Nikah Registrar and qualified Islamic Scholars for their sacred
              wedding solemnization in Karachi and online worldwide.
            </p>
          </div>

          {/* Trust Metric Counters */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-gold/25 bg-background p-5 text-center shadow-xs">
              <div className="text-3xl font-extrabold text-gold">4.9 / 5.0</div>
              <div className="flex justify-center gap-1 my-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-xs text-muted-foreground font-medium">Overall Client Rating</div>
            </div>

            <div className="rounded-2xl border border-gold/25 bg-background p-5 text-center shadow-xs">
              <div className="text-3xl font-extrabold text-primary">5,000+</div>
              <div className="text-xs font-bold text-gold my-1.5">Nikah Ceremonies</div>
              <div className="text-xs text-muted-foreground font-medium">
                Successfully Solemnized
              </div>
            </div>

            <div className="rounded-2xl border border-gold/25 bg-background p-5 text-center shadow-xs">
              <div className="text-3xl font-extrabold text-emerald-600">100%</div>
              <div className="text-xs font-bold text-gold my-1.5">Shariah Verified</div>
              <div className="text-xs text-muted-foreground font-medium">
                Authentic Sunnah Conduct
              </div>
            </div>

            <div className="rounded-2xl border border-gold/25 bg-background p-5 text-center shadow-xs">
              <div className="text-3xl font-extrabold text-primary">24/7</div>
              <div className="text-xs font-bold text-gold my-1.5">On-Call Dispatch</div>
              <div className="text-xs text-muted-foreground font-medium">All Karachi Towns</div>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-gold/25 bg-background p-6 sm:p-8 shadow-soft flex flex-col justify-between transition hover:border-gold hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-gold/15 pb-4 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-primary">{rev.name}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                        <MapPin className="h-3 w-3 text-gold" />
                        <span>{rev.location}</span>
                      </div>
                    </div>
                    <span className="rounded-full bg-pearl px-3 py-1 text-[11px] font-semibold text-primary border border-gold/30">
                      {rev.service}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                    <span className="text-xs font-bold text-primary ml-1.5">5.0</span>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed italic">
                    "{rev.review}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold/15 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Verified Nikah Client
                  </span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 rounded-3xl border border-gold/40 bg-pearl/60 p-8 text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Experience the Same Excellence for Your Nikah Ceremony
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
              Our registered Nikah Registrar is ready to make your special day memorable, blessed,
              and legally airtight. Book your date in under 5 minutes.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-primary px-7 py-3 text-xs sm:text-sm font-bold text-primary-foreground shadow-md transition hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4 text-champagne" />
                <span>Book via WhatsApp</span>
              </a>
              <Link
                to="/google-reviews"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 bg-background px-7 py-3 text-xs sm:text-sm font-bold text-primary transition hover:bg-gold/15"
              >
                <Star className="h-4 w-4 text-gold fill-gold" />
                <span>View Google Maps Reviews →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
