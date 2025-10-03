import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google";
import "./globals.css";
// import Head from "next/head";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const firaMono = Fira_Mono({ weight: '400', subsets: ['latin'], variable: '--font-fira-mono' });


export const metadata: Metadata = {
  metadataBase: new URL("https://priyanshu8.vercel.app"),
  title: "Priyanshu",
  description: "Full-Stack Developer",
  icons: {
    icon: "/ghibli.webp",
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
    <html lang="en">
      <body
        className={`${inter.variable} ${firaMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
