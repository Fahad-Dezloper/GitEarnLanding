import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gitearn.com"),
  title: "GITEARN - Earn Rewards for Solving GitHub Issues",
  description: "Git Earn turns GitHub issues into earning opportunities. Built on Solana, it empowers maintainers to post bounties and contributors to get paid for solving real problems—no proposals, no freelancing, just clean code and fair rewards.",
  keywords: ["GitHub", "Solana", "Bounties", "Open Source", "Developer Platform", "Blockchain", "Web3", "Programming", "Coding", "Developer Rewards"],
  authors: [{ name: "GITEARN" }],
  openGraph: {
    title: "GITEARN - Earn Rewards for Solving GitHub Issues",
    description: "Git Earn turns GitHub issues into earning opportunities. Built on Solana, it empowers maintainers to post bounties and contributors to get paid for solving real problems.",
    url: "https://gitearn.com",
    siteName: "GITEARN",
    images: [
      {
        url: "/GITEARN.svg",
        width: 800,
        height: 600,
        alt: "GITEARN Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GITEARN - Earn Rewards for Solving GitHub Issues",
    description: "Git Earn turns GitHub issues into earning opportunities. Built on Solana, it empowers maintainers to post bounties and contributors to get paid for solving real problems.",
    images: ["/GITEARN.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/favicon_io/site.webmanifest" },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://gitearn.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
