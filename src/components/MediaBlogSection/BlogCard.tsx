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
    <div className="bg-[#0F1D21] p-[12px] rounded-[2rem] w-full max-w-[450px]">
      <div className="bg-[rgba(125,125,125,0.38)] rounded-[1.5rem] px-8 py-12 text-white text-center flex flex-col justify-between items-center h-full">
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
    </div>
  );
};


  export default BlogCard