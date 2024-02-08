import ChampionsImage from '@/../../public/Awards/Champions.png';
import SuperCopaEuropa from '@/../../public/Awards/supercopa.png'; 
import Liga from '@/../../public/Awards/LaLiga.png'; 
import CopaRey from '@/../../public/Awards/Copa_del_Rey.png';
import MundialC from '@/../../public/Awards/Copa_Mundial_de_Clubes.png';
import SuperCopaSpain from '@/../../public/Awards/SupercopaEspaña.png';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from 'react';

function BarcelonaTitles() {
    return (
      <div className="bg-gray-700 min-h-screen flex items-center justify-center pt-8">
        <div className="container mx-auto">
  
          {/* Trofeos Europeos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {renderTrophyCard(ChampionsImage, "UEFA Champions League", 4)}
            {renderTrophyCard(SuperCopaEuropa, "Super Copa de Europa", 3)}
            {/* Agregar más trofeos europeos según sea necesario */}
          </div>
  
          {/* Trofeos Nacionales e Internacionales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {renderTrophyCard(CopaRey, "Copa del Rey", 8)}
            {renderTrophyCard(MundialC, "FIFA Club World Cup", 3)}
            {renderTrophyCard(SuperCopaSpain, "Supercopas de España", 7)}
            {renderTrophyCard(Liga, "Ligas de España", 10)}
            {/* Agregar más trofeos nacionales e internacionales según sea necesario */}
          </div>
        </div>
      </div>
    );
  }
  
  // Función para renderizar tarjeta de trofeo
  function renderTrophyCard(imageSrc: string | StaticImport, title: string, count: number | undefined) {
    // Asegurarse de que title y count sean strings
    const trophyTitle = title || "";
    const trophyCount = count !== undefined ? count.toString() : "";
  
    return (
      <div className="bg-gray-800 rounded-md p-4 md:p-6 mb-4 md:mb-0">
        <div className="bg-white p-4 md:p-6 text-center">
          <Image src={imageSrc} alt={trophyTitle} className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-4" />
          <p className="text-lg md:text-xl font-bold">{trophyTitle}: {trophyCount}</p>
        </div>
      </div>
    );
  }
  
  export default BarcelonaTitles;
  