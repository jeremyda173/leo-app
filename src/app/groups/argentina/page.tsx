'use client';
import React from "react";
import MessiStats from "./Stats"; // Suponiendo que tienes un componente MessiStats que muestra las estadísticas de Messi

function Argentina() {
  const videoUrl = "https://www.youtube.com/embed/FYDRAuMQ6iQ?si=2wRlIeB0HnkiZeEz";

  return (
    <div>
      <h1>Selección Argentina</h1>
      <div>
        {/* Información adicional sobre la selección argentina */}
        <p>
          La selección argentina de fútbol es el equipo representativo del país en las competiciones internacionales de fútbol.
        </p><br></br>

        <MessiStats />

        <div style={{ marginBottom: '20px'}}></div>

        {/* Reproductor de video */}
        <div style={{ position: 'relative', marginLeft: '20%', zIndex: 1}} onClick={() => window.location.href = videoUrl}>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="Video de la Selección Argentina"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}

export default Argentina;
