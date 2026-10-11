import { useEffect, useMemo, useState } from "react";
import { GutterScoop } from "./DecorBits";

/* ------------------------------------------------------------------ */
/* GutterLoader: intro scene — a gutter trough fills with leaves + water */
/* while the site loads, then a gutter scoop sweeps through and cleans  */
/* it. Respects prefers-reduced-motion (App skips the loader entirely). */
/* ------------------------------------------------------------------ */

const LEAF_COLORS = ["#C98A2B", "#A65A1E", "#8A5A24", "#7A8A3A", "#96522A", "#B7791F"];

type LeafT = { x: number; y: number; r: number; s: number; c: string; d: number };
type AmbientT = { x: number; d: number; dur: number; s: number; r: number; c: string };

function LeafShape({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full drop-shadow-sm" aria-hidden="true">
      <path d="M16 2 C26 10 28 22 16 30 C4 22 6 10 16 2 Z" fill={color} />
      <path d="M16 6 L16 26" stroke="rgba(0,0,0,0.35)" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M16 13 L22 16 M16 18 L10 21"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function GutterLoader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"fill" | "sweep" | "settle" | "out">("fill");

  // leaves resting in the trough (positions in % of the trough)
  const leaves = useMemo<LeafT[]>(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        x: 4 + Math.random() * 90,
        y: 10 + Math.random() * 64,
        r: Math.random() * 360,
        s: 15 + Math.random() * 15,
        c: LEAF_COLORS[i % LEAF_COLORS.length],
        d: Math.random() * 0.9,
      })),
    []
  );

  // ambient leaves drifting down across the whole screen during the fill
  const ambient = useMemo<AmbientT[]>(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        x: Math.random() * 100,
        d: Math.random() * 0.35,
        dur: 0.9 + Math.random() * 0.5,
        s: 12 + Math.random() * 14,
        r: Math.random() * 360,
        c: LEAF_COLORS[(i + 3) % LEAF_COLORS.length],
      })),
    []
  );

  const [swept, setSwept] = useState<boolean[]>(() => leaves.map(() => false));

  // fill -> sweep
  useEffect(() => {
    const t = setTimeout(() => setPhase("sweep"), 1250);
    return () => clearTimeout(t);
  }, []);

  // sweep: the scoop travels 1.7s; each leaf flings as the scoop passes it
  useEffect(() => {
    if (phase !== "sweep") return;
    const SWEEP_MS = 1700;
    const timers = leaves.map((lf, i) =>
      setTimeout(() => {
        setSwept((prev) => {
          const next = prev.slice();
          next[i] = true;
          return next;
        });
      }, 150 + ((lf.x + 18) / 140) * SWEEP_MS)
    );
    const end = setTimeout(() => setPhase("settle"), SWEEP_MS + 500);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(end);
    };
  }, [phase, leaves]);

  // settle: let the real page finish loading (capped), then fade out
  useEffect(() => {
    if (phase !== "settle") return;
    let alive = true;
    let cleanup: (() => void) | undefined;
    if (document.readyState === "complete") {
      const t = setTimeout(() => {
        if (alive) setPhase("out");
      }, 250);
      cleanup = () => clearTimeout(t);
    } else {
      const go = () => {
        if (alive) setPhase("out");
      };
      const cap = setTimeout(go, 1500);
      window.addEventListener("load", go, { once: true });
      cleanup = () => {
        clearTimeout(cap);
        window.removeEventListener("load", go);
      };
    }
    return () => {
      alive = false;
      cleanup?.();
    };
  }, [phase]);

  // out: fade, then unmount
  useEffect(() => {
    if (phase !== "out") return;
    const t = setTimeout(onDone, 700);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 overflow-hidden bg-[#0b100d] px-6 ${
        phase === "out" ? "gloader-out" : ""
      }`}
      aria-hidden="true"
    >
      {/* ambient leaves drifting across the screen while it fills */}
      {phase === "fill" &&
        ambient.map((a, i) => (
          <span
            key={i}
            className="gloader-ambient absolute top-[-40px]"
            style={{
              left: `${a.x}%`,
              width: a.s,
              height: a.s,
              animationDuration: `${a.dur}s`,
              animationDelay: `${a.d}s`,
              ["--arot" as string]: `${a.r}deg`,
            }}
          >
            <LeafShape color={a.c} />
          </span>
        ))}

      <p className="font-display text-2xl font-black tracking-[0.3em] text-[#f4efe4] md:text-3xl">
        J&M
      </p>

      {/* the gutter: trough + water + leaves, and the scoop that cleans it */}
      <div className="relative w-[min(88vw,560px)]">
        <div className="gloader-trough relative h-28 overflow-hidden rounded-full md:h-32">
          <div className="gloader-water absolute inset-[10px] rounded-full" />
          <span className="gloader-ripple" style={{ left: "22%", top: "28%", animationDelay: "0.2s" }} />
          <span className="gloader-ripple" style={{ left: "58%", top: "56%", animationDelay: "1.1s" }} />
          <span className="gloader-ripple" style={{ left: "78%", top: "30%", animationDelay: "0.6s" }} />
          {leaves.map((lf, i) => (
            <span
              key={i}
              className={`absolute ${swept[i] ? "gloader-fling" : "gloader-drop"}`}
              style={{
                left: `${lf.x}%`,
                top: `${lf.y}%`,
                width: lf.s,
                height: lf.s,
                animationDelay: swept[i] ? "0s" : `${lf.d}s`,
                ["--lrot" as string]: `${lf.r}deg`,
              }}
            >
              <LeafShape color={lf.c} />
            </span>
          ))}
        </div>
        {phase !== "fill" && (
          <div className="gloader-scoop absolute -top-8 h-24 w-24 md:h-28 md:w-28">
            <GutterScoop />
          </div>
        )}
      </div>

      <p className="gloader-text text-xs font-bold tracking-[0.4em] text-white/70">
        CLEARING THE GUTTERS
      </p>
    </div>
  );
}
