import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertTriangle, Layers, Cpu, ShieldAlert, Sparkles, Key } from "lucide-react";

export const metadata = {
  title: "User Guide & Documentation | Universal Anti-Split",
  description: "Step-by-step tutorial on merging Split APKs, configuring Kill Signature, Keystore signing, and batch processing.",
};

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-orange-500 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50">
          Universal Anti-Split Documentation
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base">
          Learn how to turn Split APK packages into clean standalone APKs directly on your Android device.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-10">
        {/* Step 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-sm">
              1
            </span>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Select an App or Split File
            </h2>
          </div>
          <div className="pl-11 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <p>You can import split packages in two ways:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Installed Apps:</strong> Tap <em>&quot;Installed Apps&quot;</em> to browse all apps installed on your device that have split components.
              </li>
              <li>
                <strong>External File:</strong> Tap <em>&quot;Pick External File&quot;</em> to browse for <code>.xapk</code>, <code>.apkm</code>, <code>.apks</code>, or <code>.zip</code> files from your storage.
              </li>
            </ul>
          </div>
        </section>

        {/* Step 2 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-sm">
              2
            </span>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Choose Split Components & Native Architectures
            </h2>
          </div>
          <div className="pl-11 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <p>
              The app automatically detects all split components (Base APK, CPU ABIs like arm64-v8a/armeabi-v7a, Screen Densities, and Languages).
            </p>
            <p>
              By default, Universal Anti-Split auto-selects the components matching your current phone architecture. You can manually check or uncheck components if you plan to share the APK to a different device.
            </p>
          </div>
        </section>

        {/* Step 3 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-sm">
              3
            </span>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Kill Signature & PairIP Bypass
            </h2>
          </div>
          <div className="pl-11 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900 dark:text-amber-300">What is PairIP?</h4>
                  <p className="text-xs text-amber-800 dark:text-amber-400 mt-1">
                    Some applications enforce Google PairIP or custom native signature checks (e.g., <code>libpairipcore.so</code>). When re-signed or merged, the app detects a certificate mismatch and crashes on launch.
                  </p>
                </div>
              </div>
            </div>
            <p>
              When Universal Anti-Split detects signature integrity protection, it highlights the <strong>&quot;Kill Signature&quot;</strong> switch. Enabling it automatically injects a PMS (PackageManagerService) hook into the DEX bytecode to return the expected signature.
            </p>
          </div>
        </section>

        {/* Step 4 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-sm">
              4
            </span>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              Signing & Output
            </h2>
          </div>
          <div className="pl-11 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
            <p>
              Tap <strong>&quot;Merge Split APK&quot;</strong>. The Rust NDK engine combines the resources and classes, and signs the resulting APK with Scheme v1, v2, and v3 standards.
            </p>
            <p>
              Once complete, the output APK is saved to your <code>Downloads/UniversalAntiSplit</code> directory, ready to install or share!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
