import { Link } from "react-router-dom";
import {
  FaCertificate,
  FaCloud,
  FaCode,
  FaTrophy,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaCloud />,
    title: "NPTEL Cloud Computing",
    value: "82%",
    description: "Elite Score in NPTEL Certification",
    color: "from-cyan-500 to-blue-500",
  },

  {
    icon: <FaCode />,
    title: "LeetCode",
    value: "170+",
    description: "Problems Solved",
    color: "from-yellow-500 to-orange-500",
  },

  {
    icon: <FaCertificate />,
    title: "AWS Learning",
    value: "Cloud",
    description: "Hands-on AWS Projects",
    color: "from-purple-500 to-pink-500",
  },

  {
    icon: <FaTrophy />,
    title: "Academic",
    value: "8.67",
    description: "Current MCA CGPA",
    color: "from-green-500 to-emerald-500",
  },
];

export default function CertificationsPreview() {
  return (
    <section className="bg-[#030817] py-16 sm:py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Certifications & Achievements
          </h2>

          <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                bg-[#071122]
                border border-white/10
                rounded-3xl
                p-7
                hover:-translate-y-2
                hover:border-purple-500/40
                transition-all
                duration-300
              "
            >
              {/* Glow */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-10
                  transition
                  bg-gradient-to-r
                  ${item.color}
                `}
              />

              <div
                className={`
                  w-16 h-16
                  rounded-2xl
                  flex items-center justify-center
                  text-3xl text-white
                  bg-gradient-to-r
                  ${item.color}
                  mb-5
                `}
              >
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-bold">
                {item.title}
              </h3>

              <div className="text-4xl font-black mt-4 mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {item.value}
              </div>

              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-14
            bg-[#071122]
            border border-white/10
            rounded-3xl
            p-8
            flex flex-col lg:flex-row
            items-center
            justify-between
            gap-6
          "
        >
          <div>
            <h3 className="text-white text-2xl font-bold">
              Continuous Learning Journey
            </h3>

            <p className="text-gray-400 mt-2">
              Focused on Cloud Computing, Full Stack Development,
              AWS, DSA, and modern software engineering.
            </p>
          </div>

          <Link
            to="/certifications"
            className="
              text-center
              px-8 py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-blue-500
              text-white
              font-semibold
              hover:scale-105
              transition
            "
          >
            View All Certifications →
          </Link>
        </div>

      </div>
    </section>
  );
}