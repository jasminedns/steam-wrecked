import BlogCard from "./BlogCard";
import blogs from "@/data/blog";
import '@/app/globals.css'

const BlogMediaSection = () => {
  return (
    <section className="w-full px-4 sm:px-10 py-16">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold uppercase mb-12 charter text-left">
        Blog
      </h2>
      <div className="flex flex-wrap justify-center gap-x-14 gap-y-20">
        {blogs.map((blog, index) => (
          <BlogCard key={index} title={blog.title} text={blog.text} link={blog.link} />
        ))}
      </div>
    </section>
  );
};

export default BlogMediaSection;
