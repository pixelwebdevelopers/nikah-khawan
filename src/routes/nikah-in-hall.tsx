import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicePageDetail, type ServiceDetailConfig } from "@/components/ServicePageDetail";
import { buildPageSeo } from "@/lib/seo";

const pageData: ServiceDetailConfig = {
  slug: "nikah-in-hall",
  category: "Karachi Nikah Services",
  title: "Nikah In Hall",
  h1: "Nikah In Hall Karachi – Banquet Hall & Wedding Lawn Nikah Registrar",
  urduTitle: "شادی ہال، بینکوئٹ اور شادی لان میں پروقار نکاح خوانی سروس",
  metaDescription:
    "Professional Nikah in Hall Karachi service. Strictly punctual Nikah Khawan & Registered Registrar for marriage halls, banquet venues, and marquees across Karachi with official Nikahnama.",
  heroIntro:
    "Planning your wedding celebration at a banquet hall, marquee, or marriage lawn in Karachi? Our qualified Nikah Khawan and Government Registered Nikah Registrar ensures a flawless, punctual, and religiously dignified Nikah ceremony on your grand stage, complete with official seals, Arabic Khutbah, and immediate Nikahnama documentation.",
  images: [
    {
      src: "/images/services/nikah-in-hall-1.jpg",
      alt: "Islamic Qazi Nikah Khawan conducting Nikah ceremony on banquet stage in Karachi",
      caption:
        "Sacred Masnoon Khutbah recitation on the decorated banquet hall stage before guests.",
      badge: "Stage Solemnization",
    },
    {
      src: "/images/services/nikah-in-hall-2.jpg",
      alt: "Official Pakistani Nikahnama registration signing on wedding table with gold pen",
      caption: "Official Urdu Nikahnama signed with authorized registrar seals and rose petals.",
      badge: "Official Legal Registry",
    },
    {
      src: "/images/services/nikah-in-hall-3.jpg",
      alt: "Emotional Dua prayer by groom and family elders in Karachi wedding hall",
      caption: "Sincere collective Dua-e-Khair with groom and elders after marriage solemnization.",
      badge: "Collective Dua-e-Khair",
    },
  ],
  whyChooseHeading: "Why Book Our Nikah Khawan for Your Banquet Hall Ceremony?",
  whyChoosePoints: [
    {
      title: "Guaranteed Punctual Arrival",
      description:
        "We understand how strict banquet hall booking timings and food serving schedules are in Karachi. Our Nikah Registrar arrives 30 minutes before your scheduled solemnization time.",
    },
    {
      title: "Stage Presence & Reverent Khutbah",
      description:
        "Dressed in traditional dignified Islamic attire, our scholar delivers a captivating and melodious Khutbah-e-Nikah over the hall sound system, followed by a heartfelt collective Dua-e-Khair.",
    },
    {
      title: "Smooth Stage Signing Protocol",
      description:
        "We coordinate smoothly with the stage managers and photographers so the bride, groom, Wali, and witnesses sign without delay or confusion amidst wedding guests.",
    },
    {
      title: "Presentation Folder & Legal Security",
      description:
        "Original government-issued Nikahnama copies are presented in premium protective folders for the couple, along with expedited Union Council processing for your NADRA certificate.",
    },
  ],
  procedureSteps: [
    {
      step: "Step 01",
      title: "Reserve Hall Slot",
      description:
        "Provide your banquet hall name, town location, and exact time slot. We reserve the registrar for your wedding evening.",
    },
    {
      step: "Step 02",
      title: "Advance Document Draft",
      description:
        "Send CNICs and Haq-Mehr details ahead of time so the Nikahnama entries are meticulously drafted in advance to save time on the stage.",
    },
    {
      step: "Step 03",
      title: "Grand Stage Solemnization",
      description:
        "Nikah Khawan recites the sermon, conducts mutual Ijab-o-Qubool, and manages the signature process seamlessly on stage.",
    },
    {
      step: "Step 04",
      title: "Handover & Certification",
      description:
        "Receive the signed, sealed government Nikahnama on the spot, with follow-up Union Council registration and NADRA certificate support.",
    },
  ],
  documentsRequired: [
    {
      party: "Groom & Family",
      items: [
        "Original CNIC / NADRA Smart Card & 2 photocopies",
        "2 Passport-size colored photographs",
        "Accurate venue address & hall stage number",
      ],
    },
    {
      party: "Bride & Family",
      items: [
        "Original CNIC / NADRA Smart Card & 2 photocopies",
        "2 Passport-size colored photographs",
        "Wali (Father / Guardian) CNIC copy & signature",
      ],
    },
    {
      party: "Witnesses & Hall Coordinator",
      items: [
        "2 Adult Muslim male witnesses with valid CNIC copies",
        "Mutually agreed Haq-Mehr (Prompt / Deferred) amount",
        "Hall manager / Stage contact number for coordination",
      ],
    },
  ],
  coverageAreas: [
    "DHA Karachi Creek Marquees & Banquets",
    "Clifton Banquet Halls & Lawns",
    "Karsaz & PAF Convention Centers",
    "Rashid Minhas Road Banquet Hub",
    "North Nazimabad Wedding Halls",
    "Gulshan-e-Iqbal Wedding Lawns",
    "Malir Cantt & Check Post Banquets",
    "Bahria Town Karachi Event Lawns",
    "Shahrah-e-Faisal Wedding Venues",
  ],
  faqs: [
    {
      q: "What if the bride is in the bridal room and cannot come onto the main stage?",
      a: "Our Nikah Registrar is fully experienced with purdah and family preferences. The registrar can visit the bridal room accompanied by the Wali and witnesses to take the bride's formal verbal consent (Ijab-o-Qubool) and signatures in complete privacy before or after the main stage ceremony.",
    },
    {
      q: "How early should we book a Nikah Khawan for a weekend wedding hall?",
      a: "Weekend and auspicious Islamic dates (like Fridays or Rabi-ul-Awwal/Rajab) fill up quickly in Karachi. We recommend booking 1 to 3 weeks in advance, though our 24/7 emergency team can also accommodate same-day banquet hall requests.",
    },
    {
      q: "Does the Nikah Khawan bring all the official stamp seals and legal registers?",
      a: "Yes. Our registered Nikah Registrar brings official government-stamped Nikahnama forms, authorized seals, signature pads, and protective folders directly to your hall.",
    },
    {
      q: "Can the Nikah Khawan deliver the sermon in both Urdu and English?",
      a: "Yes. For modern families and overseas guests, our scholars can deliver an eloquent explanation in both Urdu and English explaining the sacred marital bonds and Sunnah blessings.",
    },
  ],
  relatedServices: [
    {
      title: "Nikah In Hotel",
      href: "/nikah-in-hotel",
      desc: "Executive solemnization for luxury 4-star and 5-star hotel weddings in Karachi.",
    },
    {
      title: "Nikah In Home",
      href: "/nikah-in-home",
      desc: "Doorstep Nikah service for intimate family celebrations at home.",
    },
    {
      title: "Nikah Khawan Service Karachi",
      href: "/nikah-khawan-service-karachi",
      desc: "Complete overview of our citywide government-registered marriage services.",
    },
  ],
};

export const Route = createFileRoute("/nikah-in-hall")({
  head: () =>
    buildPageSeo({
      title: "Nikah In Hall Karachi | Banquet & Wedding Hall Nikah Registrar",
      description: pageData.metaDescription,
      path: `/${pageData.slug}`,
      keywords:
        "Nikah In Hall Karachi, Banquet Hall Nikah Karachi, Wedding Hall Nikah Khawan, Shadi Hall Nikah Karachi, Marquee Nikah Registrar Karachi, Punctual Nikah Khawan Karachi",
      category: pageData.category,
      schemaType: "Service",
      faqs: pageData.faqs,
    }),
  component: NikahInHallPage,
});

function NikahInHallPage() {
  return (
    <SiteLayout>
      <ServicePageDetail data={pageData} />
    </SiteLayout>
  );
}
