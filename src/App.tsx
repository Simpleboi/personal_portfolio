import React from 'react';
import CubeController from './components/CubeController.tsx';
import Home from './components/home.tsx';

const App: React.FC = () => {
  return (
    <div className="app">
      <CubeController />
      <Home />
    </div>
  );
}

export default App;
