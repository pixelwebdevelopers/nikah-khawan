import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServicePageDetail, type ServiceDetailConfig } from "@/components/ServicePageDetail";
import { buildPageSeo } from "@/lib/seo";

const pageData: ServiceDetailConfig = {
  slug: "court-marriage",
  category: "Legal Nikah Services",
  title: "Court Marriage Karachi",
  h1: "Court Marriage in Karachi – 100% Legal Procedure, Advocate & NADRA Registration",
  urduTitle: "کراچی میں قانونی کورٹ میرج سروس — مکمل رازداری، قانونی تحفظ اور نادرا رجسٹریشن",
  metaDescription:
    "Official Court Marriage in Karachi service by experienced High Court advocates and registered Nikah Registrars. 100% legal, Shariah-compliant, full confidentiality, free will affidavit & NADRA marriage certificate.",
  heroIntro:
    "Seeking a legal, Shariah-compliant, and confidential Court Marriage in Karachi? Under Article 35 of the Constitution of Pakistan and the Muslim Family Laws Ordinance 1961, any adult Muslim man and woman have the full legal right to marry of their own free will. Our team of experienced Family Court Advocates and Government-Authorized Nikah Registrars ensures complete legal protection, drafting of affidavits, sworn testimony before a Magistrate, and issuance of official NADRA marriage certificates with absolute privacy.",
  images: [
    {
      src: "/images/services/court-marriage-1.jpg",
      alt: "High Court advocate and registered Nikah Registrar conducting official court marriage consultation in Karachi",
      caption: "Professional legal consultation protecting constitutional rights under Article 35.",
      badge: "High Court Legal Chamber",
    },
    {
      src: "/images/services/court-marriage-2.jpg",
      alt: "Official affidavit and legal Nikahnama contract signing before licensed Nikah Registrar",
      caption: "Preparation of sworn free-will affidavits and authorized registrar verification.",
      badge: "Sworn Free-Will Affidavit",
    },
    {
      src: "/images/services/nikah-in-office-2.jpg",
      alt: "Official Nikah Registrar executive chamber with 3D brand seal in Karachi",
      caption:
        "Confidential execution in licensed registrar office with certified government seals.",
      badge: "Licensed Legal Chamber",
    },
  ],
  whyChooseHeading: "Why Trust Our Legal Team for Your Court Marriage in Karachi?",
  whyChoosePoints: [
    {
      title: "100% Lawful & Shariah Compliant",
      description:
        "Every marriage is solemnized strictly adhering to Islamic Shariah (proper Ijab-o-Qubool, two adult male witnesses, and Haq-Mehr) as well as Pakistani statutory family laws.",
    },
    {
      title: "Protection Against Harassment & False FIRs",
      description:
        "We draft and execute an official Affidavit of Free Will (Bayaan-e-Halafi) sworn before an Oath Commissioner / Judicial Magistrate to legally counter false abduction (Zina / Kidnapping) complaints.",
    },
    {
      title: "Complete Privacy & Confidentiality",
      description:
        "We understand sensitive family dynamics. All client records, personal consultations, and court filings are kept strictly confidential with zero disclosure to unauthorized parties.",
    },
    {
      title: "Official NADRA Marriage Certificate (MRC)",
      description:
        "We ensure your marriage is officially registered with the designated Union Council, enabling you to receive a Computerized NADRA Marriage Registration Certificate valid for passports, visas, and legal status.",
    },
  ],
  procedureSteps: [
    {
      step: "Step 01",
      title: "Confidential Legal Consultation",
      description:
        "Discuss your case confidentially with our family law advocate. We verify legal ages (18+ under Sindh law) and ensure all required documents are ready.",
    },
    {
      step: "Step 02",
      title: "Affidavits & Register Drafting",
      description:
        "Our advocate prepares the legal Affidavit of Free Will, Age Verification statements, and officially enters all details into the government Nikahnama register.",
    },
    {
      step: "Step 03",
      title: "Shariah Solemnization & Magistrate Oath",
      description:
        "The Nikah Khawan solemnizes the Nikah with Masnoon Khutbah and mutual consent. The bride's sworn statement of free will is recorded before an authorized magistrate / oath commissioner.",
    },
    {
      step: "Step 04",
      title: "Issuance of Nikahnama & NADRA Filing",
      description:
        "Receive original stamped government Nikahnama copies immediately, with expedited Union Council processing for your computerized NADRA Marriage Certificate.",
    },
  ],
  documentsRequired: [
    {
      party: "Groom (Dulha) Requirements",
      items: [
        "Original CNIC or Valid Smart Card (plus 4 photocopies)",
        "4 Passport-size photographs (blue background)",
        "Minimum legal age 18 years (under Sindh Child Marriage Restraint Act)",
        "Proof of residence / employment in Karachi",
      ],
    },
    {
      party: "Bride (Dulhan) Requirements",
      items: [
        "Original CNIC or Valid Smart Card (plus 4 photocopies)",
        "4 Passport-size photographs (blue background)",
        "Minimum legal age 18 years (under Sindh Child Marriage Restraint Act)",
        "Declaration of free will & sound mental capacity",
      ],
    },
    {
      party: "Witnesses & Legal Terms",
      items: [
        "Two adult Muslim male witnesses with original CNICs",
        "Mutually agreed Haq-Mehr (Prompt or Deferred amount)",
        "Witness facilitation can be provided by our office if required",
      ],
    },
  ],
  coverageAreas: [
    "City Courts Karachi (Saddar)",
    "Sindh High Court Karachi",
    "Malir District Courts",
    "District South Courts",
    "District East & West Courts",
    "District Central Courts",
    "Private Advocate Chamber (Korangi Crossing & DHA)",
    "Assisting couples from all towns of Karachi & interior Sindh",
  ],
  faqs: [
    {
      q: "What is the minimum legal age for court marriage in Karachi (Sindh)?",
      a: "Under the Sindh Child Marriage Restraint Act 2013, the minimum legal age for both the groom and bride is strictly 18 years. Both parties must possess an official NADRA CNIC, Smart Card, or B-Form proving age 18 or above. We do not process marriages for minors under any circumstances.",
    },
    {
      q: "Is parental (Wali) permission mandatory for an adult girl's court marriage?",
      a: "Under Islamic Shariah (Hanafi school of jurisprudence) and the settled rulings of the Supreme Court of Pakistan and Sindh High Court, an adult, sane woman who has reached the age of majority (18+ years) has the legal right to contract a marriage of her own free will without the compulsion of a guardian (Wali).",
    },
    {
      q: "How long does the entire court marriage process take in Karachi?",
      a: "The entire process is typically completed in just 2 to 3 hours on the same day. This includes consultation, drafting of affidavits, solemnization of Nikah, recording of sworn statements, and issuance of original Nikahnama copies.",
    },
    {
      q: "How does your legal team protect the couple from police harassment or false FIRs?",
      a: "Our advocate drafts a comprehensive Affidavit of Free Will and Marriage Statement attested by an Oath Commissioner or Magistrate. In the event that disgruntled family members lodge a false abduction or kidnapping FIR, our legal team files a constitutional petition for quashment of FIR and protection under the Criminal Procedure Code (CrPC).",
    },
    {
      q: "Will we get an official NADRA computerized marriage certificate?",
      a: "Yes. Our registered Nikah Registrar immediately submits the official record to the relevant Union Council, enabling you to obtain your Computerized NADRA Marriage Registration Certificate (MRC) within 3 to 7 working days.",
    },
  ],
  relatedServices: [
    {
      title: "Nikah In Our Office",
      href: "/nikah-in-our-office",
      desc: "Simple, private Nikah solemnization directly at our registrar chambers in Karachi.",
    },
    {
      title: "Online Nikah Worldwide",
      href: "/online-nikah-worldwide",
      desc: "Shariah-compliant online video Nikah for overseas Pakistanis in UK, USA, UAE, and Canada.",
    },
    {
      title: "Q&A Knowledge Base",
      href: "/q-and-a",
      desc: "Detailed legal answers on witness rules, second marriage, and marriage certificates.",
    },
  ],
};

export const Route = createFileRoute("/court-marriage")({
  head: () =>
    buildPageSeo({
      title: "Court Marriage Karachi | Legal Procedure, Advocate & NADRA Certificate",
      description: pageData.metaDescription,
      path: `/${pageData.slug}`,
      keywords:
        "Court Marriage in Karachi, Court Marriage Karachi, Court Marriage Procedure Karachi, Court Marriage Fees Karachi, Court Marriage Lawyer Karachi, Legal Marriage Pakistan, NADRA Court Marriage Certificate, Affidavit of Free Will Karachi",
      category: pageData.category,
      schemaType: "LegalService",
      faqs: pageData.faqs,
    }),
  component: CourtMarriagePage,
});

function CourtMarriagePage() {
  return (
    <SiteLayout>
      <ServicePageDetail data={pageData} />
    </SiteLayout>
  );
}
