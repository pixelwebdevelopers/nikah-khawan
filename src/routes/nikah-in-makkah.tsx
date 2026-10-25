import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicePageDetail, type ServiceDetailConfig } from "@/components/ServicePageDetail";
import { buildPageSeo } from "@/lib/seo";

const pageData: ServiceDetailConfig = {
  slug: "nikah-in-makkah",
  category: "Holy Destinations",
  title: "Nikah In Makkah",
  h1: "Nikah In Makkah – Sacred Solemnization Guidance & Official Legal Documentation",
  urduTitle: "مکہ مکرمہ میں بابرکت نکاح — مسجد الحرام میں نکاح رہنمائی اور سرکاری رجسٹریشن",
  metaDescription:
    "Expert guidance and legal registration for solemnizing your Nikah in Holy Makkah al-Mukarramah. Complete Islamic scholar consultation, authentic Khutbah, and legal documentation recognized in Pakistan and internationally.",
  heroIntro:
    "Dreaming of tying the sacred knot of Nikah in the holiest city on Earth—facing the Holy Kaaba in Masjid al-Haram? Solemnizing your marriage during Umrah or while visiting Makkah al-Mukarramah is one of the most spiritually elevated and blessed experiences in Islam. Our registered Nikah Registrar and Islamic Scholars provide end-to-end guidance, Khutbah preparation, and official legal documentation ensuring your Makkah Nikah is spiritually uplifting and officially registered with the Government of Pakistan and NADRA.",
  images: [
    {
      src: "/images/services/nikah-in-makkah-1.jpg",
      alt: "Sacred Nikah solemnization facing the Holy Kaaba in Masjid al-Haram Makkah Mukarramah",
      caption: "Spiritual matrimonial covenant facing the Holy Kaaba in Masjid al-Haram.",
      badge: "Holy Kaaba Solemnization",
    },
    {
      src: "/images/services/nikah-in-makkah-2.jpg",
      alt: "Pilgrims and worshippers making heartfelt Dua in Makkah holy sanctuary",
      caption: "Sacred moments of prayer and gratitude during blessed Umrah Nikah.",
      badge: "Spiritual Sanctuary",
    },
    {
      src: "/images/services/nikah-in-makkah-3.jpg",
      alt: "Blessed Nikah ceremony in Masjid al-Haram courtyard with Makkah Royal Clock Tower",
      caption: "Solemn supplications seeking lifelong barakah and harmony in holy Makkah.",
      badge: "Makkah Haram Sanctuary",
    },
  ],
  whyChooseHeading: "The Spiritual & Legal Value of Our Makkah Nikah Guidance",
  whyChoosePoints: [
    {
      title: "Spiritual Sanctity in the Holy Haram",
      description:
        "We guide couples and families on the proper Islamic etiquette (Adab), recommended prayer spots, and auspicious times for solemnizing the Nikah facing the holy Kaaba.",
    },
    {
      title: "Authorized Islamic Scholar Khutbah",
      description:
        "Our qualified scholars provide or conduct the authentic prophetic Arabic Khutbah-e-Nikah and comprehensive supplication (Dua-e-Khair) tailored for this holy sanctuary.",
    },
    {
      title: "Bilingual Shariah & Legal Harmonization",
      description:
        "We advise you on how to seamlessly bridge Saudi local guidelines with Pakistani statutory family law (Muslim Family Laws Ordinance 1961) to prevent future legal complications.",
    },
    {
      title: "Complete Official NADRA Registration",
      description:
        "We handle official registration with the Union Council in Pakistan so you receive your legal government Nikahnama and Computerized NADRA Marriage Certificate without travelling hassles.",
    },
  ],
  procedureSteps: [
    {
      step: "Step 01",
      title: "Pre-Travel Consultation",
      description:
        "Contact our scholars before departing for Umrah/Saudi Arabia to align your intended ceremony date, witnesses, and legal paperwork.",
    },
    {
      step: "Step 02",
      title: "Document Review & Drafting",
      description:
        "We verify CNICs/NICOPs and Passports of the couple and two witnesses, preparing the official Nikahnama draft in advance.",
    },
    {
      step: "Step 03",
      title: "Solemnization in Makkah",
      description:
        "The sacred verbal Ijab-o-Qubool and Khutbah-e-Nikah are conducted in Holy Makkah (in person with our traveling scholars or coordinated via live link).",
    },
    {
      step: "Step 04",
      title: "NADRA Registration in Pakistan",
      description:
        "Upon completion, the official government register is stamped and filed with the Union Council, securing your official NADRA MRC.",
    },
  ],
  documentsRequired: [
    {
      party: "Groom (Dulha)",
      items: [
        "Valid Pakistani Passport & Umrah / Resident Visa",
        "Original CNIC / Smart Card / NICOP copy",
        "2 Passport-size color photographs",
      ],
    },
    {
      party: "Bride (Dulhan)",
      items: [
        "Valid Pakistani Passport & Umrah / Resident Visa",
        "Original CNIC / Smart Card / NICOP copy",
        "Wali (Father / Guardian) presence or verified consent",
      ],
    },
    {
      party: "Witnesses & Haq-Mehr",
      items: [
        "Two adult Muslim male witnesses with valid passports/CNICs",
        "Agreed Haq-Mehr (Specified in Saudi Riyals or Pakistani Rupees)",
        "Adherence to Masjid al-Haram decorum and guidelines",
      ],
    },
  ],
  coverageAreas: [
    "Masjid al-Haram (Opposite Mataf & Upper Floors)",
    "Abraj Al Bait (Clock Tower) Suites & Meeting Rooms",
    "Jabal Omar Hotels & Venues",
    "Aziziyah & Makkah Residential Hotels",
    "Coordinated with Karachi & Islamabad Registrars for filing",
  ],
  faqs: [
    {
      q: "Can a Pakistani couple perform their Nikah inside Masjid al-Haram in Makkah?",
      a: "Yes. Many Muslim couples from Pakistan and across the globe perform their simple, informal Sunnah recitation and verbal Ijab-o-Qubool inside the Haram Sharif facing the Kaaba. To make it legally valid back home, it must be officially recorded by an authorized Nikah Registrar, which our service provides.",
    },
    {
      q: "Does the Saudi government issue a marriage certificate for tourists on an Umrah visa?",
      a: "Generally, official Saudi court marriage contracts require permanent Saudi Iqama residency. For tourists on an Umrah visa, performing the Nikah with our registered Pakistani Nikah Registrar ensures you receive an official, legally recognized Pakistani Nikahnama and NADRA certificate without bureaucratic hurdles.",
    },
    {
      q: "Can the Nikah Khawan guide us remotely while we are in Makkah?",
      a: "Yes. Our senior scholars and registrars offer a synchronized live remote solemnization service, connecting you live from your hotel or the Haram courtyard to our registrar office for immediate legal logging.",
    },
    {
      q: "How should the Haq-Mehr be specified for a Makkah Nikah?",
      a: "The Haq-Mehr can be mutually agreed upon in either Saudi Riyals (SAR), Gold, or Pakistani Rupees (PKR) and clearly recorded in Section 13-16 of the official government Nikahnama.",
    },
  ],
  relatedServices: [
    {
      title: "Nikah In Madinah",
      href: "/nikah-in-madinah",
      desc: "Sacred Nikah guidance and solemnization in the blessed city of Madinah al-Munawwarah.",
    },
    {
      title: "Online Nikah Worldwide",
      href: "/online-nikah-worldwide",
      desc: "Live video Nikah for overseas couples across the Middle East and worldwide.",
    },
    {
      title: "Nikah In Mosque",
      href: "/nikah-in-mosque",
      desc: "Blessed Sunnah Nikah solemnization in holy Masajid across Karachi.",
    },
  ],
};

export const Route = createFileRoute("/nikah-in-makkah")({
  head: () =>
    buildPageSeo({
      title: "Nikah In Makkah | Sacred Nikah Guidance & Official Documentation",
      description: pageData.metaDescription,
      path: `/${pageData.slug}`,
      keywords:
        "Nikah In Makkah, Nikah in Masjid al-Haram, Nikah during Umrah, How to do Nikah in Makkah, Holy Makkah Nikah Guidance, Makkah Nikah Registration Pakistan, NADRA Certificate Makkah Nikah",
      category: pageData.category,
      schemaType: "Service",
      faqs: pageData.faqs,
    }),
  component: NikahInMakkahPage,
});

function NikahInMakkahPage() {
  return (
    <SiteLayout>
      <ServicePageDetail data={pageData} />
    </SiteLayout>
  );
}
