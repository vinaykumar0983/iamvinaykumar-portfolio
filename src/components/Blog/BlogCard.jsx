import {
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
  FaTag,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import GlassCard from "../Common/GlassCard";

export default function BlogCard({
  title,
  excerpt,
  coverImage,
  category,
  date,
  readTime,
  slug,
}) {
  return (
    <GlassCard className="group h-full">

      {/* Cover Image */}
      <div className="overflow-hidden rounded-2xl mb-5">
        <img
          src={coverImage}
          loading="lazy"
          alt={title}
          className="
            w-full
            h-56
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Category */}
      <div className="flex items-center gap-2 mb-4">
        <FaTag className="text-cyan-400 text-sm" />

        <span
          className="
            px-3
            py-1
            rounded-full
            text-xs
            bg-cyan-500/10
            border border-cyan-500/20
            text-cyan-300
          "
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          text-white
          text-2xl
          font-bold
          leading-tight
          mb-4
          group-hover:text-cyan-300
          transition
        "
      >
        {title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-400 leading-relaxed mb-6">
        {excerpt}
      </p>

      {/* Meta */}
      <div
        className="
          flex
          items-center
          justify-between
          text-sm
          text-gray-500
          mb-6
        "
      >
        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaClock />
          <span>{readTime}</span>
        </div>
      </div>

      {/* Read More */}
      <Link
        to={`/blog/${slug}`}
        className="
          inline-flex
          items-center
          gap-3
          text-cyan-400
          font-medium
          hover:text-white
          transition
        "
      >
        Read Article
        <FaArrowRight />
      </Link>

    </GlassCard>
  );
}