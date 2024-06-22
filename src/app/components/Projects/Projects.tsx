import React, { useState } from "react";
import "./Projects.css"; // Importe o componente ProjectsCard
import Card from "./Card";

const Projects = () => {
  const [flips, setFlips] = useState<{
    [key: string]: boolean;
  }>({
    card1: false,
    card2: false,
    card3: false,
  });

  function handleFlip(cardId: string) {
    setFlips((prevFlips) => ({ ...prevFlips, [cardId]: !prevFlips[cardId] }));
  }

  const cardInfos = [
    {
      id: "card1",
      title: "VineTickets",
      description:
        "Esse é o site VineTickets. Nesta versão foi feito com Laravel, React, Tailwind e PostgreSQL. O site é um marketplace de ingressos para eventos.",
      backgroundImageBack: "../../assets/site-teste.png",
      backgroundImageFront:
        "https://d3jdy5kagtp3z4.cloudfront.net/images/v2/macbook-flat-white.png",
      icons: [
        { src: "/assets/laravel.png", alt: "Laravel" },
        { src: "/assets/react.png", alt: "React" },
        { src: "/assets/tailwind.png", alt: "Tailwind" },
      ],
    },
    {
      id: "card2",
      title: "VineTickets App",
      description:
        "Esse é o aplicativo VineTickets. VineTickets é um marketplace de ingressos para eventos. Foi utilizado as APIs do site VineTickets.",
      backgroundImageBack: "../../assets/site-teste.png",
      backgroundImageFront:
        "https://d3jdy5kagtp3z4.cloudfront.net/images/v2/macbook-flat-white.png",
      icons: [
        { src: "/assets/tailwind.png", alt: "Tailwind" },
        { src: "/assets/react.png", alt: "React" },
        { src: "/assets/expo.png", alt: "Expo" },
        { src: "/assets/postgresql.png", alt: "PostgreSQL" },
      ],
    },
    {
      id: "card3",
      title: "A definir",
      description: "A definir, por favor volte mais tarde.",
      backgroundImageBack: "../../assets/site-teste.png",
      backgroundImageFront:
        "https://d3jdy5kagtp3z4.cloudfront.net/images/v2/macbook-flat-white.png",
      icons: [
        { src: "/assets/nodejs.png", alt: "NodeJS" },
        { src: "/assets/react.png", alt: "React" },
        { src: "/assets/postgresql.png", alt: "PostgreSQL" },
        { src: "/assets/tailwind.png", alt: "Tailwind" },
      ],
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-[800px] cursor-pointer p-[8rem]">
      {cardInfos.map((cardInfo) => (
        <Card
          key={cardInfo.id}
          title={cardInfo.title}
          description={cardInfo.description}
          backgroundImageFront={cardInfo.backgroundImageFront}
          backgroundImageBack={cardInfo.backgroundImageBack}
          icons={cardInfo.icons}
          isFlipped={flips[cardInfo.id]}
          onFlip={() => handleFlip(cardInfo.id)}
        />
      ))}
    </div>
  );
};

export default Projects;
