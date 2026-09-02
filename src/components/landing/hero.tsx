import { ArrowDownRight, Download } from "lucide-react";
import { GlowButton } from "./glow-button";
import { useMounted } from "./hooks";

const TITLE = "Writz Hub";

export function Hero() {
  const mounted = useMounted();

  return (
    <section
      id="top"
      className="relative z-10 flex min-h-svh flex-col items-center justify-center px-5 pb-20 pt-28 text-center"
    >
      <div
        className={cnReady(mounted)}
        style={{ transitionDelay: "40ms" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted shadow-[0_0_0_1px_rgb(255_255_255_/_0.1)]">
          <span className="status-pulse size-1.5 rounded-full bg-fg" />
          Script hub · 2026
        </span>
      </div>

      <h1
        className="glitch-title font-display mt-8 text-[clamp(3.2rem,12vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-fg"
        data-text={TITLE}
        aria-label={TITLE}
      >
        {TITLE.split("").map((ch, i) => (
          <span
            key={`${ch}-${i}`}
            className={mounted ? "letter-cascade" : "letter-cascade letter-cascade--pending"}
            style={{
              animationDelay: mounted ? `${120 + i * 55}ms` : undefined,
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </h1>

      <p
        className={cnReady(mounted, "mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg")}
        style={{ transitionDelay: "620ms" }}
      >
        Exécute tes scripts avec une précision chirurgicale. Interface premium,
        chargement instantané, compatible avec tous les executors.
      </p>

      <div
        className={cnReady(mounted, "mt-10 flex flex-wrap items-center justify-center gap-3")}
        style={{ transitionDelay: "780ms" }}
      >
        <GlowButton href="#download" icon={<Download className="size-4" />}>
          Télécharger
        </GlowButton>
        <GlowButton variant="glow" href="#showcase" icon={<ArrowDownRight className="size-4" />}>
          Voir l’aperçu
        </GlowButton>
      </div>

      <p
        className={cnReady(mounted, "mt-8 font-mono text-[11px] tracking-wide text-faint")}
        style={{ transitionDelay: "920ms" }}
      >
        loadstring · keyless · auto-update
      </p>
    </section>
  );
}

function cnReady(mounted: boolean, extra = "") {
  return [
    "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
    mounted ? "translate-y-0 opacity-100 blur-0" : "translate-y-4 opacity-0 blur-[4px]",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}
