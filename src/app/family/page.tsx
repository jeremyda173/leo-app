import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUser, FaBirthdayCake, FaWikipediaW } from 'react-icons/fa';

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
    },
    {
      nombre: 'Celia María Cuccittini',
      descripcion: 'Madre de Lionel Messi, nacida el 23 de enero de 1960.',
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
      <VerticalTimeline>
        {familiares.map((familiar, index) => (
          <VerticalTimelineElement
  key={index}
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
  date={familiar.fechaNacimiento}
  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  icon={<FaUser />}
>
  <h3 className="vertical-timeline-element-title">{familiar.nombre}</h3>
  <h4 className="vertical-timeline-element-subtitle">{familiar.descripcion}</h4>
  {familiar.wikipedia && (
    <a
      href={familiar.wikipedia}
      className="text-white hover:text-indigo-200 font-semibold transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWikipediaW className="inline-block mr-2" />
      Leer más en Wikipedia
    </a>
  )}
</VerticalTimelineElement>


        ))}
      </VerticalTimeline>
    </div>
  );
};

export default FamiliaMessi;
