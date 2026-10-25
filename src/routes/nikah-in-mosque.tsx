import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicePageDetail, type ServiceDetailConfig } from "@/components/ServicePageDetail";
import { buildPageSeo } from "@/lib/seo";

const pageData: ServiceDetailConfig = {
  slug: "nikah-in-mosque",
  category: "Karachi Nikah Services",
  title: "Nikah In Mosque",
  h1: "Nikah In Mosque Karachi – Sunnah Masjid Nikah Ceremony & Official Registration",
  urduTitle: "مسجد میں نکاح کی مسنون تقریب اور سرکاری نکاح رجسٹریشن",
  metaDescription:
    "Revive the blessed Sunnah with Nikah in Mosque Karachi service. Qualified Islamic Scholars & Registered Nikah Registrars for sacred Masjid ceremonies with official government Nikahnama registration.",
  heroIntro:
    "The Holy Prophet Muhammad (ﷺ) recommended solemnizing Nikah in Masajid: 'Announce this marriage, solemnize it in the mosques, and beat the duff for it' (Tirmidhi). Our qualified Islamic Scholars and Government Registered Nikah Registrars coordinate and conduct beautiful, Shariah-compliant Masjid Nikah ceremonies across Karachi, combining deep spiritual reverence with complete legal documentation.",
  images: [
    {
      src: "/images/services/nikah-in-mosque-1.jpg",
      alt: "Islamic Imam scholar conducting Sunnah Nikah ceremony inside grand Karachi mosque",
      caption: "Spiritual Sunnah ceremony in the prayer hall with Imam, groom, and family.",
      badge: "Masjid Solemnization",
    },
    {
      src: "/images/services/nikah-in-mosque-2.jpg",
      alt: "Congregational Dua prayer with raised hands during Sunnah Nikah inside grand mosque",
      caption: "Heartfelt collective supplication and Dua-e-Khair inside the prayer hall.",
      badge: "Sunnah Dua-e-Khair",
    },
    {
      src: "/images/services/nikah-in-mosque-3.jpg",
      alt: "Islamic scholar Qazi solemnizing Nikah with groom and family inside decorated mosque",
      caption: "Sacred Masnoon Khutbah and register signing in the house of Allah.",
      badge: "Sunnah Nikah Ceremony",
    },
  ],
  whyChooseHeading: "Why Solemnize Your Nikah in a Mosque with Our Scholars?",
  whyChoosePoints: [
    {
      title: "Adherence to Sacred Sunnah",
      description:
        "Perform your wedding covenant in the house of Allah (SWT). Our scholars follow authentic prophetic traditions, delivering an uplifting Arabic Khutbah-e-Nikah and an inspiring soul-stirring Dua.",
    },
    {
      title: "Coordination with Mosque Administration",
      description:
        "We assist in coordinating with the Imam, Khateeb, or administrative committee of your chosen Masjid for smooth timing after Jummah, Asr, or Maghrib prayers.",
    },
    {
      title: "Official Government Nikahnama On-Site",
      description:
        "Unlike informal recitations that require visiting an office later, our registered registrar brings official government registers directly to the mosque for immediate legal signatures and stamping.",
    },
    {
      title: "Sunnah Date Distribution (Nisar-e-Khajoor)",
      description:
        "We guide families on the respectful and traditional Sunnah distribution of dates and sweets among the congregation, preserving the dignity of the holy prayer hall.",
    },
  ],
  procedureSteps: [
    {
      step: "Step 01",
      title: "Select Mosque & Prayer Timing",
      description:
        "Choose your neighborhood Masjid or prominent Karachi landmark mosque (e.g. Masjid-e-Tooba, Bait-ul-Mukarram) and prayer slot.",
    },
    {
      step: "Step 02",
      title: "Document Pre-Check",
      description:
        "We review CNICs of the bride, groom, two Muslim witnesses, and Wali in advance to prepare the official registry books.",
    },
    {
      step: "Step 03",
      title: "Post-Prayer Masnoon Recitation",
      description:
        "Following congregation prayers, the Nikah Khawan delivers the Khutbah, explains marital rights, and records mutual Ijab-o-Qubool.",
    },
    {
      step: "Step 04",
      title: "Signatures & Dua-e-Khair",
      description:
        "Official registers are signed by all parties in the mosque, collective Dua is offered, and stamped Nikahnama copies are handed over.",
    },
  ],
  documentsRequired: [
    {
      party: "Groom (Dulha)",
      items: [
        "Original CNIC / Smart Card & 2 copies",
        "2 Passport-size photographs",
        "Presence in the mosque prayer hall",
      ],
    },
    {
      party: "Bride (Dulhan)",
      items: [
        "Original CNIC / Smart Card & 2 copies",
        "2 Passport-size photographs",
        "Presence in designated women's gallery or formal consent through Wali",
      ],
    },
    {
      party: "Witnesses & Mosque Protocol",
      items: [
        "Two adult Muslim male witnesses with valid CNICs",
        "Wali (Father / Brother / Legal Guardian) CNIC copy",
        "Agreed Haq-Mehr details",
        "Adherence to mosque sanctity & dress code",
      ],
    },
  ],
  coverageAreas: [
    "Masjid-e-Tooba (DHA Karachi)",
    "Masjid Bait-ul-Mukarram (Gulshan-e-Iqbal)",
    "Masjid-e-Sultan (DHA Phase 5)",
    "Memom Masjid (Boulten Market & Clifton)",
    "Madina Masjid (Tariq Road)",
    "Rasheedia Masjid (Korangi Crossing)",
    "Masjid-e-Anwar (North Nazimabad)",
    "Jamia Darul Uloom Masajid (Korangi)",
    "Any local Jamea Masjid across all Karachi towns",
  ],
  faqs: [
    {
      q: "Can the bride attend the Nikah ceremony in the Mosque?",
      a: "Yes. Many modern mosques in Karachi feature dedicated women's prayer halls or galleries where the bride, her mother, and female relatives can observe the ceremony with full modesty and purdah. Alternatively, her consent can be taken by the Nikah Registrar and Wali right outside the hall or at home.",
    },
    {
      q: "What is the best prayer time for conducting a Masjid Nikah?",
      a: "Friday afternoon (immediately after Friday Jummah prayer) is the most blessed and popular time for Nikah in Karachi. Saturday and Sunday afternoons between Asr and Maghrib are also very popular for convenient family attendance.",
    },
    {
      q: "Can the Nikah Khawan provide the official stamped Nikahnama right inside the Mosque?",
      a: "Yes. Our registered Nikah Registrar carries the official government register and seals to the mosque so that the Nikahnama is signed, witnessed, and officially stamped right after the Dua-e-Khair.",
    },
    {
      q: "Can you help us obtain permission from the Mosque committee?",
      a: "Yes, we regularly liaise with mosque administrations and committees across Karachi to confirm timings and adhere to local mosque protocols.",
    },
  ],
  relatedServices: [
    {
      title: "Nikah In Home",
      href: "/nikah-in-home",
      desc: "Warm and intimate family Nikah ceremonies at your private residence.",
    },
    {
      title: "Nikah In Hall",
      href: "/nikah-in-hall",
      desc: "Punctual attendance at grand banquet halls and wedding receptions.",
    },
    {
      title: "Nikah In Makkah",
      href: "/nikah-in-makkah",
      desc: "Spiritual consultation and solemnization in the holy city of Makkah.",
    },
  ],
};

export const Route = createFileRoute("/nikah-in-mosque")({
  head: () =>
    buildPageSeo({
      title: "Nikah In Mosque Karachi | Sunnah Masjid Nikah Ceremony",
      description: pageData.metaDescription,
      path: `/${pageData.slug}`,
      keywords:
        "Nikah In Mosque Karachi, Nikah in Masjid Karachi, Masnoon Nikah Mosque, Sunnah Nikah Karachi, Friday Nikah Karachi, Masjid Nikah Registrar Karachi, Islamic Nikah Khawan Karachi",
      category: pageData.category,
      schemaType: "Service",
      faqs: pageData.faqs,
    }),
  component: NikahInMosquePage,
});

function NikahInMosquePage() {
  return (
    <SiteLayout>
      <ServicePageDetail data={pageData} />
    </SiteLayout>
  );
}
