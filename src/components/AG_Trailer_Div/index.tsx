'use client'
import { useState } from 'react';
import { YoutubeLogoIcon } from '@phosphor-icons/react';

const AG_Trailer_Div = () => {
    const [isPlaying, setIsPlaying] = useState(false);

  const videoId = 'GyO1MtLhyt0'; 
    return (
        <>
            <div className="flex flex-col m-4 md:m-8 md:basis-[50%]">
                <p className="uppercase text-3xl text-center md:text-left charter mx-6 text-[#F5F5F5]">Trailer</p>
                  <div className="relative w-full max-w-[300px] md:max-w-[500px] self-center md:self-start m-4 md:m-6 aspect-video rounded-lg overflow-hidden">
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