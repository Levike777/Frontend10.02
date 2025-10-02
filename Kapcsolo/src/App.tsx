import React from 'react';
import ReactKapcsolo from './components/Kapcsolo';
import Lablec from './components/Lablec';


const App: React.FC = () => {
  return (
    <div>
      <h1>Kapcsoló példa</h1>
      <ReactKapcsolo />
      <Lablec
        keszito="Oláh Levente Marcell"
        datum="2025.10.02."
        ido="45 perc"
        miHasznalat="Nem használtam MI-t a feladatmegoldáshoz."
      />
    </div>
  );
};

export default App;
