import React, { useState } from "react";
import Fejlec from "./components/Fejlec";
import ColorChanger from "./components/ColorChanger";
import Lablec from "./components/Lablec";

const App: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("#ffffff");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Fejlec />
      <ColorChanger onColorChange={setBgColor} />
      <Lablec
        keszito="Kiss Péter"
        datum="2025-10-02"
        ido="30 perc"
        miHasznalat="Igen, MI-t is használtam"
        miReszek="ColorChanger komponens logika és stílus"
        bgColor={bgColor} // lábléc is ugyanazt a színt kapja
      />
    </div>
  );
};

export default App;
