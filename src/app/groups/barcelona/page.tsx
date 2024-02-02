'use client';
import React, { useState } from "react";
import Image from 'next/image';
import BarcelonaImage from "@/../../public/Shield/LogoB.png";

function Barcelona() {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <div>
      <h1>Barcelona FC</h1>
      
      <button onClick={toggleAdditionalInfo}>
        {showAdditionalInfo ? "Ocultar información" : "Mostrar información"}
      </button>

      {showAdditionalInfo && (
        <div>
          {/* Información adicional sobre el FC Barcelona */}
          <p>
            El FC Barcelona es un club de fútbol profesional con sede en
            Barcelona, Cataluña, España. Fundado en 1899, el Barcelona es uno de los
            clubes más exitosos y populares del mundo.
          </p>

          {/* Muestra la imagen del escudo del Barcelona */}
          <div style={{ width: '100px', height: '100px' }}>
            <Image src={BarcelonaImage} alt="Escudo del Barcelona" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Barcelona;
