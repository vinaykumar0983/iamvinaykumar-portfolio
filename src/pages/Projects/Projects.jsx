import { useState } from "react";

import SectionTitle from "../../components/Common/SectionTitle";
import GlassCard from "../../components/Common/GlassCard";

import ProjectCard from "../../components/Projects/ProjectCard";

import { projects } from "../../data/projects";

const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Cloud",
  "DSA",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All"
        ? true
        : project.category === selectedCategory;

    const matchesSearch =
      project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section
        className="
          min-h-screen
          bg-[#030817]
          py-16 sm:py-24
          px-6
          lg:px-10
        "
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <SectionTitle
            subtitle="My Portfolio Work"
            title="Projects"
            center
          />

          {/* Search */}
          <div className="max-w-xl mx-auto mt-12">
            <input
              type="text"
              placeholder="Search Projects..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="
                w-full
                px-5
                py-4
                rounded-2xl
                bg-[#071122]
                border
                border-white/10
                text-white
                outline-none
                focus:border-cyan-500
              "
            />
          </div>

          {/* Category Filter */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-4
              mt-10
            "
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={`
                  px-5
                  py-2.5
                  rounded-full
                  transition-all
                  border

                  ${
                    selectedCategory === category
                      ? `
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      text-white
                      border-transparent
                    `
                      : `
                      bg-[#071122]
                      border-white/10
                      text-gray-300
                      hover:border-cyan-500
                    `
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div
            className="
              grid
              md:grid-cols-3
              gap-6
              mt-16
            "
          >
            <GlassCard>
              <h2 className="text-4xl font-bold text-cyan-400">
                {projects.length}+
              </h2>

              <p className="text-gray-400 mt-2">
                Total Projects
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-4xl font-bold text-purple-400">
                3+
              </h2>

              <p className="text-gray-400 mt-2">
                MERN Applications
              </p>
            </GlassCard>

            <GlassCard>
              <h2 className="text-4xl font-bold text-green-400">
                AWS
              </h2>

              <p className="text-gray-400 mt-2">
                Cloud Projects
              </p>
            </GlassCard>
          </div>

          {/* Projects Grid */}
          <div
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
              mt-16
            "
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center mt-20">

              <div className="text-6xl mb-4">
                🚀
              </div>

              <h3 className="text-2xl font-bold text-white">
                No Projects Found
              </h3>

              <p className="text-gray-400 mt-3">
                Try another search or category.
              </p>

            </div>
          )}

        </div>
      </section>

          </>
  );
}