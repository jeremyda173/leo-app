'use client';
import React from "react";
import Image from 'next/image';
// import BarcelonaImage from "@/../../public/Shield/LogoP.png";
import MessiStats from "./stats";

function PSG() {
  const videoUrl = "https://www.youtube.com/embed/2pLbqpwpwXc?si=77mYWI0a-VEZ98On";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Paris Saint Germain</h1>
      <div>
        {/* Additional information about Paris Saint-Germain */}
        <p className="mb-4 text-justify">
            Paris Saint-Germain Football Club, commonly known as PSG, is a professional football club 
            based in Paris, France. Founded in 1970, PSG competes in Ligue 1, the highest tier of French 
            football. The club has become one of the most successful and recognized teams in Europe, 
            known for its presence in national and international competitions.
        </p><br></br>

        <MessiStats />

        {/* Display PSG's crest image */}
        {/* <div style={{ width: '100px', height: '100px' }}>
          <Image src={BarcelonaImage} alt="Paris Saint-Germain Crest" />
        </div> */}
        <div style={{ marginBottom: '20px'}}></div>

        {/* Video player */}
        <div className="flex justify-center w-full">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="Paris Saint-Germain Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PSG;
