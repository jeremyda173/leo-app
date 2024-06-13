'use client';
import React from "react";
import MessiStats from "./Stats"; // Suponiendo que tienes un componente MessiStats que muestra las estadísticas de Messi

function Argentina() {
  const videoUrl = "https://www.youtube.com/embed/FYDRAuMQ6iQ?si=2wRlIeB0HnkiZeEz";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Selección Argentina</h1>
      <div>
        {/* Información adicional sobre la selección argentina */}
        <p className="mb-4 text-justify">
          La selección argentina de fútbol es el equipo representativo del país en las competiciones internacionales de fútbol.
        </p><br></br>

        <MessiStats />

        <div style={{ marginBottom: '20px'}}></div>

        {/* Reproductor de video */}
        <div className="flex justify-center w-full">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="Video de Argentina"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Argentina;
