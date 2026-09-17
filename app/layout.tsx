import type { Metadata } from "next";
import "./globals.css";
import { themeInitScript } from "./brand-content";

export const metadata: Metadata = {
  title: "Rodrigo Cazuza Brand System",
  description:
    "An audited visual system extracted from Rodrigo Cazuza's published portfolio.",
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#080808" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
