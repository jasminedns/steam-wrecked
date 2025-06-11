const YouTubeSection = () => {
    return (
        <div className="w-[70vw] mx-auto bg-transparent">
            <h2 className=" md:text-5xl charter text-center p-4 whitespace-nowrap text-lg">
                WATCH TUTORIAL
            </h2>
            <iframe 
                className="w-full border-4 aspect-video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share"
                max-width="100%"
                max-height="100%"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default YouTubeSection