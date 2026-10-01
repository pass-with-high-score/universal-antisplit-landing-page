import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://antisplit.pwhs.app"),
  title: "Universal Anti-Split | Standalone APK Merger & Anti-Split for Android",
  description: "Merge Split APKs (XAPK, APKM, APKS, AAB) into standalone installable APK files. Fast Rust NDK core, Kill Signature, PairIP bypass & Google apksig signing.",
  keywords: [
    "anti-split",
    "split apk merger",
    "xapk to apk",
    "apkm to apk",
    "apks converter",
    "merge split apk",
    "android apk signer",
    "kill signature",
    "pairip bypass",
    "standalone apk",
    "pass with high score",
    "universal installer"
  ],
  authors: [{ name: "Pass With High Score", url: "https://github.com/pass-with-high-score" }],
  creator: "Pass With High Score",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://antisplit.pwhs.app",
    title: "Universal Anti-Split | Merge Split APKs into Standalone APK",
    description: "Convert XAPK, APKM, APKS, and AAB packages into clean standalone APKs with Rust NDK Core, Kill Signature, and signature scheme signing.",
    siteName: "Universal Anti-Split",
    images: [
      {
        url: "/logo_square.png",
        width: 512,
        height: 512,
        alt: "Universal Anti-Split Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Universal Anti-Split | Split APK Merger",
    description: "Convert Split APKs (XAPK, APKM, APKS) into standalone APKs directly on Android.",
    images: ["/logo_square.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo_squircle.png",
    shortcut: "/logo_squircle.png",
    apple: "/logo_squircle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-orange-500/20 selection:text-orange-500">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
