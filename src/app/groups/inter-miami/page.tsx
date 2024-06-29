'use client';
import React from "react";
import MessiStats from "./stats";

function InterMiami() {
  const videoUrl = "https://www.youtube.com/embed/MynagxwYhSk?si=tcdVxSxV0-zfzwai";

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Inter Miami</h1>
      <div className="max-w-2xl w-full">
        <div className="p-4 hover:bg-gray-700 rounded-md transition duration-300 ease-in-out">
          <p className="mb-4 text-justify">
            Inter Miami CF is a professional soccer club based in Miami, Florida, United States.
            Founded in 2018, Inter Miami competes in Major League Soccer (MLS), being an integral part
            of the soccer scene in the United States and Canada. The team is partially owned by 
            former British soccer player David Beckham.
          </p>

          <MessiStats />
        </div>

        <div className="my-4"></div>

        {/* Video player */}
        <div className="flex justify-center w-full">
          <div className="relative w-full hover:scale-105 transition duration-300 ease-in-out" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="Inter Miami Video"
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
