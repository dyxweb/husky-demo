import React from 'react';
import cityImg from './assets/images/city.jpg';
import Home from './pages/home';

const App = () => {
  return (
    <div>
      <Home />
      <img src={cityImg} />
    </div>
  );
};

export default App;
