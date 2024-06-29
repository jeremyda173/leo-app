'use client';
import React from "react";
import MessiStats from "./Stats";

function Barcelona() {
  const videoUrl = "https://www.youtube.com/embed/FqFyAydG2cc";

  {/* Messi's data at Barcelona */}
  // const matches = 1066;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">FC Barcelona</h1>
      <div>
        {/* Additional information about FC Barcelona */}
        <p className="mb-4 text-justify">
          FC Barcelona is a professional football club based in Barcelona, Catalonia, Spain.
          Founded in 1899, Barcelona is one of the most successful and popular clubs in the world.
        </p><br></br>

        <MessiStats />

        {/* Display Barcelona's crest image */}
        {/* <div style={{ width: '100px', height: '100px' }}>
          <Image src={BarcelonaImage} alt="FC Barcelona Crest" />
        </div> */}

        <div style={{ marginBottom: '20px'}}></div>

        {/* Video player */}
        <div className="flex justify-center w-full">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="FC Barcelona Video"
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
