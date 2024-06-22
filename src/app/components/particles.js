import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; //

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000", // Fundo preto
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: ["#ffffff", "#FFD700", "#ADD8E6"], // Cores das partículas: branco, amarelo claro, azul claro
        },
        links: {
          enable: false, // Desabilita as linhas entre as partículas
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out", // Faz com que as partículas saiam da tela
          },
          random: true,
          speed: 0.5, // Velocidade lenta para simular o movimento do universo
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Ajusta a densidade das partículas
          },
          value: 100, // Quantidade de partículas
        },
        opacity: {
          value: 0.5, // Opacidade das partículas
        },
        shape: {
          type: "circle", // Forma das partículas
        },
        size: {
          value: { min: 1, max: 3 }, // Variação no tamanho das partículas
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
