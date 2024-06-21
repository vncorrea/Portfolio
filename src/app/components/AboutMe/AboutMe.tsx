import React from "react";
import SkillBar from "./SkillBar";

export function AboutMe() {
  return (
    <section
      id="aboutMe"
      className="bg-black text-white p-4 h-screen flex flex-col justify-center items-center"
    >
      <div className="w-full max-w-md">
        <SkillBar skill="HTML5" percentage={100} />
        <SkillBar skill="CSS3" percentage={95} />
        <SkillBar skill="JavaScript" percentage={85} />
        <SkillBar skill="Laravel" percentage={90} />
        <SkillBar skill="PHP" percentage={85} />
        <SkillBar skill="jQuery" percentage={85} />
        <SkillBar skill="PostgreSQL" percentage={70} />
        <SkillBar skill="React" percentage={70} />
      </div>
    </section>
  );
}
