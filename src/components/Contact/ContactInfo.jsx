import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

import GlassCard from "../Common/GlassCard";
import { profile } from "../../data/profile";

const contactData = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: profile.email,
    description: "Send me an email anytime",
    color: "text-cyan-400",
  },

  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: profile.phoneDisplay,
    description: "Available for calls",
    color: "text-green-400",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: profile.location,
    description: "Open to relocation",
    color: "text-purple-400",
  },

  {
    icon: <FaClock />,
    title: "Response Time",
    value: "24 Hours",
    description: "Usually much faster",
    color: "text-yellow-400",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      {/* Contact Cards */}
      {contactData.map((item, index) => (
        <GlassCard key={index}>
          <div className="flex items-start gap-4 min-w-0">

            <div
              className={`
                w-14
                h-14
                rounded-2xl
                bg-[#030817]
                border border-white/10
                flex
                items-center
                justify-center
                text-2xl
                ${item.color}
              `}
            >
              {item.icon}
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-cyan-300 mt-1 font-medium break-all">
                {item.value}
              </p>

              <p className="text-gray-400 text-sm mt-2">
                {item.description}
              </p>
            </div>

          </div>
        </GlassCard>
      ))}

      {/* Availability Card */}
      <GlassCard>
        <div className="flex items-center gap-4">

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-green-500/10
              border border-green-500/20
              flex
              items-center
              justify-center
              text-green-400
              text-2xl
            "
          >
            <FaCheckCircle />
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg">
              Available for Opportunities
            </h3>

            <p className="text-gray-400 mt-1">
              Open for internships, freelance projects,
              full-time roles and collaborations.
            </p>
          </div>

        </div>
      </GlassCard>

    </div>
  );
}