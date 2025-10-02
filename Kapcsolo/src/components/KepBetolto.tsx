import React from 'react';

interface KepBetoltoProps {
  kep: string;
}

const KepBetolto: React.FC<KepBetoltoProps> = ({ kep }) => {
  return (
    <div>
      <img src={kep} alt="Izzo állapot" />
    </div>
  );
};

export default KepBetolto;
