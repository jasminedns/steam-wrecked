import Image from 'next/image';
import React from 'react';

const showcaseImages:string[] = [
  '/images/background/ScreenShot00012.png',
  '/images/background/ScreenShot00013.png',
  '/images/background/ScreenShot00009.png',
  '/images/background/ScreenShot00015.png',
];

// const AGShowcase = () => {
//   return (
//     <section className="w-full flex px-6 py-10 justify-center">
//       <div className=" m-8 ml-12 px-6 grid grid-cols-1 md:grid-cols-2 items-center">
//         {showcaseImages.map((src:string, index:number) => (
//           <div key={index} className='justify-center'>
//             <Image
//               src={src}
//               alt={`Showcase image ${index + 1}`}
//               width={0} height={0} sizes='100vw'
//               className="ml-10 my-4 object-contain w-[75%] h-auto"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AGShowcase;


const AGShowcase = () => {
  return (
    <>
      <div className='m-8 py-8 mb-0 flex flex-col lg:flex-row flex-wrap'>
        {
          showcaseImages.map((item: string, index: number) => (
            <div key={index} className='basis-[50%] justify-items-center'>
              <Image 
                src={item} 
                alt={`Showcase image ${index + 1}`} 
                width={0} 
                height={0} 
                sizes="100vw" 
                className="mb-[48px] object-contain w-[100%] md:w-[75%] h-auto border-2 border-black" 
              />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default AGShowcase