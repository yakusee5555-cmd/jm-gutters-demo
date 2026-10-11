export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  img: string;
  description: string[];
  included: string[];
  steps: { title: string; desc: string }[];
  pricingHint: string;
  faqs: { q: string; a: string }[];
  meta: string;
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    tagline: "Water flows right again.",
    img: "/img/gutter/card1.jpg",
    description: [
      "Clogged gutters don't just look bad — they dump water where it destroys things: fascia boards, siding, foundations, basements. We clear every inch by hand, flush every downspout until it runs clean, and haul all the debris away.",
      "You get photo proof of the before and after, and a flow test on every downspout before we leave. No ladder time for you, no mess left behind.",
    ],
    included: [
      "Hand cleanout of all gutters",
      "Downspout flush & flow test",
      "Debris bagged & hauled away",
      "Hanger & pitch spot-check",
      "Before/after photo report",
      "Minor resealing on the spot",
    ],
    steps: [
      { title: "Walkthrough",
        desc: "We check every run, downspout, and problem corner, and confirm your price.", },
      { title: "Cleanout",
        desc: "All debris removed by hand — no blasting muck onto your siding.", },
      { title: "Flush & test",
        desc: "Every downspout flushed until water runs clear and fast.", },
      { title: "Report",
        desc: "Photos of the finished work plus any issues we spotted.", },
    ],
    pricingHint: "Most Columbus homes run $149–$289 depending on stories and gutter length. Free quote first.",
    faqs: [
      {
        q: "How often should gutters be cleaned?",
        a: "Twice a year in Columbus — late fall after the leaves drop, and spring. Homes under big maples may need a third visit.",
      },
      {
        q: "Do you haul the debris away?",
        a: "Yes. Everything we pull out gets bagged and hauled — your yard looks like we were never there.",
      },
    ],
    meta: "Gutter cleaning in Columbus, OH — full cleanout, downspout flush, debris hauled. From $149. Free estimates from J&M Gutters",
  },
  {
    slug: "gutter-guard-installation",
    title: "Gutter Guard Installation",
    tagline: "Never clean gutters again.",
    img: "/img/gutter/card2.webp",
    description: [
      "Micro-mesh gutter guards let rain in and keep everything else out — leaves, twigs, shingle grit, even pine needles. Once they're on, the ladder stays in the garage for good.",
      "We fit guards to your exact gutter profile, tune the whole system while we're up there, and back it with a clog-free guarantee. Most homes done in a single day.",
    ],
    included: [
      "Micro-mesh stainless guards",
      "Fit to your gutter profile",
      "Full system tune-up included",
      "Downspout screens added",
      "Clog-free guarantee",
      "One-day install, most homes",
    ],
    steps: [
      { title: "Measure",
        desc: "We measure every run and check gutter condition — guards only go on sound gutters.", },
      { title: "Prep",
        desc: "Gutters cleaned, hangers tightened, pitch corrected where needed.", },
      { title: "Install",
        desc: "Guards cut and locked to each run, sealed at every seam.", },
      { title: "Verify",
        desc: "Water test across the whole system before we pack up.", },
    ],
    pricingHint: "Most homes $899–$2,400 depending on linear footage. Free measurement and firm quote.",
    faqs: [
      {
        q: "Do gutter guards really work?",
        a: "Micro-mesh does — it blocks debris down to shingle grit while handling heavy rain. Cheap screens and foam inserts are the ones that fail.",
      },
      {
        q: "Will guards work on my existing gutters?",
        a: "If your gutters are sound, yes. If they're failing, we'll tell you straight and quote replacement instead of selling guards on bad gutters.",
      },
    ],
    meta: "Gutter guard installation in Columbus, OH — micro-mesh guards, clog-free guarantee. From $899. J&M Gutters",
  },
  {
    slug: "downspout-repair",
    title: "Downspout Repair",
    tagline: "Fixed right, first visit.",
    img: "/img/gutter/card3.jpg",
    description: [
      "A leaking or detached downspout quietly soaks your foundation, rots fascia, and floods mulch beds. We find the failure, fix it properly, and make sure water actually leaves the house.",
      "Most repairs are same-week. We carry the common profiles and elbows on the truck, so there's no waiting on parts.",
    ],
    included: [
      "Leak diagnosis & sealing",
      "Clog removal & flush",
      "Detached runs re-secured",
      "Elbows & extensions replaced",
      "Splash blocks / rerouting",
      "Flow test after repair",
    ],
    steps: [
      { title: "Inspect",
        desc: "We trace the leak or blockage and check the whole run, not just the symptom.", },
      { title: "Repair",
        desc: "Reseal, re-secure, or replace the failed section with matching profile.", },
      { title: "Reroute",
        desc: "Water directed away from the foundation — extensions where needed.", },
      { title: "Test",
        desc: "Hose test to confirm it drains fast and lands where it should.", },
    ],
    pricingHint: "Simple repairs from $89. Reroutes and replacements quoted free on-site.",
    faqs: [
      {
        q: "Why is water pouring over my gutter in one spot?",
        a: "Usually a clogged or crushed downspout backing the whole run up. We clear it and test the flow — most fixes take under an hour.",
      },
      {
        q: "Can you move a downspout away from my walkway?",
        a: "Yes — rerouting and underground tie-ins are routine. We'll show you the options and price each one.",
      },
    ],
    meta: "Downspout repair in Columbus, OH — leaks, clogs, reroutes fixed right. From $89. J&M Gutters",
  },
  {
    slug: "fascia-soffit-repair",
    title: "Fascia & Soffit Repair",
    tagline: "Stop rot before it spreads.",
    img: "/img/gutter/card4.jpg",
    description: [
      "Fascia and soffit take the beating that gutters can't — and when they rot, water gets a straight path into your roof deck. We cut out the damage, replace it with matched material, and seal it against the next storm.",
      "Caught early, it's a repair. Ignored, it's a roof problem. We'll show you photos and give it to you straight either way.",
    ],
    included: [
      "Rot inspection with photos",
      "Damaged boards replaced",
      "Matched material & paint",
      "Sealed against moisture",
      "Gutter re-hung correctly",
      "Vented soffit options",
    ],
    steps: [
      { title: "Assess",
        desc: "We probe every suspect board and photo-document the damage.", },
      { title: "Remove",
        desc: "Rotted sections cut back to solid wood — no patching over rot.", },
      { title: "Replace",
        desc: "New fascia/soffit matched to your home, sealed and finished.", },
      { title: "Protect",
        desc: "Gutters re-hung with correct pitch so water can't sit again.", },
    ],
    pricingHint: "Spot repairs from $199. Full runs quoted free after inspection.",
    faqs: [
      {
        q: "How do I know if my fascia is rotted?",
        a: "Peeling paint, soft spots, or gutters pulling away are the tells. We'll probe it during a free inspection and show you.",
      },
      {
        q: "Do you paint the new boards?",
        a: "Yes — replacements are primed, sealed, and paint-matched so the repair disappears.",
      },
    ],
    meta: "Fascia & soffit repair in Columbus, OH — rot replaced, sealed, paint-matched. From $199. J&M Gutters",
  },
  {
    slug: "gutter-replacement",
    title: "Full Gutter Replacement",
    tagline: "Seamless. Sized right. Done.",
    img: "/img/gutter/card5.jpg",
    description: [
      "When gutters are sagging, splitting, or patched past saving, replacement beats another repair bill. We install seamless aluminum gutters formed on-site to your exact measurements — no leaky seams along the run.",
      "Correct size, correct pitch, correct hangers. Sized for your roof's water load, not whatever the last guy had on the truck.",
    ],
    included: [
      "Seamless aluminum, formed on-site",
      "5 or 6 inch, sized to your roof",
      "Hidden hangers, screwed solid",
      "New downspouts & elbows",
      "Color-matched to your home",
      "Debris hauled, site left clean",
    ],
    steps: [
      { title: "Measure",
        desc: "Every run measured, roof square footage checked for correct sizing.", },
      { title: "Remove",
        desc: "Old gutters and downspouts torn off and hauled away.", },
      { title: "Form & hang",
        desc: "Seamless runs formed on-site, hung with proper pitch.", },
      { title: "Finish",
        desc: "Downspouts set, water tested, everything cleaned up.", },
    ],
    pricingHint: "Most Columbus homes $1,499–$3,800 depending on footage and stories. Free measurement and firm quote.",
    faqs: [
      {
        q: "5-inch or 6-inch gutters?",
        a: "Depends on your roof size and pitch. Bigger roofs and steep pitches need 6-inch — we'll measure and recommend, not upsell.",
      },
      {
        q: "How long does replacement take?",
        a: "Most homes are done in one day. Larger or two-story homes may run into day two.",
      },
    ],
    meta: "Gutter replacement in Columbus, OH — seamless aluminum, sized for your roof. From $1,499. J&M Gutters",
  },
  {
    slug: "seasonal-maintenance-plan",
    title: "Seasonal Maintenance Plan",
    tagline: "Two cleanings. Zero thinking.",
    img: "/img/gutter/card6.jpg",
    description: [
      "Gutters are a twice-a-year job, and nobody remembers until water's pouring over the edge. The plan puts you on the schedule automatically — spring and fall cleanings, done before the seasons turn.",
      "Members get priority booking, a standing discount on repairs, and a photo report every visit. Set it once, forget it forever.",
    ],
    included: [
      "Spring cleaning included",
      "Fall cleaning included",
      "Downspout flush each visit",
      "Priority storm-response booking",
      "10% off any repairs",
      "Photo report every visit",
    ],
    steps: [
      { title: "Sign up",
        desc: "One call or form — pick spring/fall, we handle the calendar.", },
      { title: "Spring visit",
        desc: "Post-winter cleanout before the heavy rains.", },
      { title: "Fall visit",
        desc: "Post-leaf-drop cleanout before freeze season.", },
      { title: "Reports",
        desc: "Photos and a condition note after every visit.", },
    ],
    pricingHint: "$39/mo covers both annual cleanings. Cancel anytime with 30 days' notice.",
    faqs: [
      {
        q: "What if I need a third cleaning?",
        a: "Members get extra visits at the discounted rate — heavy tree cover is common around Columbus.",
      },
      {
        q: "Can I cancel the plan?",
        a: "Anytime with 30 days' notice. No contracts, no cancellation fees.",
      },
    ],
    meta: "Gutter maintenance plan in Columbus, OH — spring + fall cleanings on autopilot. $39/mo. J&M Gutters",
  },
];
