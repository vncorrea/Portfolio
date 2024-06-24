import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import "./Projects.css";

type CardProps = {
  title: string;
  description: string;
  backgroundImageFront: string;
  backgroundImageBack: string;
  icons: Array<{
    src: string;
    alt: string;
  }>;
  isFlipped: boolean;
  onFlip: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  backgroundImageFront,
  backgroundImageBack,
  icons,
  isFlipped,
  onFlip,
}) => {
  return (
    <div
      className={`flip-card w-[600px] h-[450px] rounded-md mx-2 mb-4 ${
        isFlipped ? "flipped" : ""
      }`}
      onClick={onFlip}
    >
      <motion.div
        className="flip-card-inner w-[100%] h-[100%]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }} // Usando a prop isFlipped para controlar a rotação
        transition={{ duration: 0.6 }}
      >
        <div
          className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
          style={{ backgroundImage: `url(${backgroundImageFront})` }}
        ></div>

        <div className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4">
          <div className="banner">
            <img src={backgroundImageBack} className="w-[100%] h-[175px]" />
          </div>
          <div className="w-[100%] flex justify-center items-center gap-[0.5rem] mb-2 mt-1">
            {icons.map((icon, index) => (
              <div className="icon" key={index}>
                <Image src={icon.src} alt={icon.alt} width={20} height={20} />
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-bold text-center mb-5 text-sky-300">
            {title}
          </h1>
          <p className="text-center text-xl">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
