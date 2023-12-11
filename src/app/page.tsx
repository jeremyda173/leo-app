/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react';
import MessiLogo from '@/../../public/messi-logo.png';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Portada from '@/../../public/Portada.jpg';
import { FaInstagram, FaFacebook, FaGoogle } from 'react-icons/fa'; // Importa los íconos de Font Awesome (ajusta según la bi
import Masia from '@/../../public/masia.jpg';

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState(null);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Menú Horizontal */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 flex items-center justify-between">
        {/* Logo de Messi */}
        <div className="flex items-center">
          <Image src={MessiLogo} alt="Messi Logo" width={50} height={50} />
        </div>

        {/* Opciones del Menú */}
        <div className="flex items-center">
          <a
            href="#"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'home' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('home')}
            onMouseLeave={() => setActiveOption(null)}
          >
            Home
          </a>
          <a
            href="/match-history"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'matchHistory' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('matchHistory')}
            onMouseLeave={() => setActiveOption(null)}
          >
            Match History
          </a>
          <a
            href="/awards"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'awards' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('awards')}
            onMouseLeave={() => setActiveOption(null)}
          >
            Awards
          </a>
          <a
            href="/dashboard"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'teams' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('teams')}
            onMouseLeave={() => setActiveOption(null)}
          >
            Teams
          </a>
  
          <a
            href="/family"
            className={`mr-4 hover:text-gray-300 ${activeOption === 'family' ? 'border-b-2 border-white' : ''}`}
            onMouseEnter={() => setActiveOption('family')}
            onMouseLeave={() => setActiveOption(null)}
          >
            Family
          </a>
          {/* Agrega más opciones según sea necesario */}
        </div>
      </div>

      {/* Contenido del Dashboard */}
      <div className="flex flex-col md:flex-row relative z-10 container mx-auto p-8">
      {/* Imagen */}
        <div className='w-full md:w-3/4 rounded overflow-hidden mb-8 md:mb-0 md:mr-8 mt-20'>
          <div className='relative'>
            <Image src={Portada} alt={'Messi'} />
          </div>
        </div>

      {/* Texto */}
        <div className="flex flex-col max-w-md">
          <p className="text-lg font-bold mb-4">Welcome to page Leo Messi</p>

             {/* Sección de la historia personal de Messi */}
          <div className="mb-8">
           <h2 className="text-lg font-bold mb-2">Messi's Personal History</h2>
            <p className='text-justify'>             
            En una cálida tarde de verano en Rosario, Argentina, un 24 de junio de 1987 nacía un niño destinado a cambiar la historia del fútbol. Lionel Messi llegó al mundo el 24 de junio de 1987, y desde sus primeros días, su destino estaba vinculado al balompié. Con el balón como compañero inseparable, Messi demostró un talento excepcional desde temprana edad, deslumbrando a todos los que tenían la suerte de verlo jugar en las calles polvorientas de su ciudad natal.
            </p>
            <br></br>
            <p className='text-justify'>
            A los 13 años, el destino le tenía preparado un giro que cambiaría su vida para siempre. Messi dejó su Argentina natal y partió hacia Barcelona, España, para unirse a La Masia, la prestigiosa academia juvenil del FC Barcelona. La transición no fue fácil; extrañaba su tierra, su familia, pero el sueño de conquistar el fútbol europeo lo impulsaba a superar cualquier obstáculo.
            </p>
            <br></br>
            <p className='text-justify'>             
            En La Masia, Messi continuó su ascenso meteórico. Su habilidad con el balón, su visión de juego y su velocidad asombraban a sus compañeros y entrenadores por igual. El joven argentino se convirtió en una joya preciada, y su nombre empezó a resonar en todo el mundo futbolístico. A los 16 años, llegó el momento crucial: Lionel Messi debutó con el primer equipo del FC Barcelona en un partido amistoso.
            </p>
            <br></br>
            <p className='text-justify'>             
            La hazaña dejó a todos boquiabiertos. El entrenador Frank Rijkaard, impresionado por la destreza y madurez futbolística de Messi, no dudó en darle la oportunidad de brillar en la liga española. Desde ese momento, el mundo fue testigo del surgimiento de un fenómeno. Messi no solo cumplió con las expectativas, las superó con creces.
            </p>
            <br></br>
            <p className='text-justify'>             
            Temporada tras temporada, Messi cosechó éxitos con el Barcelona. Su capacidad para desbordar rivales, anotar goles imposibles y crear oportunidades para sus compañeros le valieron múltiples títulos, incluyendo la Liga de Campeones de la UEFA y varios títulos de La Liga. Su combinación única de velocidad, agilidad y precisión en el juego lo llevó a ser reconocido como uno de los mejores futbolistas de todos los tiempos.
            </p>
            <br></br>
            <p className='text-justify'>             
            Pero Messi también llevó su genialidad al escenario internacional. Con la selección argentina, vivió momentos épicos y desafíos. La Copa del Mundo de la FIFA se convirtió en una búsqueda incansable para Messi, un deseo ardiente de llevar a su país a la gloria máxima. Cada torneo era una nueva oportunidad para que la pulga demostrara su valía en el escenario mundial.
            </p>
            <br></br>
            <p className='text-justify'>             
            La historia de Lionel Messi no solo es la de un futbolista excepcional, sino también la de un joven que, con determinación y talento desbordante, se elevó desde las calles de Rosario hasta la cima del fútbol mundial. Su legado va más allá de los récords y los trofeos; es la inspiración de una generación que ve en él la prueba de que los sueños, por más imposibles que parezcan, pueden hacerse realidad. Y así, mientras el sol se pone en Barcelona y Rosario, el nombre de Messi resuena como un eco eterno en los corazones de los amantes del fútbol en todo el mundo.
            </p>
            <br></br>
            <p className='text-justify'>             
            En 2010, Messi lideró al Barcelona hacia un triplete histórico, ganando la Liga, la Copa del Rey y la Liga de Campeones. Su actuación sobresaliente le valió su primer Balón de Oro, el primero de muchos. Sin embargo, su ambición no se detenía allí. Anhelaba más títulos, más éxitos y la posibilidad de dejar una huella imborrable en la historia del fútbol.
            </p>
            <br></br>
            <p className='text-justify'>             
            La temporada 2011-2012 marcó un hito significativo en la carrera de Messi. Superó el récord de Gerd Muller de más goles en un año calendario, anotando 91 veces entre competiciones de clubes y partidos internacionales. Este logro monumental solidificó su posición como uno de los mejores jugadores de todos los tiempos y generó elogios de todas partes del mundo.
            </p>
            <br></br>
            <p className='text-justify'>             
            Sin embargo, el capítulo más emotivo en la historia de Messi llegó en 2021. Después de más de dos décadas en el FC Barcelona, problemas financieros llevaron al club a una dolorosa despedida con su ícono máximo. Las lágrimas en los ojos de Messi y el abrazo con sus compañeros de equipo resonaron en todo el mundo, marcando el fin de una era dorada en el Camp Nou.
            </p>
            <br></br>
            <p className='text-justify'>             
            Pero la historia de Messi estaba lejos de terminar. Un nuevo capítulo comenzó cuando firmó con el París Saint-Germain (PSG). Aunque el escenario era diferente, la magia de Messi persistía. Junto a estrellas como Neymar y Kylian Mbappé, el argentino continuó deleitando a los aficionados con su genialidad en el campo.
            </p>
            <br></br>
            <p className='text-justify'>             
            La temporada 2011-2012 marcó un hito significativo en la carrera de Messi. Superó el récord de Gerd Muller de más goles en un año calendario, anotando 91 veces entre competiciones de clubes y partidos internacionales. Este logro monumental solidificó su posición como uno de los mejores jugadores de todos los tiempos y generó elogios de todas partes del mundo.
            </p>
            <br></br>

            {/* Agrega más detalles de la historia personal de Messi según sea necesario */}
          </div>

          {/* Otro contenido del dashboard */}
          <p>Contenido del dashboard...</p>
        </div>
      </div>

      {/* Pie de página con enlaces a redes sociales, íconos y derechos reservados */}
      <footer className="bg-gray-800 text-white p-4 text-center flex items-center justify-center space-x-4">
        <a href="https://www.instagram.com/leomessi" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} color="#fff" />
        </a>
        <a href="https://www.facebook.com/LeoMessi" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} color="#fff" />
        </a>
        <a href="https://messi.com/fundacion-leo-messi/" target="_blank" rel="noopener noreferrer">
          <FaGoogle size={30} color="#fff" />
        </a>
        {/* Agrega más enlaces y íconos según sea necesario */}
        <p className="ml-2">&copy; 2023 Messi Fan Club. Todos los derechos reservados.</p>
      </footer>
    </div>


  );
};

export default Dashboard;
