"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Github, Download, Menu, X, Layers, Cpu, Shield, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
              <Image
                src="/logo_squircle.png"
                alt="Universal Anti-Split Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-1.5">
                Universal Anti-Split
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full bg-brand-soft text-brand-dark dark:bg-orange-950/60 dark:text-orange-400 border border-brand/20">
                  Rust Core
                </span>
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 hidden sm:inline">
                Standalone Split APK Merger
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <Link href="#features" className="hover:text-brand transition-colors">
              Features
            </Link>
            <Link href="#architecture" className="hover:text-brand transition-colors">
              Tech Stack
            </Link>
            <Link href="#formats" className="hover:text-brand transition-colors">
              Supported Formats
            </Link>
            <Link href="/guide" className="hover:text-brand transition-colors">
              Guide
            </Link>
            <Link href="/tools/split-inspector" className="hover:text-brand transition-colors flex items-center gap-1 text-orange-600 dark:text-orange-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Web Inspector
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/pass-with-high-score/universal-antisplit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/pass-with-high-score/universal-antisplit/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-md shadow-orange-500/20 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              Download APK
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-3 bg-background border-b border-zinc-200 dark:border-zinc-800 shadow-xl">
          <Link
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Features
          </Link>
          <Link
            href="#architecture"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Tech Stack
          </Link>
          <Link
            href="#formats"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Supported Formats
          </Link>
          <Link
            href="/guide"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            User Guide
          </Link>
          <Link
            href="/tools/split-inspector"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-orange-600 dark:text-orange-400 font-semibold"
          >
            Web Inspector (Browser Tool)
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://github.com/pass-with-high-score/universal-antisplit/releases/latest"
              className="w-full text-center px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 shadow-md"
            >
              Download Latest Release
            </a>
            <a
              href="https://github.com/pass-with-high-score/universal-antisplit"
              className="w-full text-center px-4 py-2.5 rounded-xl font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 flex items-center justify-center gap-2"
            >
              <Github className="w-4 h-4" /> View GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
