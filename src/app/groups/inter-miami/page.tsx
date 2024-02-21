'use client';
import React from "react";
import MessiStats from "./stats";

function InterMiami() {
  const videoUrl = "https://www.youtube.com/embed/MynagxwYhSk?si=tcdVxSxV0-zfzwai";

  return (
    <div>
      <h1>Inter Miami</h1>
      <div>
        <p>
          Inter Miami CF es un club de fútbol profesional con sede en Miami, Florida, Estados Unidos. 
          Fundado en 2018, el Inter Miami compite en la Major League Soccer (MLS), siendo parte integral 
          de la escena futbolística en los Estados Unidos y Canadá. El equipo cuenta con la propiedad 
          parcial del exjugador de fútbol británico David Beckham.
        </p>
        <br />

        <MessiStats />

        <div style={{ marginBottom: '20px' }}></div>

        {/* Reproductor de video */}
        <div style={{ position: 'relative', marginLeft: '25%', zIndex: 1 }}>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="Video del Inter Miami"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default InterMiami;
