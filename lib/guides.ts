export type Guide = {
  slug: string;
  title: string;
  country: string;
  category: string;
  icon: string;
  summary: string;
  source: string;
  sourceName: string;
  verified: string;
  items: string[];
  steps: string[];
  note: string;
  scope: string;
};

export const guides: Guide[] = [
  {
    slug: "malaysia-passport-renewal",
    title: "Renew a Malaysian passport",
    country: "Malaysia",
    category: "Travel",
    icon: "✈️",
    summary: "A practical preparation checklist for Malaysian passport renewal, built from Immigration Department requirements.",
    source: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    sourceName: "Malaysian Immigration Department",
    verified: "1 Sep 2026",
    items: [
      "MyKad or temporary identification document",
      "Previous passport if this is a renewal",
      "For applicants under 18, check the parent/guardian requirements for your category",
      "Confirm the receiving Immigration office before travelling"
    ],
    steps: [
      "Identify your applicant category",
      "Prepare the identity document and previous passport",
      "Confirm the correct Immigration office",
      "Bring any category-specific documents",
      "Follow the official application or renewal process"
    ],
    note: "Requirements vary by applicant category. The official Immigration Department page is the final authority before you travel.",
    scope: "Malaysia · Malaysian citizens"
  },
  {
    slug: "malaysia-driving-licence-renewal",
    title: "Renew a Malaysian driving licence",
    country: "Malaysia",
    category: "Transport",
    icon: "🚗",
    summary: "Know the documents, renewal locations and basic conditions before visiting JPJ or another eligible counter.",
    source: "https://www.jpj.gov.my/en/competent-drivers-license-cdl-renewal/",
    sourceName: "JPJ Malaysia",
    verified: "1 Sep 2026",
    items: [
      "Original MyKad/passport, or the permitted copy when a representative handles the transaction",
      "Original driving licence or permitted copy",
      "Representative identification when applicable",
      "Colour photo with the specified requirements when applicable",
      "Payment for the applicable licence class and renewal period"
    ],
    steps: [
      "Confirm your licence type and eligibility",
      "Prepare identification and your current licence",
      "Choose an eligible renewal location",
      "Check the current fee for your class",
      "Complete the renewal"
    ],
    note: "JPJ currently lists renewal at JPJ State/Branch, UTC, 1JPJ counters, eKhidmat kiosks and the Pos Malaysia network. Confirm the current location and fee before leaving.",
    scope: "Malaysia · Competent Driver's Licence (CDL)"
  },
  {
    slug: "malaysia-learner-licence-renewal",
    title: "Renew a Malaysian learner licence",
    country: "Malaysia",
    category: "Transport",
    icon: "🪪",
    summary: "A focused LDL checklist covering the current JPJ renewal conditions and documents.",
    source: "https://www.jpj.gov.my/en/renewal-of-learners-license-ldl/",
    sourceName: "JPJ Malaysia",
    verified: "1 Sep 2026",
    items: [
      "Original MyKad/passport or permitted copy when a representative handles the transaction",
      "Original learner/driving licence or permitted copy",
      "Representative identification when applicable",
      "Colour photo with the specified white-background requirements",
      "Valid passport for foreign applicants",
      "Payment for the applicable class and renewal period"
    ],
    steps: [
      "Check that your LDL renewal duration stays within the allowed maximum",
      "Confirm you are not blacklisted",
      "Prepare identification and current licence",
      "Check the photo and fee requirements",
      "Choose an eligible renewal location and complete the renewal"
    ],
    note: "JPJ states that LDL renewal cannot exceed two years and that the applicant must not be blacklisted. Verify your exact class and fee on the official page.",
    scope: "Malaysia · Learner's Driving Licence (LDL)"
  },
  {
    slug: "us-passport-renewal",
    title: "Renew a U.S. passport",
    country: "United States",
    category: "Travel",
    icon: "🛂",
    summary: "Start with the official eligibility routes for online or mail renewal before arranging an in-person visit.",
    source: "https://travel.state.gov/en/passports/renew-replace.html",
    sourceName: "U.S. Department of State",
    verified: "1 Sep 2026",
    items: [
      "Confirm you are eligible for the renewal route you want",
      "Use the official instructions for online or mail renewal",
      "If in-person application is required, check current appointment and location rules",
      "Prepare the required passport materials"
    ],
    steps: [
      "Check renewal eligibility",
      "Choose online, mail or in-person route",
      "Prepare the required materials",
      "Follow the official submission instructions",
      "Track your application if the official service provides tracking"
    ],
    note: "Eligibility depends on your passport history and circumstances. The U.S. Department of State is the final authority. Avoid unofficial passport renewal websites.",
    scope: "United States · U.S. passport holders"
  },
  {
    slug: "passport-renewal-starter",
    title: "Passport renewal — global starter",
    country: "International",
    category: "Travel",
    icon: "🌍",
    summary: "A country-neutral preparation flow for finding and checking your own passport authority's rules.",
    source: "https://www.icao.int/Security/FAL/TRIP/Pages/Publications.aspx",
    sourceName: "ICAO TRIP resources",
    verified: "1 Sep 2026",
    items: [
      "Find your country's official passport authority",
      "Confirm whether renewal is online, by mail or in person",
      "Check identity-document requirements",
      "Check photo and validity requirements",
      "Confirm fees, appointment rules and processing times"
    ],
    steps: [
      "Identify the government authority responsible for your passport",
      "Open its official renewal instructions",
      "Confirm your eligibility",
      "Prepare the documents it lists",
      "Confirm where and when you need to submit"
    ],
    note: "This is intentionally not a universal legal checklist. Passport rules are country-specific; always verify against your government's official authority.",
    scope: "International · preparation starter"
  },
  {
    slug: "before-any-government-visit",
    title: "Before any government-office visit",
    country: "International",
    category: "General",
    icon: "🏛️",
    summary: "A universal pre-visit workflow for checking requirements before travelling to a public-service office.",
    source: "https://www.oecd.org/gov/digital-government/",
    sourceName: "OECD Digital Government",
    verified: "1 Sep 2026",
    items: [
      "Confirm the exact service you need",
      "Check the official agency website",
      "Confirm whether an appointment is required",
      "Confirm documents and whether originals/copies are required",
      "Check opening hours and the exact location",
      "Save the official instructions for reference"
    ],
    steps: [
      "Define the exact service",
      "Find the responsible official agency",
      "Verify requirements and eligibility",
      "Confirm appointment and location details",
      "Prepare everything before leaving"
    ],
    note: "This workflow helps you prepare, but it does not replace the official agency's instructions.",
    scope: "International · general preparation"
  }
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
