import {
  FaGraduationCap,
  FaLaptopCode,
  FaCloud,
  FaRocket,
} from "react-icons/fa";

const timeline = [
  {
    year: "2022",
    title: "BCA Journey Started",
    description:
      "Started Bachelor of Computer Applications and built strong programming fundamentals.",
    icon: <FaGraduationCap />,
    color: "from-blue-500 to-cyan-500",
  },

  {
    year: "2025",
    title: "MCA Cloud Computing",
    description:
      "Joined Galgotias University and started specialization in Cloud Computing.",
    icon: <FaCloud />,
    color: "from-purple-500 to-pink-500",
  },

  {
    year: "2026",
    title: "Full Stack Development",
    description:
      "Built Employee Management System, Blogify and Authentication APIs using MERN Stack.",
    icon: <FaLaptopCode />,
    color: "from-green-500 to-emerald-500",
  },

  {
    year: "2027",
    title: "Cloud Engineer Goal",
    description:
      "Preparing for placements and aiming for Cloud Engineer / Full Stack Developer roles.",
    icon: <FaRocket />,
    color: "from-orange-500 to-red-500",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="bg-[#030817] py-16 sm:py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My Journey
          </h2>

          <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </div>

        <div className="relative">

          {/* Timeline Line */}
          <div
            className="
            absolute
            left-1/2
            top-0
            bottom-0
            w-[2px]
            bg-gradient-to-b
            from-purple-500
            via-blue-500
            to-cyan-500
            hidden lg:block
          "
          />

          <div className="space-y-16">

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`
                  relative
                  flex
                  flex-col
                  lg:flex-row
                  items-center
                  gap-8
                  ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }
                `}
              >
                {/* Card */}
                <div className="w-full lg:w-[45%]">

                  <div
                    className="
                    bg-[#071122]
                    border border-white/10
                    rounded-3xl
                    p-7
                    hover:border-purple-500/40
                    hover:-translate-y-2
                    transition-all duration-300
                  "
                  >
                    <span
                      className="
                      inline-block
                      px-4 py-2
                      rounded-full
                      text-sm
                      bg-white/5
                      border border-white/10
                      text-gray-300
                      mb-4
                    "
                    >
                      {item.year}
                    </span>

                    <h3 className="text-white text-2xl font-bold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Center Icon */}
                <div
                  className="
                  hidden
                  lg:flex
                  absolute
                  left-1/2
                  -translate-x-1/2
                  z-20
                "
                >
                  <div
                    className={`
                      w-16 h-16
                      rounded-full
                      flex items-center justify-center
                      text-white text-2xl
                      bg-gradient-to-r
                      ${item.color}
                      shadow-lg
                    `}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Empty Space */}
                <div className="hidden lg:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20">

          <div className="bg-[#071122] border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-blue-400">170+</h3>
            <p className="text-gray-400 mt-2">LeetCode Problems</p>
          </div>

          <div className="bg-[#071122] border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-purple-400">8.67</h3>
            <p className="text-gray-400 mt-2">CGPA</p>
          </div>

          <div className="bg-[#071122] border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">82%</h3>
            <p className="text-gray-400 mt-2">NPTEL Score</p>
          </div>

          <div className="bg-[#071122] border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-green-400">3+</h3>
            <p className="text-gray-400 mt-2">Major Projects</p>
          </div>

        </div>

      </div>
    </section>
  );
}