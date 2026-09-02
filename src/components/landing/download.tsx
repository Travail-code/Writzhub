import { useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { GlowButton } from "./glow-button";
import { Reveal, WordReveal } from "./reveal";

export const LOADSTRING =
  'loadstring(game:HttpGet("https://writzhub.dev/loader.lua"))()';

const EXECUTORS = ["Xeno", "Solara", "Delta", "Wave", "Swift", "Codex"];

export function DownloadSection() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const write = async () => {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(LOADSTRING);
        return;
      }
      throw new Error("clipboard unavailable");
    };
    try {
      await write();
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
    <section id="download" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <div className="glass-strong overflow-hidden rounded-xl px-6 py-12 md:px-14 md:py-16">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">Download</p>
        </Reveal>
        <WordReveal
          text="One loadstring. Every executor."
          className="font-display mt-4 max-w-xl text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
        />
        <Reveal delay={80}>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
            Copy the loader, paste it into your executor, run. Writz Hub updates itself.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 overflow-hidden rounded-md bg-bg/70 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]">
            <div className="flex items-center justify-between border-b border-line px-4 py-2">
              <span className="font-mono text-[11px] text-faint">loader.lua</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-faint">Luau</span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-[12px] leading-relaxed text-fg md:text-[13px]">
              {LOADSTRING}
            </pre>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <GlowButton onClick={copy} icon={copied ? <Check className="size-4" /> : <Copy className="size-4" />}>
              {copied ? "Copied" : "Copy loadstring"}
            </GlowButton>
            <GlowButton
              variant="glow"
              href="/loader.lua"
              download="loader.lua"
              icon={<Download className="size-4" />}
            >
              Download .lua
            </GlowButton>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <ul className="mt-8 flex flex-wrap gap-2">
            {EXECUTORS.map((name) => (
              <li
                key={name}
                className="rounded-full px-3 py-1.5 font-mono text-[11px] text-muted shadow-[0_0_0_1px_rgb(255_255_255_/_0.1)]"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
