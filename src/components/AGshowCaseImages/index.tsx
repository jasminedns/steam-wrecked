import Image from 'next/image';

const showcaseImages:string[] = [
  '/images/screenshots/ScreenShot00010.png',
  '/images/screenshots/ScreenShot00011.png',
  '/images/screenshots/ScreenShot00009.png',
  '/images/screenshots/ScreenShot00007.png',
];

const AGShowcase = () => {
  return (
    <>
      <div className='m-10 mb-0 md:px-0 lg:m-8 lg:mb-0 flex flex-col lg:flex-row lg:flex-wrap'>
        {
          showcaseImages.map((item: string, index: number) => (
            <div key={index} className='lg:basis-[50%] basis-[100%] justify-items-center'>
              <Image 
                src={item} 
                alt={`Showcase image ${index + 1}`} 
                width={0} 
                height={0} 
                sizes="100vw" 
                className="mb-[80px]  w-[100%] md:w-[75%] h-auto border-2 border-black object-contain" 
              />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default AGShowcase