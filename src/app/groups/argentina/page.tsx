'use client';
import React from "react";
import MessiStats from "./Stats";

function Argentina() {
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
        <div style={{ position: 'relative', marginLeft: '25%', zIndex: 1}} onClick={() => window.location.href = videoUrl}>
  <iframe
    width="560"
    height="315"
    src={videoUrl}
    title="Video del Barcelona"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>

      </div>
    </div>
  );
}

export default Argentina;
