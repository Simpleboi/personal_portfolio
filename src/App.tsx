import React from 'react';
import CubeController from './components/CubeController.tsx';
import Home from './pages/home.tsx';
import Projects from './pages/projects.tsx';
import About from './pages/about.tsx';
import Skills from './pages/skills.tsx';
import Resume from './pages/resume.tsx';
import Contact from './pages/contact.tsx';

const App: React.FC = () => {
  return (
    <div className="app">
      <CubeController />
      <Home />
      <Projects />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
