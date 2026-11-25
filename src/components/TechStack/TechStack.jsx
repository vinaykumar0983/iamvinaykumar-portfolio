import {
  FaJava,
  FaReact,
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const techs = [
  {
    name: "Java",
    icon: <FaJava />,
    color: "text-orange-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-300",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-400",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-400",
  },
  {
    name: "AWS",
    icon: <FaAws />,
    color: "text-yellow-500",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-500",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "text-yellow-300",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-red-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },
];

export default function TechStack() {
  return (
    <section className="bg-[#030817] py-10 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-white text-3xl sm:text-4xl font-bold">
              Tech Stack
            </h2>

            <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
          </div>

          <p className="hidden md:block text-gray-400">
            Tools & Technologies I work with
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">

          {techs.map((tech, index) => (
            <div
              key={index}
              className="
                group
                bg-[#071122]
                border
                border-white/10
                rounded-2xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                transition-all
                duration-300
                hover:border-purple-500/40
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
              "
            >
              <div
                className={`
                  text-5xl
                  mb-4
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  ${tech.color}
                `}
              >
                {tech.icon}
              </div>

              <h3 className="text-white font-medium text-center">
                {tech.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}