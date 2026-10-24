import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { buildPageSeo } from "@/lib/seo";
import {
  HelpCircle,
  Sparkles,
  ChevronRight,
  MessageCircle,
  Phone,
  Search,
  BookOpen,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE_CONFIG } from "@/config/site";

const qnaCategories = [
  {
    category: "General Nikah & Solemnization",
    items: [
      {
        q: "Which documents are required for Nikah in Karachi?",
        a: "The essential documents include: (1) Original and photocopies of CNICs/Smart Cards of both bride and groom; (2) Two passport-sized photographs of each party; (3) Original CNICs of two adult Muslim male witnesses; (4) CNIC copy of the bride's Wali (father, brother, or guardian); (5) Agreed details of Haq-Mehr.",
      },
      {
        q: "What is the minimum legal age for marriage in Sindh?",
        a: "Under the Sindh Child Marriage Restraint Act 2013, the minimum legal age for marriage in Karachi and all of Sindh is strictly 18 years for BOTH the male and the female. Any marriage contracted below the age of 18 is punishable by law. Valid CNICs proving age 18+ are mandatory.",
      },
      {
        q: "Who qualifies as a legal witness for a Nikah in Pakistan?",
        a: "Under Islamic Shariah and Pakistani family law, a Nikah requires two adult (18+), sane, Muslim male witnesses. Alternatively, one adult Muslim male and two adult Muslim females can serve as lawful witnesses. Witnesses must possess valid CNICs and physically or virtually observe the mutual consent (Ijab-o-Qubool).",
      },
      {
        q: "How many copies of the Nikahnama are signed, and who keeps them?",
        a: "The official government register contains four identical copies: Copy 1 is retained permanently by the Nikah Registrar; Copy 2 is submitted to the local Union Council; Copy 3 is the groom's original copy; and Copy 4 is the bride's original copy. Both the bride and groom receive their original copies on the wedding day.",
      },
    ],
  },
  {
    category: "Court Marriage & Legal Protection",
    items: [
      {
        q: "Is court marriage legal under Pakistani law and Islamic Shariah?",
        a: "Yes, 100%. Article 35 of the Constitution of Pakistan guarantees freedom of marriage for adult citizens. Under Islamic Shariah (Hanafi jurisprudence), an adult, sane woman (Baligha) has the unquestioned right to enter into a marriage contract of her own free will. The court process records her sworn statement before a magistrate.",
      },
      {
        q: "Can an adult girl perform court marriage without her parents' (Wali's) consent?",
        a: "Yes. Settled rulings from the Supreme Court of Pakistan and the Sindh High Court affirm that an adult Muslim woman who has reached majority (18+ years) does not require the mandatory consent of her father or male guardian to solemnize a valid Nikah.",
      },
      {
        q: "How does your legal team protect couples against false police FIRs?",
        a: "Our High Court family advocates draft and record a formal Affidavit of Free Will and Marriage Statement (Bayaan-e-Halafi) sworn before an Oath Commissioner / Judicial Magistrate. In the event of a false abduction or kidnapping FIR (Section 496-A/365-B PPC), our legal team files a quashment petition in the High Court.",
      },
      {
        q: "How long does a court marriage take in Karachi?",
        a: "The entire procedure is typically finalized in 2 to 3 hours on the same working day, including drafting of affidavits, solemnization of Nikah, witness verification, statement recording, and delivery of original Nikahnama copies.",
      },
    ],
  },
  {
    category: "Online Nikah & Overseas Pakistanis",
    items: [
      {
        q: "Is an online video Nikah accepted by NADRA and foreign embassies?",
        a: "Yes. When solemnized by a registered Nikah Registrar with formal appointment of a Wakeel (proxy) and proper witness verification, the marriage is officially recorded at the Union Council and issued a standard Computerized NADRA Marriage Registration Certificate (MRC). This certificate is accepted by the UK Home Office, US USCIS, UAE MOFA, and Schengen embassies with MOFA Pakistan attestation.",
      },
      {
        q: "Can the bride and groom be in different countries during the online Nikah?",
        a: "Yes. Our video conferencing platform (Zoom or WhatsApp HD) connects the bride, groom, Wali, and witnesses across multiple international countries simultaneously. The Nikah Khawan administers the Ijab-o-Qubool live.",
      },
      {
        q: "How does the overseas spouse sign the physical Nikahnama?",
        a: "Under Islamic Shariah, the overseas party designates an authorized representative (Wakeel) in Pakistan through a verbal or written Power of Attorney (Tawkeel-e-Nikah). The Wakeel signs the official physical registers on their behalf in the presence of the registrar and witnesses.",
      },
    ],
  },
  {
    category: "Haq-Mehr, NADRA Certificate & Miscellaneous",
    items: [
      {
        q: "What is the legal difference between Prompt (Mu'ajjal) and Deferred (Mu'wajjal) Haq-Mehr?",
        a: "Prompt Haq-Mehr (Mu'ajjal) is due and payable immediately upon the solemnization of the Nikah or whenever the wife demands it. Deferred Haq-Mehr (Mu'wajjal) is payable upon a specified future date, upon separation, or dissolution of marriage. Both must be clearly recorded in Columns 13-16 of the Nikahnama.",
      },
      {
        q: "How long does it take to get a Computerized NADRA Marriage Certificate (MRC)?",
        a: "Under normal processing, a NADRA MRC takes approximately 3 to 7 working days following Union Council submission. Through our priority processing service in Karachi, expedited issuance can be arranged within 24 to 48 hours.",
      },
      {
        q: "What is the procedure for obtaining a lost or duplicate Nikahnama in Karachi?",
        a: "If your original Nikahnama is lost or damaged, our office can retrieve a certified true copy from the relevant Union Council or the Nikah Registrar's permanent register archives upon verification of CNICs and marriage dates.",
      },
      {
        q: "What are the legal rules for a second marriage in Pakistan?",
        a: "Under Section 6 of the Muslim Family Laws Ordinance 1961, a man wishing to contract a second marriage during the subsistence of an existing marriage must obtain prior written permission from the Arbitration Council / Union Council Chairman, typically with the consent of his existing wife.",
      },
    ],
  },
];

