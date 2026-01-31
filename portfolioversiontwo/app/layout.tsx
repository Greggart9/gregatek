import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greggatek",
  icons: {
    icon: "/icon.svg",
  },
  description: "Greggatek is a digital design studio shaping bold, modern, meaningful brands and products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-380 mx-auto bg-color-background text-color-foreground`}
      >
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

