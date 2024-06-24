// components/SkillBar.tsx
import React from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  return (
    <div className="my-2">
      <div className="flex justify-between mb-3">
        <span className="text-white font-semibold">{skill}</span>
        <span className="text-white font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-sky-300 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