// Flatten for SEO Schema
const allFaqs = qnaCategories.flatMap((cat) => cat.items);

export const Route = createFileRoute("/q-and-a")({
  head: () =>
    buildPageSeo({
      title: "Q&A - Questions & Answers on Nikah & Court Marriage Pakistan",
      description:
        "Authoritative answers to the most common questions regarding Nikah documents, witness requirements, court marriage validity in Pakistan, online Nikah, and NADRA registration.",
      path: "/q-and-a",
      keywords:
        "Nikah Questions and Answers Karachi, Court Marriage FAQs Pakistan, Witness Rules Nikah, Online Nikah Shariah Ruling, Minimum Age Marriage Sindh, NADRA Marriage Certificate FAQs, Haq Mehr Rules Pakistan",
      category: "Questions & Answers",
      schemaType: "FAQPage",
      faqs: allFaqs,
    }),
  component: QnAPage,
});

function QnAPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = qnaCategories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.a.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <SiteLayout>
      <div className="relative overflow-hidden py-12 md:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-25">
          <div className="h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-gold/20 to-champagne/15 blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary transition font-medium">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-gold" />
            <span className="text-gold font-semibold">Q&A Knowledge Base</span>
          </nav>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-pearl px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              <span>Authoritative Legal & Shariah Clarifications</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
              Questions & Answers (Q&A) on Nikah & Court Marriage
            </h1>

            <p className="font-urdu text-xl sm:text-2xl text-gold/90 font-medium" dir="rtl">
              نکاح اور عدالتی شادی کے بارے میں شرعی و قانونی سوال و جواب
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Find transparent, accurate answers to the most frequently asked questions regarding
              Nikah solemnization, court marriage protection, witness eligibility, NADRA
              certificates, and overseas online video marriages in Pakistan.
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search questions (e.g., witnesses, NADRA, age, court marriage)..."
                className="w-full rounded-2xl border border-gold/30 bg-background pl-11 pr-4 py-3 text-xs sm:text-sm text-foreground shadow-xs focus:border-gold focus:outline-hidden"
              />
            </div>
          </div>

          {/* Categorized FAQs Accordion */}
          <div className="mt-12 space-y-10">
            {filteredCategories.map((catGroup, gIdx) => (
              <div
                key={gIdx}
                className="rounded-3xl border border-gold/25 bg-background p-6 sm:p-8 shadow-soft"
              >
                <div className="flex items-center gap-2.5 border-b border-gold/15 pb-4 mb-6">
                  <div className="grid h-8 w-8 place-items-center rounded-xl bg-pearl border border-gold/30 text-gold text-xs font-bold">
                    0{gIdx + 1}
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-primary">{catGroup.category}</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {catGroup.items.map((item, iIdx) => (
                    <AccordionItem
                      key={iIdx}
                      value={`group-${gIdx}-item-${iIdx}`}
                      className="border-gold/15"
                    >
                      <AccordionTrigger className="text-left text-sm font-semibold text-primary hover:text-gold py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {filteredCategories.length === 0 && (
              <div className="rounded-2xl border border-gold/20 bg-background p-10 text-center">
                <HelpCircle className="h-10 w-10 text-gold mx-auto mb-3" />
                <h3 className="text-base font-bold text-primary">No Matching Questions Found</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Try searching with different keywords or message our registrar directly on
                  WhatsApp for an immediate answer.
                </p>
              </div>
            )}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-16 rounded-3xl border border-gold/40 bg-gradient-to-r from-primary via-[#450a6e] to-primary p-8 sm:p-12 text-center text-primary-foreground shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Have a Specific Marriage Question Not Listed Here?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-primary-foreground/90 max-w-lg mx-auto">
              Our registered Nikah Registrar and High Court family advocates are on standby 24/7.
              Get your confidential question answered in under 5 minutes.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-champagne px-7 py-3.5 text-xs sm:text-sm font-bold text-primary shadow-lg hover:brightness-105 transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Ask via WhatsApp Helpline</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-champagne/60 bg-white/10 px-7 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition"
              >
                <Phone className="h-4 w-4 text-champagne" />
                <span>Call Registrar: {SITE_CONFIG.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
