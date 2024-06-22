import React from "react";
import SkillBar from "./SkillBar";

export function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="text-white p-4 h-screen flex flex-row justify-evenly items-center"
    >
      <div>
        <div id="nome" className="mb-5">
          <h1 className="font-bold text-2xl">Nome</h1>
          <span className="text-center text-xl mt-4">
            Vinícius Corrêa Goulart Silva
          </span>
        </div>
        <div id="nascimento" className="mb-5">
          <h1 className="font-bold text-2xl">Nascimento</h1>
          <span className="text-center text-xl mt-4">
            26 de Dezembro de 2001
          </span>
        </div>

        <div id="cargo" className="mb-5">
          <h1 className="font-bold text-2xl">Cargo</h1>
          <span className="text-center text-xl mt-4">
            Desenvolvedor Web Fullstack
          </span>
        </div>

        <div id="email" className="mb-5">
          <h1 className="font-bold text-2xl">Email</h1>
          <span className="text-center text-xl mt-4">
            vinicorreag2001@gmail.com
          </span>
        </div>
      </div>
      <div className="w-full max-w-md">
        <SkillBar skill="HTML5" percentage={100} />
        <SkillBar skill="CSS3" percentage={95} />
        <SkillBar skill="JavaScript" percentage={85} />
        <SkillBar skill="Laravel" percentage={90} />
        <SkillBar skill="PHP" percentage={85} />
        <SkillBar skill="jQuery" percentage={85} />
        <SkillBar skill="PostgreSQL" percentage={70} />
        <SkillBar skill="ReactJS" percentage={70} />
      </div>
    </section>
  );
}
