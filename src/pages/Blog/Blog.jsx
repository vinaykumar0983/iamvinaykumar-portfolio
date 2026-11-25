import { useState } from "react";
import { Link } from "react-router-dom";

import SectionTitle from "../../components/Common/SectionTitle";
import GlassCard from "../../components/Common/GlassCard";

import BlogGrid from "../../components/Blog/BlogGrid";
import CategoryFilter from "../../components/Blog/CategoryFilter";

import {
  blogs,
  blogCategories,
  featuredBlogs,
  blogStats,
} from "../../data/blogs";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const categoryMatch =
      selectedCategory === "All"
        ? true
        : blog.category === selectedCategory;

    const searchMatch =
      blog.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      blog.excerpt
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>

      <section className="min-h-screen bg-[#030817] py-16 sm:py-24 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <SectionTitle
            subtitle="Knowledge Sharing"
            title="Blog & Articles"
            center
          />

          {/* Intro */}
          <div className="max-w-4xl mx-auto text-center mt-8">
            <p className="text-gray-400 text-lg leading-relaxed">
              I write about Cloud Computing, AWS, MERN Stack,
              JavaScript, React, MongoDB, DSA and Software
              Development. My goal is to share practical
              knowledge from projects and real-world learning.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {blogStats.map((item) => (
              <GlassCard key={item.title}>

                <h2 className="text-4xl font-bold text-cyan-400">
                  {item.value}
                </h2>

                <p className="text-gray-400 mt-2">
                  {item.title}
                </p>

              </GlassCard>
            ))}

          </div>

          {/* Featured Blogs */}
          <div className="mt-24">

            <SectionTitle
              subtitle="Editor's Choice"
              title="Featured Articles"
              center
            />

            <div className="grid md:grid-cols-2 gap-8 mt-14">

              {featuredBlogs.slice(0, 2).map((blog) => (
                <GlassCard key={blog.id}>

                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="
                      w-full
                      h-60
                      object-cover
                      rounded-2xl
                      mb-6
                    "
                  />

                  <span
                    className="
                      inline-block
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-cyan-300
                      text-sm
                      mb-4
                    "
                  >
                    {blog.category}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {blog.excerpt}
                  </p>

                  <Link
                    to={`/blog/${blog.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-cyan-400
                      font-medium
                    "
                  >
                    Read Article →
                  </Link>

                </GlassCard>
              ))}

            </div>

          </div>

          {/* Search */}
          <div className="mt-24">

            <div className="max-w-xl mx-auto">

              <input
                type="text"
                placeholder="Search Articles..."
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                className="
                  w-full
                  px-5
                  py-4
                  rounded-2xl
                  bg-[#071122]
                  border
                  border-white/10
                  text-white
                  outline-none
                  focus:border-cyan-500
                "
              />

            </div>

          </div>

          {/* Categories */}
          <div className="mt-12">

            <CategoryFilter
              categories={blogCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />

          </div>

          {/* Blog Grid */}
          <div id="articles" className="mt-16 scroll-mt-28">

            <BlogGrid blogs={filteredBlogs} />

          </div>

          {/* Newsletter CTA */}
          <div className="mt-24">

            <GlassCard>

              <div className="text-center max-w-4xl mx-auto">

                <span
                  className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-purple-500/10
                    border
                    border-purple-500/20
                    text-purple-300
                    text-sm
                    mb-6
                  "
                >
                  Stay Updated
                </span>

                <h2 className="text-4xl font-bold text-white mb-6">
                  Follow My Learning Journey
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Discover tutorials, cloud projects,
                  deployment guides, coding patterns and
                  interview preparation resources.
                </p>

                <a
                  href="#articles"
                  className="
                    inline-block
                    px-8
                    py-4
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    text-white
                    font-semibold
                    hover:scale-105
                    transition
                  "
                >
                  Explore More Articles
                </a>

              </div>

            </GlassCard>

          </div>

        </div>

      </section>

    </>
  );
}