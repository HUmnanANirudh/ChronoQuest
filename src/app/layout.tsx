import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2p = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChronoQuest | Cyber Relic Hunt at BML Munjal University",
  description:
    "ChronoQuest is BMU’s ultimate cyber relic hunt. A futuristic tech challenge with DSA, HTB, Kaggle, AI, cybersecurity & decentralized warfare at BML Munjal University.",
  keywords: [
    "ChronoQuest", "Cyber Relic Hunt", "BMU", "BML Munjal University",
    "BMU tech fest", "ACM BMU", "Hacked","HackBmu", "Scimat", "67th Milestone",
    "hack BMU", "coding event BMU", "Gurgaon tech event", "university hackathon",
    "futuristic coding challenge", "DSA challenge", "Kaggle competition", "HTB BMU",
    "AI battle", "decentralized tech", "cybersecurity tournament", "tech war BMU",
    "chronoquest", "student tech fest", "college hackathon India",
    "tech showdown BMU","CTF BMU", "AI coding event India", "Hackathons near Gurgaon", 
    "Cybersecurity coding challenge", "ChronoQuest 2025", "Tech events April 2025"
  ],
  metadataBase: new URL("https://www.chronoquest.xyz"),
  authors: [{ name: "ChronoQuest Team" }],
  robots: "index, follow",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ChronoQuest | Cyber Relic Hunt at BMU",
    description:
      "BMU's most electrifying tech battle. Cybersecurity, AI, DSA, HTB, Kaggle — all in one war for the future.",
    url: "https://www.chronoquest.xyz/",
    images: ["https://www.chronoquest.xyz/android-chrome-512x512.png"],
    type: "website",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2p.className} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
