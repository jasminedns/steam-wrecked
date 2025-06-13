import ReadMoreButton from "./ReadMoreButton";


const BlogCard = ({
    title,
    text,
    link,
  }: {
    title: string;
    text: string;
    link: string;
  }) => {
    return (
      <div className="flex flex-col justify-between items-center text-center px-8 py-12 bg-[rgba(125,125,125,0.38)] border-[#0F1D21] border-[12px] rounded-[2rem] text-white w-full max-w-[450px] shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-bold leading-snug uppercase mb-6 font-[charter]">
          {title}
        </h3>
        <p className="text-base sm:text-lg leading-relaxed font-[itf-devanagari-marathi] max-w-[35ch] mx-auto">
          {text}
        </p>
        <div className="mt-6">
          <ReadMoreButton href={link} />
        </div>
      </div>
    );
  };

  export default BlogCard