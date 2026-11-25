import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  image,
  title,
  shortDescription,
  description,
  technologies = [],
  live,
  github,
}) {
  return (
    <div className="flex h-full flex-col bg-[#071122] border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]">

      {/* Image */}
      <div className="p-4">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-48 sm:h-52 object-cover rounded-2xl border border-purple-500/20"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5">
        {/* Title */}
        <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-5">
          {shortDescription || description}
        </p>

        {/* Buttons */}
        <div className="mt-auto flex gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition"
            >
              Live Demo
              <FaExternalLinkAlt size={14} />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Vinay Kumar GitHub profile for ${title}`}
              className={`px-5 py-3 flex items-center justify-center gap-2 rounded-xl border border-white/10 text-white hover:border-purple-500 transition ${
                live ? "" : "flex-1"
              }`}
            >
              <FaGithub size={20} />
              {!live && <span>GitHub Profile</span>}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
