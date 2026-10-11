import { Link } from "react-router-dom";
import { BUSINESS, GLASS_CARDS, REVIEWS } from "../data";
import { CtaBand, Faq, PageHero, RouteFX } from "../components/PageBits";
import { CountUp } from "../components/MotionBits";

const VALUES = [
  {
    title: "Flow, not overflow",
    desc: "We size, pitch, and secure every run for your roof's water load. Never undersized, never rushed.",
  },
  {
    title: "Priced on-site, in writing",
    desc: "Free estimates with a firm number before we start. The price we quote is the price you pay.",
  },
  {
    title: "Cleaner than we found it",
    desc: "Debris hauled, downspouts flushed, site left spotless. Most customers tell us it looks better after.",
  },
  {
    title: "We answer",
    desc: "Storm damage? We prioritize it. Questions after the job? We call back. That's the whole business model.",
  },
];

const TIMELINE = [
  { year: "2015", text: "One ladder, one trailer, and a simple promise: show up on time, clean it right." },
  { year: "2018", text: "Second crew added as word spreads across Columbus neighborhoods." },
  { year: "2021", text: "Gutter guard installs launch. Ladders stay in garages." },
  { year: "2026", text: "10+ years in, still answering our own phones." },
];

export default function About() {
  return (
    <>
      <RouteFX
        title="About J&M Gutters | Columbus, OH Gutter Company"
        description="Meet J&M Gutters, serving Columbus, OH since 2015. Cleaning, guards, repairs, replacement. Licensed & insured."
      />
      <PageHero
        eyebrow="About us"
        title={
          <>
            Gutter people.
            <br />
            Not a call center.
          </>
        }
        sub="We're a local gutter crew from Columbus. When you call, you talk to someone who's actually hung a gutter. Not a sales rep reading a script."
        img="/img/gutter/work3.jpg"
      />

      {/* story */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              Our story
            </p>
            <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
              Started with a truck.
              <br />
              Built on callbacks.
            </h2>
          </div>
          <div className="reveal space-y-5 text-base leading-relaxed text-charcoal/70 md:text-lg">
            <p>
              We started in 2015 with one ladder, one trailer, and a simple
              idea: show up on time, clean it right, and the phone keeps ringing. No door-knocking,
              no gimmicks. Just neighbors telling neighbors.
            </p>
            <p>
              Ten years later we're running multiple crews across
              Columbus neighborhoods. The idea hasn't changed. Most of our work still comes
              from repeat customers and referrals, which tells us the model works.
            </p>
            <p>
              We're licensed and insured on every job, we size gutters for the roof
              instead of the truck, and we treat your home like it's our own mother's. That's it. That's
              the company.
            </p>
          </div>
        </div>
      </section>

      {/* stats band */}
      <section className="bg-ink py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-12">
          {[
            { n: <CountUp to={10} suffix="+" />, l: "Years in business" },
            { n: <CountUp to={3200} suffix="+" />, l: "Jobs completed" },
            { n: <CountUp to={5} decimals={1} />, l: `${BUSINESS.reviewCount} Google reviews` },
            { n: "BBB", l: "Certified business" },
          ].map((s) => (
            <div key={s.l} className="reveal text-center md:text-left">
              <p className="font-display text-4xl text-cream md:text-6xl">{s.n}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-cream/55">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            How we work
          </p>
          <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Four rules. No exceptions.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <article
                key={v.title}
                className="reveal rounded-3xl border border-charcoal/10 bg-white p-7 md:p-9"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="font-display text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl uppercase text-charcoal md:text-2xl">
                  {v.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-charcoal/65">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="bg-accent-deep py-12 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <p className="reveal text-[11px] font-bold uppercase tracking-[0.3em] text-cream/60">
            The short version
          </p>
          <h2 className="reveal mt-3 font-display text-2xl uppercase leading-[1.05] text-cream md:text-5xl">
            Ten years, four lines.
          </h2>
          <div className="mt-8 space-y-0 md:mt-12">
            {TIMELINE.map((t) => (
              <div
                key={t.year}
                className="reveal flex items-baseline gap-5 border-t border-cream/15 py-5 md:gap-10 md:py-6"
              >
                <span className="font-display text-xl text-cream/90 md:text-3xl">{t.year}</span>
                <p className="text-base text-cream/70 md:text-lg">{t.text}</p>
              </div>
            ))}
            <div className="border-t border-cream/15" />
          </div>
        </div>
      </section>

      {/* why cards reuse */}
      <section className="bg-cream py-12 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="reveal font-display text-2xl uppercase leading-[1.05] text-charcoal md:text-5xl">
            Why neighbors pick us.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
            {GLASS_CARDS.map((c, i) => (
              <div
                key={c.title}
                className="reveal rounded-3xl bg-ink p-6 md:p-7"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <h3 className="font-display text-lg uppercase text-cream">{c.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/70">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2">
            {REVIEWS.slice(0, 2).map((r) => (
              <figure key={r.name} className="rounded-3xl border border-charcoal/10 bg-white p-7">
                <div className="text-amber-400">★★★★★</div>
                <blockquote className="mt-3 text-base leading-relaxed text-charcoal/80">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold text-charcoal">
                  {r.name} <span className="font-normal text-charcoal/55">— {r.town}, OH</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="reveal mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-forest px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-forest-deep"
            >
              See what we do
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Meet us at your roofline."
        sub="Free on-site estimates across Columbus. We'll walk the property with you and give you a straight answer."
      />

      {/* FAQ */}
      <section className="bg-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <h2 className="reveal font-display text-2xl uppercase text-charcoal md:text-4xl">
            Quick answers.
          </h2>
          <div className="mt-6">
            <Faq
              items={[
                {
                  q: "Are you licensed and insured?",
                  a: "Yes. Fully licensed and insured on every job, and we'll show you the certificates before we start.",
                },
                {
                  q: "Do you give free estimates?",
                  a: "Always. We come out, look at the work, and give you a firm written price. No fee, no pressure.",
                },
                {
                  q: "Will you clean up?",
                  a: "Completely. Debris hauled, site swept, gutters left flowing. It's part of every quote, not an add-on.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
