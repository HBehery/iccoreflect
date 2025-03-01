import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/background.png')] bg-repeat text-black`}
      >
        <NavBar />
        <div className="absolute top-[84px] left-0 overflow-hidden w-auto h-auto">
          <img src="/leftframe.png" alt="Left Frame" />
        </div>
        <div className="absolute top-[84px] right-0 overflow-hidden w-auto h-auto">
          <img src="/rightframe.png" alt="Left Frame" />
        </div>
        {children}
      </body>
    </html>
  );
}
