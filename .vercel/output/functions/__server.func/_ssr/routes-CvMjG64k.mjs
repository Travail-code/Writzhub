import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Shield, c as Play, d as Gauge, f as Download, h as ArrowDownRight, i as Terminal, l as Menu, m as Check, n as X, o as Search, p as Copy, s as RefreshCw, t as Zap, u as Layers } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CvMjG64k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const update = () => setReduced(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);
	return reduced;
}
function useFinePointer() {
	const [fine, setFine] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
		const update = () => setFine(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);
	return fine;
}
function useMounted() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	return mounted;
}
function AmbientBg() {
	const canvasRef = (0, import_react.useRef)(null);
	const glowRef = (0, import_react.useRef)(null);
	const reduced = usePrefersReducedMotion();
	const fine = useFinePointer();
	(0, import_react.useEffect)(() => {
		const glow = glowRef.current;
		if (!glow || !fine) return;
		const onMove = (e) => {
			glow.style.setProperty("--mx", `${e.clientX}px`);
			glow.style.setProperty("--my", `${e.clientY}px`);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, [fine]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas || reduced) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const mouse = {
			x: -9999,
			y: -9999
		};
		let particles = [];
		let raf = 0;
		let running = true;
		const countForWidth = () => {
			if (window.innerWidth < 640) return 28;
			if (window.innerWidth < 1024) return 48;
			return 72;
		};
		const spawn = () => {
			const n = countForWidth();
			particles = Array.from({ length: n }, () => ({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - .5) * .22,
				vy: (Math.random() - .5) * .22,
				r: .6 + Math.random() * 1.4,
				a: .12 + Math.random() * .28
			}));
		};
		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(window.innerWidth * dpr);
			canvas.height = Math.floor(window.innerHeight * dpr);
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			spawn();
		};
		const onMove = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};
		const tick = () => {
			if (!running) return;
			const w = window.innerWidth;
			const h = window.innerHeight;
			ctx.clearRect(0, 0, w, h);
			for (const p of particles) {
				const dx = p.x - mouse.x;
				const dy = p.y - mouse.y;
				const dist = Math.hypot(dx, dy) || 1;
				if (dist < 140) {
					const f = (140 - dist) / 140 * .035;
					p.vx += dx / dist * f;
					p.vy += dy / dist * f;
				}
				p.vx *= .99;
				p.vy *= .99;
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0) p.x = w;
				if (p.x > w) p.x = 0;
				if (p.y < 0) p.y = h;
				if (p.y > h) p.y = 0;
				ctx.beginPath();
				ctx.fillStyle = `rgba(255,255,255,${p.a})`;
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fill();
			}
			raf = requestAnimationFrame(tick);
		};
		const onVisibility = () => {
			running = !document.hidden;
			if (running) raf = requestAnimationFrame(tick);
			else cancelAnimationFrame(raf);
		};
		resize();
		window.addEventListener("resize", resize);
		window.addEventListener("pointermove", onMove, { passive: true });
		document.addEventListener("visibilitychange", onVisibility);
		raf = requestAnimationFrame(tick);
		return () => {
			running = false;
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			window.removeEventListener("pointermove", onMove);
			document.removeEventListener("visibilitychange", onVisibility);
		};
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-[-12%] h-[52vh] w-[78vw] -translate-x-1/2 rounded-full",
				style: { background: "radial-gradient(ellipse at center, rgb(255 255 255 / 0.07), transparent 68%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "perspective-floor absolute inset-x-[-20%] top-[38%] h-[90vh]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: "absolute inset-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: glowRef,
				className: "absolute inset-0",
				style: { background: "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), rgb(255 255 255 / 0.045), transparent 42%)" }
			})
		]
	});
}
function CustomCursor() {
	const fine = useFinePointer();
	const reduced = usePrefersReducedMotion();
	const dotRef = (0, import_react.useRef)(null);
	const ringRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!fine || reduced) {
			document.documentElement.classList.remove("has-custom-cursor");
			return;
		}
		document.documentElement.classList.add("has-custom-cursor");
		const pos = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		};
		const ring = {
			x: pos.x,
			y: pos.y
		};
		let hovering = false;
		let raf = 0;
		const onMove = (e) => {
			pos.x = e.clientX;
			pos.y = e.clientY;
			const target = e.target;
			if (target instanceof Element) hovering = Boolean(target.closest("a, button, [role='button'], input, textarea, .tilt-target"));
		};
		const tick = () => {
			ring.x += (pos.x - ring.x) * .18;
			ring.y += (pos.y - ring.y) * .18;
			if (dotRef.current) dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
			if (ringRef.current) {
				ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
				ringRef.current.classList.toggle("is-hover", hovering);
			}
			raf = requestAnimationFrame(tick);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		raf = requestAnimationFrame(tick);
		return () => {
			window.removeEventListener("pointermove", onMove);
			cancelAnimationFrame(raf);
			document.documentElement.classList.remove("has-custom-cursor");
		};
	}, [fine, reduced]);
	if (!fine || reduced) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ringRef,
		className: "custom-cursor-ring",
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dotRef,
		className: "custom-cursor-dot",
		"aria-hidden": "true"
	})] });
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function spawnRipple(el, clientX, clientY) {
	const rect = el.getBoundingClientRect();
	const ripple = document.createElement("span");
	ripple.className = "ripple";
	ripple.style.left = `${clientX - rect.left}px`;
	ripple.style.top = `${clientY - rect.top}px`;
	el.appendChild(ripple);
	ripple.addEventListener("animationend", () => ripple.remove());
}
var base = "btn-ripple inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium tracking-wide select-none transition-[transform,background-color,color,box-shadow,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96] disabled:pointer-events-none disabled:opacity-50";
var variants = {
	primary: "bg-fg text-accent-fg shadow-[0_0_0_1px_rgb(255_255_255_/_0.08),0_0_32px_rgb(255_255_255_/_0.12)] hover:scale-[1.03] hover:shadow-[0_0_0_1px_rgb(255_255_255_/_0.16),0_0_48px_rgb(255_255_255_/_0.22)]",
	glow: "glow-border text-fg hover:scale-[1.03] hover:text-fg",
	ghost: "bg-transparent text-fg shadow-[0_0_0_1px_rgb(255_255_255_/_0.12)] hover:bg-fg/5 hover:shadow-[0_0_0_1px_rgb(255_255_255_/_0.22)]"
};
function GlowButton({ variant = "primary", href, icon, className, children, onClick, download, ...props }) {
	const handleClick = (e) => {
		spawnRipple(e.currentTarget, e.clientX, e.clientY);
		onClick?.(e);
	};
	const classes = cn(base, variants[variant], className);
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "relative z-10",
		children
	}), icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "relative z-10 -mr-0.5",
		children: icon
	}) : null] });
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: classes,
		onClick: handleClick,
		download,
		children: content
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: classes,
		onClick: handleClick,
		...props,
		children: content
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, {
			threshold: .14,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]", visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-[4px]", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function WordReveal({ text, className, as: Tag = "h2" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, { threshold: .3 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className,
		children: text.split(" ").map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mr-[0.28em] inline-block overflow-hidden align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-block transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
				style: {
					transitionDelay: shown ? `${i * 72}ms` : "0ms",
					opacity: shown ? 1 : 0,
					transform: shown ? "translateY(0)" : "translateY(110%)",
					filter: shown ? "blur(0)" : "blur(6px)"
				},
				children: word
			})
		}, `${word}-${i}`))
	});
}
var LOADSTRING = "loadstring(game:HttpGet(\"https://writzhub.dev/loader.lua\"))()";
var EXECUTORS$1 = [
	"Xeno",
	"Solara",
	"Delta",
	"Wave",
	"Swift",
	"Codex"
];
function DownloadSection() {
	const [copied, setCopied] = (0, import_react.useState)(false);
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "download",
		className: "relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-strong overflow-hidden rounded-xl px-6 py-12 md:px-14 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.22em] text-faint",
					children: "Télécharger"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordReveal, {
					text: "Un loadstring. Tous les executors.",
					className: "font-display mt-4 max-w-xl text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg text-sm leading-relaxed text-muted",
						children: "Copie le loader, colle-le dans ton executor, execute. Writz Hub se met à jour tout seul."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 overflow-hidden rounded-md bg-bg/70 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-line px-4 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-faint",
								children: "loader.lua"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-wider text-faint",
								children: "Luau"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "overflow-x-auto px-4 py-4 font-mono text-[12px] leading-relaxed text-fg md:text-[13px]",
							children: LOADSTRING
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 180,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowButton, {
							onClick: copy,
							icon: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }),
							children: copied ? "Copié" : "Copier le loadstring"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowButton, {
							variant: "glow",
							href: "/loader.lua",
							download: "loader.lua",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }),
							children: "Télécharger .lua"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 220,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-wrap gap-2",
						children: EXECUTORS$1.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full px-3 py-1.5 font-mono text-[11px] text-muted shadow-[0_0_0_1px_rgb(255_255_255_/_0.1)]",
							children: name
						}, name))
					})
				})
			]
		})
	});
}
var EXECUTORS = [
	{
		name: "Xeno",
		mark: "X"
	},
	{
		name: "Solara",
		mark: "S"
	},
	{
		name: "Delta",
		mark: "Δ"
	},
	{
		name: "Wave",
		mark: "W"
	},
	{
		name: "Swift",
		mark: "ƒ"
	},
	{
		name: "Codex",
		mark: "C"
	},
	{
		name: "Hydrogen",
		mark: "H"
	},
	{
		name: "Macsploit",
		mark: "M"
	},
	{
		name: "Arceus",
		mark: "A"
	},
	{
		name: "Fluxus",
		mark: "F"
	}
];
function Mark({ item }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 px-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-9 place-items-center rounded-md bg-fg/10 font-display text-sm font-semibold text-fg shadow-[0_0_0_1px_rgb(255_255_255_/_0.16)]",
			children: item.mark
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-lg font-medium tracking-tight text-fg/80",
			children: item.name
		})]
	});
}
function ExecutorMarquee() {
	const loop = [...EXECUTORS, ...EXECUTORS];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-label": "Executors compatibles",
		className: "relative z-10 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-5 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-faint",
			children: "Executors compatibles"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent md:w-28" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent md:w-28" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "marquee-track",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center",
						children: loop.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { item }, `${item.name}-${i}`))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center",
						"aria-hidden": "true",
						children: loop.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { item }, `dup-${item.name}-${i}`))
					})]
				})
			]
		})]
	});
}
var FEATURES = [
	{
		title: "Sans clé",
		body: "Exécution directe. Pas de key system, pas de pub, pas d’attente. Tu injectes, ça tourne.",
		icon: Shield
	},
	{
		title: "Instantané",
		body: "Loader allégé, runtime compact. Le hub s’ouvre en quelques millisecondes, même sur un executor léger.",
		icon: Zap
	},
	{
		title: "Universel",
		body: "Une seule librairie pour des dizaines de jeux. Farm, ESP, teleport, auto — triés, testés, versionnés.",
		icon: Layers
	},
	{
		title: "Auto-update",
		body: "Le loader tire toujours la dernière build. Plus besoin de redownload à chaque patch.",
		icon: RefreshCw
	},
	{
		title: "UI premium",
		body: "Panneau sombre, lisible, pensé pour le grind. Raccourcis, search, catégories — zéro friction.",
		icon: Terminal
	},
	{
		title: "Multi-executors",
		body: "Xeno, Solara, Delta, Wave, Swift, Codex. Un loadstring, tous les runtimes.",
		icon: Gauge
	}
];
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "features",
		className: "relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.22em] text-faint",
				children: "Fonctionnalités"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordReveal, {
				text: "Tout ce qu’un hub doit être. Rien de plus.",
				className: "font-display mt-4 max-w-2xl text-[clamp(1.8rem,4.4vw,3.1rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-base",
					children: "Writz Hub est taillé pour l’exécution : rapide, stable, et assez discret pour rester élégant."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
				children: FEATURES.map((feature, i) => {
					const Icon = feature.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group glass relative h-full overflow-hidden rounded-xl p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-8 grid size-11 place-items-center rounded-md bg-fg/5 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)] transition-[transform,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.06] group-hover:bg-fg/10 group-hover:shadow-[0_0_0_1px_rgb(255_255_255_/_0.18),0_0_24px_rgb(255_255_255_/_0.08)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-fg transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold tracking-tight",
									children: feature.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: feature.body
								})
							]
						})
					}, feature.title);
				})
			})
		]
	});
}
var LINKS$1 = [
	{
		href: "https://discord.gg/writzhub",
		label: "Discord"
	},
	{
		href: "https://github.com/writzhub",
		label: "GitHub"
	},
	{
		href: "https://youtube.com/@writzhub",
		label: "YouTube"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative z-10 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-md bg-fg text-[11px] font-semibold text-accent-fg",
						children: "W"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-semibold tracking-tight",
						children: "Writz Hub"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] text-faint",
						children: "script hub · premium runtime"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Réseaux",
					className: "flex flex-wrap gap-6",
					children: LINKS$1.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						target: "_blank",
						rel: "noreferrer",
						className: "text-sm text-muted transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-fg",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] text-faint",
					children: "© 2026 Writz Hub"
				})
			]
		})
	});
}
var TITLE = "Writz Hub";
function Hero() {
	const mounted = useMounted();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative z-10 flex min-h-svh flex-col items-center justify-center px-5 pb-20 pt-28 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cnReady(mounted),
				style: { transitionDelay: "40ms" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted shadow-[0_0_0_1px_rgb(255_255_255_/_0.1)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "status-pulse size-1.5 rounded-full bg-fg" }), "Script hub · 2026"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "glitch-title font-display mt-8 text-[clamp(3.2rem,12vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.045em]",
				"data-text": TITLE,
				"aria-label": TITLE,
				children: TITLE.split("").map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "letter-cascade",
					style: {
						animationDelay: mounted ? `${120 + i * 55}ms` : "0ms",
						animationPlayState: mounted ? "running" : "paused"
					},
					children: ch === " " ? "\xA0" : ch
				}, `${ch}-${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cnReady(mounted, "mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"),
				style: { transitionDelay: "620ms" },
				children: "Exécute tes scripts avec une précision chirurgicale. Interface premium, chargement instantané, compatible avec tous les executors."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cnReady(mounted, "mt-10 flex flex-wrap items-center justify-center gap-3"),
				style: { transitionDelay: "780ms" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowButton, {
					href: "#download",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }),
					children: "Télécharger"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowButton, {
					variant: "glow",
					href: "#showcase",
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "size-4" }),
					children: "Voir l’aperçu"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cnReady(mounted, "mt-8 font-mono text-[11px] tracking-wide text-faint"),
				style: { transitionDelay: "920ms" },
				children: "loadstring · keyless · auto-update"
			})
		]
	});
}
function cnReady(mounted, extra = "") {
	return [
		"transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
		mounted ? "translate-y-0 opacity-100 blur-0" : "translate-y-4 opacity-0 blur-[4px]",
		extra
	].filter(Boolean).join(" ");
}
var LINKS = [
	{
		href: "#features",
		label: "Fonctionnalités"
	},
	{
		href: "#stats",
		label: "Chiffres"
	},
	{
		href: "#showcase",
		label: "Aperçu"
	},
	{
		href: "#download",
		label: "Télécharger"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative z-30 mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] md:px-8", scrolled && "glass-strong mx-4 mt-2 rounded-full md:mx-auto"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-8 place-items-center rounded-md bg-fg text-[11px] font-semibold tracking-tight text-accent-fg",
						children: "W"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[15px] font-semibold tracking-tight",
						children: "Writz Hub"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					"aria-label": "Principal",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-[13px] text-muted transition-[color,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-fg",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowButton, {
						href: "#download",
						className: "min-h-10 px-5 py-2 text-[13px]",
						children: "Télécharger"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-11 place-items-center rounded-full text-fg shadow-[0_0_0_1px_rgb(255_255_255_/_0.16)] md:hidden",
					"aria-label": open ? "Fermer le menu" : "Ouvrir le menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("fixed inset-0 z-20 bg-bg/92 backdrop-blur-xl transition-[opacity,visibility] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden", open ? "visible opacity-100" : "invisible opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex h-full flex-col items-center justify-center gap-8",
				"aria-label": "Mobile",
				children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "font-display text-3xl font-semibold tracking-tight",
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlowButton, {
					href: "#download",
					onClick: () => setOpen(false),
					children: "Télécharger"
				})]
			})
		})]
	});
}
var SCRIPTS = [
	{
		name: "Auto Farm",
		tag: "Universal",
		hot: true
	},
	{
		name: "ESP Box",
		tag: "Visual",
		hot: true
	},
	{
		name: "Speed",
		tag: "Player",
		hot: false
	},
	{
		name: "Teleport",
		tag: "Utility",
		hot: false
	},
	{
		name: "Hitbox",
		tag: "Combat",
		hot: true
	},
	{
		name: "Anti AFK",
		tag: "Utility",
		hot: false
	}
];
var NAV = [
	"Home",
	"Universal",
	"Blox Fruits",
	"Pet Sim",
	"Da Hood"
];
function HubMockup() {
	const wrapRef = (0, import_react.useRef)(null);
	const innerRef = (0, import_react.useRef)(null);
	const fine = useFinePointer();
	const reduced = usePrefersReducedMotion();
	const [activeNav, setActiveNav] = (0, import_react.useState)("Universal");
	const [running, setRunning] = (0, import_react.useState)("Auto Farm");
	(0, import_react.useEffect)(() => {
		const wrap = wrapRef.current;
		if (!wrap || reduced) return;
		const onScroll = () => {
			const rect = wrap.getBoundingClientRect();
			const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
			wrap.style.transform = `translate3d(0, ${mid * -.06}px, 0)`;
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [reduced]);
	const onMove = (e) => {
		const inner = innerRef.current;
		if (!inner || !fine || reduced) return;
		const r = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width - .5;
		const y = (e.clientY - r.top) / r.height - .5;
		inner.style.transform = `rotateX(${-y * 7}deg) rotateY(${x * 9}deg)`;
	};
	const onLeave = () => {
		const inner = innerRef.current;
		if (!inner) return;
		inner.style.transform = "rotateX(0deg) rotateY(0deg)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: "tilt-target mx-auto max-w-4xl",
		style: { perspective: "1200px" },
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: innerRef,
			className: "glass-strong hub-scan relative overflow-hidden rounded-xl transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
			style: { transformStyle: "preserve-3d" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-line px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-fg/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-fg/18" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-fg/12" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-3 font-mono text-[11px] text-faint",
						children: "writz-hub · v3.2.1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-blink size-1.5 rounded-full bg-fg" }), "Ready"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "hidden border-r border-line p-3 md:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint",
						children: "Library"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-0.5",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveNav(item),
							className: cn("flex w-full items-center rounded-md px-2.5 py-2 text-left text-[13px] transition-[background-color,color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]", activeNav === item ? "bg-fg/10 text-fg" : "text-muted hover:bg-fg/5 hover:text-fg"),
							children: item
						}) }, item))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 md:col-span-3 md:p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-md bg-bg/60 px-3 py-2 shadow-[0_0_0_1px_rgb(255_255_255_/_0.08)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 text-faint" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-faint",
									children: "search scripts…"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-blink ml-0.5 inline-block h-3 w-px bg-fg/70" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3",
							children: SCRIPTS.map((script) => {
								const on = running === script.name;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setRunning(script.name),
									className: cn("rounded-md p-3 text-left transition-[background-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]", on ? "bg-fg/10 shadow-[0_0_0_1px_rgb(255_255_255_/_0.2)]" : "bg-fg/5 shadow-[0_0_0_1px_rgb(255_255_255_/_0.07)] hover:bg-fg/10"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-sm font-medium tracking-tight",
											children: script.name
										}), script.hot ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-fg/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted",
											children: "hot"
										}) : null]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block font-mono text-[10px] text-faint",
										children: script.tag
									})]
								}, script.name);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-fg px-4 text-sm font-medium text-accent-fg transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_28px_rgb(255_255_255_/_0.18)] active:scale-[0.96]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }),
									"Execute ",
									running
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-1.5 overflow-hidden rounded-full bg-fg/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bar-run h-full rounded-full bg-fg/80" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 font-mono text-[10px] text-faint",
									children: [
										"injecting · ",
										running.toLowerCase().replace(" ", "_"),
										".lua"
									]
								})]
							})]
						})
					]
				})]
			})]
		})
	});
}
function Showcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "showcase",
		className: "relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.22em] text-faint",
					children: "Aperçu"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordReveal, {
					text: "Le hub, en action.",
					className: "font-display mt-4 text-[clamp(1.8rem,4.4vw,3.1rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted md:text-base",
						children: "Panneau unique, search instantanée, exécution en un geste. Survole le mockup pour le tilt 3D."
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HubMockup, {}) })
		})]
	});
}
var STATS = [
	{
		value: 48200,
		suffix: "+",
		label: "Utilisateurs"
	},
	{
		value: 128,
		suffix: "",
		label: "Scripts"
	},
	{
		value: 2.4,
		suffix: "M",
		label: "Téléchargements",
		decimals: 1
	},
	{
		value: 12,
		suffix: "",
		label: "Executors"
	}
];
function formatValue(n, decimals) {
	if (decimals > 0) return n.toFixed(decimals).replace(".", ",");
	return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function Counter({ value, suffix, decimals = 0, active }) {
	const reduced = usePrefersReducedMotion();
	const [shown, setShown] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		if (reduced) {
			setShown(value);
			return;
		}
		let raf = 0;
		const start = performance.now();
		const duration = 1600;
		const tick = (now) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - t, 3);
			setShown(value * eased);
			if (t < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		active,
		reduced,
		value
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "font-display tabular-nums text-[clamp(2.2rem,5vw,3.6rem)] font-semibold tracking-tight",
		children: [formatValue(shown, decimals), suffix]
	});
}
function Stats() {
	const ref = (0, import_react.useRef)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setActive(true);
				io.disconnect();
			}
		}, { threshold: .35 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "stats",
		className: "relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.22em] text-faint",
				children: "En chiffres"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordReveal, {
				text: "Une communauté qui exécute.",
				className: "font-display mt-4 max-w-xl text-[clamp(1.8rem,4.4vw,3rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref,
				className: "mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: STATS.map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-xl px-5 py-7 md:px-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
							value: stat.value,
							suffix: stat.suffix,
							decimals: "decimals" in stat ? stat.decimals : 0,
							active
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: stat.label
						})]
					})
				}, stat.label))
			})
		]
	});
}
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-svh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#features",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-accent-fg",
				children: "Aller au contenu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientBg, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "noise-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExecutorMarquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Showcase, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DownloadSection, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingPage, {});
}
//#endregion
export { Home as component };
