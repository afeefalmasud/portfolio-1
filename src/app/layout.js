
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

export const metadata = {
  title: "Afeef Al Masud",
  description: "Portfolio of Afeef Al Masud, a full-stack developer building modern, responsive web applications with React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS.",
  keywords: [
    "Afeef Al Masud",
    "Afeef",
    "Afeef Portfolio",
    "Full Stack Developer",
    "Next.js Developer Bangladesh",
  ],
  authors: [{ name: "Afeef Al Masud" }],
  creator: "Afeef Al Masud",
  metadataBase: new URL("https://afeefalmasud-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Afeef Al Masud | Full-Stack Developer",
    description:
      "Portfolio of Afeef Al Masud, a full-stack developer building modern, responsive web applications.",
    url: "https://afeefalmasud-portfolio.vercel.app",
    siteName: "Afeef Al Masud Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "tpYQMi-71J_-IcijfejnOQ_d3xRC_AoP-d5Cnwex0Qo",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
