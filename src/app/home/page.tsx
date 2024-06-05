/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Portada from '@/../../public/Portada.jpg';
import Masia from '@/../../public/masia.jpg';
import MessiFr from '@/../../public/MessiFr.jpg';
import Footer from '@/app/components/footer';
import Menu from '@/app/components/menu';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen flex flex-col relative overflow-hidden`}>
      <Menu darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Contenido del Dashboard */}
      <div className="flex flex-col relative z-10 container mx-auto p-8">
        <h1 className="text-3xl text-center font-bold mb-6 text-blue-600">Welcome to the Leo Messi Page</h1>
        {/* Primer Bloque */}
        <div className='flex flex-col md:flex-row mb-12 mt-20'>
          {/* Imagen 1 */}
          <div className='w-full md:w-1/2 rounded overflow-hidden mb-6 md:mb-0 md:mr-6'>
            <div className='relative shadow-lg'>
              <Image src={Portada} alt={'Messi'} layout="responsive" />
            </div>
          </div>

          {/* Texto 1 */}
          <div className='w-full md:w-1/2 mt-4'>
            <p className='text-justify mb-4 leading-relaxed'>
              En una cálida tarde de verano en Rosario, Argentina, un 24 de junio de 1987 nacía un niño destinado a cambiar la historia del fútbol. Lionel Messi llegó al mundo el 24 de junio de 1987, y desde sus primeros días, su destino estaba vinculado al balompié. Con el balón como compañero inseparable, Messi demostró un talento excepcional desde temprana edad, deslumbrando a todos los que tenían la suerte de verlo jugar en las calles polvorientas de su ciudad natal.
            </p>
            <p className='text-justify leading-relaxed'>
              A los 13 años, el destino le tenía preparado un giro que cambiaría su vida para siempre. Messi dejó su Argentina natal y partió hacia Barcelona, España, para unirse a La Masia, la prestigiosa academia juvenil del FC Barcelona. La transición no fue fácil; extrañaba su tierra, su familia, pero el sueño de conquistar el fútbol europeo lo impulsaba a superar cualquier obstáculo.
            </p>
          </div>
        </div>
        {/* Segundo Bloque */}
        <div className='flex flex-col md:flex-row-reverse mb-12'>
          {/* Imagen 2 (en el lado izquierdo) */}
          <div className='w-full md:w-1/3 rounded overflow-hidden mb-6 md:mb-0 md:mr-6'>
            <div className='relative shadow-lg'>
              <Image src={MessiFr} alt={'Messi'} layout="responsive" />
            </div>
          </div>

          {/* Texto 2 (en el lado derecho) */}
          <div className='w-full md:w-2/3 mt-4 md:mr-12'>
            <p className='text-justify mb-4 leading-relaxed'>
              La hazaña dejó a todos boquiabiertos. El entrenador Frank Rijkaard, impresionado por la destreza y madurez futbolística de Messi, no dudó en darle la oportunidad de brillar en la liga española. Desde ese momento, el mundo fue testigo del surgimiento de un fenómeno. Messi no solo cumplió con las expectativas, las superó con creces.
            </p>
            <p className='text-justify leading-relaxed'>
              Temporada tras temporada, Messi cosechó éxitos con el Barcelona, desbordando rivales, anotando goles imposibles y creando oportunidades para sus compañeros. Su combinación única de velocidad, agilidad y precisión en el juego lo llevó a ser reconocido como uno de los mejores futbolistas de todos los tiempos.
            </p>
          </div>
        </div>

        {/* Tercer Bloque */}
        <div className='flex flex-col md:flex-row mb-12'>
          {/* Imagen 3 (en el lado izquierdo) */}
          <div className='w-full md:w-1/2 rounded overflow-hidden mb-6 md:mb-0 md:mr-6'>
            <div className='relative shadow-lg'>
              <Image src={Masia} alt={'Messi'} layout="responsive" />
            </div>
          </div>

          {/* Texto 3 (en el lado derecho) */}
          <div className='w-full md:w-1/2 mt-4'>
            <p className='text-justify mb-4 leading-relaxed'>
              En La Masia, Messi continuó su ascenso meteórico. Su habilidad con el balón, su visión de juego y su velocidad asombraban a sus compañeros y entrenadores por igual. El joven argentino se convirtió en una joya preciada, y su nombre empezó a resonar en todo el mundo futbolístico. A los 16 años, llegó el momento crucial: Lionel Messi debutó con el primer equipo del FC Barcelona en un partido amistoso.
            </p>
            <p className='text-justify leading-relaxed'>
              Pero Messi también llevó su genialidad al escenario internacional. Con la selección argentina, vivió momentos épicos y desafíos. La Copa del Mundo de la FIFA se convirtió en una búsqueda incansable para Messi, un deseo ardiente de llevar a su país a la gloria máxima. Cada torneo era una nueva oportunidad para que la pulga demostrara su valía en el escenario mundial.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
