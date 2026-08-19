import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
