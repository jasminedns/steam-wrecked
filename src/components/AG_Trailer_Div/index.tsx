'use client'
import YouTube from 'react-youtube'
import { useState } from 'react';
import { PlayCircleIcon } from '@phosphor-icons/react';
const AG_Trailer_Div = () => {
    const [isPlaying, setIsPlaying] = useState(false);

  const videoId = 'dQw4w9WgXcQ'; 
    return (
        <>
            <div className="flex flex-col m-8">
                <p className="uppercase text-3xl text-left charter mx-6 text-[#F5F5F5]">Trailer</p>
                <div className="w-full max-w-96 m-6 aspect-video relative">
      {isPlaying ? (
        <YouTube
          videoId={videoId}
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 1,
            },
          }}
          className="w-full h-full"
        />
      ) : (
        <div
          className="w-full h-full bg-black flex items-center justify-center cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <PlayCircleIcon size={64} color="white" weight="fill" />
        </div>
      )}
    </div>
            </div>
        </>
    )
}

export default AG_Trailer_Div