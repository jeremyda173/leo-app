'use client';
import React from "react";
import MessiStats from "./stats";

function InterMiami() {
  const videoUrl = "https://www.youtube.com/embed/MynagxwYhSk?si=tcdVxSxV0-zfzwai";

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Inter Miami</h1>
      <div className="max-w-2xl w-full">
        <p className="mb-4 text-justify">
          Inter Miami CF es un club de fútbol profesional con sede en Miami, Florida, Estados Unidos. 
          Fundado en 2018, el Inter Miami compite en la Major League Soccer (MLS), siendo parte integral 
          de la escena futbolística en los Estados Unidos y Canadá. El equipo cuenta con la propiedad 
          parcial del exjugador de fútbol británico David Beckham.
        </p>

        <MessiStats />

        <div className="my-4"></div>

        {/* Reproductor de video */}
        <div className="flex justify-center w-full">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="Video del Inter Miami"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterMiami;
