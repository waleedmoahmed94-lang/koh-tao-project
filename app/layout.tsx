import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tao Dive Board — Koh Tao Dive Directory",
  description:
    "Compare Koh Tao's dive schools, explore every dive site around the island, and see tomorrow's dive plan before you book.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
