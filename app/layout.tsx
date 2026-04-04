import "./globals.css";
import { Metadata } from "next";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: {
    default: "Syed Muhammad Shayan Uddin | Cybersecurity & Automation Expert",
    template: "%s | Syed Muhammad Shayan Uddin - Cybersecurity & Automation Expert",
  },
  description:
    "Certified Ethical Hacker (CEH) offering malware removal, n8n business automation, and technical SEO expert services. Professional cybersecurity analyst and automation specialist.",
  keywords: [
    "Cybersecurity Analyst",
    "n8n automation specialist",
    "malware cleanup services",
    "WhatsApp bot developer",
    "Next.js security audit",
    "CEH professional",
    "Certified Ethical Hacker",
    "Malware Removal",
    "n8n Business Automation",
    "Technical SEO Expert",
    "Penetration Testing",
    "Network Security",
    "AI Security",
    "Ethical Hacker",
    "Security Automation",
  ],
  authors: [{ name: "Syed Muhammad Shayan Uddin" }],
  creator: "Syed Muhammad Shayan Uddin",
  publisher: "Syed Muhammad Shayan Uddin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://shayan.sec"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/Cyber-Sheild-cyan-purple.png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: '/Cyber-Sheild-cyan-purple.png',
    shortcut: '/Cyber-Sheild-cyan-purple.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shayan.dev",
    title: "Syed Muhammad Shayan Uddin | Cybersecurity & Automation Expert",
    description:
      "Certified Ethical Hacker (CEH) offering malware removal, n8n business automation, and technical SEO expert services. Professional cybersecurity analyst and automation specialist.",
    siteName: "Syed Muhammad Shayan Uddin - Cybersecurity & Automation Expert",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Syed Muhammad Shayan Uddin - Cybersecurity & Automation Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Muhammad Shayan Uddin | Cybersecurity & Automation Expert",
    description:
      "Certified Ethical Hacker (CEH) offering malware removal, n8n business automation, and technical SEO expert services.",
    images: ["/og-image.png"],
    creator: "@shayandev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Cybersecurity, Automation, SEO",
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/Cyber-Sheild-cyan-purple.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/Cyber-Sheild-cyan-purple.png" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          name="permissions-policy"
          content="camera=(), microphone=(), geolocation=()"
        />
      </head>
      <body className="bg-cyber-black text-white antialiased font-sans">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
