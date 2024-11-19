import React, { useState } from "react";
import Cube from "./Cube.tsx";
import Header from "../components/header.tsx";
import Nav from "../components/nav.tsx";
import "../styles/cubeController.scss";

const CubeController: React.FC = () => {
  const [transform, setTransform] = useState<string>(
    "rotateX(-30deg) rotateY(45deg)"
  );
  const [scale, setScale] = useState<string>("scale(1)");
  // Handle navigation clicks to rotate the cube
  const handleNavClick = (section: string) => {
    setScale("scale(1.5)");


    switch (section) {
      case "home":
        setTransform("rotateY(0deg)");
        document.getElementById("home-section")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        setTransform("rotateY(-90deg)");
        document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about-me":
        setTransform("rotateY(90deg)");
        document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        setTransform("rotateX(-90deg)");
        document.getElementById("skills-section")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "resume":
        setTransform("rotateX(90deg)");
        document.getElementById("resume-section")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        setTransform("rotateY(180deg)");
        document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        setTransform("rotateX(-30deg) rotateY(45deg)");
    }
  };

  // Reset the cube when clicking the header
  const resetCube = () => {
    setScale("scale(1)");
    setTransform("rotateX(-30deg) rotateY(45deg)");
  };

  return (
    <div className="cube-controller">
      <Header resetCube={resetCube} />
      <Nav handleNavClick={handleNavClick} />
      <div className="cube-wrapper" style={{ transform: scale }}>
        <Cube transform={transform}/>
      </div>
    </div>
  );
};

export default CubeController;
