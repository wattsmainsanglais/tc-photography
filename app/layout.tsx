import type { Metadata } from "next";
import { Geist, Bad_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const badScript = Bad_Script({
  weight: "400",
  variable: "--font-bad-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terry Carroll Photography | Wildlife & Nature Photography",
  description: "Professional wildlife, birds, insects, landscape, and coastal photography by Terry Carroll. Capturing the beauty of nature through the lens.",
  keywords: ["photography", "wildlife photography", "nature photography", "birds", "insects", "landscape", "coastal photography", "Terry Carroll"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${badScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
