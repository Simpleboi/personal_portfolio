import React, { useState } from 'react';
import Cube from './Cube.tsx';
import Header from '../components/header.tsx';
import Nav from '../components/nav.tsx';
import "../styles/cubeController.scss";

const CubeController: React.FC = () => {
  const [transform, setTransform] = useState<string>('rotateX(-30deg) rotateY(45deg)');
  const [scale, setScale] = useState<string>('scale(1)');
  const [skillsVisible, setSkillsVisible] = useState<boolean>(false);

  // Handle navigation clicks to rotate the cube
  const handleNavClick = (section: string) => {
    setScale('scale(1.5)');
    switch (section) {
      case 'home':
        setTransform('rotateY(0deg)');
        break;
      case 'projects':
        setTransform('rotateY(-90deg)');
        break;
      case 'about-me':
        setTransform('rotateY(90deg)');
        break;
      case 'skills':
        setTransform('rotateX(-90deg)');
        setSkillsVisible(true);
        break;
      case 'resume':
        setTransform('rotateX(90deg)');
        break;
      case 'contact':
        setTransform('rotateY(180deg)');
        break;
      default:
        setTransform('rotateX(-30deg) rotateY(45deg)');
    }
  };

  // Reset the cube when clicking the header
  const resetCube = () => {
    setScale('scale(1)');
    setTransform('rotateX(-30deg) rotateY(45deg)');
    setSkillsVisible(false);
  };

  return (
    <div className="cube-controller">
      <Header resetCube={resetCube} />
      <Nav handleNavClick={handleNavClick} />
      <div className="cube-wrapper" style={{ transform: scale }}>
        <Cube transform={transform} skillsVisible={skillsVisible} />
      </div>
    </div>
  );
}

export default CubeController;
