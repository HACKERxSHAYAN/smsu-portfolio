import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SYED MUHAMMAD SHAYAN UDDIN // CYBERSECURITY ANALYST",
    template: "%s | SYED MUHAMMAD SHAYAN UDDIN // CYBERSECURITY ANALYST",
  },
  description:
    "CEH Certified Cybersecurity Analyst | Absolute Security. Specialized in penetration testing, network security, and ethical hacking. Protecting digital assets with industry-leading security practices.",
  keywords: [
    "Cybersecurity Analyst",
    "CEH Certified",
    "Certified Ethical Hacker",
    "Penetration Testing",
    "Network Security",
    "Ethical Hacker",
    "Malware Removal",
    "Security Audit",
    "Information Security",
    "Cyber Defense",
    "Security Analyst",
    "n8n automation specialist",
    "malware cleanup services",
    "WhatsApp bot developer",
  ],
  authors: [{ name: "Syed Muhammad Shayan Uddin" }],
  creator: "Syed Muhammad Shayan Uddin",
  publisher: "Syed Muhammad Shayan Uddin",
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
    title: "SYED MUHAMMAD SHAYAN UDDIN // CYBERSECURITY ANALYST",
    description:
      "CEH Certified Cybersecurity Analyst | Absolute Security. Specialized in penetration testing, network security, and ethical hacking.",
    siteName: "Syed Muhammad Shayan Uddin // Cybersecurity Analyst",
    firstName: "Syed Muhammad Shayan",
    lastName: "Uddin",
    username: "smsu_cyber",
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
    title: "SYED MUHAMMAD SHAYAN UDDIN // CYBERSECURITY ANALYST",
    description:
      "CEH Certified Cybersecurity Analyst | Absolute Security. Specialized in penetration testing and network security.",
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                  "url": "https://smsu-portfolio.vercel.app/",
                  "image": "https://smsu-portfolio.vercel.app/og-image.png",
                  "jobTitle": "Cybersecurity Analyst",
                  "knowsAbout": [
                    {
                      "@type": "Thing",
                      "name": "Computer Security",
                      "url": "https://en.wikipedia.org/wiki/Computer_security"
                    },
                    {
                      "@type": "Thing",
                      "name": "White Hat (Computer Security)",
                      "url": "https://en.wikipedia.org/wiki/White_hat_(computer_security)"
                    },
                    {
                      "@type": "Thing",
                      "name": "Penetration Testing",
                      "url": "https://en.wikipedia.org/wiki/Penetration_test"
                    },
                    "Ethical Hacking",
                    "Network Security",
                    "Penetration Testing",
                    "Vulnerability Assessment",
                    "Python Programming",
                    "Kali Linux",
                    "Metasploit",
                    "Burp Suite"
                  ],
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "certification",
                      "name": "Certified Ethical Hacker (CEH)",
                      "url": "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "EC-Council"
                      }
                    }
                  ],
                  "sameAs": [
                    "https://github.com",
                    "https://linkedin.com"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "shayanuddin4589@gmail.com",
                    "contactType": "professional"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Karachi",
                    "addressCountry": "Pakistan"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://smsu-portfolio.vercel.app/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://smsu-portfolio.vercel.app/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "About",
                      "item": "https://smsu-portfolio.vercel.app/#about"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Skills",
                      "item": "https://smsu-portfolio.vercel.app/#skills"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Projects",
                      "item": "https://smsu-portfolio.vercel.app/#projects"
                    },
                    {
                      "@type": "ListItem",
                      "position": 5,
                      "name": "Contact",
                      "item": "https://smsu-portfolio.vercel.app/#contact"
                    }
                  ]
                },
                {
                  "@type": "SiteNavigationElement",
                  "@id": "https://smsu-portfolio.vercel.app/#navigation",
                  "name": "Main Navigation",
                  "item": [
                    {
                      "@type": "SiteNavigationElement",
                      "name": "About",
                      "url": "https://smsu-portfolio.vercel.app/#about",
                      "description": "Learn about Syed Muhammad Shayan Uddin's background, certifications, and vision in cybersecurity."
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "name": "Skills",
                      "url": "https://smsu-portfolio.vercel.app/#skills",
                      "description": "Technical arsenal including Kali Linux, Metasploit, Burp Suite, Python, and more."
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "name": "Projects",
                      "url": "https://smsu-portfolio.vercel.app/#projects",
                      "description": "Security projects including Network Vulnerability Scanner, AI Phishing Detector, and Secure Chat Application."
                    },
                    {
                      "@type": "SiteNavigationElement",
                      "name": "Contact",
                      "url": "https://smsu-portfolio.vercel.app/#contact",
                      "description": "Contact Syed Muhammad Shayan Uddin for cybersecurity services and consultations."
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://smsu-portfolio.vercel.app/#website",
                  "url": "https://smsu-portfolio.vercel.app/",
                  "name": "Syed Muhammad Shayan Uddin - Cybersecurity Portfolio",
                  "description": "CEH Certified Cybersecurity Analyst portfolio showcasing penetration testing, network security, and ethical hacking services.",
                  "publisher": {
                    "@id": "https://smsu-portfolio.vercel.app/#person"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://smsu-portfolio.vercel.app/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://smsu-portfolio.vercel.app/#webpage",
                  "url": "https://smsu-portfolio.vercel.app/",
                  "name": "Syed Muhammad Shayan Uddin // Cybersecurity Analyst",
                  "description": "CEH Certified Cybersecurity Analyst | Absolute Security. Specialized in penetration testing, network security, and ethical hacking.",
                  "datePublished": "2024-01-01",
                  "dateModified": "2024-04-13T01:08:40+05:00",
                  "author": {
                    "@id": "https://smsu-portfolio.vercel.app/#person"
                  },
                  "publisher": {
                    "@id": "https://smsu-portfolio.vercel.app/#person"
                  },
                  "inLanguage": "en-US"
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
