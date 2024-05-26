import React from 'react';

interface Familiar {
  nombre: string;
  descripcion: string;
  fechaNacimiento?: string;
  wikipedia?: string;
}

const FamiliaMessi: React.FC = () => {
  const familiares: Familiar[] = [
    {
      nombre: 'Antonela Roccuzzo',
      descripcion: 'Esposa de Lionel Messi. Se conocen desde la infancia y se casaron en 2017.',
      fechaNacimiento: '26 de febrero de 1988',
      wikipedia: 'https://es.wikipedia.org/wiki/Antonela_Roccuzzo',
    },
    {
      nombre: 'Thiago Messi',
      descripcion: 'Hijo mayor, nacido el 2 de noviembre de 2012.',
    },
    {
      nombre: 'Mateo Messi',
      descripcion: 'Segundo hijo, nacido el 11 de septiembre de 2015.',
    },
    {
      nombre: 'Ciro Messi',
      descripcion: 'Hijo menor, nacido el 10 de marzo de 2018.',
    },
    {
      nombre: 'Jorge Messi',
      descripcion: 'Padre de Lionel Messi, nacido el 16 de enero de 1958.',
    //   wikipedia: 'https://es.wikipedia.org/wiki/Jorge_Horacio_Messi',
    },
    {
      nombre: 'Celia María Cuccittini',
      descripcion: 'Madre de Lionel Messi, nacida el 23 de enero de 1960.',
    //   wikipedia: 'https://es.wikipedia.org/wiki/Celia_Cuccittini',
    },
    {
      nombre: 'Rodrigo Messi',
      descripcion: 'Hermano mayor de Lionel, nacido el 10 de febrero de 1980.',
    },
    {
      nombre: 'Matías Messi',
      descripcion: 'Hermano de Lionel, nacido el 23 de junio de 1982.',
    },
    {
      nombre: 'María Sol Messi',
      descripcion: 'Hermana menor de Lionel, nacida el 30 de noviembre de 1993.',
    },
  ];

  return (
    <div className="p-10 min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-white mb-12">Familia de Lionel Messi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {familiares.map((familiar, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-3xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-50 transition duration-500 rounded-xl" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{familiar.nombre}</h2>
              <p className="text-gray-700 mb-6">{familiar.descripcion}</p>
              {familiar.fechaNacimiento && (
                <p className="text-gray-500 mb-4">Fecha de nacimiento: {familiar.fechaNacimiento}</p>
              )}
              {familiar.wikipedia && (
                <a
                  href={familiar.wikipedia}
                  className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leer más en Wikipedia
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamiliaMessi;