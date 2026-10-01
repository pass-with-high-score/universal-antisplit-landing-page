import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Universal Anti-Split",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-6 text-sm text-zinc-600 dark:text-zinc-400">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-orange-500 transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
        Privacy Policy
      </h1>
      <p>Last updated: October 2026</p>
      <p>
        Universal Anti-Split is built by Pass With High Score with a strict <strong>privacy-first, offline-by-default</strong> philosophy.
      </p>
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 pt-4">1. Data Collection</h2>
      <p>
        The Universal Anti-Split application runs 100% locally on your Android device. It does not require internet permission to merge or sign packages, does not track your usage, and does not collect any personally identifiable information (PII).
      </p>
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 pt-4">2. Web Tools</h2>
      <p>
        The online Split Inspector tool processes all packages locally within your web browser using client-side WebAssembly and JavaScript libraries. No archive or file data is ever uploaded to our servers.
      </p>
      <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 pt-4">3. Open Source</h2>
      <p>
        The full source code of both the Android app and this website is public on GitHub under the GNU General Public License v3.0 for public audit.
      </p>
    </div>
  );
}
