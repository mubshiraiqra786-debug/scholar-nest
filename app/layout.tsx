import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scholar-nest.com"),
  title: {
    default: "Scholar Nest | Academic Consulting Services in the USA",
    template: "%s | Scholar Nest",
  },
  description:
    "Scholar Nest provides ethical dissertation consulting, admissions strategy, and presentation design services for US university students.",
  openGraph: {
    title: "Scholar Nest | Academic Consulting USA",
    description: "Professional academic consulting services for US students.",
    url: "https://scholar-nest.com",
    siteName: "Scholar Nest",
    locale: "en_US",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
