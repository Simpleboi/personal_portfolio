import React from "react";
import "../styles/skillsGrid.scss";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import ts from "../assets/icons/ts.png";
import db from "../assets/icons/db.png";
import git from "../assets/icons/git.png";
import react from "../assets/icons/react.png";
import scss from "../assets/icons/sass.png";
import figma from "../assets/icons/figma.png";

const skills = [
    html, css, js,
    ts, db, git,
    react, scss, figma,
  ];
  
  const SkillsGrid: React.FC = () => {
    return (
      <div className="skills-grid">
        {skills.map((icon, index) => (
          <div key={index} className="skill-tile">
            <img src={icon} alt={`Skill ${index + 1}`} className="skill-icon" />
          </div>
        ))}
      </div>
    );
  };

  export default SkillsGrid;