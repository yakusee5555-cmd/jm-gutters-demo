import { useEffect, useRef } from "react";

/* ---------- Shared: gutter scoop tool (hand-drawn SVG, no photo assets) ---------- */
export function GutterScoop() {
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-lg" aria-hidden="true">
      {/* shaft */}
      <rect x="62" y="18" width="14" height="58" rx="7" transform="rotate(28 69 47)" fill="#2E4257" />
      {/* scoop cup */}
      <path
        d="M14 74 C14 98 32 112 56 112 C78 112 94 100 96 84 L84 76 C76 88 64 94 50 92 C36 90 24 86 14 74 Z"
        fill="#8FA9C4"
      />
      <path
        d="M14 74 C14 98 32 112 56 112 C78 112 94 100 96 84"
        fill="none"
        stroke="#2E4257"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M24 82 C32 92 44 97 56 95" fill="none" stroke="#5B7A99" strokeWidth="2" opacity="0.7" />
      {/* leaves caught in the scoop */}
      <ellipse cx="48" cy="90" rx="11" ry="6" fill="#C98A2B" transform="rotate(-16 48 90)" />
      <ellipse cx="65" cy="94" rx="9" ry="5" fill="#A65A1E" transform="rotate(12 65 94)" />
      <path d="M40 88 L56 92" stroke="#5e3d12" strokeWidth="1.2" strokeLinecap="round" />
      {/* grip */}
      <rect x="78" y="4" width="22" height="26" rx="10" transform="rotate(28 89 17)" fill="#5B7A99" />
      <rect
        x="78"
        y="4"
        width="22"
        height="26"
        rx="10"
        transform="rotate(28 89 17)"
        fill="none"
        stroke="#22303f"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ---------- 1. Sticky corner tool: fixed, bobbing, never clickable ---------- */
export function StickyTool() {
  return (
    <div
      className="pointer-events-none fixed bottom-24 left-4 z-50 md:bottom-8 md:left-8"
      aria-hidden="true"
    >
      <div className="leaf-bob h-14 w-14 md:h-16 md:w-16">
        <GutterScoop />
      </div>
    </div>
  );
}

/* ---------- 2. Growing treeline divider: hill wave + pines that pop up on scroll ---------- */
function Pine({ x, y, s = 1, delay = "0s" }: { x: number; y: number; s?: number; delay?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <g className="tree" style={{ transitionDelay: delay }}>
        <rect x="-4" y="-14" width="8" height="14" fill="#4a2f1c" />
        <path d="M0 -64 L21 -28 L-21 -28 Z" fill="#2E4257" />
        <path d="M0 -52 L27 -12 L-27 -12 Z" fill="#2f7a44" />
        <path d="M0 -40 L16 -12 L-16 -12 Z" fill="#8FA9C4" opacity="0.55" />
      </g>
    </g>
  );
}

export function TreelineDivider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("grown");
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="treeline bg-ink" aria-hidden="true">
      <svg viewBox="0 0 1200 170" className="block h-32 w-full md:h-44" preserveAspectRatio="xMidYMax slice">
        {/* back hill */}
        <path
          d="M0 118 C 180 68, 340 138, 520 102 S 860 62, 1040 96 S 1140 118, 1200 108 L1200 170 L0 170 Z"
          fill="#14331f"
        />
        {/* front grassy hill */}
        <path
          d="M0 138 C 220 104, 420 154, 640 126 S 960 100, 1200 128 L1200 170 L0 170 Z"
          fill="#2E4257"
        />
        {/* grass tufts */}
        <path d="M120 132 l6 -14 l6 14" stroke="#8FA9C4" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M700 122 l6 -14 l6 14" stroke="#8FA9C4" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M1050 124 l6 -14 l6 14" stroke="#8FA9C4" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* pines grow sequentially from their bases */}
        <Pine x={300} y={128} s={1.15} delay="0.1s" />
        <Pine x={600} y={118} s={1.45} delay="0.35s" />
        <Pine x={890} y={126} s={0.95} delay="0.6s" />
      </svg>
    </div>
  );
}

