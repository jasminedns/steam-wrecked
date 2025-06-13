'use client';

import React, { useState } from 'react';

const blogItems = [
  {
    title: 'A WORLD ABOVE, A WASTELAND BELOW',
    content: `Welcome to the Steam Walkers!
In the ashes of a collapsed world, humanity is split in two: the privileged few float high above in pristine sky-cities, while the rest cling to survival in the sun-scorched ruins below.

You are one of the forgotten — a scavenger of the Sandwalkers Guild. Trained to navigate the ruins of the old world, you risk everything to retrieve lost tech, water caches, and energy cells vital to your people’s survival.

But when a mission goes horribly wrong and your ship crashes into the dust-blown hellscape, you're left with nothing but your instincts, grit, and whatever scraps you can find.`,
  },
  {
    title: 'SURVIVAL MECHANICS IN STEAM WRECKED',
    content: `Waking up in a crashed ship in the middle of a blistering wasteland isn't ideal — but in Steam Wrecked, it's just the beginning.

As a scavenger left behind by the elite skybound elite, your mission is simple: survive, salvage, and repair your ship. Every step across the cracked earth brings danger — heatstroke, rogue drones, mutated wildlife, and desperate survivors like you.

But this isn’t just about staying alive — it's about earning your way back. Every piece of scrap, every repaired module, every hard-fought step brings you closer to redemption and return.`,
  },
];

const MediaBlogSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="w-full py-16 px-6 font-montserrat">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-2xl text-black font-bold pb-1">
          BLOG
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {blogItems.map((item, index) => {
          const isExpanded = expandedIndex === index;
          const shortText = item.content.split('\n').slice(0, 2).join('\n') + '...';

          return (
            <div
               key={index}
              className="bg-[#434343] border-[10px] border-black rounded-[60px] p-8 text-white flex flex-col justify-baseline shadow-xl w-full max-w-[350px] mx-auto gap-2 md:max-w-[400px] lg:max-w-[450px] hover:scale-105 transition-transform duration-200 cursor-pointer"
            >

              <h3 className="text-lg font-bold mb-2 text-center uppercase">{item.title}</h3>
              <p className="text-sm text-gray-200 whitespace-pre-line mb-4 text-center leading-relaxed">
                {isExpanded ? item.content : shortText}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="mx-auto bg-gradient-to-b from-[#FF4500] to-[#FFD700] text-white px-4 py-2 rounded-full text-sm font-bold shadow-inner hover:scale-105 transition-transform duration-200"
              >
                {isExpanded ? 'Read Less' : 'Read More →'}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MediaBlogSection;
