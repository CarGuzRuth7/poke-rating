import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css"
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poke-rating",
  description: "Select a pokemon and rate it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <footer className={styles.footer}>
          <p className={styles.sign}>Ruth Cardona Personal Project | 2025</p>
          <Link
          href={"https://github.com/CarGuzRuth7/poke-rating"}
          >◭ Visit the Repository ◮</Link>
        </footer>
      </body>
    </html>
  );
}
