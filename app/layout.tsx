import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin | Cyber Security & AI",
    template: "%s | SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin | Cyber Security & AI",
  },
  description: "Official portfolio of Syed Muhammad Shayan Uddin (SHAYAN.DEVSEC). Certified Ethical Hacker, AI Developer, and DevSecOps specialist. Explore advanced security projects and technical write-ups.",
  keywords: [
    "Syed Muhammad Shayan Uddin",
    "Certified Ethical Hacker",
    "Cyber Security Analyst",
    "DevSecOps Expert",
    "Web Developer Karachi",
    "Penetration Tester Portfolio",
    "CEH",
    "Cybersecurity Analyst",
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
  creator: "SHAYAN.DEVSEC",
  publisher: "SHAYAN.DEVSEC",
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
    title: "SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin | Cyber Security & AI",
    description: "Official portfolio of Syed Muhammad Shayan Uddin (SHAYAN.DEVSEC). Certified Ethical Hacker, AI Developer, and DevSecOps specialist. Explore advanced security projects and technical write-ups.",
    siteName: "SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin",
    firstName: "Syed Muhammad Shayan",
    lastName: "Uddin",
    username: "smsu_cyber",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SHAYAN.DEVSEC - Elite Cyber Security Analyst & DevSecOps Architect Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin | Cyber Security & AI",
    description: "Official portfolio of Syed Muhammad Shayan Uddin (SHAYAN.DEVSEC). Certified Ethical Hacker, AI Developer, and DevSecOps specialist. Explore advanced security projects and technical write-ups.",
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
                  "alternateName": "SHAYAN.DEVSEC",
                  "url": "https://smsu-portfolio.vercel.app/",
                  "image": "https://smsu-portfolio.vercel.app/og-image.png",
                  "jobTitle": "Cyber Security Analyst & AI Developer",
                  "description": "SHAYAN.DEVSEC: Certified Ethical Hacker (CEH) and DevSecOps Expert specializing in AI-driven cybersecurity, penetration testing, vulnerability assessment, and secure web development. Based in Karachi, Pakistan.",
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
                    "Burp Suite",
                    "DevSecOps",
                    "AI Cybersecurity",
                    "Secure Web Development"
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
                    },
                    {
                      "@type": "EducationalOccupationalCredential",
                      "credentialCategory": "certification",
                      "name": "Cisco Certified Network Associate (CCNA)",
                      "recognizedBy": {
                        "@type": "Organization",
                        "name": "Cisco"
                      }
                    }
                  ],
                  "sameAs": [
                    "https://github.com/HACKERxSHAYAN",
                    "https://linkedin.com/in/syed-muhammad-shayan-uddin",
                    "https://medium.com/@shayandevsec"
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
                  "name": "SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin | Cyber Security & AI Portfolio",
                  "description": "Official portfolio of Syed Muhammad Shayan Uddin (SHAYAN.DEVSEC). Certified Ethical Hacker, AI Developer, and DevSecOps specialist showcasing advanced security projects and technical write-ups.",
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
                  "name": "SHAYAN.DEVSEC | Syed Muhammad Shayan Uddin | Cyber Security & AI",
                  "description": "Official portfolio of Syed Muhammad Shayan Uddin (SHAYAN.DEVSEC). Certified Ethical Hacker, AI Developer, and DevSecOps specialist. Explore advanced security projects and technical write-ups.",
                  "datePublished": "2024-01-01",
                  "dateModified": "2024-04-13T01:08:40+05:00",
                  "author": {
                    "@id": "https://smsu-portfolio.vercel.app/#person"
                  },
                  "publisher": {
                    "@id": "https://smsu-portfolio.vercel.app/#person"
                  },
                   "inLanguage": "en-US"
                 },
                 {
                   "@type": "CreativeWork",
                   "@id": "https://smsu-portfolio.vercel.app/#network-vulnerability-scanner",
                   "name": "Network Vulnerability Scanner",
                   "description": "Python-based automated scanner utilizing Nmap scripts to identify open ports and potential CVEs in local networks. Features real-time vulnerability detection and reporting.",
                   "url": "https://github.com/HACKERxSHAYAN/Network-vulnerability-scanner-PoC.git",
                   "creator": {
                     "@id": "https://smsu-portfolio.vercel.app/#person"
                   },
                   "keywords": ["Python", "Nmap", "Automation", "Security", "Vulnerability Scanner"],
                   "inLanguage": "en-US"
                 },
                 {
                   "@type": "CreativeWork",
                   "@id": "https://smsu-portfolio.vercel.app/#ai-phishing-detector",
                   "name": "AI Phishing Detector",
                   "description": "Machine learning model trained to detect phishing URLs and malicious email headers with 94% accuracy. Uses NLP and pattern recognition techniques.",
                   "url": "https://github.com/HACKERxSHAYAN/AI-Phishing-Detector-PoC.git",
                   "creator": {
                     "@id": "https://smsu-portfolio.vercel.app/#person"
                   },
                   "keywords": ["Python", "Scikit-Learn", "AI/ML", "Cyber Defense", "Phishing Detection"],
                   "inLanguage": "en-US"
                 },
{
                    "@type": "CreativeWork",
                    "@id": "https://smsu-portfolio.vercel.app/#secure-chat-application",
                    "name": "Secure Chat Application",
                    "description": "End-to-end encrypted messaging app built with C++ ensuring zero-knowledge privacy architecture. Features military-grade encryption protocols.",
                    "url": "https://github.com/HACKERxSHAYAN/Secure-Vault-Chat-E2EE.git",
                    "creator": {
                      "@id": "https://smsu-portfolio.vercel.app/#person"
                    },
                  "keywords": ["C++", "Cryptography", "Socket Programming", "Security", "E2EE"],
                  "inLanguage": "en-US"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://smsu-portfolio.vercel.app/#professional-service",
                  "name": "SHAYAN.DEVSEC - Cybersecurity & DevSecOps Services",
                  "description": "Comprehensive cybersecurity services including penetration testing, vulnerability assessment, security auditing, malware removal, network security, and AI-driven security solutions. CEH certified analyst with 3+ years experience.",
                  "url": "https://smsu-portfolio.vercel.app/",
                  "provider": {
                    "@id": "https://smsu-portfolio.vercel.app/#person"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "PK"
                  },
                  "serviceType": [
                    "Penetration Testing",
                    "Vulnerability Assessment",
                    "Security Auditing",
                    "Malware Removal",
                    "Network Security",
                    "DevSecOps Consulting",
                    "AI Cybersecurity"
                  ],
                  "availableLanguage": "en",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Cybersecurity Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Penetration Testing Services"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Vulnerability Assessment"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Security Auditing"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Malware Removal & Cleanup"
                        }
                      }
                    ]
                  }
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
