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
  Smartphone,
  Flame,
  ArrowRight,
  Key,
  FolderSync,
  Terminal,
  HelpCircle,
} from "lucide-react";
import SplitInspector from "@/components/SplitInspector";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glow Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-500/15 via-purple-500/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-amber-500/10 blur-3xl -z-10 pointer-events-none" />

      {/* ────────────────── HERO SECTION ────────────────── */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          {/* Tag / Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-semibold">
            <Flame className="w-4 h-4" />
            <span>Rust NDK Core • Android 7.0+ • 100% On-Device</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.1]">
            Turn <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">Split APKs</span> Into Standalone APKs In Seconds
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            Universal Anti-Split seamlessly merges <strong>XAPK, APKM, APKS, and AAB</strong> packages into clean, independent APK files that install on any Android phone. Powered by an ultra-fast Rust binary merger, automated Kill Signature, and signature scheme signing.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="https://github.com/pass-with-high-score/universal-antisplit/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-500/25 active:scale-95 transition-all"
            >
              <Download className="w-5 h-5" />
              Download APK (Free)
            </a>

            <a
              href="#web-inspector"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-base font-semibold border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition-colors shadow-sm"
            >
              <Sparkles className="w-5 h-5 text-orange-500" />
              Try Web Inspector
            </a>
          </div>

          {/* Trust badges */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Root Required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Telemetry / 100% Offline
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> GNU GPL-3.0 Open Source
            </span>
          </div>
        </div>

        {/* ────────────────── VISUAL DIAGRAM ────────────────── */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-zinc-100/90 to-zinc-200/50 dark:from-zinc-900/90 dark:to-zinc-950/50 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left: Input Bundles */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Input Split Components</p>
                <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 shadow-sm flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200">base.apk</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 font-bold">Base Manifest & Code</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 shadow-sm flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200">config.arm64_v8a.apk</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-600 font-bold">Native .so Libs</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 shadow-sm flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200">config.xxhdpi.apk</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-600 font-bold">Drawables & Assets</span>
                </div>
              </div>

              {/* Middle: Engine Process */}
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent border border-orange-500/20 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Cpu className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">Rust NDK Merger Core</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Merge resources.arsc table • Renumber DEX classes • Inject PMS Hook • Sign Scheme v1/v2/v3
                </p>
              </div>

              {/* Right: Output APK */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">Output Standalone</p>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/30 shadow-md space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-100">Merged_Standalone.apk</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">
                    Installs natively on any Android system without needing Split APK Installers or SAI.
                  </p>
                  <div className="pt-1 flex gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                      Signed v1/v2/v3
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-700 dark:text-orange-300">
                      PairIP Bypassed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── SUPPORTED FORMATS ────────────────── */}
      <section id="formats" className="py-16 border-y border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
              Universal Package Support
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Handles all split formats distributed across alternative app stores and Google Play.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: "XAPK", desc: "APKPure bundle format with OBB expansion support", tag: "Split Bundle" },
              { title: "APKM", desc: "APKMirror split architecture container", tag: "Split Bundle" },
              { title: "APKS", desc: "Standard Android split archive bundles", tag: "Split Archive" },
              { title: "AAB", desc: "Android App Bundles source package", tag: "Source Bundle" },
              { title: "Installed Apps", desc: "Extract & merge split apps directly from your phone", tag: "Device Apps" },
            ].map((fmt, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-orange-500/50 transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  {fmt.tag}
                </span>
                <h3 className="font-extrabold text-lg text-zinc-900 dark:text-zinc-100 mt-1">
                  {fmt.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                  {fmt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── CORE FEATURES ────────────────── */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
            Engineered For Pure Performance
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mt-3">
            Every layer from resource table consolidation to DEX bytecode manipulation is built with safety, precision, and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-6 h-6 text-orange-500" />,
              title: "Rust NDK Binary Engine",
              desc: "Native C/Rust binary backend executes string pool table merging and DEX class renumbering in seconds without memory bottleneck.",
            },
            {
              icon: <Lock className="w-6 h-6 text-purple-500" />,
              title: "Kill Signature & PairIP Bypass",
              desc: "Bypasses Google Play Integrity & PairIP (libpairipcore.so) verification by injecting automatic PMS hooks so the standalone APK doesn't crash.",
            },
            {
              icon: <Key className="w-6 h-6 text-amber-500" />,
              title: "Full Android Signing Engine",
              desc: "Generates RSA 2048-bit Keystore locally on device. Supports Google apksig Scheme v1 (JAR), v2, v3, and v4 signing.",
            },
            {
              icon: <Layers className="w-6 h-6 text-sky-500" />,
              title: "Automated Batch Merge",
              desc: "Queue multiple apps from your phone simultaneously. Background foreground service provides live progress notifications and minibar view.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
              title: "APK Signature Inspector",
              desc: "Deep inspection of certificate fingerprint (SHA-256, SHA-1, MD5), issuer, subject, valid dates, key algorithm, and rotation lineage.",
            },
            {
              icon: <FolderSync className="w-6 h-6 text-rose-500" />,
              title: "Universal Installer Bridge",
              desc: "Works as a native companion plugin for Universal Installer via app.pwhs.universalinstaller.action.MERGE_SPLIT protocol.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── WEB INSPECTOR TOOL ────────────────── */}
      <section id="web-inspector" className="py-20 bg-zinc-50/80 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
              Interactive Web Tool
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-1">
              Test Your Split Package Online
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Preview split components (Base, ABI, Language, Screen Density) directly in your browser. 100% client-side privacy.
            </p>
          </div>

          <SplitInspector />
        </div>
      </section>

      {/* ────────────────── FAQ SECTION ────────────────── */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
            Everything you need to know about Split APK merging and Universal Anti-Split.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is a Split APK and why does Android reject installing them directly?",
              a: "Modern Android apps are split into multiple smaller APKs (base.apk, config.arm64_v8a.apk, config.xxhdpi.apk, config.en.apk) to save download bandwidth on Google Play. Standard Android package installers cannot install individual split APKs directly without specialized tools, leading to errors like INSTALL_FAILED_MISSING_SPLIT.",
            },
            {
              q: "How does Universal Anti-Split merge splits without a computer?",
              a: "The app embeds a compiled Rust NDK native binary that runs directly on your Android phone. It extracts all splits, unifies resources.arsc table entries, harmonizes XML manifest definitions, renumbers multi-dex classes sequentially, and signs the final APK using Google's apksig library.",
            },
            {
              q: "What is 'Kill Signature' and PairIP Bypass?",
              a: "When you modify or re-sign a protected APK, apps using Google PairIP or native signature verification detect the change and crash (via SIGSEGV or exit). Universal Anti-Split can inject a PMS (PackageManagerService) hook into the DEX bytecode that spoofs the original signature and allows the standalone APK to run smoothly.",
            },
            {
              q: "Does this tool require root access?",
              a: "No! Universal Anti-Split works 100% on unrooted devices. You only need standard storage access to read split packages and save merged APK files to your Downloads folder.",
            },
            {
              q: "Is it completely free and open-source?",
              a: "Yes, Universal Anti-Split is 100% free, has no ads, collects zero telemetry, and is licensed under the GNU General Public License v3.0 (GPL-3.0).",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
              <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                {faq.q}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────── CALL TO ACTION ────────────────── */}
      <section className="py-20 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />
            <div className="relative space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to merge your first Split APK?
              </h2>
              <p className="text-orange-100 text-base">
                Download Universal Anti-Split for Android today and take complete control over your application packages.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://github.com/pass-with-high-score/universal-antisplit/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-white text-orange-600 hover:bg-orange-50 shadow-lg active:scale-95 transition-all"
                >
                  Download Latest Release
                </a>
                <a
                  href="https://github.com/pass-with-high-score/universal-antisplit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-bold border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" /> Star on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
