import React, { useState } from 'react';
import KepBetolto from './Kepbetolto';


const ReactKapcsolo: React.FC = () => {
  const [kapcsolo, setKapcsolo] = useState(false);

  const toggleKapcsolo = () => {
    setKapcsolo(!kapcsolo);
  };

  return (
    <div>
      <button onClick={toggleKapcsolo}>
        {kapcsolo ? 'Be' : 'Ki'}
      </button>
      <KepBetolto kep={kapcsolo 
        ? 'https://www.w3schools.com/js/pic_bulbon.gif' 
        : 'https://www.w3schools.com/js/pic_bulboff.gif'} 
      />
    </div>
  );
};

export default ReactKapcsolo;
