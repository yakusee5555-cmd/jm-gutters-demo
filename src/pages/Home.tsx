import Hero from "../components/Hero";
import { Contact, Reviews } from "../components/Sections";
import { FullBleed, Pricing, Stacked, Work } from "../components/Showcase";
import { Marquee } from "../components/MotionBits";
import { RouteFX } from "../components/PageBits";

const MARQUEE_ITEMS = [
  "Gutter Cleaning",
  "Gutter Guards",
  "Downspout Repair",
  "Fascia & Soffit",
  "Replacement",
  "Maintenance Plans",
  "Columbus",
  "Dublin",
  "Westerville",
  "Hilliard",
  "Free Estimates",
];

export default function Home() {
  return (
    <>
      <RouteFX
        title="J&M Gutters | Gutter Cleaning & Guards in Columbus, OH"
        description="J&M Gutters — gutter cleaning, guard installation & downspout repair across Columbus, OH. Free estimates."
      />
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <Stacked />
      <FullBleed />
      <Work />
      <Pricing />
      <Reviews />
      <Contact />
    </>
  );
}
