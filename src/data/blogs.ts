export interface BlogSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  callout?: {
    type: "tip" | "important" | "quote";
    title?: string;
    text: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  urduTitle: string;
  metaDescription: string;
  category: string;
  readTime: string;
  date: string;
  updatedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  imageAlt: string;
  imageCaption: string;
  badge: string;
  excerpt: string;
  keyTakeaways: string[];
  sections: BlogSection[];
  faqs: {
    q: string;
    a: string;
  }[];
  relatedSlugs: string[];
}

export const BLOGS_DATA: BlogPost[] = [
  {
    id: "how-to-verify-book-registered-nikah-khawan-karachi",
    slug: "how-to-verify-book-registered-nikah-khawan-karachi",
    title: "Registered Nikah Khawan in Karachi: License Verification, Fees & Booking Guide (2026)",
    urduTitle:
      "کراچی میں رجسٹرڈ نکاح خواں اور نکاح رجسٹرار کی تصدیق، سرکاری فیس اور محفوظ بکنگ کا مکمل طریقہ کار",
    metaDescription:
      "How to verify a registered Nikah Khawan in Karachi, check Union Council licenses, understand fees, avoid fake Nikahnamas & book 24/7 home or hall services.",
    category: "Checklists & Guides",
    readTime: "8 min read",
    date: "November 2026",
    updatedDate: "November 2026",
    author: {
      name: "Qazi M. Rizwan",
      role: "Senior Government Registered Nikah Registrar",
      avatar: "/logo.webp",
    },
    image: "/images/blogs/registered-nikah-khawan-karachi.jpg",
    imageAlt:
      "Senior Pakistani Government Registered Nikah Khawan in Karachi reviewing official Union Council Nikah Register and brass seal stamp",
    imageCaption:
      "Verify your Nikah Khawan's Union Council Registrar License, bound 4-copy Form II register, and official stamp before your ceremony to ensure valid NADRA registration.",
    badge: "Karachi Registrar Guide",
    excerpt:
      "Hiring an unlicensed Nikah reciter in Karachi can leave your marriage unrecorded in Union Council archives—blocking NADRA Marriage Certificates, CNIC updates, and spouse visas. This complete guide shows you how to verify a Government Registered Nikah Khawan's license, understand official vs. doorstep fees, spot fake Nikahnamas, and book safely across Karachi.",
    keyTakeaways: [
      "A 'Nikah Khawan' recites the religious Khutbah and conducts vows, while a 'Registered Nikah Registrar' holds an official Union Council license under Section 5 of the Muslim Family Laws Ordinance (MFLO) 1961.",
      "Before booking, verify the registrar's Union Council License Number, Ward or Cantonment jurisdiction, bound 4-copy Form II register book, and official round seal stamp.",
      "Counterfeit or unregistered Nikahnamas fail Union Council scrutiny and cannot be entered into NADRA's CRMS database—blocking passports, FRC updates, and overseas spouse visas.",
      "Licensed Karachi Nikah Registrars cover all neighborhoods—including DHA, Clifton, Gulshan-e-Iqbal, North Nazimabad, Korangi, Malir, and Bahria Town—for home, hall, mosque, hotel, and office ceremonies.",
    ],
    sections: [
      {
        heading: "1. Nikah Khawan vs. Registered Nikah Registrar: Understand the Legal Difference",
        paragraphs: [
          "Many families in Karachi assume that anyone who can recite the Arabic Khutbah-e-Nikah is automatically authorized to register a marriage under Pakistani law. That misconception causes thousands of avoidable legal disputes every year.",
          "In Islamic tradition, a Nikah Khawan (نکاح خواں) is a religious scholar or reciter who leads the Masnoon Khutbah, administers the verbal offer and acceptance (Ijab-o-Qubool), and offers collective Dua. Under Pakistani statutory law, however, a Nikah Registrar (نکاح رجسٹرار) is an official specifically licensed by the local Union Council or Cantonment Board under Section 5 of the Muslim Family Laws Ordinance (MFLO), 1961.",
          "If your ceremony is conducted solely by an unlicensed reciter who borrows an unnumbered form or promises to 'get it stamped later,' your Nikahnama risks rejection by municipal archives. Always ensure that a Government Registered Nikah Registrar either conducts the ceremony directly or attends alongside your family scholar with an official register.",
        ],
        callout: {
          type: "important",
          title: "Statutory Authority Under Section 5 (MFLO 1961)",
          text: "Section 5 of the Muslim Family Laws Ordinance 1961 mandates that every marriage solemnized under Muslim law in Pakistan must be registered by a Nikah Registrar licensed for that Ward or Union Council. Failing to register a Nikah carries statutory penalties and creates severe evidentiary hurdles later.",
        },
      },
      {
        heading: "2. 5-Step Checklist to Verify a Registered Nikah Khawan in Karachi",
        paragraphs: [
          "Before paying an advance deposit or confirming a ceremony slot—whether at a DHA banquet hall, a Clifton residence, or a neighborhood Masjid—perform these five quick verification checks:",
        ],
        bulletPoints: [
          "Verify the Union Council License & Jurisdiction: Ask for the registrar's full name, official Nikah Registrar License Number, and appointing authority (such as a Karachi Union Council under KMC/TMC Districts South, East, Central, West, Korangi, Malir, Keamari, or a Cantonment Board like CBC Clifton, Karachi, Faisal, or Malir).",
          "Inspect the Bound 4-Copy Form II Register: Genuine government registers are pre-printed, serially numbered, cloth- or hard-bound books containing four identical copies per serial entry. Never sign loose, single-sheet photocopied Nikahnama printouts.",
          "Check Official Ink Stamps & Seals: A licensed registrar carries an official round municipal stamp displaying their name, Nikah Registrar designation, Ward/UC number, and license reference—never a vague generic stamp without registration credentials.",
          "Confirm Mandatory CNIC & Age Scrutiny: Under the Sindh Child Marriage Restraint Act 2013, both bride and groom must be at least 18 years old. Any genuine registrar will insist on checking original NADRA CNICs/Smart Cards of the couple and two adult Muslim witnesses prior to registration.",
          "Confirm Union Council Filing & NADRA MRC Accountability: Verify in advance when Copy 1/4 will be deposited at the Union Council and confirm who provides the registration receipt for your Computerized NADRA Marriage Registration Certificate (MRC).",
        ],
      },
      {
        heading: "3. Warning Signs of Fake or Unregistered Nikah Khawans (And the Risks)",
        paragraphs: [
          "During peak wedding seasons in Karachi, unauthorized middlemen and unverified agents often advertise low rates without holding an active government license. Watch closely for these warning signs:",
        ],
        bulletPoints: [
          "Blank or Pre-Signed Loose Sheets: Refusing to bring the bound government register book to the venue or asking families to sign loose forms that will be 'entered at the office tomorrow.'",
          "Offering Underage or Unverified Marriages: Willingness to solemnize a Nikah without checking original CNICs or ignoring Sindh's strict 18-year minimum age law.",
          "Missing Witness Verification: Skipping witness CNIC numbers and signatures in Column 11, which renders the contract vulnerable to invalidation during NADRA verification.",
          "Refusal to Disclose Union Council Details: Avoiding direct questions about which specific Union Council or Town Municipal Corporation maintains their archive.",
        ],
        callout: {
          type: "important",
          title: "How Unregistered Nikahnamas Block NADRA & Foreign Visas",
          text: "When you later apply for a Computerized NADRA MRC, update your wife's CNIC/passport surname, or submit a UK, USA, Canada, or UAE spouse visa petition, the Union Council Secretary checks the Nikah Registrar's license and book serial number. If the serial number does not exist in official records, the MRC is refused—forcing couples into slow judicial declarations in Family Court.",
        },
      },
      {
        heading: "4. Understanding Nikah Khawan Fees in Karachi: Statutory vs. Doorstep Costs",
        paragraphs: [
          "Families frequently ask why quoted fees vary across Karachi. Understanding the difference between fixed government charges and doorstep professional services ensures complete price transparency before your event:",
        ],
        bulletPoints: [
          "Statutory Registration & Form II Entry (Column 25): Covers the prescribed municipal registration fee for executing the official 4-copy government register and depositing the Union Council archive copy.",
          "Doorstep Scholar Honorarium & Venue Travel: Reflects the distance and travel time across Karachi (for example, traveling from central neighborhoods to Bahria Town Karachi, DHA Phase 8, or Malir), peak weekend timings, or late-night urgent callouts.",
          "Waiting Time at Commercial Banquet Halls: Commercial marquees and halls frequently experience 1- to 2-hour schedule delays; reputable services clarify ceremony timing windows upfront.",
          "Optional NADRA MRC & MOFA Attestation Support: Standard Union Council NADRA MRC municipal fees typically range from PKR 500 to PKR 1,500 depending on normal or urgent processing, while expedited courier handling, certified Urdu-to-English translations, and Ministry of Foreign Affairs (MOFA) Sharah-e-Faisal attestation are quoted separately if requested.",
        ],
        callout: {
          type: "tip",
          title: "Confirm Total Inclusive Charges Before the Ceremony",
          text: "Always confirm the complete package fee via WhatsApp or call prior to the wedding day—covering the Nikah Khawan honorarium, official Form II registration, Union Council filing, and travel—so there is zero awkwardness on stage or in front of family elders.",
        },
      },
      {
        heading: "5. Choosing the Right Venue Setup: Home, Hall, Mosque, Hotel, or Office",
        paragraphs: [
          "A qualified Nikah Khawan adapts smoothly to your family's ceremony style while preserving full legal accuracy:",
        ],
        bulletPoints: [
          "Nikah at Home (Drawing Room or Lawn): Ideal for intimate family gatherings, elderly grandparents, and calm Sunnah simplicity. Our registrar arrives at your residence with the official register, stamps, and ink pad.",
          "Nikah in Banquet Halls & Marquees: Coordinated timing with hall management and stage photographers across Shahrah-e-Faisal, Clifton, Gulshan, and North Nazimabad so the Khutbah and signatures finish smoothly before dinner.",
          "Masjid Nikah: Pre-coordinated with the mosque Imam and administration—often after Jummah or Asr—with on-site legal register signing immediately after collective Dua.",
          "Hotel & Registered Office Ceremonies: Quiet, executive hotel arrangements or same-day confidential registration at our Allah Wala Town, Korangi Crossing registrar office.",
        ],
      },
      {
        heading: "6. What to Share When Booking Your Nikah Khawan in Karachi",
        paragraphs: [
          "To prevent rushed handwriting errors or wedding-day delays, send these essential details to your Nikah Registrar at least 24 hours before the ceremony (or immediately for urgent same-day bookings):",
        ],
        bulletPoints: [
          "Date, Venue & Exact Khutbah Timing: Provide the complete address, Google Maps pin, and clarify whether the Nikah occurs before or after guest arrival.",
          "Clear CNIC Photos of All Parties: WhatsApp legible front-and-back images of the Groom, Bride, Wali (guardian), and two adult Muslim male witnesses so names, father's names, addresses, and 18+ ages are pre-verified.",
          "Agreed Haq-Mehr & Columns 17–18 Terms: Confirm the exact dower amount (PKR or gold weight), whether it is Prompt (Mu'ajjal) or Deferred (Mu'wajjal), and any mutually agreed special conditions or Talaq-e-Tafweez terms beforehand.",
          "Previous Marital Documents (If Applicable): For divorced or widowed applicants, keep the official NADRA Talaqnama or Death Certificate ready—and for a second marriage, the mandatory Section 6 Arbitration Council written permission.",
        ],
      },
      {
        heading: "7. 24/7 Verified Nikah Registrar Coverage Across All Karachi Districts",
        paragraphs: [
          "Whether your family is hosting a planned ceremony months ahead or needs an urgent registered Nikah Khawan within 45 to 60 minutes, our team of licensed Nikah Registrars, Darse Nizami Islamic scholars (led by Maulana Abdul Rehman, Qazi M. Rizwan, and Mufti Muhammad Salman), and High Court legal advisors (led by Advocate Tariq Mahmood) delivers complete Shariah authenticity and legal reliability.",
          "We serve every major locality across Karachi—including DHA (Phases 1–8), Clifton, PECHS, Bahadurabad, Gulshan-e-Iqbal, Gulistan-e-Jauhar, North Nazimabad, Nazimabad, Federal B Area, Saddar, Korangi, Landhi, Malir, and Bahria Town Karachi—as well as overseas Pakistanis coordinating live Online Nikah or Makkah and Madinah documentation.",
        ],
        callout: {
          type: "quote",
          title: "Quranic Guidance on Honoring Covenants",
          text: "'O you who have believed, fulfill all contracts.' — Surah Al-Ma'idah (5:1). Honoring both the sacred Shariah vows and transparent statutory registration safeguards every couple's rights from day one.",
        },
      },
    ],
    faqs: [
      {
        q: "What is the difference between a Nikah Khawan and a Nikah Registrar in Karachi?",
        a: "A Nikah Khawan recites the religious Khutbah-e-Nikah and conducts the Islamic vows, whereas a Registered Nikah Registrar holds an official government license under Section 5 of the Muslim Family Laws Ordinance 1961 to enter the marriage into Form II registers and file it with the Union Council. Choose a qualified scholar who is also a licensed registrar (or works directly alongside one).",
      },
      {
        q: "How can I verify if my Nikah Khawan is government-registered in Karachi?",
        a: "Ask for the registrar's Union Council License Number and designated Ward/Town or Cantonment Board, verify that they bring a serially numbered bound 4-copy Form II register book (not loose photocopied sheets), check their official round ink stamp bearing their license number, and confirm their Union Council filing process for your NADRA MRC.",
      },
      {
        q: "How much does a registered Nikah Khawan charge in Karachi?",
        a: "Total costs consist of the nominal statutory municipal registration fee plus the scholar's doorstep ceremony honorarium, which depends on venue location in Karachi, timing, and optional NADRA MRC or MOFA attestation processing. Standard municipal NADRA MRC fees typically range from PKR 500 to PKR 1,500. Always confirm an all-inclusive fee upfront before the wedding.",
      },
      {
        q: "What happens if my Nikah was solemnized by an unregistered Nikah Khawan?",
        a: "If the Nikah was recorded on an unauthorized sheet without a valid Union Council serial number, NADRA and Union Council secretaries will reject Computerized MRC issuance. You may need legal assistance for delayed registration, witness affidavits, or a Family Court declaration suit to regularize the marriage record.",
      },
      {
        q: "Can I book a registered Nikah Khawan on urgent short notice in Karachi?",
        a: "Yes. Our licensed Nikah Registrars operate 24/7 across Karachi and can typically reach your home, mosque, hotel, or our Korangi Crossing registrar office within 45 to 60 minutes once CNICs and witness details are confirmed.",
      },
      {
        q: "Which areas of Karachi do your licensed Nikah Registrars cover?",
        a: "We provide doorstep coverage across all of Karachi—including DHA (Phases 1–8), Clifton, PECHS, Bahadurabad, Gulshan-e-Iqbal, Gulistan-e-Jauhar, North Nazimabad, Nazimabad, Federal B Area, Saddar, Korangi, Landhi, Malir, and Bahria Town Karachi.",
      },
    ],
    relatedSlugs: [
      "nikahnama-columns-explained-pakistan-guide",
      "documents-required-for-nikah-in-karachi-checklist",
      "nadra-marriage-certificate-karachi-guide",
    ],
  },
  {
    id: "nikahnama-columns-explained-pakistan-guide",
    slug: "nikahnama-columns-explained-pakistan-guide",
    title:
      "Nikahnama Columns Explained: Complete Guide to Pakistan's Form II (All 25 Columns & Rights)",
    urduTitle:
      "پاکستانی نکاح نامہ کے تمام 25 خانے اور شرائط: حق مہر، طلاقِ تفویض اور قانونی حقوق کی مکمل وضاحت",
    metaDescription:
      "Clause-by-clause legal breakdown of all 25 columns of the Pakistani Nikahnama (Form II). Understand Haq Mehr (Prompt vs Deferred), Column 18 Talaq-e-Tafweez, and Column 17 conditions.",
    category: "Legal Documentation",
    readTime: "9 min read",
    date: "November 2026",
    updatedDate: "November 2026",
    author: {
      name: "Advocate Tariq Mahmood",
      role: "High Court Advocate & Matrimonial Legal Counsel",
      avatar: "/logo.webp",
    },
    image: "/images/blogs/nikahnama-columns-explained.jpg",
    imageAlt:
      "Official Pakistani Nikahnama Form II 25 columns explained with legal fountain pen, seal stamp, and portfolio",
    imageCaption:
      "Statutory Form II under Rule 8 of the Muslim Family Laws Ordinance 1961: The ultimate legal safeguard for bridal and spousal rights.",
    badge: "Nikahnama Legal Guide",
    excerpt:
      "The Pakistani Nikahnama (Form II) is a sacred, legally enforceable covenant under the Muslim Family Laws Ordinance 1961. This clause-by-clause legal guide breaks down all 25 columns—from Haq-Mehr and Column 17 special conditions to Column 18 Talaq-e-Tafweez and the 4 statutory copies—so you never sign blindly on your wedding day.",
    keyTakeaways: [
      "The Nikahnama is Form II under Rule 8 of the Muslim Family Laws Ordinance (MFLO) 1961, containing 25 legally binding statutory columns.",
      "Columns 13 to 16 govern Haq-Mehr: Prompt (Mu'ajjal) is payable immediately; if Column 14 is left blank, superior court precedent dictates the entire dower defaults to prompt.",
      "Column 18 (Talaq-e-Tafweez) delegates the unconditional right of divorce to the bride; crossing it out without informed consent violates judicial guidelines.",
      "Under the Sindh Child Marriage Restraint Act 2013, both bride and groom must be at least 18 years old to legally execute a Nikahnama in Karachi.",
    ],
    sections: [
      {
        heading: "1. The Pakistani Nikahnama is a Binding Legal Contract, Not Merely a Ceremony",
        paragraphs: [
          "On the wedding day, amidst the celebration, emotional family tears, and flashing cameras, the Urdu Nikahnama is often thrust before the bride and groom for rapid signatures. Rushed by relatives or wedding hall curfews, most couples sign without having read a single line.",
          "Under Pakistani law, the Nikahnama is officially designated as Form II under Rule 8 of the Muslim Family Laws Ordinance (MFLO), 1961. It is not a decorative certificate; it is a solemn, legally binding civil contract governed by Islamic Shariah and enforceable in the Family Courts of Pakistan.",
          "Careless blanks, hurried handwriting, or arbitrary lines drawn through critical protective clauses (Khat-e-Tanseekh / خط تنسیخ) frequently lead to prolonged court battles over financial dower, maintenance, and divorce rights. Understanding all 25 columns beforehand protects both partners' dignity and future.",
        ],
        callout: {
          type: "important",
          title: "Judicial Precedent on Crossing Out Clauses",
          text: "The High Courts of Pakistan and the Federal Shariat Court have repeatedly admonished Nikah Registrars against unilaterally striking out columns—especially Columns 17 and 18. Both parties must be explicitly consulted and their informed consent recorded.",
        },
      },
      {
        heading: "2. Columns 1 to 6: Personal Identifications, Wards & Age Verification (Sindh Act 2013)",
        paragraphs: [
          "The first block of the Nikahnama establishes the statutory jurisdiction, geographic locus, and legal identity of the bride and groom:",
        ],
        bulletPoints: [
          "Header Information (Ward, Town, Tehsil & District): Identifies the local Union Council where the marriage took place or where the bride permanently resides, determining registration jurisdiction.",
          "Column 1 & 2 (Groom's Particulars & Age): Groom's full legal name according to NADRA CNIC/NICOP, father's name, residential address, and verified age in completed years.",
          "Column 3 (Groom's Marital Status): Specifies whether the groom is a bachelor (Ghair-Shadishuda), widower (Bewa), or divorced (Talaq-Yafta).",
          "Column 4 (Bride's Particulars): Bride's full legal name as per NADRA CNIC/Smart Card, father's or legal guardian's name, and residential address.",
          "Column 5 (Bride's Marital Status): Identifies whether the bride is an unmarried virgin (Bakira / Kanwari), a widow (Bewa), or a divorcee (Muntashira / Talaq-Yafta).",
          "Column 6 (Bride's Age & Sindh Age Rules): Under the Sindh Child Marriage Restraint Act 2013, the minimum marriage age for BOTH bride and groom is strictly 18 years in Karachi. Unlike federal law where female age is 16, solemnizing a marriage under 18 in Karachi is a non-bailable criminal offense.",
        ],
      },
      {
        heading: "3. Columns 7 to 12: Appointment of Wakils (Proxies), Witnesses & Solemnization",
        paragraphs: [
          "Islamic jurisprudence (Fiqh) permits entering into a marriage contract directly or through an authorized representative (Wakeel / Wakil). Columns 7 through 12 formalize representation and statutory witnesses:",
        ],
        bulletPoints: [
          "Column 7 (Bride's Wakil): Full name, father's name, and address of the attorney or representative appointed by the bride to communicate her proposal or acceptance (Ijab-o-Qubool).",
          "Column 8 (Witnesses of Bride's Wakil Appointment): Two adult Muslim witnesses who personally verified the bride's voluntary consent and appointment of her Wakil, along with their relationship to the bride.",
          "Column 9 & 10 (Groom's Wakil & Witnesses): If the groom is absent (such as an overseas Pakistani solemnizing via an Online Nikah), his designated Wakeel and two attesting witnesses are recorded here.",
          "Column 11 (Witnesses to Marriage Solemnization): Names, CNIC numbers, father's names, and residences of two independent, sane, adult Muslim male witnesses who witnessed the verbal exchange of vows.",
          "Column 12 (Date of Marriage): The exact Gregorian and Islamic (Hijri) calendar date on which the Nikah ceremony took place.",
        ],
        callout: {
          type: "tip",
          title: "Online Nikah Documentation",
          text: "For overseas Pakistanis using our Online Nikah service from the UK, USA, Canada, or Gulf, Columns 7 through 10 are meticulously executed under a formal Special Power of Attorney (Tawkeel-e-Nikah) to guarantee 100% legal compliance.",
        },
      },
      {
        heading: "4. Columns 13 to 16: Haq-Mehr (Dower) Terms — Prompt (Mu'ajjal) vs Deferred (Mu'wajjal)",
        paragraphs: [
          "Haq-Mehr is an obligatory financial gift and divine economic safeguard mandated by Islamic Shariah from the husband to the wife. It is her absolute personal property, entirely free from parental or marital claim.",
          "The Pakistani Nikahnama breaks Haq-Mehr down into four interconnected statutory clauses:",
        ],
        bulletPoints: [
          "Column 13 (Total Haq-Mehr Fixed): The comprehensive value agreed upon. This can be expressed in Pakistani Rupees (PKR), specified weight of gold (e.g., 2 Tolas 24K Gold), foreign currency, or real estate.",
          "Column 14 (Prompt / Mu'ajjal vs. Deferred / Mu'wajjal): Mu'ajjal (معجل) is payable immediately at the ceremony or upon demand at any time. Mu'wajjal (مؤجل) is payable upon dissolution of marriage (divorce/khula) or upon the husband's demise.",
          "Column 15 (Portion Paid at Ceremony): The precise cash or gold jewelry handed over to the bride in the presence of the Nikah Registrar during the solemnization.",
          "Column 16 (Property Given in Lieu of Mehr): If agricultural land, a residential apartment, car, or family heirloom is pledged, complete property deed numbers, survey plot numbers, and registry details must be inscribed here.",
        ],
        callout: {
          type: "important",
          title: "Critical Legal Rule on Blank Column 14",
          text: "Under Section 10 of the Muslim Family Laws Ordinance 1961, if Column 14 does not specify whether the Mehr is prompt or deferred, the entire dower is legally presumed to be prompt (Mu'ajjal) and is payable immediately upon the wife's demand.",
        },
      },
      {
        heading: "5. Columns 17 & 18: The Essential Protective Clauses (Special Conditions & Talaq-e-Tafweez)",
        paragraphs: [
          "Columns 17 and 18 represent the most vital, yet frequently misunderstood and neglected sections of the Pakistani Nikahnama. They provide statutory mechanisms for negotiating personal rights and matrimonial security:",
        ],
        bulletPoints: [
          "Column 17 (Special Conditions / Shartain): Both parties can agree on legally enforceable terms. Examples include: guaranteeing the wife's fundamental right to pursue higher education, right to continue professional employment, provision of an independent separate accommodation (apart from in-laws), monthly pocket allowance (Kharch-e-Jaib), and annual travel allowances.",
          "Column 18 (Talaq-e-Tafweez / Delegated Right of Divorce): Under Islamic Shariah, the husband possesses the inherent unilateral right of Talaq. In Column 18, he can delegate this exact power to the wife unconditionally or under specific conditions.",
          "Why Column 18 is Crucial: If a wife possesses Talaq-e-Tafweez and the marriage breaks down, she can dissolve the marriage directly without filing for Khula in Family Court, preserving her full Haq-Mehr and avoiding years of exhausting litigation.",
        ],
        callout: {
          type: "quote",
          title: "Islamic Jurisprudence on Talaq-e-Tafweez",
          text: "'Delegation of divorce (Tafweez-e-Talaq) is unanimously endorsed by all four classical Sunni schools of Islamic jurisprudence (Hanafi, Maliki, Shafi'i, Hanbali) as an authentic, binding Shariah right.' — Radd al-Muhtar (Allama Ibn Abidin)",
        },
      },
      {
        heading: "6. Columns 19 to 21: Maintenance Agreements, Polygamy Controls & Section 6 MFLO",
        paragraphs: [
          "These clauses govern the ongoing financial support of the wife and enforce statutory checks on polygamous marriages:",
        ],
        bulletPoints: [
          "Column 19 (Restrictions on Husband's Power of Divorce): Allows the couple to stipulate agreed terms if the husband contemplates divorce, such as requiring formal family mediation or specific financial compensation.",
          "Column 20 (Wife's Maintenance Documents): Explicitly records any separate legal deeds or agreements regarding monthly maintenance (*nafaqah*), child custody stipulations, or property transfers.",
          "Column 21 (Existing Wives & Arbitration Council Permission): If the groom already has a living wife, he is legally required under Section 6 of the Muslim Family Laws Ordinance 1961 to obtain prior written permission from the Chairman of the local Arbitration Council. The official permission certificate number and issuance date must be entered here. Marrying without this permission is a criminal offense punishable by fine and imprisonment.",
        ],
      },
      {
        heading: "7. Columns 22 to 25: Solemnization, Registrar Seals & The Rule of Four Copies",
        paragraphs: [
          "The closing section formalizes the legal execution, authentication, and statutory archiving of the marriage contract:",
        ],
        bulletPoints: [
          "Column 22: Full name, father's name, and residential address of the Islamic Scholar / Nikah Khawan who solemnized the marriage.",
          "Column 23: The formal date of registration in the municipal archives.",
          "Column 24: The permanent license number, volume serial number, and official government stamp of the licensed Nikah Registrar.",
          "Column 25: The prescribed government registration fee paid according to municipal schedules.",
          "The Rule of Four Original Copies: By law, every Pakistani Nikahnama is executed in quadruplicate. Copy 1 is retained by the Union Council for NADRA computerization; Copy 2 is given to the Bride; Copy 3 is given to the Groom; and Copy 4 remains in the Registrar's permanent record book.",
        ],
        callout: {
          type: "tip",
          title: "Always Keep the Original Bride Copy Safe",
          text: "The bride's original copy is an indispensable legal document for updating her NADRA CNIC marital status, applying for a computerized NADRA Marriage Certificate (MRC), spouse visa processing, and foreign embassy attestation.",
        },
      },
      {
        heading: "8. Why Choosing a Professional Registered Nikah Khawan in Karachi Protects Your Future",
        paragraphs: [
          "A Nikahnama is not just ink on paper; it is the constitutional foundation of a new family. Entrusting its execution to untrained or unauthorized individuals can result in misspelled names, unverified CNIC data, missing witness records, or unregistered marriages that create nightmare hurdles during passport renewals, child birth registrations, and immigration petitions.",
          "Our team of Government Registered Nikah Registrars and High Court Advocates—led by Maulana Abdul Rehman, Advocate Tariq Mahmood, and Qazi M. Rizwan—guarantees:",
        ],
        bulletPoints: [
          "Pre-Marital Clause Counseling: We explain all 25 columns to both families in advance, ensuring transparent agreements on Haq-Mehr, Column 17 conditions, and Column 18.",
          "Strict Age Verification: 100% adherence to the Sindh Child Marriage Restraint Act 2013, safeguarding families from criminal liability.",
          "Flawless Biometric & CNIC Documentation: Zero spelling errors, ensuring seamless synchronization with NADRA CRMS and passport systems.",
          "Direct Union Council Computerization: Prompt submission of the 4th copy to the relevant Karachi Union Council to issue your Computerized NADRA Marriage Registration Certificate (MRC).",
        ],
      },
    ],
    faqs: [
      {
        q: "What happens if Column 18 (Talaq-e-Tafweez) is struck out without my consent?",
        a: "Unilaterally crossing out Column 18 violates High Court directives. However, if already registered with lines drawn through, the bride can still seek judicial dissolution through Khula under the Family Courts Act 1964, though having Column 18 intact allows immediate, penalty-free dissolution.",
      },
      {
        q: "If Column 14 (Prompt vs. Deferred Mehr) is left blank, what does Pakistani law dictate?",
        a: "Under Section 10 of the Muslim Family Laws Ordinance 1961, if the dower is not explicitly classified as deferred, the legal presumption is that the ENTIRE Haq-Mehr is prompt (Mu'ajjal) and payable immediately upon the wife's demand.",
      },
      {
        q: "Can the bride demand a separate home or continued career in Column 17?",
        a: "Yes. Column 17 is specifically provided for special conditions. Conditions that do not contradict Islamic Shariah or public policy—such as independent housing, right to work, education completion, or monthly maintenance—are completely valid and legally enforceable.",
      },
      {
        q: "Can anyone under 18 years of age sign a Nikahnama in Karachi?",
        a: "No. Under the Sindh Child Marriage Restraint Act 2013, anyone under 18 years old is legally a child. Solemnizing or registering an underage marriage in Karachi carries rigorous imprisonment and heavy fines for the groom, parents, and Nikah Registrar.",
      },
      {
        q: "Who gets the four original copies of the Nikahnama after the wedding?",
        a: "The law requires four identical copies: one for the Bride, one for the Groom, one for the Nikah Registrar's permanent record, and one submitted to the local Union Council for NADRA computerized MRC issuance.",
      },
      {
        q: "Can the Nikahnama be amended or updated after it has been registered?",
        a: "No. Once signed, stamped, and registered in the Union Council registry, a Nikahnama cannot be altered by hand. Any corrections for typographical errors require formal legal rectification through the Union Council Secretary or Family Court.",
      },
    ],
    relatedSlugs: [
      "nadra-marriage-certificate-karachi-guide",
      "court-marriage-laws-in-pakistan-rights-procedure",
      "documents-required-for-nikah-in-karachi-checklist",
      "is-online-nikah-valid-in-islam-shariah-conditions",
    ],
  },
  {
    id: "nadra-marriage-certificate-karachi-guide",
    slug: "nadra-marriage-certificate-karachi-guide",
    title: "Complete Guide to NADRA Computerized Marriage Certificate (MRC) in Karachi (2026)",
    urduTitle: "کراچی میں نادرا میرج رجسٹریشن سرٹیفکیٹ حاصل کرنے کا مکمل طریقہ کار اور فیس",
    metaDescription:
      "Step-by-step guide on how to get a computerized NADRA Marriage Registration Certificate (MRC) in Karachi. Union Council rules, required documents, fees, and foreign embassy attestation.",
    category: "Legal Documentation",
    readTime: "7 min read",
    date: "October 2026",
    updatedDate: "October 2026",
    author: {
      name: "Maulana Abdul Rehman",
      role: "Licensed Nikah Registrar & Islamic Legal Advisor",
      avatar: "/logo.webp",
    },
    image: "/images/blogs/nadra-mrc-guide.jpg",
    imageAlt:
      "Official NADRA Computerized Marriage Registration Certificate MRC issuance process in Karachi",
    imageCaption:
      "Official verification and computerization of Urdu Nikahnama into NADRA CRMS database.",
    badge: "NADRA Legal Guide",
    excerpt:
      "Everything you need to know about transforming your manual 4-copy Nikahnama into an official Computerized NADRA Marriage Registration Certificate (MRC). Union Council procedures, fees, and embassy verification rules.",
    keyTakeaways: [
      "The traditional manual Nikahnama must be computerized via the local Union Council (UC) for foreign visas and legal status.",
      "Both bride and groom CNIC/Smart Cards must have updated marital statuses linked in the NADRA database.",
      "The Computerized MRC features a unique digital QR code and official security watermark.",
      "Spouse visas for the UK, USA, Canada, Schengen, and GCC require MOFA (Ministry of Foreign Affairs) attestation.",
    ],
    sections: [
      {
        heading: "1. Why the Manual Nikahnama is No Longer Sufficient Alone",
        paragraphs: [
          "While the traditional four-copy manual Urdu Nikahnama signed on your wedding day remains a completely lawful and binding Islamic contract, modern government departments, banks, courts, and foreign embassies require digitized authentication.",
          "Since the modernization of Pakistan's Civil Registration Management System (CRMS), foreign embassies—such as the UK Home Office, US Embassy / USCIS, UAE Embassy, and European consulates—strictly mandate the Computerized NADRA Marriage Registration Certificate (MRC). Without this digital certificate, spouse visa petitions and family registration certificate (FRC) updates cannot proceed.",
        ],
        callout: {
          type: "important",
          title: "Legal Note",
          text: "A manual Nikahnama without Union Council registration may create severe hurdles during passport renewal, child birth registration, inheritance claims, and foreign immigration.",
        },
      },
      {
        heading: "2. The 4-Step Procedure to Obtain Your NADRA MRC in Karachi",
        paragraphs: [
          "Acquiring your computerized marriage certificate in Karachi follows a systematic statutory procedure under the Sindh Local Government Act:",
        ],
        bulletPoints: [
          "Step 1: Submission of 4th Copy: Following the ceremony, the registered Nikah Registrar submits the official 4th copy of the Nikahnama to the Union Council within whose geographic boundaries the bride resides or where the wedding took place.",
          "Step 2: Scrutiny by Union Council Secretary: The UC Secretary verifies the Nikah Registrar's official license number, register serial volume, signatures of groom, bride, Wali, and witnesses.",
          "Step 3: Electronic CRMS Entry: The marriage details are entered into the central NADRA Civil Registration database, linking both spouses' CNICs.",
          "Step 4: Printing & Attestation: The official computerized certificate is printed on specialized security paper with a verifiable QR code, signed and stamped by the Secretary and Administrator of the Union Council.",
        ],
      },
      {
        heading: "3. Checklist of Mandatory Documents for NADRA MRC",
        paragraphs: [
          "When submitting your application to the Union Council, ensure you have original documents and clear photocopies ready:",
        ],
        bulletPoints: [
          "Original Urdu Nikahnama signed and stamped by an authorized registered Nikah Registrar.",
          "Two clear photocopies of the Groom's valid NADRA CNIC or Smart Card (or NICOP if overseas).",
          "Two clear photocopies of the Bride's valid NADRA CNIC or Smart Card.",
          "Copies of CNICs of both Fathers (or designated Wali).",
          "Copies of CNICs of the two adult Muslim male witnesses who signed the Nikahnama.",
          "One passport-size photograph of both bride and groom with blue or white background.",
          "For foreign nationals: Valid Passport, Visa copy, and Single Status Certificate (NOC) attested by the respective embassy.",
        ],
      },
      {
        heading: "4. Ministry of Foreign Affairs (MOFA) Attestation for Visas",
        paragraphs: [
          "If you are petitioning for a spouse visa or family reunification abroad, obtaining the NADRA MRC is the first phase. The certificate must then be authenticated by the Ministry of Foreign Affairs (MOFA) in Karachi (located near the Camp Office on Sharah-e-Faisal).",
          "Our authorized Nikah Registrar office provides complete liaison support, assisting couples in securing both their Union Council computerized certificate and MOFA attestation without confusing delays.",
        ],
        callout: {
          type: "tip",
          title: "Pro-Tip for Overseas Applicants",
          text: "Ensure the spelling of names, dates of birth, and parentage on your NADRA MRC match your international passports letter-by-letter to avoid visa processing rejections.",
        },
      },
    ],
    faqs: [
      {
        q: "How long does it take to get a NADRA Marriage Certificate in Karachi?",
        a: "Typically between 2 to 5 working days after submitting verified documents to the respective Union Council. Urgent processing can often be facilitated within 24 to 48 hours.",
      },
      {
        q: "Can overseas Pakistanis apply for a NADRA MRC while living abroad?",
        a: "Yes. An authorized representative (via Special Power of Attorney) or our legal service team can complete the Union Council registration in Karachi and courier the attested certificate via DHL.",
      },
      {
        q: "What is the official government fee for a NADRA Marriage Certificate?",
        a: "The standard municipal government fee set by the Sindh Local Government Department generally ranges from PKR 500 to PKR 1,500 depending on urgent or normal processing category.",
      },
    ],
    relatedSlugs: [
      "nikahnama-columns-explained-pakistan-guide",
      "court-marriage-laws-in-pakistan-rights-procedure",
      "documents-required-for-nikah-in-karachi-checklist",
      "is-online-nikah-valid-in-islam-shariah-conditions",
    ],
  },
  {
    id: "court-marriage-laws-in-pakistan-rights-procedure",
    slug: "court-marriage-laws-in-pakistan-rights-procedure",
    title: "Court Marriage Laws in Pakistan: Legal Rights, Procedures & Protection for Couples",
    urduTitle: "پاکستان میں کورٹ میرج کے شرعی و قانونی قوانین، خواتین کے حقوق اور عدالتی تحفظ",
    metaDescription:
      "Comprehensive legal breakdown of court marriage in Karachi under Pakistani law. Article 35 constitutional rights, age requirements in Sindh, affidavit of free will, and advocate procedure.",
    category: "Court Marriage",
    readTime: "8 min read",
    date: "September 2026",
    updatedDate: "October 2026",
    author: {
      name: "Advocate Tariq Mahmood",
      role: "High Court Advocate & Matrimonial Legal Counsel",
      avatar: "/logo.webp",
    },
    image: "/images/blogs/court-marriage-laws.jpg",
    imageAlt: "Court Marriage legal procedure and advocate chamber in Karachi City Courts",
    imageCaption:
      "Judicial protection, affidavit drafting, and legal solemnization under Pakistani law.",
    badge: "Legal Rights Guide",
    excerpt:
      "A comprehensive legal breakdown of court marriage in Karachi under the Muslim Family Laws Ordinance 1961, Sindh Child Marriage Restraint Act 2013, constitutional protections under Article 35, and affidavit drafting.",
    keyTakeaways: [
      "Court marriage in Pakistan is 100% legal, constitutional, and recognized under Islamic Shariah.",
      "In Sindh, both male and female must be at least 18 years old under the Sindh Child Marriage Restraint Act 2013.",
      "An adult Muslim female (Baligha) does not require mandatory paternal permission to marry under Pakistan Supreme Court rulings.",
      "A sworn Affidavit of Free Will before an Oath Commissioner / Magistrate protects against false kidnapping FIRs.",
    ],
    sections: [
      {
        heading: "1. Constitutional & Shariah Foundation of Court Marriage",
        paragraphs: [
          "Contrary to popular social misconceptions, 'Court Marriage' in Pakistan is not a non-Islamic or un-Islamic process. It is a civil ceremony conducted strictly in accordance with Islamic Shariah (proper Ijab-o-Qubool, two adult Muslim witnesses, and fixed Haq-Mehr) under the supervision of a licensed Nikah Registrar and High Court Advocate.",
          "Under Article 35 of the Constitution of the Islamic Republic of Pakistan: 'The State shall protect the marriage, the family, the mother, and the child.' This constitutional guarantee gives adult citizens the autonomous legal prerogative to choose their life partner.",
        ],
      },
      {
        heading: "2. Age Criteria: The Sindh Child Marriage Restraint Act 2013",
        paragraphs: [
          "A crucial statutory distinction applies in the province of Sindh compared to other provinces in Pakistan:",
        ],
        bulletPoints: [
          "Under the Sindh Child Marriage Restraint Act 2013 (Sindh Act No. XV of 2014), the minimum legal age of marriage for BOTH the male and female is 18 years.",
          "In Punjab, KPK, and Balochistan, the minimum female age remains 16 years under federal law, but in Karachi and across Sindh, ANY marriage where either party is under 18 is strictly punishable by law.",
          "A valid NADRA Computerized National Identity Card (CNIC), Smart Card, or original B-Form accompanied by an official matriculation certificate is required to verify age.",
        ],
        callout: {
          type: "important",
          title: "Strict Age Compliance",
          text: "Our legal team strictly verifies that both parties are 18 years or older before commencing any court marriage procedure in Karachi. Underage marriages will not be entertained under any circumstances.",
        },
      },
      {
        heading: "3. Landmark Supreme Court Rulings on Bride's Free Consent",
        paragraphs: [
          "In numerous landmark judgments—including the historic Federal Shariat Court and Supreme Court of Pakistan rulings (such as the landmark Abdul Waheed vs. Asma Jehangir case)—the higher judiciary affirmed that an adult, sane Muslim female (Aaqila & Baligha) possesses the complete legal and religious liberty to enter into a marriage contract without the compulsory consent of her Wali (father or guardian).",
          "Her voluntary verbal declaration and signature upon the official Nikahnama constitutes a fully valid, binding marriage in the eyes of Pakistani law and Hanafi jurisprudence.",
        ],
      },
      {
        heading: "4. Preventing False Police Reports with an Affidavit of Free Will",
        paragraphs: [
          "In situations where families oppose the marriage, relatives sometimes attempt to file retaliatory police complaints alleging abduction (Kidnapping under Section 365-B or Section 496-A of the Pakistan Penal Code).",
          "To safeguard the groom and bride against harassment, our advocates draft and execute a sworn Affidavit of Free Will (Bayaan-e-Halafi). In this document, sworn before a Judicial Magistrate or authorized Oath Commissioner, the bride explicitly states:",
        ],
        bulletPoints: [
          "She is an adult of sound mind exercising her constitutional right.",
          "She has married the groom willingly without any force, fraud, or abduction.",
          "Any contrary police report or FIR filed by relatives is malicious and legally void.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a Court Marriage take in Karachi?",
        a: "The entire process typically concludes within 1 to 2 hours at our chamber or near the City Court complex in Karachi.",
      },
      {
        q: "Is complete privacy maintained during the court marriage?",
        a: "Yes, 100% confidentiality is guaranteed. No notices or documents are sent to family residences without your explicit consent.",
      },
      {
        q: "What if the bride does not have witnesses from her family?",
        a: "Under Islamic Shariah and Pakistani law, any two adult, sane Muslim male witnesses are legally competent to attest the Nikahnama.",
      },
    ],
    relatedSlugs: [
      "nikahnama-columns-explained-pakistan-guide",
      "nadra-marriage-certificate-karachi-guide",
      "documents-required-for-nikah-in-karachi-checklist",
      "is-online-nikah-valid-in-islam-shariah-conditions",
    ],
  },
  {
    id: "is-online-nikah-valid-in-islam-shariah-conditions",
    slug: "is-online-nikah-valid-in-islam-shariah-conditions",
    title: "Is Online Nikah Valid in Islam? Shariah Rulings, Fatwas & Global Legal Validity",
    urduTitle: "کیا آن لائن نکاح اسلام میں جائز ہے؟ دارالعلوم فتاویٰ، شرائط اور قانونی حیثیت",
    metaDescription:
      "Authoritative Islamic Shariah analysis on online video Nikah. Fatawa from Darul Uloom Karachi, Jamia Binoria, Wakeel appointment, and international legal recognition.",
    category: "Islamic Jurisprudence",
    readTime: "8 min read",
    date: "August 2026",
    updatedDate: "October 2026",
    author: {
      name: "Mufti Muhammad Salman",
      role: "Islamic Jurisprudence Expert & Shariah Consultant",
      avatar: "/logo.webp",
    },
    image: "/images/blogs/online-nikah-fatwa.jpg",
    imageAlt:
      "Online Nikah live video call conference with Islamic Scholar Qazi and overseas couple",
    imageCaption:
      "Lawful remote solemnization connecting overseas Pakistanis via live video and authorized proxy.",
    badge: "Shariah Analysis",
    excerpt:
      "In-depth analysis of online video Nikah rulings from leading Islamic Fiqh councils. Learn the 4 indispensable pillars of a valid remote Nikah: Ijab-o-Qubool, appointment of Wakeel (proxy), and two Muslim witnesses.",
    keyTakeaways: [
      "Online Nikah is lawful in Islam provided live two-way visual/audio connection and legal proxy (Wakeel) are used.",
      "Leading Islamic institutions including Darul Uloom Karachi and Al-Azhar endorse proxy-based remote solemnization.",
      "Two adult Muslim male witnesses must be physically present with the Nikah Registrar in Pakistan.",
      "The registered Nikahnama and NADRA MRC are officially accepted by UK, USA, Canada, and Gulf immigration authorities.",
    ],
    sections: [
      {
        heading: "1. The Modern Necessity of Online Nikah for Overseas Pakistanis",
        paragraphs: [
          "With over 9 million overseas Pakistanis residing across the globe—many facing prolonged visa waiting periods, stringent work leave restrictions, or sudden geopolitical travel disruptions—traveling back to Karachi solely for a wedding ceremony is not always feasible.",
          "Consequently, remote Islamic solemnization via live video streaming (Zoom, Google Meet, or WhatsApp Video) has emerged as an indispensable, Shariah-compliant matrimonial service.",
        ],
      },
      {
        heading: "2. The 4 Essential Shariah Conditions for a Valid Online Nikah",
        paragraphs: [
          "Islamic jurisprudence (Fiqh) establishes clear prerequisites for the validity of any marriage contract. In an online solemnization, these conditions are fulfilled through the established doctrine of **Tawkeel (Appointment of a Proxy / Legal Agent)**:",
        ],
        bulletPoints: [
          "Pillar 1: Explicit Ijab-o-Qubool (Offer & Acceptance): The bride and groom must audibly and clearly communicate their proposal and acceptance live on screen without ambiguity, pre-recorded audio, or technical distortion.",
          "Pillar 2: Appointment of Wakeel (Legal Proxy): The party residing abroad officially designates a representative (Wakeel) physically present in Karachi before the Nikah Registrar.",
          "Pillar 3: Two Sane, Adult Muslim Witnesses: Two Muslim witnesses must observe the proceedings live, hear the verbal consent, and sign the official registers alongside the Wakeel.",
          "Pillar 4: Settlement of Haq-Mehr: A mutually determined Haq-Mehr (dower) must be recorded in the official marriage contract.",
        ],
        callout: {
          type: "quote",
          title: "Classical Islamic Legal Principle",
          text: "'Whatever a person is permitted to do himself, he is permitted to appoint an agent (Wakeel) to execute on his behalf.' — Bada'i al-Sana'i (Imam al-Kasani)",
        },
      },
      {
        heading: "3. Fatawa from Renowned Islamic Seminaries",
        paragraphs: [
          "Scholars from prominent Islamic institutions—including Jamia Darul Uloom Karachi, Jamia Binoria International, and international Fiqh academies—have issued decrees confirming that when the overseas party appoints a Wakeel, and the Nikah is solemnized in the physical presence of the witnesses and registrar, the marriage is 100% Shariah-compliant.",
          "Our Nikah Khawan records the live video session with the couple's consent as supplementary documentary evidence for foreign immigration scrutiny.",
        ],
      },
      {
        heading: "4. International Legal Validity & Foreign Visa Acceptance",
        paragraphs: [
          "A frequent question asked by overseas clients is whether foreign governments recognize an online Nikah. The answer is **Yes**, because in the eyes of Pakistani law, the contract is formally registered by a licensed Pakistani Nikah Registrar in Pakistan with the physical presence of the Wakeel and witnesses.",
          "The resulting Computerized NADRA Marriage Certificate bears no disqualifying 'virtual' mark; it is a full, standard legal certificate fully eligible for Ministry of Foreign Affairs (MOFA) attestation and embassy submission.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the bride be in one country and the groom in another?",
        a: "Yes. Both parties can join the live video session from different overseas countries while the Nikah Registrar and Wakeels operate from our Karachi office.",
      },
      {
        q: "How does the overseas bride or groom sign the document?",
        a: "The overseas party signs a written Authorization / Special Power of Attorney (Tawkeel-e-Nikah) and verifies their consent verbally live on video. Their appointed Wakeel signs the physical register in Pakistan.",
      },
      {
        q: "Does UK Home Office accept an online Nikah conducted in Pakistan?",
        a: "Yes, when accompanied by the official Union Council Computerized NADRA MRC, MOFA attestation, and proof of legal Wakeel appointment under Pakistani law.",
      },
    ],
    relatedSlugs: [
      "nadra-marriage-certificate-karachi-guide",
      "court-marriage-laws-in-pakistan-rights-procedure",
      "documents-required-for-nikah-in-karachi-checklist",
    ],
  },
  {
    id: "documents-required-for-nikah-in-karachi-checklist",
    slug: "documents-required-for-nikah-in-karachi-checklist",
    title: "Essential Documents Required for Nikah in Karachi: Complete 2026 Checklist",
    urduTitle: "کراچی میں نکاح خوانی کے لیے درکار ضروری کاغذات اور قانونی دستاویزات کی فہرست",
    metaDescription:
      "Definitive document checklist for Nikah in Karachi. Groom, bride, Wali, witnesses CNIC requirements, foreign national documents, and Haq Mehr registration tips.",
    category: "Checklists & Guides",
    readTime: "6 min read",
    date: "July 2026",
    updatedDate: "October 2026",
    author: {
      name: "Qazi M. Rizwan",
      role: "Senior Government Registered Nikah Registrar",
      avatar: "/logo.webp",
    },
    image: "/images/blogs/nikah-documents-checklist.jpg",
    imageAlt:
      "Official Pakistani Nikahnama register and CNIC documentation checklist on wedding table",
    imageCaption:
      "Mandatory CNIC identity documents, passport photos, and Nikahnama registry volumes.",
    badge: "Official Checklist",
    excerpt:
      "A quick, practical checklist of all documents required for bride, groom, witnesses, Wali, and overseas dual nationals before the Nikah Khawan arrives for your wedding ceremony.",
    keyTakeaways: [
      "Original CNICs or Smart Cards of groom, bride, and two witnesses are legally mandatory.",
      "Both parties must be at least 18 years old in accordance with Sindh provincial legislation.",
      "Clear passport-sized photographs are required for physical Nikahnama registry affixing.",
      "Foreign citizens must provide a valid passport, Pakistani visa, and Single Status Certificate.",
    ],
    sections: [
      {
        heading: "1. Why Document Preparedness Prevents Wedding Delays",
        paragraphs: [
          "Few moments are as stressful as having wedding guests assembled in a Karachi banquet hall or living room only to discover that an expired CNIC or missing witness document prevents the Nikah Registrar from legally executing the marriage contract.",
          "Under the Sindh Muslim Marriage & Divorce Registration rules, a registrar faces penalties and license suspension if they solemnize a marriage without proper statutory documentation.",
        ],
      },
      {
        heading: "2. The Groom's Required Documentation",
        paragraphs: [
          "The groom must ensure the following items are available on the day of the Nikah ceremony:",
        ],
        bulletPoints: [
          "Original Computerized National Identity Card (CNIC) or Smart Card issued by NADRA (must not be expired).",
          "Two clear photocopies of the groom's CNIC.",
          "Two recent passport-size photographs (preferably white or light blue background).",
          "If previously married: Official Nadra Divorce Certificate (Talaqnama) or Death Certificate of deceased spouse.",
          "If entering into a second marriage: Written permission certificate from the Arbitration Council under Section 6 of Muslim Family Laws Ordinance 1961.",
        ],
      },
      {
        heading: "3. The Bride's Required Documentation",
        paragraphs: [
          "The bride's documentation ensures lawful consent and accurate record-keeping:",
        ],
        bulletPoints: [
          "Original Computerized National Identity Card (CNIC) or Smart Card issued by NADRA.",
          "Two clear photocopies of the bride's CNIC.",
          "Two recent passport-size photographs.",
          "Original CNIC copy of the bride's father, brother, or legal guardian (Wali).",
          "If previously divorced or widowed: Official NADRA Talaqnama or late husband's death certificate.",
        ],
      },
      {
        heading: "4. Witnesses & Legal Haq-Mehr Preparation",
        paragraphs: [
          "The legal integrity of the Nikahnama depends heavily on the witnesses and financial terms:",
        ],
        bulletPoints: [
          "Two Adult Muslim Male Witnesses: Must possess valid original NADRA CNICs. Close relatives, friends, or family elders are preferred.",
          "Clear Haq-Mehr Agreement: Define whether the dower is Mu'ajjal (promptly paid at ceremony) or Mu'wajjal (deferred). Write the precise currency figure in PKR or specific gold weight (tola).",
          "Special Conditions (Column 17 & 18): Any agreed conditions, such as the wife's delegated right of divorce (Talaq-e-Tafweez) or monthly maintenance, must be discussed beforehand so the registrar can record them cleanly.",
        ],
        callout: {
          type: "tip",
          title: "Haq-Mehr Best Practice",
          text: "Avoid ambiguous terms like 'according to Shariah' without a specified number. Always state an exact amount (e.g., PKR 100,000 or 2 Tolas Gold) to prevent future civil disputes.",
        },
      },
    ],
    faqs: [
      {
        q: "Can a Nikah take place if the CNIC is recently expired?",
        a: "A valid token slip from NADRA showing ongoing renewal alongside an expired original card or original passport may be accepted under registrar discretion.",
      },
      {
        q: "Can females act as Nikah witnesses in Pakistan?",
        a: "Under classical Hanafi Islamic jurisprudence followed in Pakistan, either two adult Muslim males or one male and two females may act as witnesses.",
      },
      {
        q: "What documents does a foreign national marrying a Pakistani require?",
        a: "A valid passport, valid Pakistani visa, 4 passport photos, and an attested Single Status Certificate / No Objection Certificate (NOC) from their home country embassy.",
      },
    ],
    relatedSlugs: [
      "how-to-verify-book-registered-nikah-khawan-karachi",
      "nikahnama-columns-explained-pakistan-guide",
      "nadra-marriage-certificate-karachi-guide",
      "court-marriage-laws-in-pakistan-rights-procedure",
      "sunnah-of-masjid-nikah-blessings-etiquette",
    ],
  },
  {
    id: "sunnah-of-masjid-nikah-blessings-etiquette",
    slug: "sunnah-of-masjid-nikah-blessings-etiquette",
    title: "The Sunnah of Masjid Nikah: Religious Blessings, Hadith Evidence & Etiquette",
    urduTitle: "مسجد میں نکاح کی نبوی سنت — احادیثِ مبارکہ، روحانی برکات اور ضروری آداب",
    metaDescription:
      "Explore the spiritual rewards and prophetic tradition of solemnizing Nikah in a Mosque. Authentic Hadith evidence, Friday Jummah blessings, and respectful date distribution.",
    category: "Sunnah & Traditions",
    readTime: "6 min read",
    date: "June 2026",
    updatedDate: "October 2026",
    author: {
      name: "Maulana Abdul Rehman",
      role: "Islamic Scholar & Registered Nikah Khawan",
      avatar: "/logo.webp",
    },
    image: "/images/blogs/masjid-nikah-sunnah.jpg",
    imageAlt:
      "Sunnah Nikah ceremony in Grand Mosque prayer hall with Islamic Scholar and congregation",
    imageCaption:
      "Sacred solemnization in the house of Allah (SWT) reviving authentic prophetic traditions.",
    badge: "Prophetic Sunnah",
    excerpt:
      "Discover the spiritual rewards and prophetic tradition of solemnizing your marriage in the house of Allah (Masjid). Guidelines on Friday Jummah Nikah and respectful date distribution.",
    keyTakeaways: [
      "The Holy Prophet (ﷺ) explicitly encouraged solemnizing marriages inside Masajid.",
      "Masjid Nikah emphasizes simplicity, barakah, and freedom from wasteful extravagance.",
      "Friday (Jummah) after Asr prayer is an exceptionally auspicious and blessed time.",
      "Distribution of dates (Khajoor Taqseem) is an authentic Prophetic Sunnah following the ceremony.",
    ],
    sections: [
      {
        heading: "1. The Prophetic Injunction on Solemnizing Marriage in Masajid",
        paragraphs: [
          "In an era where modern weddings often become overwhelmed by extravagant expenditures, sensory overload, and commercial stress, reviving the beautiful Sunnah of solemnizing Nikah in the House of Allah (Masjid) restores divine purity and profound peace.",
          "Sayyidah Aisha (RA) reported that the Messenger of Allah (ﷺ) said: 'Announce this marriage, solemnize it in the mosques, and beat the duff for it' (Jami` at-Tirmidhi, Hadith 1089).",
        ],
        callout: {
          type: "quote",
          title: "Hadith on Marriage Simplicity",
          text: "'The most blessed marriage is that which has the least burden.' — Musnad Ahmad",
        },
      },
      {
        heading: "2. The Spiritual Benefits of a Mosque Solemnization",
        paragraphs: [
          "Conducting your Nikah ceremony in a Mosque offers unique spiritual benefits that commercial wedding halls cannot replicate:",
        ],
        bulletPoints: [
          "Sacred Environment: The covenant begins in the presence of angels, under the remembrance of Allah (SWT), away from loud music or frivolous distractions.",
          "Collective Prayers: You receive the sincere, unsolicited Duas of pious worshippers, scholars, and elderly congregation members present for daily prayers.",
          "Focus on Sacred Vows: Attention remains concentrated on the spiritual gravity of the Masnoon Khutbah and mutual Islamic rights between husband and wife.",
          "Financial Freedom: Families save hundreds of thousands of rupees otherwise spent on lavish banquet stage decors, allowing savings to be invested into the couple's real future.",
        ],
      },
      {
        heading: "3. Sacred Etiquette & Protocol for Masjid Nikah",
        paragraphs: [
          "To preserve the sanctity and dignity of the mosque, our scholars advise families to adhere to the following etiquettes:",
        ],
        bulletPoints: [
          "Observing Reverent Silence: Keep conversations low and turn off mobile phone ringtones inside the prayer hall.",
          "Modest Islamic Attire: All guests—both male and female—should dress respectfully according to Islamic modesty standards.",
          "Sunnah Date Distribution (Khajoor): Distribute sweet dates and almonds outside the main prayer hall or in the mosque courtyard to maintain cleanliness of prayer carpets.",
          "Timely Arrival: Coordinate with the mosque administration so the ceremony does not overlap with obligatory congregational prayers.",
        ],
      },
      {
        heading: "4. Official Registration On-Site in Karachi Masajid",
        paragraphs: [
          "Our qualified Islamic Scholars and Government Registered Nikah Registrars regularly attend ceremonies at major mosques across Karachi (including Masjid-e-Tooba DHA, Memon Masjid Bolton Market, Jamia Masjid Arambagh, Bait-ul-Mukarram Gulshan, and local community Masajid).",
          "We bring the official government register books, ensuring that immediately after the Masnoon Khutbah and collective Dua, all legal signatures and official seals are completed on-site without delay.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the best time for a Masjid Nikah?",
        a: "Friday after Jummah prayer or between Asr and Maghrib prayer is widely regarded as the most blessed and spiritually recommended time.",
      },
      {
        q: "Can the bride be present inside the mosque?",
        a: "Yes, many modern Karachi mosques feature dedicated female galleries or private family chambers where the bride and female relatives participate comfortably.",
      },
      {
        q: "Do we need prior permission from the mosque management?",
        a: "Yes. Our team assists in coordinating with the mosque Imam and committee to reserve the timing smoothly.",
      },
    ],
    relatedSlugs: [
      "documents-required-for-nikah-in-karachi-checklist",
      "nadra-marriage-certificate-karachi-guide",
      "is-online-nikah-valid-in-islam-shariah-conditions",
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOGS_DATA.find((b) => b.slug === slug || b.id === slug);
}
