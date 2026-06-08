import type { Metadata } from "next";
import type { ReactNode } from "react";
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
  title: "Sanjida Parven Alfe | MERN Stack Developer",
  description:
    "Sanjida Parven Alfe is a MERN Stack developer building fast, accessible, and modern web applications with Next.js and Tailwind CSS.",
  metadataBase: new URL("https://your-portfolio-domain.com"),
  openGraph: {
    title: "Sanjida Parven Alfe | MERN Stack Developer",
    description:
      "Explore the portfolio of Sanjida Parven Alfe, showcasing MERN stack projects, modern UI, and performance-focused development.",
    type: "website",
    url: "https://your-portfolio-domain.com",
    images: [{ url: "/profile.png", width: 1200, height: 630, alt: "Sanjida Parven Alfe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjida Parven Alfe | MERN Stack Developer",
    description:
      "Modern portfolio for a MERN Stack developer with projects, skills, and contact details.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: ["MERN", "Next.js", "React", "TypeScript", "Bangladesh developer", "portfolio"],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#050814] text-slate-200 antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
