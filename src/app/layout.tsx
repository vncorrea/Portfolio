"use client";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Experiences } from "./components/Experiences/Experiences";
import { Footer } from "./components/Footer/Footer";
import { motion } from "framer-motion";
import ParticlesComponents from "./components/particles";
import Projects from "./components/Projects/Projects";

const inter = Inter({ subsets: ["latin"] });

const mainContentStyle: React.CSSProperties = {
  zIndex: 1,
  position: "relative",
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const particlesStyle = {
  overflow: "hidden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeComponent, setActiveComponent] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const experiencesPosition =
        (document.querySelector("#experiences") as HTMLElement)?.offsetTop || 0;
      const aboutMePosition =
        (document.querySelector("#aboutMe") as HTMLElement)?.offsetTop || 0;
      const projectsPosition =
        (document.querySelector("#projects") as HTMLElement)?.offsetTop || 0;

      if (scrollPosition >= projectsPosition - 300) {
        setActiveComponent("projects");
      } else if (scrollPosition >= aboutMePosition - 300) {
        setActiveComponent("aboutMe");
      } else if (scrollPosition >= experiencesPosition - 300) {
        setActiveComponent("experiences");
      } else {
        setActiveComponent("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div style={particlesStyle}>
          <ParticlesComponents id="particles" />
        </div>
        <div style={mainContentStyle}>
          <motion.div
            id="header"
            variants={containerVariants}
            initial="hidden"
            animate={activeComponent === "" ? "visible" : "hidden"}
            exit="exit"
          >
            <Header />
          </motion.div>
          <motion.div
            id="experiences"
            variants={containerVariants}
            initial="hidden"
            animate={activeComponent === "experiences" ? "visible" : "hidden"}
            exit="exit"
          >
            <Experiences />
          </motion.div>
          <motion.div
            id="aboutMe"
            variants={containerVariants}
            initial="hidden"
            animate={activeComponent === "aboutMe" ? "visible" : "hidden"}
            exit="exit"
          >
            <AboutMe />
          </motion.div>
          <motion.div
            id="projects"
            variants={containerVariants}
            initial="hidden"
            animate={activeComponent === "projects" ? "visible" : "hidden"}
            exit="exit"
          >
            <Projects />
          </motion.div>
          <motion.div
            id="footer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Footer />
          </motion.div>
        </div>
      </body>
    </html>
  );
}
