import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Ibna Abid",
  description: "A premium protfoilo for my based on my skills and life line narrative archivement",
  icons: {
    icon: "/ibnaabid.jpg",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-on-background font-body-md selection:bg-primary selection:text-on-primary antialiased cursor-none`}
      >
        <AnimatedBackground />
        <SmoothScroll>
          <CustomCursor />
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
