import React, { useState } from 'react';

const Home = () => {
  const [num, setNum] = useState(0);
  const obj = {
    name: 'dyx',
    sex: 'man'
  };
  return (
    <div>
      <div>{num}</div>
    </div>
  );
};

export default Home;
