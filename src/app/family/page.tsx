import React from "react";

function FamiliaMessi() {
  const events = [
    {
      year: "1987",
      title: "Nace Lionel Messi",
      description:
        "Lionel Messi nace el 24 de junio de 1987 en Rosario, Argentina.",
      color: "blue-500",
    },
    {
      year: "1988",
      title: "Nace Antonela Roccuzzo",
      description:
        "Antonela Roccuzzo nace el 26 de febrero de 1988 en Rosario, Argentina.",
      color: "green-500",
    },
    {
      year: "2008",
      title: "Conoce a Antonela Roccuzzo",
      description:
        "Lionel Messi conoce a Antonela Roccuzzo, su futura esposa, en su ciudad natal de Rosario.",
      color: "yellow-500",
    },
    {
      year: "2012",
      title: "Nace su primer hijo, Thiago",
      description:
        "Lionel Messi y Antonela Roccuzzo dan la bienvenida a su primer hijo, Thiago, el 2 de noviembre de 2012.",
      color: "orange-500",
    },
    {
      year: "2015",
      title: "Nace su segundo hijo, Mateo",
      description:
        "El 11 de septiembre de 2015, nace el segundo hijo de Lionel Messi y Antonela Roccuzzo, Mateo.",
      color: "red-500",
    },
    {
      year: "2017",
      title: "Se casa con Antonela Roccuzzo",
      description:
        "Lionel Messi y Antonela Roccuzzo se casan el 30 de junio de 2017 en Rosario, Argentina.",
      color: "pink-500",
    },
    {
      year: "2018",
      title: "Nace su tercer hijo, Ciro",
      description:
        "El 10 de marzo de 2018, nace el tercer hijo de Lionel Messi y Antonela Roccuzzo, Ciro.",
      color: "purple-500",
    },
    {
      year: "2021",
      title: "Se muda a París",
      description:
        "En agosto de 2021, Messi y su familia se mudan a París después de su transferencia al PSG.",
      color: "teal-500",
    },
    {
      year: "2023",
      title: "Se muda a Miami",
      description:
        "En julio de 2023, Messi y su familia se mudan a Miami después de su transferencia al Inter Miami.",
      color: "red-500",
    },    
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Línea de tiempo familiar de Messi
      </h2>
      <div className="relative">
        <div className="border-r-4 border-gray-300 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className="flex items-center w-full">
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8">
                    <div
                      className={`bg-${event.color} text-white p-4 rounded-lg inline-block shadow-lg transform transition-transform duration-300 hover:scale-105`}
                    >
                      <h3 className="text-lg font-bold">{event.year}</h3>
                      <h4 className="text-md mt-1">{event.title}</h4>
                      <p className="text-sm mt-2 text-justify">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`relative w-10 h-10 bg-${event.color} rounded-full border-4 border-white flex items-center justify-center`}
                  >
                    <div
                      className={`w-6 h-6 bg-${event.color} rounded-full`}
                    ></div>
                  </div>
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                  <div
                    className={`relative w-10 h-10 bg-${event.color} rounded-full border-4 border-white flex items-center justify-center`}
                  >
                    <div
                      className={`w-6 h-6 bg-${event.color} rounded-full`}
                    ></div>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div
                      className={`bg-${event.color} text-white p-4 rounded-lg inline-block shadow-lg transform transition-transform duration-300 hover:scale-105`}
                    >
                      <h3 className="text-lg font-bold">{event.year}</h3>
                      <h4 className="text-md mt-1">{event.title}</h4>
                      <p className="text-sm mt-2 text-justify">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FamiliaMessi;