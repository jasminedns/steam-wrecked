'use client'
import { useState } from 'react';
import { YoutubeLogoIcon } from '@phosphor-icons/react';

const AG_Trailer_Div = () => {
    const [isPlaying, setIsPlaying] = useState(false);

  const videoId = 'GyO1MtLhyt0'; 
    return (
        <>
            <div className="flex flex-col m-6 lg:m-8 lg:basis-[50%] items-center">
                <p className="uppercase text-[24px] md:text-[32px] text-center charter m-6 mb-0 text-[#F5F5F5]">Trailer</p>
                <div className=" m-4 lg:mx-0 sm:m-6 relative w-full max-w-[450px] md:max-w-[500px] lg:max-w-[500px] h-auto
                  aspect-video rounded-lg overflow-hidden">
                    {isPlaying ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                          title="YouTube Video"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                        ) : (
                            
                        <div className="w-full h-full bg-black flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)}>
                            <YoutubeLogoIcon fill='red' size={56}/>
                        </div>
                    )}
                </div>
                
            </div>   
        </>
    )
}

export default AG_Trailer_Div