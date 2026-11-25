import { FaCalendarAlt } from "react-icons/fa";

import GlassCard from "../Common/GlassCard";

export default function ResumeCard({
  icon,
  title,
  subtitle,
  duration,
  description,
}) {
  return (
    <GlassCard className="h-full">
      <div className="flex items-start gap-4">

        {icon && (
          <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
            {icon}
          </div>
        )}

        <div className="min-w-0">
          <h3 className="text-white text-lg sm:text-xl font-bold leading-snug">
            {title}
          </h3>

          {subtitle && (
            <p className="text-cyan-400 font-medium mt-1">{subtitle}</p>
          )}

          {duration && (
            <p className="flex items-center gap-2 text-gray-500 text-sm mt-2">
              <FaCalendarAlt />
              {duration}
            </p>
          )}
        </div>
      </div>

      {description && (
        <p className="text-gray-400 leading-relaxed mt-5">
          {description.replace(/\s+/g, " ").trim()}
        </p>
      )}
    </GlassCard>
  );
}
