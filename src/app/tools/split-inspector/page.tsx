import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import SplitInspector from "@/components/SplitInspector";

export const metadata = {
  title: "Online Split APK Inspector & Analyzer | Universal Anti-Split",
  description: "Inspect XAPK, APKM, APKS, and ZIP packages directly in your web browser. 100% private, client-side analysis.",
};

export default function SplitInspectorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-orange-500 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5" /> Client-Side Web Tool
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
          Split APK Package Inspector
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-sm sm:text-base">
          Analyze and inspect the internal structure of any Split APK bundle (XAPK, APKM, APKS, ZIP) directly in your browser without uploading files to any server.
        </p>
      </div>

      <SplitInspector />
    </div>
  );
}
