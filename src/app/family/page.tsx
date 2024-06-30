import React from 'react';

function FamiliaMessi() {
  const events = [
    {
      year: "1987",
      title: "Lionel Messi is born",
      description:
        "Lionel Messi was born on June 24, 1987, in Rosario, Argentina.",
      color: "blue-500",
    },
    {
      year: "1988",
      title: "Antonela Roccuzzo is born",
      description:
        "Antonela Roccuzzo was born on February 26, 1988, in Rosario, Argentina.",
      color: "green-500",
    },
    {
      year: "2008",
      title: "Meets Antonela Roccuzzo",
      description:
        "Lionel Messi meets Antonela Roccuzzo, his future wife, in his hometown of Rosario.",
      color: "yellow-500",
    },
    {
      year: "2012",
      title: "Birth of first son, Thiago",
      description:
        "Lionel Messi and Antonela Roccuzzo welcome their first son, Thiago, on November 2, 2012.",
      color: "orange-500",
    },
    {
      year: "2015",
      title: "Birth of second son, Mateo",
      description:
        "On September 11, 2015, Lionel Messi and Antonela Roccuzzo's second son, Mateo, is born.",
      color: "red-500",
    },
    {
      year: "2017",
      title: "Marries Antonela Roccuzzo",
      description:
        "Lionel Messi and Antonela Roccuzzo marry on June 30, 2017, in Rosario, Argentina.",
      color: "pink-500",
    },
    {
      year: "2018",
      title: "Birth of third son, Ciro",
      description:
        "On March 10, 2018, Lionel Messi and Antonela Roccuzzo welcome their third son, Ciro.",
      color: "purple-500",
    },
    {
      year: "2021",
      title: "Moves to Paris",
      description:
        "In August 2021, Messi and his family move to Paris after his transfer to PSG.",
      color: "teal-500",
    },
    {
      year: "2023",
      title: "Moves to Miami",
      description:
        "In July 2023, Messi and his family move to Miami after his transfer to Inter Miami.",
      color: "red-500",
    },    
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Family timeline</h2>
      <div className="relative hidden sm:block">
        <div className="border-r-4 border-gray-300 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="flex items-center w-full">
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8">
                    <div className={`bg-${event.color} text-white p-4 rounded-lg inline-block shadow-lg transform transition-transform duration-300 hover:scale-105`}>
                      <h3 className="text-lg font-bold">{event.year}</h3>
                      <h4 className="text-md mt-1">{event.title}</h4>
                      <p className="text-sm mt-2 text-justify">{event.description}</p>
                    </div>
                  </div>
                  <div className={`relative w-10 h-10 bg-${event.color} rounded-full border-4 border-white flex items-center justify-center`}>
                    <div className={`w-6 h-6 bg-${event.color} rounded-full`}></div>
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                  <div className={`relative w-10 h-10 bg-${event.color} rounded-full border-4 border-white flex items-center justify-center`}>
                    <div className={`w-6 h-6 bg-${event.color} rounded-full`}></div>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className={`bg-${event.color} text-white p-4 rounded-lg inline-block shadow-lg transform transition-transform duration-300 hover:scale-105`}>
                      <h3 className="text-lg font-bold">{event.year}</h3>
                      <h4 className="text-md mt-1">{event.title}</h4>
                      <p className="text-sm mt-2 text-justify">{event.description}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Responsive layout for small screens */}
      <div className="sm:hidden">
        {events.map((event, index) => (
          <div key={index} className={`mb-8 ${index % 2 === 0 ? 'flex' : 'flex-row-reverse'}`}>
            <div className={`relative w-10 h-10 bg-${event.color} rounded-full border-4 border-white flex items-center justify-center ml-2`}>
              <div className={`w-6 h-6 bg-${event.color} rounded-full`}></div>
            </div>
            <div className={`bg-${event.color} text-white p-4 rounded-lg inline-block shadow-lg transform transition-transform duration-300 hover:scale-105 w-11/12 mt-4`}>
              <h3 className="text-lg font-bold">{event.year}</h3>
              <h4 className="text-md mt-1">{event.title}</h4>
              <p className="text-sm mt-2 text-justify">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FamiliaMessi;



// 'use client';

// import React, { useState } from 'react';
// import classNames from 'classnames';

// function FamiliaMessi() {
//   const [darkMode, setDarkMode] = useState(false); // Estado para controlar el modo oscuro

//   // Función para cambiar el modo entre claro y oscuro
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const events = [
//     {
//       year: '1987',
//       title: 'Nace Lionel Messi',
//       description: 'Lionel Messi nace el 24 de junio de 1987 en Rosario, Argentina.',
//       colorLight: 'bg-blue-200',
//       colorDark: 'bg-blue-500',
//     },
//     {
//       year: '1988',
//       title: 'Nace Antonela Roccuzzo',
//       description: 'Antonela Roccuzzo nace el 26 de febrero de 1988 en Rosario, Argentina.',
//       colorLight: 'bg-green-200',
//       colorDark: 'bg-green-500',
//     },
//     {
//       year: '2008',
//       title: 'Conoce a Antonela Roccuzzo',
//       description: 'Lionel Messi conoce a Antonela Roccuzzo, su futura esposa, en su ciudad natal de Rosario.',
//       colorLight: 'bg-yellow-200',
//       colorDark: 'bg-yellow-500',
//     },
//     {
//       year: '2012',
//       title: 'Nace su primer hijo, Thiago',
//       description: 'Lionel Messi y Antonela Roccuzzo dan la bienvenida a su primer hijo, Thiago, el 2 de noviembre de 2012.',
//       colorLight: 'bg-orange-200',
//       colorDark: 'bg-orange-500',
//     },
//     {
//       year: '2015',
//       title: 'Nace su segundo hijo, Mateo',
//       description: 'El 11 de septiembre de 2015, nace el segundo hijo de Lionel Messi y Antonela Roccuzzo, Mateo.',
//       colorLight: 'bg-red-200',
//       colorDark: 'bg-red-500',
//     },
//     {
//       year: '2017',
//       title: 'Se casa con Antonela Roccuzzo',
//       description: 'Lionel Messi y Antonela Roccuzzo se casan el 30 de junio de 2017 en Rosario, Argentina.',
//       colorLight: 'bg-pink-200',
//       colorDark: 'bg-pink-500',
//     },
//     {
//       year: '2018',
//       title: 'Nace su tercer hijo, Ciro',
//       description: 'El 10 de marzo de 2018, nace el tercer hijo de Lionel Messi y Antonela Roccuzzo, Ciro.',
//       colorLight: 'bg-purple-200',
//       colorDark: 'bg-purple-500',
//     },
//     {
//       year: '2021',
//       title: 'Se muda a París',
//       description: 'En agosto de 2021, Messi y su familia se mudan a París después de su transferencia al PSG.',
//       colorLight: 'bg-teal-200',
//       colorDark: 'bg-teal-500',
//     },
//   ];

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <button 
//         onClick={toggleDarkMode}
//         className="mb-4 p-2 bg-gray-800 text-white rounded">
//         Toggle Dark Mode
//       </button>
//       <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Línea de tiempo familiar de Messi</h2>
//       <div className="relative">
//         <div className="border-r-4 border-gray-300 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
//         <div className="space-y-12">
//           {events.map((event, index) => (
//             <div key={index} className="flex items-center w-full">
//               {index % 2 === 0 ? (
//                 <>
//                   <div className="w-1/2 pr-8">
//                     <div className={classNames(
//                       'text-white p-4 rounded-lg inline-block shadow-lg transform transition-transform duration-300 hover:scale-105', 
//                       darkMode ? event.colorDark : event.colorLight
//                     )}>
//                       <h3 className="text-lg font-bold">{event.year}</h3>
//                       <h4 className="text-md mt-1">{event.title}</h4>
//                       <p className="text-sm mt-2 text-justify">{event.description}</p>
//                     </div>
//                   </div>
//                   <div className={classNames(
//                     'relative w-10 h-10 rounded-full border-4 border-white flex items-center justify-center', 
//                     darkMode ? event.colorDark : event.colorLight
//                   )}>
//                     <div className={classNames(
//                       'w-6 h-6 rounded-full', 
//                       darkMode ? event.colorDark : event.colorLight
//                     )}></div>
//                   </div>
//                   <div className="w-1/2"></div>
//                 </>
//               ) : (
//                 <>
//                   <div className="w-1/2"></div>
//                   <div className={classNames(
//                     'relative w-10 h-10 rounded-full border-4 border-white flex items-center justify-center', 
//                     darkMode ? event.colorDark : event.colorLight
//                   )}>
//                     <div className={classNames(
//                       'w-6 h-6 rounded-full', 
//                       darkMode ? event.colorDark : event.colorLight
//                     )}></div>
//                   </div>
//                   <div className="w-1/2 pl-8">
//                     <div className={classNames(
//                       'text-white p-4 rounded-lg inline-block shadow-lg transform transition-transform duration-300 hover:scale-105', 
//                       darkMode ? event.colorDark : event.colorLight
//                     )}>
//                       <h3 className="text-lg font-bold">{event.year}</h3>
//                       <h4 className="text-md mt-1">{event.title}</h4>
//                       <p className="text-sm mt-2 text-justify">{event.description}</p>
//                     </div>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FamiliaMessi;

