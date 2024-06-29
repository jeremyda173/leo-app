'use client';
import React from "react";
import MessiStats from "./Stats"; // Assuming you have a MessiStats component that displays Messi's stats

function Argentina() {
  const videoUrl = "https://www.youtube.com/embed/FYDRAuMQ6iQ?si=2wRlIeB0HnkiZeEz";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Argentina National Team</h1>
      <div>
        {/* Additional information about the Argentina national team */}
        <p className="mb-4 text-justify">
          The Argentina national football team is the representative team of the country in international football competitions.
        </p><br></br>

        <MessiStats />

        <div style={{ marginBottom: '20px'}}></div>

        {/* Video player */}
        <div className="flex justify-center w-full">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              title="Argentina Video"
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
