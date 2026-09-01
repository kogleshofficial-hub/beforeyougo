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
    summary: "Prepare for Malaysian passport renewal using the Immigration Department's published requirements.",
    source: "https://www.imi.gov.my/index.php/en/main-services/passport/malaysian-international-passport/",
    sourceName: "Malaysian Immigration Department",
    verified: "1 Sep 2026",
    items: [
      "MyKad or temporary identification document",
      "Previous passport if this is a renewal",
      "For applicants under 18, check the parent/guardian requirements for your category",
      "Confirm the receiving Immigration office before travelling"
    ],
    steps: ["Identify your applicant category", "Prepare the identity document and previous passport", "Confirm the correct Immigration office", "Bring any category-specific documents", "Follow the official application or renewal process"],
    note: "Requirements vary by applicant category. The official Immigration Department page is the final authority before you travel.",
    scope: "Malaysia · Malaysian citizens"
  },
  {
    slug: "malaysia-driving-licence-renewal",
    title: "Renew a Malaysian driving licence",
    country: "Malaysia",
    category: "Transport",
    icon: "🚗",
    summary: "Prepare for a Malaysian Competent Driver's Licence renewal using current JPJ guidance.",
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
    steps: ["Confirm your licence type and eligibility", "Prepare identification and your current licence", "Choose an eligible renewal location", "Check the current fee for your class", "Complete the renewal"],
    note: "JPJ lists several renewal channels. Confirm the current location, fee and document requirements before leaving.",
    scope: "Malaysia · Competent Driver's Licence (CDL)"
  },
  {
    slug: "malaysia-learner-licence-renewal",
    title: "Renew a Malaysian learner licence",
    country: "Malaysia",
    category: "Transport",
    icon: "🪪",
    summary: "Prepare for an LDL renewal using the current learner-licence conditions published by JPJ.",
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
    steps: ["Check that your LDL renewal duration stays within the allowed maximum", "Confirm you are not blacklisted", "Prepare identification and current licence", "Check the photo and fee requirements", "Choose an eligible renewal location and complete the renewal"],
    note: "JPJ states that LDL renewal cannot exceed two years and that the applicant must not be blacklisted. Verify your exact class and fee on the official page.",
    scope: "Malaysia · Learner's Driving Licence (LDL)"
  },
  {
    slug: "us-passport-renewal",
    title: "Renew a U.S. passport",
    country: "United States",
    category: "Travel",
    icon: "🛂",
    summary: "Start with the official eligibility routes for U.S. passport renewal before arranging a submission or visit.",
    source: "https://travel.state.gov/en/passports/renew-replace.html",
    sourceName: "U.S. Department of State",
    verified: "1 Sep 2026",
    items: [
      "Confirm you are eligible for the renewal route you want",
      "Use the official instructions for online or mail renewal",
      "If in-person application is required, check current appointment and location rules",
      "Prepare the required passport materials"
    ],
    steps: ["Check renewal eligibility", "Choose online, mail or in-person route", "Prepare the required materials", "Follow the official submission instructions", "Track your application if the official service provides tracking"],
    note: "Eligibility depends on your passport history and circumstances. The U.S. Department of State is the final authority. Avoid unofficial passport renewal websites.",
    scope: "United States · U.S. passport holders"
  }
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
