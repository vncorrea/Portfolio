"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Experiences } from "./components/Experiences/Experiences";
import { Projects } from "./components/Projects/Projects";
import { Footer } from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Vinícius Corrêa Goulart",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <Experiences />
        <AboutMe />
        <Projects />
        <Footer />
      </body>
    </html>
  );
}
