export default function SocialMediaSection() {
  
    const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/yourhandle' },
    { name: 'X', url: 'https://x.com/yourhandle' },
    { name: 'YouTube', url: 'https://youtube.com/yourchannel' },
    { name: 'Itch.io', url: 'https://yourname.itch.io' }
  ];

  return (
    <div className="pb-2 pt-24 sm:pb-6 sm:pt-40">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm sm:text-3xl charter mb-4 sm:mb-8 tracking-wider">
          FOLLOW US
        </h2>

        <div className="flex justify-center items-center gap-4 sm:gap-8">
    
          <a href={socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
            <div className="w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-10 sm:h-10 text-white fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </div>
          </a>

          <a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
            <div className="w-8 h-8 sm:w-16 sm:h-16 bg-black rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
          </a>

          <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
            <div className="w-8 h-8 sm:w-16 sm:h-16 bg-red-600 rounded-2xl flex items-center justify-center">
              <svg className="w-7 h-7 sm:w-12 sm:h-12 text-white fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
          </a>

          <a href={socialLinks[3].url} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform">
            <div className="w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-10 sm:h-10 text-white fill-current" viewBox="0 0 24 24">
                <path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 01-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 01-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 01-1.95.795c-.092 0-.183-.004-.273-.013v5.255c0 .387.020.703.047 1.066.096 2.243 1.006 3.48 3.83 3.48h10.13c2.828 0 3.546-1.106 3.652-3.38l.012-.53V9.787l-.045.002a2.836 2.836 0 01-1.996-.798 2.74 2.74 0 01-.47-.602c-.125.22-.264.412-.445.59-.5.49-1.19.795-1.948.795a2.786 2.786 0 01-1.948-.795c-.18-.178-.32-.37-.445-.59-.127.222-.302.412-.484.59a2.788 2.788 0 01-1.95.795h-.024a2.79 2.79 0 01-1.95-.795 2.732 2.732 0 01-.464-.602z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
