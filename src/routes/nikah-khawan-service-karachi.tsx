import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicePageDetail, type ServiceDetailConfig } from "@/components/ServicePageDetail";
import { buildPageSeo } from "@/lib/seo";

const pageData: ServiceDetailConfig = {
  slug: "nikah-khawan-service-karachi",
  category: "Karachi Nikah Services",
  title: "Nikah Khawan Service Karachi",
  h1: "Nikah Khawan Service Karachi – Registered Nikah Registrar",
  urduTitle: "کراچی میں مستند و رجسٹرڈ نکاح خواں اور نکاح رجسٹرار سروس",
  metaDescription:
    "Official Government Registered Nikah Registrar & Qualified Nikah Khawan in Karachi. 24/7 doorstep service for home, hall, mosque, court marriage, NADRA registration & online Nikah worldwide.",
  heroIntro:
    "Looking for a government-registered Nikah Registrar and qualified Islamic Scholar in Karachi? We provide respectful, Shariah-compliant Nikah solemnization across all Karachi areas with official government Nikahnama, computerized NADRA marriage certificate facilitation, and 24/7 immediate on-call availability.",
  images: [
    {
      src: "/images/services/nikah-in-hall-1.jpg",
      alt: "Licensed Nikah Khawan Islamic scholar conducting Nikah ceremony in Karachi",
      caption: "Distinguished Darse Nizami scholar delivering the sacred Khutbah-e-Nikah.",
      badge: "Licensed Nikah Khawan",
    },
    {
      src: "/images/services/nikah-in-hall-2.jpg",
      alt: "Official Government Nikahnama 4-copy register with seal and stamps in Karachi",
      caption: "Authorized registration in official government registers under Muslim Family Laws.",
      badge: "Official Nikahnama Registry",
    },
    {
      src: "/images/services/nikah-in-home-3.jpg",
      alt: "Elder blessings and family congratulations with Nikah Khawan in Karachi",
      caption: "Heartfelt prayers, family blessings, and celebratory congratulations.",
      badge: "Family Blessings & Dua",
    },
  ],
  whyChooseHeading: "Why Families in Karachi Choose Our Nikah Registrar Service",
  whyChoosePoints: [
    {
      title: "Government Authorized & Licensed",
      description:
        "Legally registered under the Sindh Muslim Family Laws Ordinance with official registration registers, serial seals, and valid governmental authority.",
    },
    {
      title: "100% Shariah & Sunnah Solemnization",
      description:
        "Qualified Islamic Scholars (Darse Nizami / Shahadat-ul-Aalamia graduates) who recite the authentic Arabic Khutbah-e-Nikah and conduct graceful Ijab-o-Qubool.",
    },
    {
      title: "24/7 Immediate Availability Across Karachi",
      description:
        "Whether you plan weeks in advance or require an urgent emergency Nikah Khawan on short notice, our team reaches your doorstep within 45 to 60 minutes.",
    },
    {
      title: "Complete NADRA Marriage Certificate (MRC) Support",
      description:
        "We handle complete Union Council submission, computerized entry, and issue official NADRA computerized marriage certificates for passports, visas, and legal documentation.",
    },
  ],
  procedureSteps: [
    {
      step: "Step 01",
      title: "Free Consultation & Booking",
      description:
        "Contact us via WhatsApp or Phone call with your venue, date, and time. We verify availability and guide you on requirements.",
    },
    {
      step: "Step 02",
      title: "Document Review & Drafting",
      description:
        "We review CNICs of the bride, groom, two Muslim witnesses, and Wali to ensure zero typographical errors in the legal register.",
    },
    {
      step: "Step 03",
      title: "Sacred Solemnization Ceremony",
      description:
        "Nikah Khawan recites the Masnoon Khutbah, explains the marital covenant, records mutual consent, and oversees official signatures.",
    },
    {
      step: "Step 04",
      title: "Official Copies & Union Council Filing",
      description:
        "Original Nikahnama copies are handed over immediately, followed by official registration at the relevant Union Council.",
    },
  ],
  documentsRequired: [
    {
      party: "Groom (Dulha)",
      items: [
        "Original CNIC or Valid Smart Card (plus 2 copies)",
        "Passport size photographs (2 copies)",
        "Minimum legal age 18+ years under Sindh law",
        "Permission letter if second marriage applies",
      ],
    },
    {
      party: "Bride (Dulhan)",
      items: [
        "Original CNIC or Valid Smart Card (plus 2 copies)",
        "Passport size photographs (2 copies)",
        "Minimum legal age 18+ years under Sindh law",
        "Presence of Wali (Father/Brother/Guardian) or legal consent",
      ],
    },
    {
      party: "Witnesses & Legal Terms",
      items: [
        "Two adult Muslim male witnesses with valid CNICs",
        "Wali / Legal representative CNIC copy",
        "Mutually agreed Haq-Mehr (Prompt or Deferred amount)",
        "Special terms or delegated divorce rights (if any)",
      ],
    },
  ],
  coverageAreas: [
    "DHA Karachi (Phases 1 to 8)",
    "Clifton (Blocks 1 to 9)",
    "Gulshan-e-Iqbal & Gulistan-e-Jauhar",
    "North Nazimabad & Nazimabad",
    "Bahria Town Karachi",
    "Malir Cantt & Model Colony",
    "PECHS & Tariq Road",
    "Korangi Crossing & Landhi",
    "Saddar & Defense View",
    "Federal B Area & Buffer Zone",
    "Scheme 33 & Gulshan-e-Maymar",
    "Airport & Shahrah-e-Faisal",
  ],
  faqs: [
    {
      q: "Are your Nikah Khawan services legally authorized by the Government of Pakistan?",
      a: "Yes. Our Nikah Registrars are officially licensed by the Government of Sindh under the Muslim Family Laws Ordinance 1961. Every Nikah conducted is legally binding, officially registered with the Union Council, and eligible for NADRA Computerized Marriage Registration Certificate (MRC).",
    },
    {
      q: "Can you provide a Nikah Khawan in Karachi on urgent or short notice?",
      a: "Yes, we operate a 24/7 on-call registrar service. If you require an urgent Nikah ceremony today or within the hour anywhere in Karachi, call our emergency hotline at 0303-2924813, and our Nikah Registrar will be dispatched promptly.",
    },
    {
      q: "Do you arrange home, banquet hall, and masjid Nikah ceremonies?",
      a: "Yes. We regularly attend wedding halls, marriage banquets, private family residences, farmhouses, Masajid, and our registrar office across all towns in Karachi.",
    },
    {
      q: "How many copies of the Nikahnama are issued during the ceremony?",
      a: "Under Pakistani marriage law, a 4-copy official government Nikahnama is filled and stamped. One copy is provided to the bride, one to the groom, one is retained in the Registrar's permanent record, and one is submitted to the local Union Council.",
    },
  ],
  relatedServices: [
    {
      title: "Nikah In Hall",
      href: "/nikah-in-hall",
      desc: "Punctual, dignified solemnization at banquet halls & wedding marquees across Karachi.",
    },
    {
      title: "Court Marriage Karachi",
      href: "/court-marriage",
      desc: "100% confidential legal marriage solemnization with High Court advocates & legal protection.",
    },
    {
      title: "Online Nikah Worldwide",
      href: "/online-nikah-worldwide",
      desc: "Shariah-compliant live video Nikah via Zoom for overseas Pakistanis in UK, USA, UAE & Europe.",
    },
  ],
};

export const Route = createFileRoute("/nikah-khawan-service-karachi")({
  head: () =>
    buildPageSeo({
      title: "Nikah Khawan Service Karachi | Registered Nikah Registrar",
      description: pageData.metaDescription,
      path: `/${pageData.slug}`,
      keywords:
        "Nikah Khawan Service Karachi, Nikah Khawan Karachi, Registered Nikah Registrar Karachi, Best Nikah Khawan Karachi, Marriage Registrar Karachi, Urgent Nikah Khawan Karachi, Doorstep Nikah Karachi",
      category: pageData.category,
      schemaType: "LegalService",
      faqs: pageData.faqs,
    }),
  component: NikahKhawanServiceKarachiPage,
});

function NikahKhawanServiceKarachiPage() {
  return (
    <SiteLayout>
      <ServicePageDetail data={pageData} />
    </SiteLayout>
  );
}
