import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicePageDetail, type ServiceDetailConfig } from "@/components/ServicePageDetail";
import { buildPageSeo } from "@/lib/seo";

const pageData: ServiceDetailConfig = {
  slug: "nikah-in-home",
  category: "Karachi Nikah Services",
  title: "Nikah In Home",
  h1: "Nikah In Home Karachi – Doorstep Nikah Khawan & Registrar Service",
  urduTitle: "گھر پر نکاح خوانی کی مسنون تقریب اور سرکاری رجسٹریشن سروس",
  metaDescription:
    "Official Nikah at Home Karachi service. Qualified Islamic Scholar & Registered Nikah Registrar visits your residence anywhere in Karachi 24/7 with complete legal Nikahnama documentation.",
  heroIntro:
    "Prefer the intimate warmth, privacy, and religious sanctity of celebrating your Nikah ceremony at your family residence? Our qualified Nikah Khawan and Government Registered Nikah Registrar visits your doorstep anywhere in Karachi with complete official documents, ensuring a peaceful, legally verified Sunnah Nikah in the comfort of your home.",
  images: [
    {
      src: "/images/services/nikah-in-home-1.jpg",
      alt: "Intimate drawing room home Nikah ceremony with Islamic scholar Qazi, groom, and father",
      caption: "Intimate drawing-room solemnization with Qazi, groom, and family elders.",
      badge: "Home Living Room Nikah",
    },
    {
      src: "/images/services/nikah-in-home-2.jpg",
      alt: "Pakistani bride signing official Nikahnama at home with mother and family witnesses",
      caption:
        "Pakistani bride signing the official Nikahnama registry surrounded by loving family.",
      badge: "Nikahnama Sign-off",
    },
    {
      src: "/images/services/nikah-in-home-3.jpg",
      alt: "Family offering traditional Pakistani mithai sweets to Nikah Khawan and groom",
      caption: "Celebratory Mithai distribution and heartfelt blessings after home ceremony.",
      badge: "Family Celebration & Dua",
    },
  ],
  whyChooseHeading: "Why Karachi Families Prefer Our Home Nikah Service",
  whyChoosePoints: [
    {
      title: "Family Privacy & Comfortable Setting",
      description:
        "Celebrate among close family and elders without the hustle and noise of commercial halls. Our scholar maintains a serene, respectful, and family-centered Islamic atmosphere.",
    },
    {
      title: "Elder-Friendly & Accessible",
      description:
        "Ideal for families with elderly grandparents or family members who cannot travel to banquet halls or government offices. The registrar comes directly to your living room or lawn.",
    },
    {
      title: "Punctual Doorstep Arrival Anywhere in Karachi",
      description:
        "From DHA and Clifton to North Nazimabad, Malir, and Bahria Town, our registrar arrives punctually with all authorized registers, government seals, and ink pads.",
    },
    {
      title: "Immediate Official Nikahnama Provided",
      description:
        "Official government Nikahnama copies are signed, stamped, and handed over to the bride and groom right in the home, followed by official Union Council registration.",
    },
  ],
  procedureSteps: [
    {
      step: "Step 01",
      title: "Share Home Location",
      description:
        "Call or WhatsApp us your residential address, Google Maps pin, date, and preferred ceremony time.",
    },
    {
      step: "Step 02",
      title: "Advance Data Verification",
      description:
        "Send CNIC copies of the couple, Wali, and witnesses so we can verify legal ages and pre-fill details accurately.",
    },
    {
      step: "Step 03",
      title: "Doorstep Solemnization",
      description:
        "The Nikah Khawan arrives, recites the Masnoon Khutbah, explains marital responsibilities, and administers Ijab-o-Qubool.",
    },
    {
      step: "Step 04",
      title: "Signatures & Official Handover",
      description:
        "Both parties sign the official registers, receive stamped copies, and Dua-e-Khair is offered for the newly wedded couple.",
    },
  ],
  documentsRequired: [
    {
      party: "Dulha (Groom)",
      items: [
        "Original CNIC / Smart Card & 2 copies",
        "2 Passport-size photographs",
        "Residential proof & contact information",
      ],
    },
    {
      party: "Dulhan (Bride)",
      items: [
        "Original CNIC / Smart Card & 2 copies",
        "2 Passport-size photographs",
        "Father / Guardian (Wali) CNIC copy",
      ],
    },
    {
      party: "Witnesses & Haq-Mehr",
      items: [
        "Two adult Muslim male witnesses with valid CNICs",
        "Agreed Haq-Mehr (Prompt / Mu'ajjal or Deferred / Mu'wajjal)",
        "Quiet seating arrangement for recitation & signing",
      ],
    },
  ],
  coverageAreas: [
    "DHA Karachi (All Phases)",
    "Clifton & Bath Island",
    "Gulshan-e-Iqbal & Gulistan-e-Jauhar",
    "North Nazimabad & Nazimabad",
    "PECHS, Bahadurabad & Tariq Road",
    "Malir Cantt, Model Colony & Airport",
    "Korangi Crossing, Korangi & Landhi",
    "Federal B Area & North Karachi",
    "Bahria Town Karachi & DHA City",
    "Gulshan-e-Maymar & Scheme 33",
  ],
  faqs: [
    {
      q: "Can you provide a home Nikah Khawan on short notice in Karachi?",
      a: "Yes. Our on-call registrar team is active 24/7. If you require a Nikah Khawan to arrive at your residence today or within an hour, call our direct helpline at 0303-2924813 for immediate dispatch.",
    },
    {
      q: "What is the fee or Hadya for home Nikah Khawan in Karachi?",
      a: "Our home service rates are very reasonable and transparent, covering the scholar's visit, official government Nikahnama forms, documentation, and Union Council registration facilitation. Contact us directly on WhatsApp for an instant, clear quote.",
    },
    {
      q: "Can the bride remain in another room during the Nikah recitation?",
      a: "Yes. In traditional Islamic practice, the bride can remain seated in her room. The Nikah Khawan, accompanied by the Wali and two witnesses, will take her direct verbal consent (Ijab-o-Qubool) and signatures with complete decorum and modesty.",
    },
    {
      q: "Will we receive the original Nikahnama immediately at home?",
      a: "Yes! The official 4-copy government Nikahnama is signed, witnessed, and stamped at your residence. You receive the original bride's copy and groom's copy before the registrar departs.",
    },
  ],
  relatedServices: [
    {
      title: "Nikah In Mosque",
      href: "/nikah-in-mosque",
      desc: "Revive the sacred Sunnah with a blessed Nikah solemnization in a Karachi Masjid.",
    },
    {
      title: "Nikah In Hall",
      href: "/nikah-in-hall",
      desc: "Punctual Nikah registrar attendance at marriage halls and banquet lawns.",
    },
    {
      title: "Court Marriage Karachi",
      href: "/court-marriage",
      desc: "Legal court marriage with high court advocates and official NADRA registration.",
    },
  ],
};

export const Route = createFileRoute("/nikah-in-home")({
  head: () =>
    buildPageSeo({
      title: "Nikah In Home Karachi | Doorstep Nikah Khawan & Registrar Service",
      description: pageData.metaDescription,
      path: `/${pageData.slug}`,
      keywords:
        "Nikah In Home Karachi, Nikah at Home Karachi, Doorstep Nikah Khawan Karachi, Home Nikah Registrar Karachi, Urgent Home Nikah Karachi, Shariah Home Nikah",
      category: pageData.category,
      schemaType: "Service",
      faqs: pageData.faqs,
    }),
  component: NikahInHomePage,
});

function NikahInHomePage() {
  return (
    <SiteLayout>
      <ServicePageDetail data={pageData} />
    </SiteLayout>
  );
}
