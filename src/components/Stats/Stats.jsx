import {
  FaGraduationCap,
  FaCode,
  FaCloud,
  FaBriefcase,
  FaTrophy,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaGraduationCap />,
    value: "8.67",
    label: "CGPA (MCA)",
    color: "text-purple-400",
  },
  {
    icon: <FaCode />,
    value: "170+",
    label: "LeetCode Problems",
    color: "text-purple-400",
  },
  {
    icon: <FaCloud />,
    value: "82%",
    label: "NPTEL (Cloud Computing)",
    color: "text-cyan-400",
  },
  {
    icon: <FaBriefcase />,
    value: "3+",
    label: "Major Projects",
    color: "text-blue-400",
  },
  {
    icon: <FaTrophy />,
    value: "2027",
    label: "MCA Batch",
    color: "text-yellow-400",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#030817] px-6 lg:px-10 py-6">
      <div className="max-w-7xl mx-auto">

        <div className="rounded-3xl border border-white/10 bg-[#071122]/80 backdrop-blur-xl">

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

            {stats.map((item, index) => (
              <div
                key={index}
                className={`
                  flex flex-col items-center justify-center
                  py-8 px-4
                  text-center
                  ${
                    index !== stats.length - 1
                      ? "lg:border-r border-white/10"
                      : ""
                  }
                `}
              >
                <div className={`text-4xl mb-3 ${item.color}`}>
                  {item.icon}
                </div>

                <h3 className="text-white text-4xl font-bold">
                  {item.value}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}