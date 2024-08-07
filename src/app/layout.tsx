import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import {Montserrat} from 'next/font/google'


import { cn } from "@/lib/utils"
 
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.variable
        )}>{children}</body>
    </html>
  );
}
