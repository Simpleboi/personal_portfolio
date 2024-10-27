import React from "react";
import "../styles/nav.scss";

interface NavProps {
  handleNavClick: (section: string) => void;
}

const Nav: React.FC<NavProps> = ({ handleNavClick }) => {
  return (
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
  );
};

export default Nav;
