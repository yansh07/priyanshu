import type { Metadata } from "next";
import { Fira_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
// import Head from "next/head";

const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-inter" });
const firaMono = Fira_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fira-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://priyanshu8.vercel.app"),
  title: "Priyanshu",
  description: "Full-Stack Developer",
  icons: {
    icon: "/mememe.webp",
  },
  openGraph: {
    title: "Priyanshu",
    description: "Full-Stack Developer",
    url: "https://priyanshu8.vercel.app",
    siteName: "Developer Portfolio",
    images: [
      {
        url: "/bg.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu",
    description: "Full-Stack Developer",
    images: ["/bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        rel="preload"
        className={`${nunito.variable} ${firaMono.variable} antialiased transition-colors duration-300`}
      >
          <SplashScreen />
          {children}
      </body>
    </html>
  );
}
