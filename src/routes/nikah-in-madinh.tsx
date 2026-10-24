import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicePageDetail, type ServiceDetailConfig } from "@/components/ServicePageDetail";
import { buildPageSeo } from "@/lib/seo";

const pageData: ServiceDetailConfig = {
  slug: "nikah-in-madinah",
  category: "Holy Destinations",
  title: "Nikah In Madinh",
  h1: "Nikah In Madinh (Madinah) – Blessed Solemnization Guidance & Official Registration",
  urduTitle: "مدینہ منورہ میں مسنون نکاح — مسجد نبوی شریف میں نکاح رہنمائی اور نادرا رجسٹریشن",
  metaDescription:
    "Sacred Nikah in Madinh (Madinah al-Munawwarah) guidance service. Expert Islamic scholars for solemnization connected to Masjid an-Nabawi with official government Nikahnama and NADRA registration.",
  heroIntro:
    "Solemnizing your Nikah in the illuminated city of Madinah (Madinh), near the sacred Rawdah and courtyard of Masjid an-Nabawi, is a timeless memory filled with Barakah. Our qualified Islamic Scholars and Government Registered Nikah Registrars guide you through every spiritual and legal step, ensuring your blessed ceremony is officially recorded under Pakistani family law.",
  images: [
    {
      src: "/images/services/nikah-in-madinah-1.jpg",
      alt: "Masjid an-Nabawi courtyard and iconic umbrellas in Madinah al-Munawwarah",
      caption: "Tranquil and sacred atmosphere in the city of the Prophet (ﷺ) Madinah.",
      badge: "Masjid an-Nabawi",
    },
    {
      src: "/images/services/nikah-in-mosque-2.jpg",
      alt: "Sincere Dua supplication seeking marriage blessings in the holy city",
      caption: "Soul-stirring supplications and Salawat for eternal matrimonial barakah.",
      badge: "Prophetic Sunnah Dua",
    },
    {
      src: "/images/services/nikah-in-mosque-3.jpg",
      alt: "Madinah Ajwa dates and sweet distribution Sunnah following Nikah",
      caption: "Authentic Sunnah date distribution with blessed Madinah Ajwa dates.",
      badge: "Ajwa Date Distribution",
    },
  ],
  whyChooseHeading: "Why Seek Our Madinh Nikah Consultation & Legal Support?",
  whyChoosePoints: [
    {
      title: "Spiritual Sanctity in the City of the Prophet (ﷺ)",
      description:
        "We guide couples on the sacred etiquette of Madinah, recommended prayer areas, and auspicious moments for offering Ijab-o-Qubool and sending Salawat upon the Holy Prophet (ﷺ).",
    },
    {
      title: "Authentic Prophetic Sunnah Solemnization",
      description:
        "Our Islamic scholars guide you through the classical prophetic Khutbah-e-Nikah and Sunnah supplications recited by the Sahaba in this very blessed sanctuary.",
    },
    {
      title: "Hassle-Free Legal Documentation",
      description:
        "Avoid documentation pitfalls. We ensure your verbal marriage covenant is supported by official Pakistani government Nikahnama registers and recognized Union Council filings.",
    },
    {
      title: "Computerized NADRA Marriage Certificate (MRC)",
      description:
        "Upon registration, we facilitate the issuance of your official NADRA computerized marriage certificate, providing seamless proof of marriage for visas and family passports.",
    },
  ],
  procedureSteps: [
    {
      step: "Step 01",
      title: "Travel & Timing Alignment",
      description:
        "Consult our senior scholars before or during your stay in Madinah to schedule the ceremony date and verify identity documents.",
    },
    {
      step: "Step 02",
      title: "Pre-Drafting Legal Records",
      description:
        "We review passport numbers, CNIC/NICOP copies, and prepare the government register entries in Karachi/Islamabad.",
    },
    {
      step: "Step 03",
      title: "Solemnization in Madinah",
      description:
        "The sacred verbal Ijab-o-Qubool, Khutbah recitation, and Dua-e-Khair are conducted in the spiritual tranquility of Madinah al-Munawwarah.",
    },
    {
      step: "Step 04",
      title: "Government Filing & Certificate",
      description:
        "Official registers are stamped and finalized with the Union Council in Pakistan, securing your official computerized NADRA MRC.",
    },
  ],
  documentsRequired: [
    {
      party: "Groom (Dulha)",
      items: [
        "Valid Pakistani Passport / Foreign Passport with Umrah/Iqama Visa",
        "Original CNIC / NICOP / Smart Card copy",
        "2 Passport-size photographs",
      ],
    },
    {
      party: "Bride (Dulhan)",
      items: [
        "Valid Pakistani Passport / Foreign Passport with Umrah/Iqama Visa",
        "Original CNIC / NICOP / Smart Card copy",
        "Wali (Father / Guardian) presence or verified consent",
      ],
    },
    {
      party: "Witnesses & Haq-Mehr",
      items: [
        "Two adult Muslim male witnesses with valid identification",
        "Haq-Mehr terms agreed between both families",
        "Strict adherence to Masjid an-Nabawi decorum and respect",
      ],
    },
  ],
  coverageAreas: [
    "Masjid an-Nabawi (Piazzas & Courtyard Umbrellas)",
    "Markazia Central Hotel District (North & South)",
    "Quba & Qiblatain Areas",
    "Madinah Hotel Suites & Meeting Lounges",
    "Coordinated with Karachi Registrar Head Office for legal filing",
  ],
  faqs: [
    {
      q: "Can we perform our Nikah in the courtyard of Masjid an-Nabawi?",
      a: "Yes. Many Pakistani pilgrims and international couples gather quietly in the courtyard umbrellas (Piazza) or their hotel suites overlooking the Prophet's Mosque to recite the Khutbah and conduct verbal Ijab-o-Qubool with deep reverence and modesty.",
    },
    {
      q: "How does the marriage become legally official back in Pakistan?",
      a: "Our government-registered Nikah Registrar incorporates the ceremony into the official Pakistani marriage register under the Muslim Family Laws Ordinance 1961, filing it directly with the local Union Council so you receive an official NADRA Marriage Certificate.",
    },
    {
      q: "Can the Nikah Khawan assist if one partner is in Pakistan and one is in Madinah?",
      a: "Yes! Through our synchronized Online Nikah platform, one spouse can be in Madinah and the other in Pakistan or another overseas country, connected via live video conference with our Nikah Registrar.",
    },
  ],
  relatedServices: [
    {
      title: "Nikah In Makkah",
      href: "/nikah-in-makkah",
      desc: "Sacred solemnization guidance and official registration in Holy Makkah al-Mukarramah.",
    },
    {
      title: "Online Nikah Worldwide",
      href: "/online-nikah-worldwide",
      desc: "Live video Nikah for overseas Pakistanis and international couples globally.",
    },
  ],
};

export const Route = createFileRoute("/nikah-in-madinh")({
  head: () =>
    buildPageSeo({
      title: "Nikah In Madinh | Sacred Nikah Guidance & Official Registration",
      description: pageData.metaDescription,
      path: "/nikah-in-madinah",
      keywords:
        "Nikah In Madinh, Nikah In Madinah, Nikah in Masjid Nabawi, Madinah Munawwarah Nikah, How to do Nikah in Madinah, Sunnah Nikah in Madinah",
      category: pageData.category,
      schemaType: "Service",
      faqs: pageData.faqs,
    }),
  component: NikahInMadinhPage,
});

function NikahInMadinhPage() {
  return (
    <SiteLayout>
      <ServicePageDetail data={pageData} />
    </SiteLayout>
  );
}
