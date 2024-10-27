import React from 'react';
import "../styles/header.scss";

interface HeaderProps {
  resetCube: () => void;
}

const Header: React.FC<HeaderProps> = ({ resetCube }) => {
  return (
    <header className="header" onClick={resetCube}>
      <h1 id="header_name">Nathaniel Paz</h1>
      <p>Computer Scientist & Web Developer</p>
    </header>
  );
}

export default Header;
