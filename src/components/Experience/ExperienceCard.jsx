import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import GlassCard from "../Common/GlassCard";
import CTAButton from "../Common/CTAButton";

export default function ExperienceCard({
  title,
  company,
  duration,
  location,
  description,
  technologies = [],
  type = "Internship",
  link,
}) {
  return (
    <GlassCard className="h-full">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">

        <div>
          <span
            className="
              inline-block
              px-3
              py-1
              rounded-full
              text-xs
              bg-cyan-500/10
              border border-cyan-500/20
              text-cyan-300
              mb-3
            "
          >
            {type}
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="text-purple-400 font-medium mt-1">
            {company}
          </p>
        </div>

      </div>

      {/* Duration & Location */}
      <div className="flex flex-wrap gap-4 mt-5">

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <FaCalendarAlt />
          {duration}
        </div>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <FaMapMarkerAlt />
          {location}
        </div>

      </div>

      {/* Description */}
      <p className="text-gray-400 mt-6 leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mt-6">

        {technologies.map((tech, index) => (
          <span
            key={index}
            className="
              px-4
              py-2
              rounded-xl
              text-sm
              bg-[#030817]
              border border-white/10
              text-cyan-300
            "
          >
            {tech}
          </span>
        ))}

      </div>

      {/* Footer */}
      {link && (
        <div className="mt-8">
          <CTAButton
            text="View Details"
            href={link}
            icon
          />
        </div>
      )}

    </GlassCard>
  );
}