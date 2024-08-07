import SuperCopaFrancia from '@/../../public/Awards/SupercopaFrancia.png';
import Liga from '@/../../public/Awards/Ligue_1.png';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from 'react';

function PsgTitles() {
  return (
    <div className="bg-gray-700 min-h-screen flex items-center justify-center w-full pt-8 pl-8 pr-8">
      <div className="container mx-auto text-white">
        <h1 className="text-4xl font-bold mb-8 hover:bg-sky-700 text-center">Titles in Inter Miami</h1>
        {/* Trofeos Europeos */}
        <div className="grid grid-cols-1 gap-8 mb-2">
          {renderTrophyCard(SuperCopaFrancia, "Supercopa de Francia", 1)}
          {renderTrophyCard(Liga, "Ligue 1", 2)}
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
    <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg p-4 md:p-6 mb-8 md:mb-0 border hover:bg-gray-600 transition duration-300">
      <div className="bg-white p-4 md:p-6 text-center">
        <Image src={imageSrc} alt={trophyTitle} className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-4" />
        <p className="text-xl font-bold text-gray-800">{trophyTitle}</p>
        <p className="text-base text-gray-600 mb-4">Amount: {trophyCount}</p>
      </div>
    </div>
  );
}

export default PsgTitles;
