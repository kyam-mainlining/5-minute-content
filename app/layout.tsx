import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5 Minute Content | Write Better LinkedIn Posts, Faster",
  description:
    "A simple, research-backed system for turning what you already know into high-impact LinkedIn posts in five minutes a day.",
  openGraph: {
    title: "5 Minute Content",
    description: "Write stronger LinkedIn posts in five minutes a day.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Minute Content",
    description: "Write stronger LinkedIn posts in five minutes a day.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
