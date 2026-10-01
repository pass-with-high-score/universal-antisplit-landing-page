import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Universal Anti-Split",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-6 text-sm text-zinc-600 dark:text-zinc-400">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-orange-500 transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
        Terms of Service
      </h1>
      <p>Last updated: October 2026</p>
      <p>
        By downloading, using Universal Anti-Split, or accessing this website, you agree to these Terms.
      </p>
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 pt-4">1. License</h2>
      <p>
        Universal Anti-Split is distributed under the GNU General Public License v3.0 (GPL-3.0). You are free to inspect, modify, and distribute the software in compliance with the license.
      </p>
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 pt-4">2. Disclaimer of Warranty</h2>
      <p>
        The software is provided &quot;as is&quot;, without warranty of any kind, express or implied. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from the use of the software.
      </p>
    </div>
  );
}
