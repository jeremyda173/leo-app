import React from 'react';
import Image from 'next/image';
import Messi1 from '@/../../public/Gallery/GalaORO.png';
import Messi2 from '@/../../public/Gallery/Messi2.png';
import Messi3 from '@/../../public/Gallery/MessiBayern.jpg';
import Messi4 from '@/../../public/Gallery/MessiFans.png';
import Messi5 from '@/../../public/Gallery/MessiFans2.png';

function Gallery() {
  const commonClasses = 'hover:opacity-60 grid grid-flow-col hover:grid-flow-row';
  const smallSize = 'w-full h-48 object-cover';
  const largeSize = 'w-full h-72 object-cover';

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 text-center bg-gray-50 text-black p-8'>
        <Image src={Messi1} alt={"Imagen 1"} className={`${commonClasses} ${smallSize}`}/>
        <Image src={Messi2} alt={"Imagen 1"} className={`${commonClasses} ${smallSize}`}/>
        <Image src={Messi3} alt={"Imagen 1"} className={`${commonClasses} ${largeSize}`}/>
        <Image src={Messi4} alt={"Imagen 1"} className={`${commonClasses} ${smallSize}`}/>
        <Image src={Messi5} alt={"Imagen 1"} className={`${commonClasses} ${smallSize}`}/>
        <Image src={Messi4} alt={"Imagen 1"} className={`${commonClasses} ${largeSize}`}/>
        <Image src={Messi4} alt={"Imagen 1"} className={`${commonClasses} ${smallSize}`}/>
        <Image src={Messi4} alt={"Imagen 1"} className={`${commonClasses} ${smallSize}`}/>
        <Image src={Messi4} alt={"Imagen 1"} className={`${commonClasses} ${smallSize}`}/>
        <Image src={Messi4} alt={"Imagen 1"} className={`${commonClasses} ${smallSize}`}/>
    </div>
  );
}

export default Gallery;
