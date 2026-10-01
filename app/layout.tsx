import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin | Cyber Security & AI Developer",
    template: "%s | SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin | Cyber Security & AI",
  },
  description: "SHAYAN.DEVSEC — the official portfolio of Syed Muhammad Shayan Uddin, AI Developer, Full-Stack Developer, Cyber Security Analyst, and Penetration Tester (CEH certified). Featuring advanced cybersecurity projects, penetration testing methodologies, AI-driven security solutions, and DevSecOps automation workflows. Based in Karachi, Pakistan.",
  keywords: [
    "Syed Muhammad Shayan Uddin",
    "SHAYAN.DEVSEC",
    "AI Developer",
    "Full-Stack Developer",
    "Cyber Security Analyst",
    "Penetration Tester",
    "Certified Ethical Hacker",
    "CEH",
    "DevSecOps Expert",
    "Web Developer Karachi",
    "Penetration Tester Portfolio",
    "Cybersecurity Analyst",
    "Penetration Testing",
    "Network Security",
    "Ethical Hacker",
    "Malware Removal",
    "Security Audit",
    "Information Security",
    "Cyber Defense",
    "Security Analyst",
    "Vulnerability Assessment",
    "AI Cybersecurity",
    "AI Phishing Detection",
    "n8n automation specialist",
    "malware cleanup services",
    "WhatsApp bot developer",
  ],
  authors: [
    { name: "Syed Muhammad Shayan Uddin", url: "https://smsu-portfolio.vercel.app/" }
  ],
  creator: "SHAYAN.DEVSEC",
  publisher: "SHAYAN.DEVSEC",
  applicationName: "SHAYAN.DEVSEC Portfolio",
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://smsu-portfolio.vercel.app"),
  alternates: {
    canonical: "https://smsu-portfolio.vercel.app/",
    languages: {
      en: "https://smsu-portfolio.vercel.app/",
    },
  },
  icons: {
    icon: [
      { url: '/Cyber-Sheild-cyan-purple.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: {
      url: '/Cyber-Sheild-cyan-purple.png',
      sizes: '180x180',
      type: 'image/png'
    },
    shortcut: '/Cyber-Sheild-cyan-purple.png',
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://smsu-portfolio.vercel.app/",
    title: "SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin | Cyber Security & AI Developer",
    description: "Official portfolio of Syed Muhammad Shayan Uddin (SHAYAN.DEVSEC) — AI Developer, Full-Stack Developer, Cyber Security Analyst, and Penetration Tester (CEH). Explore advanced penetration testing, AI-driven security tools, DevSecOps automation, and zero-trust architecture projects.",
    siteName: "SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin",
    firstName: "Syed Muhammad Shayan",
    lastName: "Uddin",
    username: "smsu_cyber",
    gender: "male",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHAYAN.DEVSEC - AI Developer & Cyber Security Analyst Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin | Cyber Security & AI Developer",
    description: "AI Developer, Full-Stack Developer, Cyber Security Analyst & Penetration Tester (CEH). Explore cybersecurity projects, DevSecOps workflows, and AI-driven threat detection by SHAYAN.DEVSEC.",
    images: ["/og-image.png"],
    creator: "@shayandev",
    site: "@shayandev",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: "SHAYAN.DEVSEC | Cyber Security & AI Developer",
    statusBarStyle: "black-translucent",
  },
  // Verification tokens are wired from environment variables so dummy
  // placeholder strings never reach search crawlers. Google is the only
  // configured provider; yandex/yandex/yahoo are omitted when unconfigured
  // (undefined keys are stripped by Next.js metadata serialization).
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
  classification: "Cybersecurity, AI Development, Full-Stack Development, Penetration Testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Cyber-Sheild-cyan-purple.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/Cyber-Sheild-cyan-purple.png" />
        <link rel="apple-touch-icon" href="/Cyber-Sheild-cyan-purple.png" />
        <link rel="canonical" href="https://smsu-portfolio.vercel.app/" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta
          name="permissions-policy"
          content="camera=(), microphone=(), geolocation=(), payment=()"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://smsu-portfolio.vercel.app/#person",
                  "name": "Syed Muhammad Shayan Uddin",
                  "givenName": "Syed Muhammad Shayan",
                  "familyName": "Uddin",
                  "alternateName": ["SHAYAN.DEVSEC", "smsu_cyber"],
                  "url": "https://smsu-portfolio.vercel.app/",
                  "image": [
                    "https://smsu-portfolio.vercel.app/og-image.png",
                    "https://smsu-portfolio.vercel.app/Cyber-Sheild-cyan-purple.png"
                  ],
                  "jobTitle": [
                    "AI Developer",
                    "Full-Stack Developer",
                    "Cyber Security Analyst",
                    "Penetration Tester"
                  ],
                  "description": "Syed Muhammad Shayan Uddin (SHAYAN.DEVSEC) is a Certified Ethical Hacker (CEH), AI Developer, Full-Stack Developer, Cyber Security Analyst, and Penetration Tester specializing in offensive and defensive security, AI-driven threat detection, DevSecOps automation, and zero-trust architecture. Based in Karachi, Pakistan.",
                  "knowsAbout": [
                    "AI Development",
                    "Full-Stack Web Development",
                    "n8n Automation"
                  ],
                  "availableLanguage": ["en", "ur"],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Cybersecurity & Development Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Penetration Testing Services" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vulnerability Assessment" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security Auditing" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Malware Removal & Cleanup" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Cybersecurity Solutions" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full-Stack Web Development" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevSecOps Automation" } }
                    ]
                  }
                },
                {
                  "@type": "SoftwareSourceCode",
                  "@id": "https://smsu-portfolio.vercel.app/#network-vulnerability-scanner",
                  "name": "Network Vulnerability Scanner",
                  "description": "Python-based automated network vulnerability scanner using Nmap to identify open ports, running service versions, and potential CVEs in local and enterprise networks.",
                  "url": "https://github.com/HACKERxSHAYAN/Network-vulnerability-scanner-PoC.git",
                  "version": "1.0.0",
                  "programmingLanguage": ["Python", "Nmap"],
                  "creator": { "@id": "https://smsu-portfolio.vercel.app/#person" },
                  "keywords": ["Python", "Nmap", "Automation", "Security", "Vulnerability Scanner", "Penetration Testing"]
                },
                {
                  "@type": "SoftwareSourceCode",
                  "@id": "https://smsu-portfolio.vercel.app/#ai-phishing-detector",
                  "name": "AI Phishing Detector",
                  "description": "Machine learning phishing URL and malicious email header detector with 94% accuracy. Built by AI Developer Syed Muhammad Shayan Uddin using Python, Scikit-Learn, and NLP.",
                  "url": "https://github.com/HACKERxSHAYAN/AI-Phishing-Detector-PoC.git",
                  "version": "1.0.0",
                  "programmingLanguage": ["Python"],
                  "creator": { "@id": "https://smsu-portfolio.vercel.app/#person" },
                  "keywords": ["Python", "Scikit-Learn", "AI/ML", "Cyber Defense", "Phishing Detection", "NLP"]
                },
                {
                  "@type": "SoftwareSourceCode",
                  "@id": "https://smsu-portfolio.vercel.app/#secure-chat-application",
                  "name": "Secure Chat Application — E2EE",
                  "description": "End-to-end encrypted zero-knowledge messaging application built in C++ with military-grade encryption protocols by Full-Stack Developer SHAYAN.DEVSEC.",
                  "url": "https://github.com/HACKERxSHAYAN/Secure-Vault-Chat-E2EE.git",
                  "version": "1.0.0",
                  "programmingLanguage": ["C++"],
                  "creator": { "@id": "https://smsu-portfolio.vercel.app/#person" },
                  "keywords": ["C++", "Cryptography", "Socket Programming", "Security", "E2EE", "Zero Trust"]
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://smsu-portfolio.vercel.app/#faqpage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Who is SHAYAN.DEVSEC?",
                      "acceptedAnswer": { "@type": "Answer", "text": "SHAYAN.DEVSEC is the GitHub identity of Syed Muhammad Shayan Uddin — a AI Developer, Full-Stack Developer, Cyber Security Analyst, and CEH-certified Penetration Tester based in Karachi, Pakistan." }
                    },
                    {
                      "@type": "Question",
                      "name": "What cybersecurity services does SHAYAN.DEVSEC offer?",
                      "acceptedAnswer": { "@type": "Answer", "text": "SHAYAN.DEVSEC offers penetration testing, vulnerability assessment, security auditing, malware removal, network security, DevSecOps consulting, and AI-driven cybersecurity solutions." }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-[#050505] text-white antialiased font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
