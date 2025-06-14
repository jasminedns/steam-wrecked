import Image from 'next/image';
import React from 'react';

const showcaseImages = [
  '/images/background/ScreenShot00012.png',
  '/images/background/ScreenShot00013.png',
  '/images/background/ScreenShot00014.png',
  '/images/background/ScreenShot00015.png',
];

const AGShowcase = () => {
  return (
    <section className="w-full px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {showcaseImages.map((src, index) => (
  <div
    key={index}
    className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md"
  >
    <Image
      src={src}
      alt={`Showcase image ${index + 1}`}
      fill
      className="object-cover"
      priority={index === 0}
    />
  </div>
))}

      </div>
    </section>
  );
};

export default AGShowcase;
