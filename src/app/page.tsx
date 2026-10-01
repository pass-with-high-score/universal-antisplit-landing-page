import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Download,
  Github,
  CheckCircle2,
  Lock,
  ArrowRight,
  Key,
  FolderSync,
  Heart,
  FileCode,
} from "lucide-react";
import SplitInspector from "@/components/SplitInspector";

const formats = [
  { name: "XAPK", desc: "APKPure bundles" },
  { name: "APKM", desc: "APKMirror splits" },
  { name: "APKS", desc: "Standard split bundles" },
  { name: "AAB", desc: "Android App Bundles" },
  { name: "Installed", desc: "On-device split apps" },
];

const features = [
  {
    icon: <Zap className="w-5 h-5 text-orange-500" />,
    title: "Rust NDK Core",
    desc: "Merges resources.arsc table entries and renumbers DEX classes in seconds with native binary speed.",
  },
  {
    icon: <Lock className="w-5 h-5 text-purple-500" />,
    title: "Kill Signature & PairIP Bypass",
    desc: "Automatically injects PMS hooks into DEX to bypass Google PairIP and signature verification without crashing.",
  },
  {
    icon: <Key className="w-5 h-5 text-amber-500" />,
    title: "Google apksig Engine",
    desc: "Generates RSA 2048-bit Keystore on-device and signs with Scheme v1, v2, v3, and v4 standards.",
  },
  {
    icon: <Layers className="w-5 h-5 text-sky-500" />,
    title: "Batch Queue Merge",
    desc: "Queue multiple apps concurrently with smart background service and live progress notifications.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    title: "Signature Inspector",
    desc: "Inspect SHA-256 certificate fingerprints, subject, issuer, serial, and certificate rotation lineage.",
  },
  {
    icon: <FolderSync className="w-5 h-5 text-rose-500" />,
    title: "Universal Installer Bridge",
    desc: "Acts as a companion plugin for Universal Installer for one-tap seamless split conversions.",
  },
];

const privacyPoints = [
  "No root required — runs on standard Android 7.0 to 15+",
  "100% on-device processing — no files leave your phone",
  "Zero telemetry, zero tracking, and no ads",
  "Works completely offline without internet permission",
  "Fully open source under GNU GPL-3.0 — inspect the code yourself",
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-orange-500/15 via-amber-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* ────────────────── HERO ────────────────── */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* App Icon */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-3xl overflow-hidden shadow-xl shadow-orange-500/15 border border-zinc-200 dark:border-zinc-800">
          <Image
            src="/logo_squircle.png"
            alt="Universal Anti-Split"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Rust NDK Core · Android 7.0+ · 100% On-Device</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 max-w-3xl mx-auto leading-tight">
          Merge Split APKs into standalone APKs.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Convert XAPK, APKM, APKS, and AAB packages into clean, independent APKs that install on any Android device. Fast, offline, and private.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://github.com/pass-with-high-score/universal-antisplit/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-bold text-white bg-zinc-900 hover:bg-black dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 shadow-md active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            Download APK
          </a>

          <a
            href="https://github.com/pass-with-high-score/universal-antisplit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Format Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {formats.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-xs"
            >
              <span className="font-bold text-orange-600 dark:text-orange-400">{f.name}</span>
              <span className="text-zinc-400">·</span>
              <span className="text-zinc-500 dark:text-zinc-400">{f.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── FEATURES ────────────────── */}
      <section id="features" className="py-12 border-t border-zinc-200 dark:border-zinc-800/80 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-orange-500/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-3.5">
                {item.icon}
              </div>
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── PRIVACY & VERIFICATION ────────────────── */}
      <section className="py-12 border-t border-zinc-200 dark:border-zinc-800/80 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Open & Transparent
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1">
              Privacy you can verify
            </h2>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              No accounts, no advertisements, and no tracking. Universal Anti-Split executes all byte manipulation directly on your hardware and does not require an active internet connection.
            </p>
            <div className="mt-5 flex gap-3">
              <Link
                href="/guide"
                className="text-xs font-semibold px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                User Guide
              </Link>
              <Link
                href="/privacy"
                className="text-xs font-semibold px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <ul className="space-y-2.5">
            {privacyPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 text-xs text-zinc-700 dark:text-zinc-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ────────────────── WEB INSPECTOR ────────────────── */}
      <section id="web-inspector" className="py-12 border-t border-zinc-200 dark:border-zinc-800/80 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
            Web Tool
          </span>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">
            Online Split Package Inspector
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            Drop an XAPK, APKM, or APKS to inspect its split components directly in your browser.
          </p>
        </div>

        <SplitInspector />
      </section>

      {/* ────────────────── COMPACT CTA ────────────────── */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-8 text-center space-y-4 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Get Universal Anti-Split
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            Free, open-source Android tool for merging Split APKs.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://github.com/pass-with-high-score/universal-antisplit/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-3 text-sm font-bold text-white hover:bg-black dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all active:scale-95 shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download APK
            </a>
            <a
              href="https://github.com/pass-with-high-score/universal-antisplit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white px-8 py-3 text-sm font-bold text-zinc-900 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 transition-all active:scale-95"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