/* ---------- 3. Edge parallax foliage: slow-drifting depth layer ---------- */
export function EdgeFoliage() {
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (rightRef.current) rightRef.current.style.transform = `translateY(${y * 0.22}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* right: wood-grain rings, peeking in from the edge */}
      <div
        ref={rightRef}
        className="pointer-events-none fixed -right-28 top-1/3 z-[60] hidden opacity-10 lg:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 200 200" className="h-[220px] w-auto">
          <g fill="none" stroke="#c8a06a" strokeWidth="4">
            <circle cx="100" cy="100" r="92" />
            <circle cx="100" cy="100" r="74" />
            <circle cx="100" cy="100" r="56" />
            <circle cx="100" cy="100" r="38" />
            <circle cx="100" cy="100" r="20" />
          </g>
          <circle cx="100" cy="100" r="6" fill="#c8a06a" />
        </svg>
      </div>
    </>
  );
}

/* ---------- 4. Isometric wood slab: tilts toward the cursor ---------- */
export function WoodSlab() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${(px * 16).toFixed(2)}deg) rotateX(${(-py * 16).toFixed(2)}deg)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div className="bg-ink py-8 md:py-14" aria-hidden="true">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="mx-auto w-fit transition-transform duration-200 ease-out will-change-transform"
        style={{ transform: "perspective(900px)" }}
      >
        <svg viewBox="0 0 320 235" className="h-48 w-auto md:h-60">
          {/* slab side wall */}
          <path d="M40 108 L40 138 C40 168 95 192 160 192 C225 192 280 168 280 138 L280 108 Z" fill="#7a4e28" />
          <path d="M40 108 L40 138 C40 168 95 192 160 192 C225 192 280 168 280 138 L280 108 Z" fill="none" stroke="#4e2f14" strokeWidth="3" />
          {/* bark rim */}
          <ellipse cx="160" cy="106" rx="120" ry="52" fill="#5d3a1e" />
          {/* cut face */}
          <ellipse cx="160" cy="100" rx="112" ry="47" fill="#d9b380" />
          {/* tree rings */}
          <g fill="none" stroke="#b0824f">
            <ellipse cx="160" cy="100" rx="90" ry="37" strokeWidth="3" />
            <ellipse cx="160" cy="100" rx="66" ry="27" strokeWidth="2.5" />
            <ellipse cx="160" cy="100" rx="42" ry="17" strokeWidth="2.5" />
            <ellipse cx="160" cy="100" rx="20" ry="8" strokeWidth="2" />
          </g>
          <circle cx="160" cy="100" r="4" fill="#8a5a30" />
          {/* trowel resting across the slab */}
          <g transform="rotate(-16 160 100)">
            <rect x="150" y="26" width="20" height="58" rx="10" fill="#5B7A99" />
            <rect x="150" y="26" width="20" height="58" rx="10" fill="none" stroke="#2E4257" strokeWidth="2" />
            <path d="M148 84 L172 84 L184 138 L136 138 Z" fill="#aab3b8" />
            <path d="M148 84 L172 84 L178 104 L142 104 Z" fill="#7c858b" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ---------- 5. Corner branch: pinned top-right, swings on hover ---------- */
export function CornerBranch() {
  return (
    <div className="pointer-events-none absolute right-0 top-0 z-10 hidden md:block" aria-hidden="true">
      <svg viewBox="0 0 200 160" className="branch-swing pointer-events-auto h-36 w-44 cursor-pointer">
        <path
          d="M196 4 C 152 28, 112 68, 72 122"
          stroke="#5B7A99"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx="158" cy="42" rx="27" ry="13" fill="#5B7A99" transform="rotate(-24 158 42)" />
        <ellipse cx="118" cy="76" rx="24" ry="12" fill="#8FA9C4" transform="rotate(-34 118 76)" />
        <ellipse cx="86" cy="108" rx="20" ry="10" fill="#5B7A99" transform="rotate(-44 86 108)" />
        <ellipse cx="176" cy="22" rx="20" ry="10" fill="#8FA9C4" transform="rotate(-14 176 22)" />
        <ellipse cx="138" cy="60" rx="16" ry="8" fill="#5B7A99" transform="rotate(-30 138 60)" />
      </svg>
    </div>
  );
}
