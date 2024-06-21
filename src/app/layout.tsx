"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Skills } from "./components/AboutMe/AboutMe";
import { Experiences } from "./components/Experiences/Experiences";

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
        <Skills />
      </body>
    </html>
  );
}
