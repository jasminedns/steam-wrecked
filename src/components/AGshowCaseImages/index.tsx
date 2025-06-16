import Image from 'next/image';

const showcaseImages:string[] = [
  '/images/background/ScreenShot00012.png',
  '/images/background/ScreenShot00013.png',
  '/images/background/ScreenShot00009.png',
  '/images/background/ScreenShot00015.png',
];

const AGShowcase = () => {
  return (
    <>
      <div className='m-10 mb-0 md:px-0 lg:m-8 lg:mb-0 flex flex-col lg:flex-row flex-wrap'>
        {
          showcaseImages.map((item: string, index: number) => (
            <div key={index} className='basis-[50%] justify-items-center'>
              <Image 
                src={item} 
                alt={`Showcase image ${index + 1}`} 
                width={0} 
                height={0} 
                sizes="100vw" 
                className="mb-[80px] object-contain w-[100%] md:w-[75%] h-auto border-2 border-black" 
              />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default AGShowcase