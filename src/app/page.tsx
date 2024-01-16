/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';
import Portada from '@/../../public/Portada.jpg';
import Masia from '@/../../public/masia.jpg';
import MessiFr from '@/../../public/MessiFr.jpg';
import Footer from '@/app/components/footer';
import Menu from '@/app/components/menu';

const Dashboard = () => {

  return (

   

    <div className="min-h-screen flex flex-col relative overflow-hidden"> 
    
    <Menu />

{/* Contenido del Dashboard */}
<div className="flex flex-col relative z-10 container mx-auto p-8">
<p className="text-lg text-center font-bold mb-4">Welcome to page Leo Messi</p>

  {/* Primer Bloque */}
  <div className='flex flex-col md:flex-row mb-8 mt-22'>
    {/* Imagen 1 */}
    <div className='w-full md:w-1/2 rounded overflow-hidden mb-4 md:mb-0 md:mr-4'>
      <div className='relative'>
        <Image src={Portada} alt={'Messi'} height={300} width={600} />
      </div>
    </div>

    {/* Texto 1 */}
    <div className='w-full md:w-1/2 mt-4'>
      <p className='text-justify mb-4'>             
        En una cálida tarde de verano en Rosario, Argentina, un 24 de junio de 1987 nacía un niño destinado a cambiar la historia del fútbol. Lionel Messi llegó al mundo el 24 de junio de 1987, y desde sus primeros días, su destino estaba vinculado al balompié. Con el balón como compañero inseparable, Messi demostró un talento excepcional desde temprana edad, deslumbrando a todos los que tenían la suerte de verlo jugar en las calles polvorientas de su ciudad natal.
      </p>
      <p className='text-justify'>
        A los 13 años, el destino le tenía preparado un giro que cambiaría su vida para siempre. Messi dejó su Argentina natal y partió hacia Barcelona, España, para unirse a La Masia, la prestigiosa academia juvenil del FC Barcelona. La transición no fue fácil; extrañaba su tierra, su familia, pero el sueño de conquistar el fútbol europeo lo impulsaba a superar cualquier obstáculo.
      </p>
    </div>
  </div>

{/* Segundo Bloque */}
<div className='flex flex-col md:flex-row-reverse mb-8'>
  {/* Imagen 2 (en el lado izquierdo) */}
  <div className='w-full md:w-1/3 rounded overflow-hidden mb-4 md:mb-0 md:mr-4'>
    <div className='relative'>
      <Image src={MessiFr} alt={'Messi'} height={200} width={400} />
    </div>
  </div>

  {/* Texto 2 (en el lado derecho) */}
  <div className='w-full md:w-4/5 mt-8 md:mr-12'>
    <p className='text-justify mb-4'>             
      La hazaña dejó a todos boquiabiertos. El entrenador Frank Rijkaard, impresionado por la destreza y madurez futbolística de Messi, no dudó en darle la oportunidad de brillar en la liga española. Desde ese momento, el mundo fue testigo del surgimiento de un fenómeno. Messi no solo cumplió con las expectativas, las superó con creces.
    </p>
    <p className='text-justify'>             
      Temporada tras temporada, Messi cosechó éxitos con el Barcelona, desbordando rivales, anotando goles imposibles y creando oportunidades para sus compañeros. Su combinación única de velocidad, agilidad y precisión en el juego lo llevó a ser reconocido como uno de los mejores futbolistas de todos los tiempos.
    </p>
  </div>
</div>


  {/* Tercer Bloque */}
  <div className='flex flex-col md:flex-row mb-8'>
    {/* Imagen 3 (en el lado izquierdo) */}
    <div className='w-full md:w-1/2 rounded overflow-hidden mb-4 md:mb-0 md:mr-4'>
      <div className='relative'>
        <Image src={Masia} alt={'Messi'} height={300} width={600} />
      </div>
    </div>

    {/* Texto 3 (en el lado derecho) */}
    <div className='w-full md:w-1/2 mt-4'>
      <p className='text-justify mb-4'>             
        En La Masia, Messi continuó su ascenso meteórico. Su habilidad con el balón, su visión de juego y su velocidad asombraban a sus compañeros y entrenadores por igual. El joven argentino se convirtió en una joya preciada, y su nombre empezó a resonar en todo el mundo futbolístico. A los 16 años, llegó el momento crucial: Lionel Messi debutó con el primer equipo del FC Barcelona en un partido amistoso.
      </p>
      <br></br>
      <p className='text-justify'>             
        Pero Messi también llevó su genialidad al escenario internacional. Con la selección argentina, vivió momentos épicos y desafíos. La Copa del Mundo de la FIFA se convirtió en una búsqueda incansable para Messi, un deseo ardiente de llevar a su país a la gloria máxima. Cada torneo era una nueva oportunidad para que la pulga demostrara su valía en el escenario mundial.
      </p>
    </div>
  </div>
 </div>
 < Footer />
</div>


  );
};

export default Dashboard;
