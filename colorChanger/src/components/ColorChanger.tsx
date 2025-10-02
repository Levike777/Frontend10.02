import React, { useState, useEffect } from "react";

// Véletlenszerű szín generáló függvény
const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ColorChanger: React.FC<{ onColorChange: (color: string) => void }> = ({ onColorChange }) => {
  const [bgColor, setBgColor] = useState<string>("#ffffff");

  // Body háttérszín beállítása és szín átadása App-nek
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    onColorChange(bgColor);
  }, [bgColor, onColorChange]);

  const handleChangeColor = () => setBgColor(getRandomColor());

  return (
    <div
      style={{
        flex: 1, // maradék helyet kitölti
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleChangeColor}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          cursor: "pointer",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        Szín változtatása
      </button>
    </div>
  );
};

export default ColorChanger;
