import React from "react";

interface CubeFaceProps {
  face: string;
  color: string;
  skillsVisible?: boolean;
}

const CubeFace: React.FC<CubeFaceProps> = ({
  face,
  color,
  skillsVisible = false,
}) => {
  const isSkillsFace = face === "top";

  return (
    <div className={`face ${face}`} id={color}>
      {[...Array(9)].map((_, index) => (
        <div
          className={`square ${isSkillsFace ? "square-content" : ""}`}
          key={index}
          style={
            isSkillsFace && skillsVisible ? { opacity: 1 } : { opacity: 0 }
          }
        ></div>
      ))}
    </div>
  );
};

export default CubeFace;
