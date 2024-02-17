'use client';
import React from "react";
import Image from 'next/image';
import BarcelonaImage from "@/../../public/Shield/LogoP.png";
import MessiStats from "./stats";

function PSG() {
  // const videoUrl = "https://www.youtube.com/embed/FqFyAydG2cc";

  return (
    <div>
      <h1>Paris Saint Germain</h1>
      <div>
        {/* Información adicional sobre el FC Barcelona */}
        <p>
            Paris Saint-Germain Football Club, comúnmente conocido como PSG, es un club de fútbol profesional 
            con sede en París, Francia. Fundado en 1970, el PSG compite en la Ligue 1, la máxima categoría 
            del fútbol francés. El club se ha convertido en uno de los equipos más exitosos y reconocidos 
            en Europa, destacando por su presencia en competiciones nacionales e internacionales.
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

export default PSG;
