import type { Metadata } from "next";
import { Inter, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";

import { RecruiterModeProvider } from "@/components/RecruiterModeContext";
import { Background } from "@/components/ui/Background";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/VinayKumarMakvana"),
  title: "Vinay Kumar Makvana | Full Stack Developer with AI & Software Engineer",
  description: "Portfolio of Vinay Kumar Makvana, a Full-Stack Developer specializing in modern, scalable web applications, React, Next.js, and AI integrations.",
  keywords: [
    "Vinay Kumar Makvana", 
    "Full Stack Developer", 
    "Software Engineer", 
    "Web Developer", 
    "React Developer", 
    "Next.js Portfolio", 
    "AI Developer",
    "India"
  ],
  authors: [{ name: "Vinay Kumar Makvana", url: "https://github.com/VinayKumarMakvana" }],
  creator: "Vinay Kumar Makvana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/VinayKumarMakvana",
    title: "Vinay Kumar Makvana | Full Stack Developer with AI & Software Engineer",
    description: "Explore the portfolio of Vinay Kumar Makvana, a Full-Stack Developer building modern, scalable web apps and AI-powered products.",
    siteName: "Vinay Kumar Makvana Portfolio",
    images: [
      {
        url: "/brain.jpg", // Fallback to brain image for now
        width: 1200,
        height: 630,
        alt: "Vinay Kumar Makvana - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Kumar Makvana | Full Stack Developer with AI & Software Engineer",
    description: "Explore the portfolio of Vinay Kumar Makvana, a Full-Stack Developer building modern, scalable web apps and AI-powered products.",
    images: ["/brain.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${dancingScript.variable} min-h-screen antialiased selection:bg-accent-primary/30 overflow-x-hidden`}
      >
          <RecruiterModeProvider>
            <Background />
            <Navbar />
            <main>{children}</main>
          </RecruiterModeProvider>
      </body>
    </html>
  );
}
