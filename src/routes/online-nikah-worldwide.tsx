import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicePageDetail, type ServiceDetailConfig } from "@/components/ServicePageDetail";
import { buildPageSeo } from "@/lib/seo";

const pageData: ServiceDetailConfig = {
  slug: "online-nikah-worldwide",
  category: "International Nikah",
  title: "Online Nikah Worldwide",
  h1: "Online Nikah Worldwide – Shariah Compliant Live Video Nikah for Overseas Pakistanis",
  urduTitle:
    "آن لائن نکاح پوری دنیا میں — بیرون ملک مقیم پاکستانیوں کے لیے شرعی و قانونی نکاح سروس",
  metaDescription:
    "Official Online Nikah service for overseas Pakistanis in UK, USA, UAE, Saudi Arabia, Canada, Europe & Australia. 100% Shariah compliant live Zoom/WhatsApp video Nikah, legal Wakeel representation & NADRA marriage registration.",
  heroIntro:
    "Are you an overseas Pakistani or international couple living in the United Kingdom, United States, United Arab Emirates, Saudi Arabia, Canada, or Australia seeking a legitimate, Shariah-compliant online Nikah? We offer government-registered Online Nikah solemnization via live High-Definition video conference (Zoom or WhatsApp), backed by certified Islamic Scholars, legal proxy (Tawkeel / Wakeel) representation, and full NADRA Computerized Marriage Registration Certificate (MRC) processing acceptable for foreign spouse visas and immigration.",
  images: [
    {
      src: "/images/services/online-nikah-1.jpg",
      alt: "Live HD video conference online Nikah solemnization session connecting overseas couple",
      caption: "Two-way live HD video conference solemnization with verified digital protocols.",
      badge: "Live Video Solemnization",
    },
    {
      src: "/images/services/online-nikah-2.jpg",
      alt: "Overseas Pakistani couple participating in live online Nikah video call with registered Qazi",
      caption: "Live HD video conference connecting overseas bride and groom with registrar.",
      badge: "Overseas Couple Connection",
    },
    {
      src: "/images/services/nikah-in-hall-2.jpg",
      alt: "Attested official Pakistani Nikahnama with MOFA apostille stamp for foreign visa",
      caption: "Official government Nikahnama registered for NADRA MRC & foreign spouse visa.",
      badge: "NADRA & Embassy Attestation",
    },
  ],
  whyChooseHeading: "Why Overseas Pakistanis Trust Our Online Nikah Service",
  whyChoosePoints: [
    {
      title: "100% Shariah Compliant with Islamic Fatwas",
      description:
        "Endorsed by leading Islamic jurists and international Fiqh academies. We conduct lawful Ijab-o-Qubool via two-way live audio-video, verified Muslim witnesses, and valid appointment of a legal representative (Wakeel).",
    },
    {
      title: "Official Government & NADRA Registration",
      description:
        "Unlike unregistered online ceremonies, our government-authorized Nikah Registrar registers your marriage with the official Union Council and secures your Computerized NADRA Marriage Certificate (MRC).",
    },
    {
      title: "Spouse Visa & Immigration Compliant",
      description:
        "Our documentation is legally accepted by the UK Home Office, US Citizenship and Immigration Services (USCIS), Canada IRCC, UAE Ministry of Foreign Affairs (MOFA), and Schengen embassies with Ministry of Foreign Affairs (MOFA Pakistan) attestation.",
    },
    {
      title: "Secure Global Courier Delivery (DHL / FedEx)",
      description:
        "Your original stamped Nikahnama and NADRA certificates are dispatched internationally via tracked DHL / FedEx express directly to your overseas residential address.",
    },
  ],
  procedureSteps: [
    {
      step: "Step 01",
      title: "Online Booking & Time Slot",
      description:
        "Contact us via WhatsApp with your country of residence. We accommodate all international time zones (GMT, EST, PST, GST, AST).",
    },
    {
      step: "Step 02",
      title: "Document Submission & Wakeel Draft",
      description:
        "Submit passport and CNIC/NICOP copies online. We draft the formal Power of Attorney (Tawkeel-e-Nikah) and pre-fill the official government registers.",
    },
    {
      step: "Step 03",
      title: "Live HD Video Nikah Ceremony",
      description:
        "The Nikah Khawan hosts a secure Zoom/WhatsApp video session. Quranic verses, Khutbah-e-Nikah, and verbal Ijab-o-Qubool are conducted live with witnesses.",
    },
    {
      step: "Step 04",
      title: "NADRA Processing & Global Dispatch",
      description:
        "We register the Nikahnama at the Union Council, issue the NADRA certificate, attain MOFA attestation (if needed), and dispatch documents via tracked courier.",
    },
  ],
  documentsRequired: [
    {
      party: "Groom (Abroad or in Pakistan)",
      items: [
        "Copy of valid CNIC, Smart Card, or NICOP",
        "Copy of Passport (Pakistani or Foreign Passport)",
        "2 Passport-size digital photographs",
        "Valid email & WhatsApp number for live session",
      ],
    },
    {
      party: "Bride (Abroad or in Pakistan)",
      items: [
        "Copy of valid CNIC, Smart Card, or NICOP",
        "Copy of Passport (Pakistani or Foreign Passport)",
        "2 Passport-size digital photographs",
        "Wali's consent letter / presence in video call",
      ],
    },
    {
      party: "Witnesses & Legal Proxy (Wakeel)",
      items: [
        "Two adult Muslim male witnesses (can be in Pakistan or joined online)",
        "Formal verbal / written appointment of Wakeel (Representative)",
        "Haq-Mehr terms agreed mutually in writing",
      ],
    },
  ],
  coverageAreas: [
    "United Kingdom (London, Birmingham, Manchester, Bradford, Leeds)",
    "United States of America (New York, Texas, California, Chicago, Virginia)",
    "United Arab Emirates (Dubai, Abu Dhabi, Sharjah, Ajman)",
    "Kingdom of Saudi Arabia (Riyadh, Jeddah, Dammam, Makkah, Madinah)",
    "Canada (Toronto, Mississauga, Calgary, Vancouver, Montreal)",
    "Australia (Sydney, Melbourne, Brisbane, Perth)",
    "Europe (Germany, Italy, France, Spain, Norway, Sweden)",
    "Middle East (Qatar, Bahrain, Kuwait, Oman)",
  ],
  faqs: [
    {
      q: "Is an online video Nikah valid according to Islamic Shariah?",
      a: "Yes. Leading contemporary Islamic institutions (including Darul Uloom Karachi, Al-Azhar, and the Islamic Fiqh Academy) have ruled that an online Nikah conducted via live two-way audio-video with clear identification of both parties, presence of two adult Muslim witnesses, mutual Ijab-o-Qubool (offer and acceptance), and appointment of a legal Wakeel (proxy) is 100% valid under Islamic law.",
    },
    {
      q: "Is an online Nikah legally valid under Pakistani law?",
      a: "Yes. Under Section 5 of the Muslim Family Laws Ordinance 1961, when solemnized through an authorized Nikah Registrar with proper identification of parties and witnesses, an online Nikah is legally valid and registrable with local Union Councils and NADRA.",
    },
    {
      q: "Can the bride and groom be in different countries during the call?",
      a: "Yes! A common scenario is the groom being in the UK or UAE while the bride is in Karachi, Pakistan. Our live video conference connects both parties simultaneously along with witnesses, family members, and the Nikah Registrar.",
    },
    {
      q: "How will we receive the original Nikahnama and NADRA Marriage Certificate?",
      a: "Once the ceremony is completed and documents are officially recorded with the government, we package the original sealed Nikahnama and computerized NADRA Marriage Certificate (MRC) and ship them directly to your overseas address via tracked DHL or FedEx Express within 3 to 5 business days.",
    },
    {
      q: "Can you provide Ministry of Foreign Affairs (MOFA) attestation for embassy visa processing?",
      a: "Yes. We offer complete legal attestation services, including Ministry of Foreign Affairs (MOFA Pakistan) apostille/attestation, notary public stamps, and translation services required for foreign spouse visa applications.",
    },
  ],
  relatedServices: [
    {
      title: "Court Marriage Karachi",
      href: "/court-marriage",
      desc: "Confidential legal court marriage with High Court advocates and full legal protection.",
    },
    {
      title: "Nikah In Makkah",
      href: "/nikah-in-makkah",
      desc: "Spiritual consultation and solemnization guidance in the holy city of Makkah.",
    },
    {
      title: "Nikah In Madinah",
      href: "/nikah-in-madinah",
      desc: "Blessed Nikah guidance connected to the sacred sanctuary of Madinah al-Munawwarah.",
    },
  ],
};

export const Route = createFileRoute("/online-nikah-worldwide")({
  head: () =>
    buildPageSeo({
      title: "Online Nikah Worldwide | Live Video Nikah for Overseas Pakistanis",
      description: pageData.metaDescription,
      path: `/${pageData.slug}`,
      keywords:
        "Online Nikah Worldwide, Online Nikah in Pakistan, Overseas Pakistani Nikah, Online Nikah UK USA UAE, Shariah Online Nikah, Zoom Nikah Karachi, NADRA Certificate Online Nikah, Is Online Nikah Valid in Islam",
      category: pageData.category,
      schemaType: "Service",
      faqs: pageData.faqs,
    }),
  component: OnlineNikahWorldwidePage,
});

function OnlineNikahWorldwidePage() {
  return (
    <SiteLayout>
      <ServicePageDetail data={pageData} />
    </SiteLayout>
  );
}
