import { Link } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3);

export default function FeaturedProjects() {
  return (
    <section className="bg-[#030817] py-12 sm:py-16 px-6 lg:px-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">

          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Featured Projects
            </h2>

            <div className="hidden sm:block w-16 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </div>

          <Link
            to="/projects"
            className="px-6 py-3 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition"
          >
            View All Projects →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
