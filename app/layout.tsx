import type { Metadata } from "next";
import "./globals.css";
import { themeInitScript } from "./brand-content";

export const metadata: Metadata = {
  title: "Rodrigo Cazuza Design System",
  description:
    "Rodrigo Cazuza website design system v1.0: tokens, typography, layout, motion, and components measured from rodrigocazuza.com.",
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#e6e7eb" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
