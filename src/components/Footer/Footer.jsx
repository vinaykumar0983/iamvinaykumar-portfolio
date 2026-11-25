import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

import { profile, mailtoUrl, whatsappUrl } from "../../data/profile";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const technologies = ["React", "Node.js", "MongoDB", "AWS", "Docker"];

const socialClass =
  "w-12 h-12 rounded-xl bg-[#071122] border border-white/10 flex items-center justify-center text-white hover:border-purple-500 transition";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030817] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 sm:py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              VK
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              MCA Cloud Computing student, Full Stack Developer,
              AWS enthusiast and problem solver.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-gray-400">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Technologies
            </h3>

            <ul className="space-y-3 text-gray-400">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Connect
            </h3>

            <div className="flex flex-wrap gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={socialClass}
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={socialClass}
              >
                <FaLinkedin />
              </a>

              <a
                href={mailtoUrl}
                aria-label="Email"
                className={socialClass}
              >
                <FaEnvelope />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={socialClass}
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white hover:scale-105 transition"
          >
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
}
