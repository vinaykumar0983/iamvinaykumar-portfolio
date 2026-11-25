import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import GlassCard from "../Common/GlassCard";
import { profile, mailtoUrl, whatsappUrl } from "../../data/profile";

const socials = [
  {
    name: "GitHub",
    username: "@vinaykumar0983",
    icon: <FaGithub />,
    url: profile.github,
    color: "hover:border-gray-400",
  },

  {
    name: "LinkedIn",
    username: "Vinay Kumar",
    icon: <FaLinkedin />,
    url: profile.linkedin,
    color: "hover:border-blue-500",
  },

  {
    name: "LeetCode",
    username: "170+ Problems",
    icon: <SiLeetcode />,
    url: profile.leetcode,
    color: "hover:border-yellow-500",
  },

  {
    name: "Email",
    username: "Contact Me",
    icon: <FaEnvelope />,
    url: mailtoUrl,
    color: "hover:border-cyan-500",
  },

  {
    name: "WhatsApp",
    username: "Let's Chat",
    icon: <FaWhatsapp />,
    url: whatsappUrl,
    color: "hover:border-green-500",
  },
];

export default function SocialLinks() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <GlassCard
            className={`
              cursor-pointer
              ${social.color}
            `}
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#030817]
                  border border-white/10
                  flex
                  items-center
                  justify-center
                  text-2xl
                  text-white
                "
              >
                {social.icon}
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  {social.name}
                </h3>

                <p className="text-gray-400 text-sm mt-1">
                  {social.username}
                </p>
              </div>

            </div>
          </GlassCard>
        </a>
      ))}
    </div>
  );
}