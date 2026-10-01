"use client";

import React, { useState } from "react";
import { unzipSync } from "fflate";
import { UploadCloud, CheckCircle2, AlertCircle, FileCode, Layers, Cpu, Globe, Image as ImageIcon, Download, ArrowRight } from "lucide-react";

interface SplitFileItem {
  name: string;
  size: number;
  type: "base" | "abi" | "locale" | "density" | "obb" | "other";
}

export default function SplitInspector() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<number | null>(null);
  const [splits, setSplits] = useState<SplitFileItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setIsProcessing(true);
    setError(null);
    setFileName(file.name);
    setFileSize(file.size);

    try {
      const buffer = new Uint8Array(await file.arrayBuffer());
      const unzipped = unzipSync(buffer);

      const items: SplitFileItem[] = [];

      for (const [relativePath, data] of Object.entries(unzipped)) {
        if (data.length === 0 && relativePath.endsWith("/")) continue;

        let type: SplitFileItem["type"] = "other";
        const lower = relativePath.toLowerCase();

        if (lower.includes("base.apk") || lower.endsWith(".apk") && !lower.includes("config.")) {
          type = "base";
        } else if (lower.includes("arm64") || lower.includes("armeabi") || lower.includes("x86") || lower.includes(".abi.")) {
          type = "abi";
        } else if (lower.includes(".density.") || lower.includes("hdpi") || lower.includes("mdpi") || lower.includes("ldpi")) {
          type = "density";
        } else if (lower.includes(".lang.") || lower.includes(".locale.") || lower.includes("config.en") || lower.includes("config.vi") || lower.includes("config.es")) {
          type = "locale";
        } else if (lower.endsWith(".obb")) {
          type = "obb";
        }

        items.push({
          name: relativePath,
          size: data.length,
          type,
        });
      }

      setSplits(items);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to parse package archive.";
      setError(`Archive parsing error: ${message}. Make sure this is a valid XAPK, APKM, APKS, or ZIP package.`);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const getBadgeColor = (type: SplitFileItem["type"]) => {
    switch (type) {
      case "base":
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case "abi":
        return "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20";
      case "locale":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
      case "density":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      case "obb":
        return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
      default:
        return "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20";
    }
  };

  const getTypeIcon = (type: SplitFileItem["type"]) => {
    switch (type) {
      case "base": return <FileCode className="w-4 h-4 text-emerald-500" />;
      case "abi": return <Cpu className="w-4 h-4 text-sky-500" />;
      case "locale": return <Globe className="w-4 h-4 text-purple-500" />;
      case "density": return <ImageIcon className="w-4 h-4 text-amber-500" />;
      default: return <Layers className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xl">
      {/* Upload Zone */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
        }}
        className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 hover:border-orange-500 dark:hover:border-orange-500 rounded-2xl p-8 text-center transition-colors cursor-pointer bg-zinc-50/50 dark:bg-zinc-950/40"
        onClick={() => document.getElementById("bundle-file-input")?.click()}
      >
        <input
          id="bundle-file-input"
          type="file"
          accept=".xapk,.apkm,.apks,.zip,.apk"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) handleFile(e.target.files[0]);
          }}
        />

        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center shadow-inner">
            <UploadCloud className="w-7 h-7" />
          </div>
          <div>
            <p className="text-base font-semibold text-zinc-800 dark:text-zinc-200">
              Drag & Drop your <span className="text-orange-600 dark:text-orange-400">XAPK, APKM, APKS</span> here
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Parsed 100% locally in your browser. No files are ever uploaded to any server.
            </p>
          </div>
        </div>
      </div>

      {isProcessing && (
        <div className="mt-6 text-center text-sm font-medium text-orange-600 animate-pulse">
          Analyzing archive contents client-side...
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Results */}
      {splits.length > 0 && (
        <div className="mt-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-200 dark:border-zinc-800 gap-2">
            <div>
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                {fileName}
              </h3>
              <p className="text-xs text-zinc-500">
                Total size: {fileSize ? formatBytes(fileSize) : "N/A"} • Detected {splits.length} components
              </p>
            </div>
            <a
              href="https://github.com/pass-with-high-score/universal-antisplit/releases/latest"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-sm"
            >
              Merge in Android App <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
            {splits.map((s, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/70 dark:border-zinc-800 text-xs"
              >
                <div className="flex items-center gap-3 overflow-hidden pr-2">
                  {getTypeIcon(s.type)}
                  <span className="font-mono text-zinc-800 dark:text-zinc-200 truncate">
                    {s.name}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`px-2 py-0.5 rounded-full border text-[10px] font-semibold uppercase ${getBadgeColor(s.type)}`}>
                    {s.type}
                  </span>
                  <span className="text-zinc-500 font-mono">
                    {formatBytes(s.size)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
