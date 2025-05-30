import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reflect 2025 - Islamic Community Centre of Ontario (ICCO)",
  description: "Ramadan 1446/2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/images/global/background.png')] bg-repeat text-black no-x-scroll`}
      >
        <NavBar />
        <div className="absolute top-[84px] left-0 z-[-1] overflow-hidden w-auto h-auto">
          <img
            src="/images/global/leftframe.png"
            className="-mb-[50%]"
            alt="Left Frame"
          />
        </div>
        <div className="absolute top-[84px] right-0 z-[-1] overflow-hidden w-auto h-auto">
          <img
            src="/images/global/rightframe.png"
            className="-mb-[50%]"
            alt="Right Frame"
          />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
