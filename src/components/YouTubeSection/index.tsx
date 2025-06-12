const YouTubeSection = () => {
    return (
        <div className="w-[70vw] mx-auto">
            <h2 className=" md:text-5xl charter text-center p-4 whitespace-nowrap text-lg">
                WATCH TUTORIAL
            </h2>
            <iframe 
                className="w-full border-4 aspect-video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                style={{ border: 'none' }}
                allowFullScreen
            />
        </div>
    )
}

export default YouTubeSection