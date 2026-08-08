import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayesha Islam | Backend-Focused Full-Stack Developer",
  description:
    "Portfolio of Ayesha Islam, a backend-focused full-stack developer building reliable web applications with TypeScript, Node.js, PostgreSQL, Docker, and Next.js.",
  keywords: [
    "Ayesha Islam",
    "Full-Stack Developer",
    "Backend Developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Next.js",
    "Faisalabad Software Developer",
  ],
  openGraph: {
    title: "Ayesha Islam | Backend-Focused Full-Stack Developer",
    description:
      "I build reliable backend systems that turn fragmented data into useful products.",
    type: "website",
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
        <Navbar />

        <div className="flex-1">
          {children} <Analytics /> <SpeedInsights />
        </div>

        <Footer />
      </body>
    </html>
  );
}
