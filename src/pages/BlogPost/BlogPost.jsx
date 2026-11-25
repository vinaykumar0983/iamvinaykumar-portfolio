import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaCalendarAlt, FaClock } from "react-icons/fa";

import GlassCard from "../../components/Common/GlassCard";
import { blogs } from "../../data/blogs";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-4">
          Article Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          The article you are looking for doesn&apos;t exist.
        </p>
        <Link
          to="/blog"
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600"
        >
          Back to Blog
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-[#030817] py-16 sm:py-24 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition mb-8"
        >
          <FaArrowLeft />
          Back to Blog
        </Link>

        <GlassCard hover={false}>
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-48 sm:h-72 object-cover rounded-2xl mb-8"
          />

          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm mb-4">
            {blog.category}
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-5 text-sm text-gray-500 mb-8">
            <span className="flex items-center gap-2">
              <FaCalendarAlt />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <FaClock />
              {blog.readTime}
            </span>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {blog.excerpt}
          </p>

          <p className="text-gray-400 leading-relaxed">
            {blog.content.replace(/\s+/g, " ").trim()}
          </p>
        </GlassCard>
      </div>
    </section>
  );
}
