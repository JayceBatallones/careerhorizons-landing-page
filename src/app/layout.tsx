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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://careerhorizons.com'),
  title: {
    default: "Career Horizons | Your Copilot for Early Career Success",
    template: "%s | Career Horizons"
  },
  description: "Career Horizons is the ultimate career copilot for university students. Discover internships, graduate programs, events, and tailor your resume to land your dream opportunity.",
  keywords: [
    "career guidance",
    "university students",
    "internships",
    "graduate programs",
    "resume tailoring",
    "career opportunities",
    "job board",
    "student careers",
    "early career",
    "career copilot"
  ],
  authors: [{ name: "Career Horizons" }],
  creator: "Career Horizons",
  publisher: "Career Horizons",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Career Horizons",
    title: "Career Horizons | Your Copilot for Early Career Success",
    description: "Discover internships, graduate programs, and events. Tailor your resume with AI. Join thousands of university students launching their careers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Career Horizons - Your Career Copilot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Horizons | Your Copilot for Early Career Success",
    description: "Discover internships, graduate programs, and events. Tailor your resume with AI. Join thousands of university students launching their careers.",
    images: ["/og-image.png"],
    creator: "@careerhorizons",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Career Horizons",
    description: "The ultimate career copilot for university students",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://careerhorizons.com",
    logo: `${process.env.NEXT_PUBLIC_APP_URL || "https://careerhorizons.com"}/logo.png`,
    sameAs: [
      "https://twitter.com/careerhorizons",
      "https://linkedin.com/company/careerhorizons",
      "https://instagram.com/careerhorizons"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@careerhorizons.com"
    }
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Career Horizons",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Career guidance platform for university students with job board, resume tailoring, and opportunity notifications",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free tier available"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250"
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0c0c0f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
