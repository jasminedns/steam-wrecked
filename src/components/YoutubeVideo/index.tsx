"use client"
import React from "react"

const YoutubeVideo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-24">
      <h2 className="text-center text-[#E3E3E3] text-2xl md:text-3xl lg:text-4xl charter mb-6">
        WATCH TUTORIAL
      </h2>
      <div className="w-[90%] sm:w-[80%] md:w-[80%] lg:w-[65%] aspect-video overflow-hidden shadow-lg border-[2px] border-[#000]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/iSs5963gCWk"
          title="SteamWrecked Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default YoutubeVideo
