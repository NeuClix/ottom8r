import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#4CAF50",
};

export const metadata: Metadata = {
  title: "OTTO | Your AI Co-Founder",
  description:
    "I manage the complexity so you can focus on what matters. An AI orchestrator for multi-venture founders.",
  keywords: [
    "AI co-founder",
    "venture orchestration",
    "automation",
    "business systems",
  ],
  openGraph: {
    title: "OTTO | Your AI Co-Founder",
    description: "From chaos to command center.",
    url: "https://ottom8r.com",
    siteName: "Ottom8r",
    type: "website",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
