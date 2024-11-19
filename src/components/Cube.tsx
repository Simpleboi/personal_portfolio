import React from "react";
import "../styles/cube.scss";
import CubeFace from "./CubeFace.tsx";

interface CubeProps {
  transform: string;
}

const Cube: React.FC<CubeProps> = ({ transform }) => {
  return (
    <div className="cube" style={{ transform }}>
      <CubeFace face="front" color="green" />
      <CubeFace face="back" color="blue" />
      <CubeFace face="left" color="orange" />
      <CubeFace face="right" color="red" />
      <CubeFace face="top" color="white" />
      <CubeFace face="bottom" color="yellow" />
    </div>
  );
};

export default Cube;
