import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

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

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-[800px] cursor-pointer">
      {["card1", "card2", "card3"].map((cardId, index) => (
        <div
          key={cardId}
          className="flip-card w-[600px] h-[360px] rounded-md mx-2 mb-4"
          onClick={() => handleFlip(cardId)}
        >
          <motion.div
            className="flip-card-inner w-[100%] h-[100%]"
            initial={false}
            animate={{ rotateY: flips[cardId] ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
              style={{
                backgroundImage: `url(https://d3jdy5kagtp3z4.cloudfront.net/images/v2/macbook-flat-white.png)`,
              }}
            ></div>

            <div
              className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
              style={{
                backgroundImage: `url(https://d3jdy5kagtp3z4.cloudfront.net/images/v2/macbook-flat-white.png)`,
              }}
            >
              <h1 className="text-2xl font-bold">Site VineTickets</h1>
              <p>Site teste {index + 1}</p>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
