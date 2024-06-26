import Image from "next/image";
import Typed, { TypedOptions } from "typed.js";
import { useEffect, useRef } from "react";

export function Header() {
  const typedTarget = useRef(null);

  useEffect(() => {
    if (typedTarget.current) {
      const options = {
        strings: ["Vinícius Corrêa Goulart"],
        typeSpeed: 100,
        loop: false,
        showCursor: false,
      };
      new Typed(typedTarget.current, options);
    }
  }, []);

  return (
    <header className="text-white p-4 h-screen flex flex-col justify-center items-center">
      <div>
        <span className="text-3xl">Olá, sou o</span>
      </div>

      <div className="my-3 text-center">
        <span className="text-5xl text-sky-300" ref={typedTarget}></span>
      </div>

      <div className="mt-5 flex justify-center gap-6">
        <Image
          src="/assets/linkedin.png"
          alt="Linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/vinicius-correa-dev/")
          }
          className="cursor-pointer"
          width={50}
          height={50}
        />
        <Image
          src="/assets/github.png"
          className="cursor-pointer"
          alt="GitHub"
          onClick={() => window.open("https://github.com/vncorrea")}
          width={50}
          height={50}
        />
        <Image
          src="/assets/instagram.png"
          className="cursor-pointer"
          onClick={() => window.open("https://www.instagram.com/vncorrea_/")}
          alt="Instagram"
          width={50}
          height={50}
        />
      </div>
    </header>
  );
}
