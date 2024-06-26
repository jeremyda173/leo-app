// /* eslint-disable react/no-unescaped-entities */
// 'use client';
// import 'tailwindcss/tailwind.css';
// import React, { useState } from 'react';
// import TheBest from '@/../../public/Awards/theBest.png';  // Assuming you have an image for The Best
// import Image from 'next/image';
// import { translate } from '@/app/components/translate';

// const awardsData = [
//   { id: 1, title: 'FIFA The Best', year: 2019, image: '/images/the_best_2019.jpg', goals: 52, assists: 25 },
//   { id: 2, title: 'FIFA The Best', year: 2022, image: '/images/the_best_2019.jpg', goals: 47, assists: 20 },
//   { id: 3, title: 'FIFA The Best', year: 2023, image: '/images/the_best_2019.jpg', goals: 45, assists: 22 },
// ];


// function TheBestModal() {
//   const [mainModalOpen, setMainModalOpen] = useState(false);
//   const [statisticsModalOpen, setStatisticsModalOpen] = useState(false);
//   const [selectedYear, setSelectedYear] = useState<number | null>(null);

//   const openStatisticsModal = (year: number) => {
//     setSelectedYear(year);
//     setMainModalOpen(false);
//     setStatisticsModalOpen(true);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full h-80 bg-gradient-to-b from-gray-200 to-gray-800 text-white">
//       {/* Heading */}
//       <h1 className=' text-3xl font-bold text-center mb-4'>FIFA The Best</h1>

//       {/* Image */}
//       <Image src={TheBest} alt="TheBest" className="h-32 w-28 mb-4" />

//       {/* Button to Open Main Modal */}
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//         onClick={() => setMainModalOpen(true)}>
//         {translate("modal.ver_mas")}
//       </button>

//       {/* Main Modal */}
//       {mainModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-3xl font-bold mb-4 text-black">Years Won</h2>
//             <div className="flex flex-wrap justify-center">
//               {awardsData
//                 .filter((award) => award.title === 'FIFA The Best')
//                 .map((award) => (
//                   <div
//                     key={award.id}
//                     className="m-4 p-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-xl text-center"
//                     onClick={() => openStatisticsModal(award.year)}
//                   >
//                     <p className="text-lg font-bold text-black">{award.year}</p>
//                   </div>
//                 ))}
//             </div>
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
//               onClick={() => setMainModalOpen(false)}
//             >
//               {translate("modal.close")}
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TheBestModal;

/* eslint-disable react/no-unescaped-entities */
'use client';
import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import TheBest from '@/../../public/Awards/theBest.png'; 
import Image from 'next/image';
import { translate } from '@/app/components/translate';

const awardsData = [
  { id: 1, title: 'FIFA The Best', year: 2019, image: '/images/the_best_2019.jpg', goals: 52, assists: 25 },
  { id: 2, title: 'FIFA The Best', year: 2022, image: '/images/the_best_2019.jpg', goals: 47, assists: 20 },
  { id: 3, title: 'FIFA The Best', year: 2023, image: '/images/the_best_2019.jpg', goals: 45, assists: 22 },
];

function GoldenBoyModal() {
  const [mainModalOpen, setMainModalOpen] = useState(false);
  const [statisticsModalOpen, setStatisticsModalOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const openStatisticsModal = (year: number) => {
    setSelectedYear(year);
    setMainModalOpen(false);
    setStatisticsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-80 bg-gradient-to-b from-gray-200 to-gray-800 text-white">
      {/* Heading */}
      <h1 className='text-3xl font-bold text-center mb-2'>{translate("words.the_best")}</h1>

      {/* Image */}
      <Image src={TheBest} alt="TheBest" className="w-24 h-22 mb-4" />

      {/* Button to Open Main Modal */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => setMainModalOpen(true)}>
        {translate("modal.ver_mas")}
      </button>

      {/* Main Modal */}
      {mainModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-black">Years Won</h2>
            <div className="flex flex-wrap justify-center">
              {awardsData
                .filter((award) => award.title === 'FIFA The Best')
                .map((award) => (
                  <div
                    key={award.id}
                    className="m-4 p-4 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-xl text-center cursor-pointer"
                    onClick={() => openStatisticsModal(award.year)}
                  >
                    <p className="text-lg font-bold text-black">{award.year}</p>
                  </div>
                ))}
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setMainModalOpen(false)}
            >
              {translate("modal.close")}
            </button>
          </div>
        </div>
      )}

{statisticsModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
    <div className="p-8 rounded-lg text-white">
      <h2 className="text-3xl font-bold mb-4">Statistics for {selectedYear}</h2>
      {awardsData.map((award) => {
        if (award.year === selectedYear) {
          return (
            <div key={award.id}>
              <p className="text-xl">
                Goals: <span className="text-white">{award.goals}</span>
              </p>
              <p className="text-xl">
                Assists: <span className="text-white">{award.assists}</span>
              </p>
            </div>
          );
        }
        return null; // Return null if the year is not found
      })}
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => {
          setStatisticsModalOpen(false);
          setMainModalOpen(true);
        }}
      >
        {translate("modal.close")}
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default GoldenBoyModal;
