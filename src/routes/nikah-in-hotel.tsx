import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicePageDetail, type ServiceDetailConfig } from "@/components/ServicePageDetail";
import { buildPageSeo } from "@/lib/seo";

const pageData: ServiceDetailConfig = {
  slug: "nikah-in-hotel",
  category: "Karachi Nikah Services",
  title: "Nikah In Hotel",
  h1: "Nikah In Hotel Karachi – Luxury Hotel & Executive Venue Nikah Registrar",
  urduTitle: "فائیو اسٹار اور لگژری ہوٹلوں میں پروقار نکاح خوانی سروس",
  metaDescription:
    "Premium Nikah in Hotel Karachi service. Professional Nikah Registrar & Islamic Scholars for 4-star & 5-star hotel weddings across Karachi (Mövenpick, PC, Marriott, Avari, Beach Luxury) with official Nikahnama.",
  heroIntro:
    "Hosting your wedding reception or intimate Nikah celebration at a luxury 4-star or 5-star hotel in Karachi? Our distinguished Islamic Scholars and Government Registered Nikah Registrars specialize in executive hotel solemnizations, providing polished etiquette, bilingual Khutbah (English & Urdu), impeccable punctuality, and official documentation tailored for high-profile weddings.",
  images: [
    {
      src: "/images/services/nikah-in-hotel-1.jpg",
      alt: "Luxury 5-star Karachi hotel ballroom with Nikah stage and city skyline view",
      caption: "Opulent ballroom solemnization and collective Dua for executive celebrations.",
      badge: "5-Star Luxury Venue",
    },
    {
      src: "/images/services/nikah-in-hotel-2.jpg",
      alt: "Senior Islamic scholar conducting Nikah in Marriott Karachi luxury hotel ballroom",
      caption: "Distinguished Nikah solemnization and marital counseling at Marriott Karachi.",
      badge: "Marriott Karachi VIP",
    },
    {
      src: "/images/services/nikah-in-hotel-3.jpg",
      alt: "Official Pakistani Nikahnama on executive presentation podium with rings and boutonniere",
      caption: "Official government Nikahnama registered with authorized seals and wedding rings.",
      badge: "VIP Document Presentation",
    },
  ],
  whyChooseHeading: "Why Elite Families Choose Our Hotel Nikah Registrar",
  whyChoosePoints: [
    {
      title: "Executive Etiquette & VIP Protocol",
      description:
        "Our scholars are experienced with high-profile corporate, diplomatic, and executive weddings. We ensure discreet, sophisticated conduct and seamless interaction with hotel event planners.",
    },
    {
      title: "Bilingual English & Urdu Khutbah",
      description:
        "For events with international delegates, diplomats, or overseas relatives, our scholars deliver an eloquent explanation of Islamic marital covenants in both refined English and classical Urdu.",
    },
    {
      title: "Strict Hotel Slot Adherence",
      description:
        "Luxury hotel ballrooms adhere to precise event schedules. Our registrar arrives 30 to 45 minutes early, liaising directly with your banquet manager and audio-visual technicians.",
    },
    {
      title: "Luxury Presentation Leather Folders",
      description:
        "Official government Nikahnama copies are signed with archival pens and presented in deluxe leather presentation folders worthy of your luxury wedding day.",
    },
  ],
  procedureSteps: [
    {
      step: "Step 01",
      title: "Hotel Venue Consultation",
      description:
        "Notify us of your hotel ballroom (e.g. Mövenpick, Marriott, PC, Avari), event timing, and stage itinerary.",
    },
    {
      step: "Step 02",
      title: "Advance Register Preparation",
      description:
        "We draft all legal columns in the government registry in advance to avoid stage delays and ensure impeccable spelling.",
    },
    {
      step: "Step 03",
      title: "Executive Solemnization",
      description:
        "The scholar delivers the bilingual Khutbah, conducts mutual consent (Ijab-o-Qubool), and coordinates signing on the main stage.",
    },
    {
      step: "Step 04",
      title: "Deluxe Document Presentation",
      description:
        "Original registered copies are presented in bespoke folders, followed by expedited Union Council and NADRA processing.",
    },
  ],
  documentsRequired: [
    {
      party: "Groom (Dulha)",
      items: [
        "Original CNIC / Smart Card / NICOP / Overseas Passport",
        "2 Passport-size color photographs",
        "Contact info & hotel ballroom booking details",
      ],
    },
    {
      party: "Bride (Dulhan)",
      items: [
        "Original CNIC / Smart Card / Overseas Passport",
        "2 Passport-size color photographs",
        "Wali (Father / Guardian) CNIC copy & consent",
      ],
    },
    {
      party: "Witnesses & Banquet Protocol",
      items: [
        "2 Adult Muslim male witnesses with valid CNICs / Passports",
        "Mutually agreed Haq-Mehr terms (Prompt / Deferred)",
        "Hotel event manager direct contact for stage entry",
      ],
    },
  ],
  coverageAreas: [
    "Mövenpick Hotel Karachi (Club Road)",
    "Pearl Continental Hotel (PC Karachi)",
    "Karachi Marriott Hotel (Abdullah Haroon Road)",
    "Avari Towers Karachi (Fatima Jinnah Road)",
    "Beach Luxury Hotel (Moulvi Tamizuddin Khan Road)",
    "Ramada Plaza & Ramada Creek Karachi",
    "Dreamworld Resort & Chalets",
    "Karachi Golf Club & Creek Club",
    "Marina Club & Defense Authority Clubs",
  ],
  faqs: [
    {
      q: "Can the Nikah Khawan accommodate overseas bride and groom passports?",
      a: "Yes. Many luxury hotel weddings in Karachi involve overseas Pakistanis or dual citizens holding NICOP, POC, or foreign passports (UK, USA, Canada, UAE, etc.). Our registrar is fully authorized to register marriages involving foreign passports under Pakistani law.",
    },
    {
      q: "Can you coordinate directly with the hotel's wedding planner?",
      a: "Yes. Our team regularly coordinates with private event planners, stage managers, and hotel banquet directors across Karachi to align the exact time of the Nikah recitation with photography and dinner services.",
    },
    {
      q: "Is an English translation of the Nikah Khutbah provided?",
      a: "Yes. Upon request, our scholar provides an eloquent English translation and explanation of the Quranic verses and Hadiths recited during the Khutbah-e-Nikah for international guests.",
    },
    {
      q: "How fast can we get the NADRA Computerized Marriage Certificate?",
      a: "Through our priority processing service, we can facilitate the Union Council entry and secure your official NADRA Computerized Marriage Certificate (MRC) within 24 to 72 hours following the hotel ceremony.",
    },
  ],
  relatedServices: [
    {
      title: "Nikah In Hall",
      href: "/nikah-in-hall",
      desc: "Punctual Nikah registrar attendance at banquet halls and wedding lawns across Karachi.",
    },
    {
      title: "Online Nikah Worldwide",
      href: "/online-nikah-worldwide",
      desc: "Live video Nikah for overseas couples and cross-border matrimonial unions.",
    },
    {
      title: "Court Marriage Karachi",
      href: "/court-marriage",
      desc: "Confidential legal marriage with high court advocates and official court documentation.",
    },
  ],
};

export const Route = createFileRoute("/nikah-in-hotel")({
  head: () =>
    buildPageSeo({
      title: "Nikah In Hotel Karachi | Executive Luxury Hotel Nikah Registrar",
      description: pageData.metaDescription,
      path: `/${pageData.slug}`,
      keywords:
        "Nikah In Hotel Karachi, 5 Star Hotel Nikah Karachi, Movenpick Hotel Nikah, PC Karachi Nikah Khawan, Marriott Karachi Nikah Registrar, Avari Towers Nikah, Luxury Wedding Nikah Karachi",
      category: pageData.category,
      schemaType: "Service",
      faqs: pageData.faqs,
    }),
  component: NikahInHotelPage,
});

function NikahInHotelPage() {
  return (
    <SiteLayout>
      <ServicePageDetail data={pageData} />
    </SiteLayout>
  );
}
