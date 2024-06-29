// import CopaAmerica from '@/../../public/Awards/copa-america.png';
// import CopaConfederaciones from '@/../../public/Awards/Copa_Confederaciones.png';
// import Mundial2022 from '@/../../public/Awards/Champions.png';
// import Finallissima from '@/../../public/Awards/Artemio_franchi_trophy.png';
// import Image, { StaticImageData } from 'next/image';

// function ArgentinaTitles() {
//   return (
//     <div className="bg-gray-700 min-h-screen flex items-center justify-center w-full pt-8 pl-8 pr-8">
//       <div className="container mx-auto text-white">
//         <h1 className="text-4xl font-bold mb-8">Títulos de Lionel Messi con la Selección Argentina</h1>
//         {/* Trofeos Internacionales */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           {renderTrophyCard(CopaAmerica, "Copa América", 1)}
//           {renderTrophyCard(CopaConfederaciones, "Copa Confederaciones", 1)}
//           {renderTrophyCard(Mundial2022, "Mundial 2022", 1)}
//           {renderTrophyCard(Finallissima, "Finallissima", 1)} 
   
//         </div>
//       </div>
//     </div>
//   );
// }

// function renderTrophyCard(
//   imageSrc: string | StaticImageData,
//   title: string,
//   count: number
// ) {
//   const trophyCount = count.toString();

//   return (
//     <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg p-4 md:p-6 mb-8 md:mb-0 border">
//       <div className="bg-white p-4 md:p-6 text-center">
//         <Image src={imageSrc} alt={title} className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-4" />
//         <p className="text-xl font-bold text-gray-800">{title}</p>
//         <p className="text-base text-gray-600 mb-4">Cantidad: {trophyCount}</p>
//       </div>
//     </div>
//   );
// }

// export default ArgentinaTitles;

import Image from 'next/image';
import CopaAmerica from '@/../../public/copa-america.png';
import Mundial2022 from '@/../../public/Awards/world-cup.png';
import Finallissima from '@/../../public/Awards/Artemio_franchi_trophy.png';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from 'react';

function BarcelonaTitles() {
  return (
    <div className="bg-gray-700 min-h-screen flex items-center justify-center w-full pt-8 pl-8 pr-8 text-center">
      <div className="container mx-auto text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Titles in AFA</h1>
        {/* Trofeos Europeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ml-64">
          {renderTrophyCard(CopaAmerica, "Copa América", 1)}
        </div>

        {/* Trofeos Nacionales e Internacionales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
         {renderTrophyCard(Mundial2022, "Mundial 2022", 1)}
         {renderTrophyCard(Finallissima, "Finallissima", 1)} 
        </div>
      </div>
    </div>
  );
}

function renderTrophyCard(
  imageSrc: string | StaticImport,
  title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | undefined,
  count: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | PromiseLikeOfReactNode | Iterable<ReactNode> | undefined
) {
  const trophyTitle = title !== undefined ? title.toString() : "";
  const trophyCount = count !== undefined ? count.toString() : "0";

  return (
    <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg p-4 md:p-6 mb-8 md:mb-0 border">
      <div className="bg-white p-4 md:p-6 text-center">
        <Image src={imageSrc} alt={trophyTitle} className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-4" />
        <p className="text-xl font-bold text-gray-800">{trophyTitle}</p>
        <p className="text-base text-gray-600 mb-4">Amount: {trophyCount}</p>
      </div>
    </div>
  );
}


export default BarcelonaTitles;

