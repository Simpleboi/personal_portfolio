import React, { useState } from "react";
import Cube from "./Cube.tsx";

const CubeController: React.FC = () => {
  // State for controlling cube rotation and scale
  const [transform, setTransform] = useState<string>(
    "rotateX(-30deg) rotateY(45deg)"
  );
  const [scale, setScale] = useState<string>("scale(1)");
  const [skillsVisible, setSkillsVisible] = useState<boolean>(false);

  // Handle navigation clicks to rotate the cube
  const handleNavClick = (section: string) => {
    setScale("scale(1.5)");
    switch (section) {
      case "home":
        setTransform("rotateY(0deg)");
        break;
      case "projects":
        setTransform("rotateY(-90deg)");
        break;
      case "about-me":
        setTransform("rotateY(90deg)");
        break;
      case "skills":
        setTransform("rotateX(-90deg)");
        setSkillsVisible(true);
        break;
      case "resume":
        setTransform("rotateX(90deg)");
        break;
      case "contact":
        setTransform("rotateY(180deg)");
        break;
      default:
        setTransform("rotateX(-30deg) rotateY(45deg)");
    }
  };

  // Reset the cube when clicking the header
  const resetCube = () => {
    setScale("scale(1)");
    setTransform("rotateX(-30deg) rotateY(45deg)");
    setSkillsVisible(false);
  };

  return (
    <div className="cube-controller">
      <header className="header" onClick={resetCube}>
        <h1 id="header_name">Nathaniel Paz</h1>
        <p>Computer Scientist & Web Developer</p>
      </header>

      <nav>
        <a href="#" onClick={() => handleNavClick("home")} id="home">
          Home
        </a>
        <a href="#" onClick={() => handleNavClick("projects")} id="projects">
          Projects
        </a>
        <a href="#" onClick={() => handleNavClick("about-me")} id="about-me">
          About Me
        </a>
        <a href="#" onClick={() => handleNavClick("skills")} id="skills">
          Skills
        </a>
        <a href="#" onClick={() => handleNavClick("resume")} id="resume">
          Resume
        </a>
        <a href="#" onClick={() => handleNavClick("contact")} id="contact">
          Contact Me
        </a>
      </nav>

      <div className="cube-wrapper" style={{ transform: scale }}>
        <Cube transform={transform} skillsVisible={skillsVisible} />
      </div>
    </div>
  );
};

export default CubeController;
