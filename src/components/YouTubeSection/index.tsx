const YouTubeSection = () => {
    return (
        <div className="w-[70vw] mx-auto bg-transparent">
            <iframe 
                className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] border-4"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default YouTubeSection