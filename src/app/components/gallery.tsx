import Image from 'next/image';
import Messi1 from '@/../../public/Gallery/GalaORO.png';
import Messi2 from '@/../../public/Gallery/Messi2.png';
import Messi3 from '@/../../public/Gallery/MessiBayern.jpg';
import Messi4 from '@/../../public/Gallery/MessiFans.png';
import Messi5 from '@/../../public/Gallery/TrofeosMess.png';
import Messi6 from '@/../../public/Gallery/MessiFans2.png';
import Messi7 from '@/../../public/Gallery/MessiPsg.png';
import Messi8 from '@/../../public/Gallery/MessiBarc2.png';
import Messi9 from '@/../../public/Gallery/MessiMia.png';
import Messi10 from '@/../../public/Gallery/freek.png';
import Messi11 from '@/../../public/Gallery/MssiCity.png';
import Messi12 from '@/../../public/Gallery/messichamps.png';
import Messi13 from '@/../../public/Gallery/entrevista.png';
import { translate } from '@/app/components/translate';

function Gallery() {
  const commonClasses = 'transition duration-300 ease-in-out transform hover:scale-105 opacity-70 hover:opacity-100 shadow-lg border rounded-lg overflow-hidden';
  const smallSize = 'w-full h-full object-cover';
  const largeSize = 'w-full h-full object-cover';
  const tooltipClasses = 'absolute bg-black text-white text-sm px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 pointer-events-none';

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const tooltip = target.querySelector('.tooltip');
    if (tooltip) tooltip.classList.add('opacity-100');
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const tooltip = target.querySelector('.tooltip');
    if (tooltip) tooltip.classList.remove('opacity-100');
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4 bg-white relative'>
      <div className='sm:col-span-2 md:col-span-3 xl:col-span-3 row-span-2 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi1} alt="Imagen 1" className={`${commonClasses} ${largeSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.gala")}</span>
      </div>
      <div className='sm:col-span-2 md:col-span-3 xl:col-span-3 row-span-2 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi2} alt="Imagen 2" className={`${commonClasses} ${largeSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.golazo")}</span>
      </div>
      <div className='col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-2 row-span-1 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi3} alt="Imagen 3" className={`${commonClasses} ${smallSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.bayern")}</span>
      </div>
      <div className='col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-2 row-span-1 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi4} alt="Imagen 4" className={`${commonClasses} ${smallSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.fans")}</span>
      </div>
      <div className='col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-2 row-span-1 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi5} alt="Imagen 5" className={`${commonClasses} ${smallSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.palmares")}</span>
      </div>
      <div className='sm:col-span-2 md:col-span-3 xl:col-span-4 row-span-2 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi6} alt="Imagen 6" className={`${commonClasses} ${largeSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.fans")}</span>
      </div>
      <div className='col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-2 row-span-2 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi7} alt="Imagen 7" className={`${commonClasses} ${largeSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.psg")}</span>
      </div>
      <div className='col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-2 row-span-1 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi8} alt="Imagen 8" className={`${commonClasses} ${smallSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.seductor")}</span>
      </div>
      <div className='col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-2 row-span-1 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi9} alt="Imagen 9" className={`${commonClasses} ${smallSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.miami")}</span>
      </div>
      <div className='col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-2 row-span-1 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi10} alt="Imagen 10" className={`${commonClasses} ${smallSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.tirosLibres")}</span>
      </div>
      <div className='sm:col-span-2 md:col-span-3 xl:col-span-4 row-span-2 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi11} alt="Imagen 11" className={`${commonClasses} ${largeSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.city")}</span>
      </div>
      <div className='col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-2 row-span-1 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi12} alt="Imagen 12" className={`${commonClasses} ${smallSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.champions")}</span>
      </div>
      <div className='col-span-1 sm:col-span-1 md:col-span-1 xl:col-span-2 row-span-1 p-2 relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image src={Messi13} alt="Imagen 13" className={`${commonClasses} ${smallSize}`} />
        <span className={`${tooltipClasses} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip`}>{translate("imagenes.entrevista")}</span>
      </div>
    </div>
  );
}

export default Gallery;
