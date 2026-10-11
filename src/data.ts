export const BUSINESS = {
  name: "J&M Gutters",
  phone: "(614) 555-0164",
  phoneHref: "tel:+16145550164",
  address: "Serving Columbus, OH",
  hours: "Mon–Fri 8am–5pm",
  emergency: "Storm-damage gutter repair",
  rating: "5.0",
  reviewCount: "120+",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* Stacked headline words (section 2) */
export const STACK_WORDS = ["Cleaning.", "Guards.", "Repair.", "Replace."];

export interface FloatCard {
  img: string;
  title: string;
  meta: string;
  rotate: string;
  offset: string;
}

export const FLOAT_CARDS: FloatCard[] = [
  {
    img: "/img/gutter/float1.jpg",
    title: "Gutter cleaning",
    meta: "Full cleanout · Downspout flush",
    rotate: "rotate-[4deg]",
    offset: "md:translate-y-10",
  },
  {
    img: "/img/gutter/float2.jpg",
    title: "Gutter guards",
    meta: "Micro-mesh · Never clean again",
    rotate: "rotate-[-3deg]",
    offset: "md:-translate-y-6",
  },
  {
    img: "/img/gutter/float3.webp",
    title: "Downspout repair",
    meta: "Leaks fixed · Same week",
    rotate: "rotate-[2.5deg]",
    offset: "md:translate-y-16",
  },
];

export interface ListRow {
  img: string;
  title: string;
  desc: string;
}

export const LIST_ROWS: ListRow[] = [
  {
    img: "/img/gutter/card1.jpg",
    title: "Gutter cleaning",
    desc: "Full cleanout, flush, haul-away",
  },
  {
    img: "/img/gutter/card2.webp",
    title: "Gutter guard installation",
    desc: "Micro-mesh, end cleaning for good",
  },
  {
    img: "/img/gutter/card3.jpg",
    title: "Downspout repair",
    desc: "Leaks, clogs, detached runs fixed",
  },
  {
    img: "/img/gutter/card4.jpg",
    title: "Fascia & soffit repair",
    desc: "Rot repaired before it spreads",
  },
  {
    img: "/img/gutter/card5.jpg",
    title: "Full gutter replacement",
    desc: "Seamless aluminum, sized right",
  },
  {
    img: "/img/gutter/card6.jpg",
    title: "Seasonal maintenance plan",
    desc: "Two cleanings a year, zero thinking",
  },
];

export interface GlassCard {
  title: string;
  desc: string;
  pos: string;
}

export const GLASS_CARDS: GlassCard[] = [
  {
    title: "Free estimates",
    desc: "On-site quotes, usually same-day.",
    pos: "left-[6%] top-[16%]",
  },
  {
    title: "Licensed & insured",
    desc: "Full coverage on every single job.",
    pos: "right-[8%] top-[24%]",
  },
  {
    title: "Biannual plans",
    desc: "Two cleanings a year, zero thinking.",
    pos: "left-[10%] bottom-[20%]",
  },
  {
    title: "5.0 ★★★★★",
    desc: "120+ Google reviews from Columbus neighbors.",
    pos: "right-[10%] bottom-[14%]",
  },
];

export interface WorkShot {
  img: string;
  title: string;
  location: string;
}

export const WORK_SHOTS: WorkShot[] = [
  { img: "/img/gutter/work1.png", title: "Full cleanout, downspouts flushed", location: "Dublin, OH" },
  { img: "/img/gutter/work2.webp", title: "Heavy debris removal, haul-away", location: "Westerville, OH" },
  { img: "/img/gutter/work3.jpg", title: "New seamless run installed", location: "Hilliard, OH" },
  { img: "/img/gutter/work4.webp", title: "Aluminum replacement, color-matched", location: "Powell, OH" },
  { img: "/img/gutter/work5.png", title: "Clean gutters, sharp roofline", location: "Worthington, OH" },
  { img: "/img/gutter/work7.webp", title: "Guard install, done in a day", location: "Grove City, OH" },
];

export interface Service {
  img: string;
  title: string;
  desc: string;
}

export const SERVICES: Service[] = [
  {
    img: "/img/gutter/card1.jpg",
    title: "Gutter cleaning",
    desc: "Full cleanout, downspout flush, and debris hauled away. Water flows right again.",
  },
  {
    img: "/img/gutter/card2.webp",
    title: "Gutter guard installation",
    desc: "Micro-mesh guards that end gutter cleaning for good.",
  },
  {
    img: "/img/gutter/card3.jpg",
    title: "Downspout repair",
    desc: "Leaks, clogs, and detached runs fixed right the first time.",
  },
  {
    img: "/img/gutter/card4.jpg",
    title: "Fascia & soffit repair",
    desc: "Rot and damage repaired before it spreads to the roof.",
  },
  {
    img: "/img/gutter/card5.jpg",
    title: "Full gutter replacement",
    desc: "Seamless aluminum gutters, sized and pitched for your roof.",
  },
  {
    img: "/img/gutter/card6.jpg",
    title: "Seasonal maintenance plan",
    desc: "Two cleanings a year on autopilot. Zero thinking required.",
  },
];

export interface Review {
  name: string;
  town: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Mike D.",
    town: "Dublin",
    text: "They pulled two trash bags of sludge out of my gutters and the downspouts actually drain now. First heavy rain since — not a single overflow.",
  },
  {
    name: "Sarah K.",
    town: "Westerville",
    text: "Got the micro-mesh guards installed in one day. Crew was clean, fast, and the price was exactly the quote. No ladders for me ever again.",
  },
  {
    name: "Tom R.",
    town: "Hilliard",
    text: "Downspout was dumping water straight into my foundation bed. They rerouted it the same week and sealed every joint. Dry through two storms now.",
  },
  {
    name: "Jen P.",
    town: "Powell",
    text: "Fair price, showed up on time, and sent photos of the before and after. You can tell they actually care about the work.",
  },
];

export const TOWNS = [
  "Columbus",
  "Dublin",
  "Westerville",
  "Hilliard",
  "Grove City",
  "Powell",
  "Worthington",
  "Upper Arlington",
  "Reynoldsburg",
  "Gahanna",
  "New Albany",
  "Delaware",
];

export interface ServiceCard {
  img: string;
  from: string;
  title: string;
  desc: string;
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    img: "/img/gutter/card1.jpg",
    from: "$149",
    title: "Gutter cleaning",
    desc: "Full cleanout, downspout flush, and debris hauled away.",
  },
  {
    img: "/img/gutter/card2.webp",
    from: "$899",
    title: "Gutter guard installation",
    desc: "Micro-mesh guards that end cleaning for good.",
  },
  {
    img: "/img/gutter/card3.jpg",
    from: "$89",
    title: "Downspout repair",
    desc: "Leaks, clogs, and detached runs fixed right.",
  },
  {
    img: "/img/gutter/card4.jpg",
    from: "$199",
    title: "Fascia & soffit repair",
    desc: "Rot and damage repaired before it spreads.",
  },
  {
    img: "/img/gutter/card5.jpg",
    from: "$1,499",
    title: "Full gutter replacement",
    desc: "Seamless aluminum, sized for your roof.",
  },
  {
    img: "/img/gutter/card6.jpg",
    from: "$39/mo",
    title: "Seasonal maintenance plan",
    desc: "Two cleanings a year, zero thinking.",
  },
];
