import { FaCalendarAlt } from "react-icons/fa";
import GlassCard from "../Common/GlassCard";

export default function TimelineCard({
  year,
  title,
  description,
  icon,
  color = "from-blue-500 to-cyan-500",
  isLast = false,
}) {
  return (
    <div className="relative flex gap-6">

      {/* Timeline Line */}
      {!isLast && (
        <div
          className="
            absolute
            left-6
            top-14
            w-[2px]
            h-full
            bg-gradient-to-b
            from-cyan-500
            to-purple-500
          "
        />
      )}

      {/* Icon */}
      <div
        className={`
          relative
          z-10
          min-w-[50px]
          h-[50px]
          rounded-full
          bg-gradient-to-r
          ${color}
          flex
          items-center
          justify-center
          text-white
          shadow-lg
        `}
      >
        {icon}
      </div>

      {/* Content */}
      <GlassCard className="flex-1 mb-8">

        <div className="flex flex-wrap items-center gap-3 mb-4">

          <span
            className="
              px-4
              py-1
              rounded-full
              text-sm
              bg-cyan-500/10
              border border-cyan-500/20
              text-cyan-300
            "
          >
            {year}
          </span>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FaCalendarAlt />
            Career Milestone
          </div>

        </div>

        <h3 className="text-2xl font-bold text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

      </GlassCard>

    </div>
  );
}