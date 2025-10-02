import React from "react";

interface LablecProps {
  keszito: string;
  datum: string;
  ido: string;
  miHasznalat: string;
  miReszek?: string;
  bgColor: string; // új: háttérszín, amit a ColorChanger ad
}

const Lablec: React.FC<LablecProps> = ({ keszito, datum, ido, miHasznalat, miReszek, bgColor }) => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: bgColor, // ugyanaz a szín mint a háttér
      }}
    >
      <p>Az oldalt készítette: {keszito}</p>
      <p>A készítés dátuma: {datum}</p>
      <p>A feladatra fordított idő: {ido}</p>
      <p>
        Nyilatkozat MI használatáról:<br />
        {miHasznalat}
        {miHasznalat.includes("használtam") && miReszek ? (
          <>
            <br />
            Az alábbi részeket készítettem MI-vel: {miReszek}
          </>
        ) : null}
      </p>
    </footer>
  );
};

export default Lablec;
