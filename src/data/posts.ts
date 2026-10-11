export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  body: string[];
}

export const POSTS: Post[] = [
  {
    slug: "how-often-clean-gutters-columbus",
    title: "How Often Should Columbus Homeowners Clean Their Gutters?",
    excerpt:
      "Twice a year is the rule — but the trees on your street get a vote. Here's the schedule we recommend.",
    date: "September 12, 2026",
    readTime: "3 min read",
    img: "/img/gutter/blog1.jpg",
    body: [
      "The short answer: twice a year — late fall after the leaves drop, and spring after the seed pods and storms. That covers about 80% of Columbus homes.",
      "The other 20% sit under mature maples, oaks, or pines. If your gutters fill between cleanings, you're not over-servicing — you're under-scheduled. Three cleanings a year beats one emergency fascia repair every time.",
      "Fall is the non-negotiable one. Wet leaves freeze into a solid mat over winter, and that weight pulls gutters away from the fascia. Spring cleaning clears the maple seeds and storm debris before the heavy rains.",
      "Watch for the warning signs between visits: water spilling over the edge in one spot, plants growing in the gutter (yes, really), or a downspout that dribbles instead of flows. Any of those means don't wait for the next scheduled cleaning.",
      "Our maintenance plan members never think about this — they're on the calendar automatically, spring and fall, with a photo report after every visit.",
    ],
  },
  {
    slug: "gutter-guards-worth-it",
    title: "Are Gutter Guards Worth It? An Honest Answer",
    excerpt:
      "Micro-mesh guards genuinely work. Cheap screens genuinely don't. Here's how to tell the difference.",
    date: "August 28, 2026",
    readTime: "4 min read",
    img: "/img/gutter/blog2.webp",
    body: [
      "We install gutter guards for a living, so take the sales pitch with salt — but here's the honest breakdown. Guards are worth it when three things are true: your gutters are sound, you have real tree cover, and you buy micro-mesh, not the cheap stuff.",
      "Micro-mesh blocks debris down to shingle grit while handling a downpour. That's the product that ends ladder work. Foam inserts trap moisture against your gutters. Cheap snap-in screens lift in wind and clog at the edges. The price difference exists for a reason.",
      "Guards are NOT worth it on failing gutters. If your runs are sagging, split, or pulling away, guards just hide the problem while it gets worse. Any company that quotes guards without inspecting the gutters first is selling, not solving.",
      "Do the math for your house: two cleanings a year at $149–$289 each, for as long as you own the home. Guards typically pay for themselves in 4–6 years — then it's pure savings plus zero ladder risk.",
      "If you're on the fence, get the free inspection. We'll tell you straight whether your gutters are guard-ready or whether your money is better spent on replacement first.",
    ],
  },
  {
    slug: "water-overflowing-gutters-fix",
    title: "Water Pouring Over Your Gutters? Here's What's Actually Wrong",
    excerpt:
      "It's almost never the gutter's fault. The three usual culprits, and what each one costs to fix.",
    date: "August 8, 2026",
    readTime: "3 min read",
    img: "/img/gutter/blog3.jpg",
    body: [
      "When a homeowner calls about water cascading over the gutter edge, the gutter itself is guilty maybe 10% of the time. Here are the three real culprits, in order of how often we see them.",
      "One: a clogged downspout. Leaves pack into the elbow or the underground drain, water backs up the whole run, and it spills over the front. This is the most common cause and the cheapest fix — usually a cleanout and flush, done in under an hour.",
      "Two: wrong pitch. Gutters need a slight slope toward the downspout — about a quarter inch per ten feet. Houses settle, hangers loosen, and sections go flat or back-pitched. Water sits, mosquitoes breed, and the next rain overflows. Re-pitching is a straightforward repair.",
      "Three: undersized gutters for the roof. A steep or large roof sheds more water than 5-inch gutters can carry in a cloudburst. If overflow only happens in heavy rain and everything's clean, you likely need 6-inch gutters — not another cleaning.",
      "The expensive mistake is guessing. A free inspection takes twenty minutes and tells you which of the three you're dealing with — then the fix is priced, not mysterious.",
    ],
  },
];
