'use client';
import React from "react";
import MessiStats from "./Stats";

function Barcelona() {
  const videoUrl = "https://www.youtube.com/embed/FqFyAydG2cc";

  {/* Datos de Messi en el Barcelona*/}
  // const partidos = 1066;

  return (
    <div>
      <h1>Barcelona FC</h1>
      <div>
        {/* Información adicional sobre el FC Barcelona */}
        <p>
          El FC Barcelona es un club de fútbol profesional con sede en
          Barcelona, Cataluña, España. Fundado en 1899, el Barcelona es uno de los
          clubes más exitosos y populares del mundo.
        </p><br></br>

        <MessiStats />

        {/* Muestra la imagen del escudo del Barcelona */}
        {/* <div style={{ width: '100px', height: '100px' }}>
          <Image src={BarcelonaImage} alt="Escudo del Barcelona" />
        </div> */}

        <div style={{ marginBottom: '20px'}}></div>

        {/* Reproductor de video */}
        <div className="flex justify-center w-full">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="Video del Barcelona"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Barcelona;
