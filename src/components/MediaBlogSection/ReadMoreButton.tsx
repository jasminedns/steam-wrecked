import '@/app/globals.css'

const ReadMoreButton = ({ href }: { href: string }) => (
    <a href={href}>
      <button
        className="rounded-full px-5 py-1.5 text-sm font-bold text-white charter
        bg-[radial-gradient(circle,_#EC8C2D_0%,_#761E1C_100%)]
        transition duration-300 ease-in-out
        shadow-[0_0_8px_3px_rgba(236,140,45,0.4)]
        hover:shadow-[0_0_12px_5px_rgba(236,140,45,0.6)]
        hover:scale-105"
      >
        READ MORE →
      </button>
    </a>
  );
  
  export default ReadMoreButton;
  