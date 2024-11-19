import React from "react";
import SkillsGrid from "../components/skillsGrid.tsx";

interface CubeFaceProps {
  face: string;
  color: string;
}

const CubeFace: React.FC<CubeFaceProps> = ({ face, color }) => {
  return (
    <div className={`face ${face}`} id={color}>
      {face === "top" ? (
        <SkillsGrid />
      ) : (
        [...Array(9)].map((_, index) => (
          <div className="square" key={index}></div>
        ))
      )}
    </div>
  );
};

export default CubeFace;
