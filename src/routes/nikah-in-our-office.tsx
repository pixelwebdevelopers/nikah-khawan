import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicePageDetail, type ServiceDetailConfig } from "@/components/ServicePageDetail";
import { buildPageSeo } from "@/lib/seo";

const pageData: ServiceDetailConfig = {
  slug: "nikah-in-our-office",
  category: "Karachi Nikah Services",
  title: "Nikah In Our Office",
  h1: "Nikah In Our Office Karachi – Direct Registrar Office Solemnization",
  urduTitle: "ہمارے سرکاری رجسٹرار دفتر میں نکاح خوانی اور فوری رجسٹریشن",
  metaDescription:
    "Official Nikah in Our Office Karachi service. Perform your Nikah at our registrar office in Korangi Crossing, Karachi. Simple, respectful, budget-friendly ceremony with immediate official Nikahnama.",
  heroIntro:
    "Looking for a simple, dignified, and legally protected Nikah ceremony without the high expense of booking wedding halls or complex arrangements? Visit our official Nikah Registrar office in Korangi Crossing, Karachi. We provide private, Shariah-compliant solemnization, immediate government registration, and on-the-spot Nikahnama issuance in a comfortable, respectful setting.",
  images: [
    {
      src: "/images/services/nikah-in-office-1.jpg",
      alt: "Authorized Government Nikah Registrar executive office in Korangi Crossing Karachi",
      caption:
        "Private registrar consultation chamber with official seals and registration volumes.",
      badge: "Executive Office Suite",
    },
    {
      src: "/images/services/nikah-in-hall-2.jpg",
      alt: "Official Pakistani Nikahnama 4-copy register signing and biometric verification",
      caption:
        "Instant on-site signing of official Urdu Nikahnama with authorized government stamps.",
      badge: "Immediate Registration",
    },
    {
      src: "/images/services/g3-real.jpg",
      alt: "Certified marriage certificate handover to couple in Karachi office",
      caption:
        "Official handover of certified legal copies and Union Council registration receipts.",
      badge: "Certificate Handover",
    },
  ],
  whyChooseHeading: "Why Choose Solemnization at Our Registrar Office?",
  whyChoosePoints: [
    {
      title: "Cost-Effective & Simple",
      description:
        "Avoid expensive banquet venue charges, decor costs, and catering fees. Conduct your sacred Sunnah Nikah in our air-conditioned office suite with complete dignity.",
    },
    {
      title: "Immediate On-Site Documentation",
      description:
        "All official government registers, legal seals, stamp papers, and signature forms are right in our office. There is zero waiting time—you receive original signed Nikahnama copies immediately.",
    },
    {
      title: "Private & Respectful Atmosphere",
      description:
        "Our office provides complete privacy for close family members and elders. We ensure a tranquil Islamic environment with tea, refreshments, and dedicated seating.",
    },
    {
      title: "Witness Assistance Available",
      description:
        "If you are unable to bring witnesses due to urgent travel, overseas constraints, or emergency situations, our office can legally facilitate verified, pious Muslim witnesses.",
    },
  ],
  procedureSteps: [
    {
      step: "Step 01",
      title: "Appointment Booking",
      description:
        "Call or WhatsApp us to book a suitable morning, afternoon, or evening time slot at our Karachi office.",
    },
    {
      step: "Step 02",
      title: "Document Verification",
      description:
        "Bring original CNICs / Passports and photos. Our legal registrar verifies age, civil status, and identity in person.",
    },
    {
      step: "Step 03",
      title: "Office Solemnization",
      description:
        "Our Islamic Scholar recites the Masnoon Khutbah, explains marital sanctity, and administers mutual Ijab-o-Qubool.",
    },
    {
      step: "Step 04",
      title: "Instant Handover & Filing",
      description:
        "Sign the official government register and receive your sealed Nikahnama on the spot, with subsequent NADRA MRC filing.",
    },
  ],
  documentsRequired: [
    {
      party: "Groom (Dulha)",
      items: [
        "Original CNIC / Smart Card / NICOP & 2 photocopies",
        "2 Passport-size photographs",
        "Physical presence at our Karachi office",
      ],
    },
    {
      party: "Bride (Dulhan)",
      items: [
        "Original CNIC / Smart Card / Passport & 2 photocopies",
        "2 Passport-size photographs",
        "Presence of Wali or formal legal authorization",
      ],
    },
    {
      party: "Witnesses & Registration",
      items: [
        "Two adult Muslim male witnesses with valid CNICs",
        "Haq-Mehr terms agreed between parties",
        "Office registration and government stamp fee",
      ],
    },
  ],
  coverageAreas: [
    "Korangi Crossing & Allah Wala Town",
    "DHA Phase 1 to 8 & Creek Vistas (5-10 mins away)",
    "Clifton & Qayyumabad (10 mins away)",
    "Shah Faisal Colony & Malir (15 mins away)",
    "PECHS & Tariq Road (20 mins away)",
    "Gulshan-e-Iqbal & University Road",
    "North Nazimabad & Federal B Area",
    "Open 24/7 for appointments from all Karachi towns",
  ],
  faqs: [
    {
      q: "Where is your Nikah Registrar office located in Karachi?",
      a: "Our head office is conveniently located at Office No. 1, Plot No. 694, Block 31/A, Near Rasheedia Masjid, Allah Wala Town, Korangi Crossing, Karachi. It is just minutes away from DHA Phase 7 Extension and Qayyumabad.",
    },
    {
      q: "Can we walk in directly or do we need an appointment?",
      a: "Walk-ins are welcomed during daytime office hours, but we strongly recommend booking a 1-hour appointment in advance via WhatsApp (0303-2924813) to ensure our certified Nikah Registrar and Islamic Scholar are prepared for your arrival.",
    },
    {
      q: "How long does the entire office ceremony and paperwork take?",
      a: "The entire process—including identity verification, recitation of Khutbah-e-Nikah, Ijab-o-Qubool, Dua, and stamping of official Nikahnama copies—takes approximately 30 to 45 minutes.",
    },
    {
      q: "Is this office Nikah officially valid for getting a NADRA Marriage Certificate?",
      a: "100% yes. As government-registered Nikah Registrars, our Nikahnama is officially recognized across Pakistan and accepted by NADRA, foreign embassies, and civil courts.",
    },
  ],
  relatedServices: [
    {
      title: "Court Marriage Karachi",
      href: "/court-marriage",
      desc: "Confidential legal court marriage with High Court advocates and complete privacy.",
    },
    {
      title: "Nikah In Home",
      href: "/nikah-in-home",
      desc: "Doorstep Nikah service where our registrar visits your private residence.",
    },
    {
      title: "Online Nikah Worldwide",
      href: "/online-nikah-worldwide",
      desc: "Live video Nikah for overseas Pakistanis in UK, USA, UAE, and Canada.",
    },
  ],
};

export const Route = createFileRoute("/nikah-in-our-office")({
  head: () =>
    buildPageSeo({
      title: "Nikah In Our Office Karachi | Official Registrar Office Nikah",
      description: pageData.metaDescription,
      path: `/${pageData.slug}`,
      keywords:
        "Nikah In Our Office Karachi, Nikah Registrar Office Karachi, Office Nikah Solemnization, Simple Nikah Karachi, Budget Nikah Service Karachi, Urgent Nikah Office Karachi",
      category: pageData.category,
      schemaType: "LegalService",
      faqs: pageData.faqs,
    }),
  component: NikahInOurOfficePage,
});

function NikahInOurOfficePage() {
  return (
    <SiteLayout>
      <ServicePageDetail data={pageData} />
    </SiteLayout>
  );
}
