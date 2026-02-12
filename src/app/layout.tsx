import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../../components/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Skill Torch",
  description: "Discover the skills you need to succeed in your career with Skill Torch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
