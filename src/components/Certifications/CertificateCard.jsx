import { FaAward, FaCalendarAlt } from "react-icons/fa";

import GlassCard from "../Common/GlassCard";
import CTAButton from "../Common/CTAButton";

export default function CertificateCard({
  title,
  issuer,
  date,
  score,
  image,
  credentialUrl,
  description,
}) {
  return (
    <GlassCard className="h-full group">

      {/* Certificate Image */}
      <div className="overflow-hidden rounded-2xl mb-5">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-48
            sm:h-52
            object-cover
            transition-all
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Issuer */}
      <div className="flex items-center gap-2 mb-3">

        <FaAward className="text-yellow-400" />

        <span className="text-cyan-300 text-sm font-medium">
          {issuer}
        </span>

      </div>

      {/* Title */}
      <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed mb-5">
        {description}
      </p>

      {/* Score */}
      {score && (
        <div
          className="
            inline-flex
            items-center
            px-4
            py-2
            rounded-xl
            bg-green-500/10
            border
            border-green-500/20
            text-green-400
            text-sm
            font-medium
            mb-5
          "
        >
          Score: {score}
        </div>
      )}

      {/* Date */}
      <div className="flex items-center gap-2 text-gray-400 mb-6">
        <FaCalendarAlt />
        <span>{date}</span>
      </div>

      {/* Button */}
      {credentialUrl && (
        <CTAButton
          text="View Credential"
          href={credentialUrl}
          icon
        />
      )}

    </GlassCard>
  );
}