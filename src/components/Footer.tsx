import Link from "next/link";
import Image from "next/image";
import { Github, Heart, Shield, Terminal, ArrowUpRight } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                <Image
                  src="/logo_squircle.png"
                  alt="Universal Anti-Split Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
                Universal Anti-Split
              </span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Open source Android utility that transforms complex Split APK bundles (APKS, XAPK, APKM, AAB) into standalone, installable APKs powered by high-speed Rust NDK Core.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/pass-with-high-score/universal-antisplit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-orange-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/blockads_android"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-sky-500 transition-colors"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Ecosystem Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
              PWHS Ecosystem
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a
                  href="https://universal-installer.pwhs.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand flex items-center gap-1 group"
                >
                  Universal Installer
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pass-with-high-score/blockads-android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand flex items-center gap-1 group"
                >
                  BlockAds Android
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pass-with-high-score/crystal-scan-android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand flex items-center gap-1 group"
                >
                  Crystal Scan
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
              Resources & Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/guide" className="hover:text-brand transition-colors">
                  Documentation & Guide
                </Link>
              </li>
              <li>
                <Link href="/tools/split-inspector" className="hover:text-brand transition-colors">
                  Web Split Inspector
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Pass With High Score. Licensed under GNU GPL v3.0.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, Tailwind CSS & Rust NDK.
          </p>
        </div>
      </div>
    </footer>
  );
}
