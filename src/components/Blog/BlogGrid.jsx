import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs = [] }) {
  if (!blogs.length) {
    return (
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          py-24
          text-center
        "
      >
        <div
          className="
            w-24
            h-24
            rounded-full
            bg-[#071122]
            border
            border-white/10
            flex
            items-center
            justify-center
            text-4xl
            mb-6
          "
        >
          📝
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">
          No Blogs Found
        </h3>

        <p className="text-gray-400 max-w-md">
          No articles are available in this category.
          Try selecting another category.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
      "
    >
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          excerpt={blog.excerpt}
          coverImage={blog.coverImage}
          category={blog.category}
          date={blog.date}
          readTime={blog.readTime}
          slug={blog.slug}
        />
      ))}
    </div>
  );
}