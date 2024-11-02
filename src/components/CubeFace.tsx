import React from "react";

interface CubeFaceProps {
  face: string;
  color: string;
}

const CubeFace: React.FC<CubeFaceProps> = ({ face, color }) => {
  return (
    <div className={`face ${face}`} id={color}>
      {[...Array(9)].map((_, index) => (
        <div
          className="square"
          key={index}
          style={{ opacity: 1 }} // Set opacity to 1 to ensure the grid is always visible
        ></div>
      ))}
    </div>
  );
};

export default CubeFace;
