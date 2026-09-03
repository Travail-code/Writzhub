import { useState } from "react";
import { ArrowDownRight, Check, Copy } from "lucide-react";
import { GlowButton } from "./glow-button";
import { useMounted } from "./hooks";
import { LOADSTRING } from "./download";

const TITLE = "Writz Hub";

export function Hero() {
  const mounted = useMounted();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(LOADSTRING);
      } else {
        throw new Error("clipboard unavailable");
      }
    } catch {
      const ta = document.createElement("textarea");
      ta.value = LOADSTRING;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

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
        className={cnReady(
          mounted,
          "font-display mt-8 text-[clamp(3.2rem,12vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-fg",
        )}
        style={{ transitionDelay: "120ms" }}
      >
        {TITLE}
      </h1>

      <div
        id="download"
        className={cnReady(mounted, "mx-auto mt-8 w-full max-w-xl")}
        style={{ transitionDelay: "280ms" }}
      >
        <div className="overflow-hidden rounded-md bg-bg/70 text-left shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]">
          <div className="flex items-center justify-between border-b border-line px-4 py-2">
            <span className="font-mono text-[11px] text-faint">loader.lua</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-faint">Luau</span>
          </div>
          <pre className="overflow-x-auto px-4 py-3 font-mono text-[12px] leading-relaxed text-fg md:text-[13px]">
            {LOADSTRING}
          </pre>
        </div>
        <div className="mt-3 flex justify-center">
          <GlowButton onClick={copy} icon={copied ? <Check className="size-4" /> : <Copy className="size-4" />}>
            {copied ? "Copied" : "Copy loadstring"}
          </GlowButton>
        </div>
      </div>

      <p
        className={cnReady(mounted, "mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg")}
        style={{ transitionDelay: "380ms" }}
      >
        Run your scripts with surgical precision. Premium interface,
        instant load, compatible with every executor.
      </p>

      <div
        className={cnReady(mounted, "mt-8 flex flex-wrap items-center justify-center gap-3")}
        style={{ transitionDelay: "480ms" }}
      >
        <GlowButton variant="glow" href="#showcase" icon={<ArrowDownRight className="size-4" />}>
          View preview
        </GlowButton>
      </div>

      <p
        className={cnReady(mounted, "mt-8 font-mono text-[11px] tracking-wide text-faint")}
        style={{ transitionDelay: "560ms" }}
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
