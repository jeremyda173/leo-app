'use client';
import React from "react";
import Image from 'next/image';
import BarcelonaImage from "@/../../public/Shield/LogoB.png";
import MessiStats from "./stats";

function InterMiami() {
  // const videoUrl = "https://www.youtube.com/embed/FqFyAydG2cc";

  return (
    <div>
      <h1>Inter Miami</h1>
      <div>
        {/* Información adicional sobre el FC Barcelona */}
        <p>
        Inter Miami CF es un club de fútbol profesional con sede en Miami, Florida, Estados Unidos. 
        Fundado en 2018, el Inter Miami compite en la Major League Soccer (MLS), siendo parte integral 
        de la escena futbolística en los Estados Unidos y Canadá. El equipo cuenta con la propiedad 
        parcial del exjugador de fútbol británico David Beckham.
        </p><br></br>

        <MessiStats />

        {/* Muestra la imagen del escudo del Barcelona */}
        {/* <div style={{ width: '100px', height: '100px' }}>
          <Image src={BarcelonaImage} alt="Escudo del Barcelona" />
        </div> */}

        {/* Reproductor de video */}
        {/* <div>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="Video del Barcelona"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div> */}
      </div>
    </div>
  );
}

export default InterMiami;
