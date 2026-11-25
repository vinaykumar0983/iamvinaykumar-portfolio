
import SectionTitle from "../../components/Common/SectionTitle";
import GlassCard from "../../components/Common/GlassCard";

import { skills, achievements } from "../../data/skills";

import {
  FaUserGraduate,
  FaCode,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";

export default function About() {
  return (
    <>

      <section className="bg-[#030817] min-h-screen py-16 sm:py-24 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          <SectionTitle
            subtitle="Know More About Me"
            title="About Me"
            center
          />

          {/* About Intro */}
          <div className="grid lg:grid-cols-2 gap-10 mt-16">

            {/* Left */}
            <GlassCard>

              <div className="flex items-center gap-4 mb-6">
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-600
                    flex
                    items-center
                    justify-center
                    text-white
                    text-2xl
                  "
                >
                  <FaUserGraduate />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Vinay Kumar
                  </h2>

                  <p className="text-cyan-400">
                    MCA Cloud Computing Student
                  </p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-5">
                I am an MCA student specializing in Cloud Computing
                at Galgotias University. My passion lies in building
                scalable web applications and cloud solutions using
                modern technologies.
              </p>

              <p className="text-gray-400 leading-relaxed mb-5">
                I enjoy developing Full Stack applications with
                React, Node.js, Express and MongoDB. Along with
                development, I actively learn AWS Cloud, Linux,
                Networking and System Design concepts.
              </p>

              <p className="text-gray-400 leading-relaxed">
                My goal is to become a skilled Full Stack Developer
                and Cloud Engineer capable of designing and deploying
                production-ready applications.
              </p>

            </GlassCard>

            {/* Right */}
            <GlassCard>

              <h3 className="text-2xl font-bold text-white mb-8">
                Quick Highlights
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <FaCode className="text-cyan-400 text-xl" />

                  <div>
                    <h4 className="text-white font-semibold">
                      MERN Stack Developer
                    </h4>

                    <p className="text-gray-400 text-sm">
                      React, Node.js, Express, MongoDB
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaCloud className="text-purple-400 text-xl" />

                  <div>
                    <h4 className="text-white font-semibold">
                      Cloud Computing
                    </h4>

                    <p className="text-gray-400 text-sm">
                      AWS, EC2, S3, RDS, IAM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaLaptopCode className="text-green-400 text-xl" />

                  <div>
                    <h4 className="text-white font-semibold">
                      DSA & Problem Solving
                    </h4>

                    <p className="text-gray-400 text-sm">
                      170+ LeetCode Problems
                    </p>
                  </div>
                </div>

              </div>

            </GlassCard>

          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {achievements.map((item) => (
              <GlassCard key={item.title}>

                <h2 className="text-4xl font-bold text-cyan-400">
                  {item.value}
                </h2>

                <p className="text-gray-400 mt-2">
                  {item.title}
                </p>

              </GlassCard>
            ))}

          </div>

          {/* Skills Section */}
          <div className="mt-20">

            <SectionTitle
              subtitle="Technologies"
              title="My Skills"
              center
            />

            <div className="grid lg:grid-cols-2 gap-10 mt-12">

              {/* Frontend */}
              <GlassCard>
                <h3 className="text-2xl font-bold text-white mb-8">
                  Frontend
                </h3>

                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="mb-6">

                    <div className="flex justify-between mb-2">
                      <span className="text-white">
                        {skill.name}
                      </span>

                      <span className="text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-[#111827] rounded-full">
                      <div
                        className="
                          h-2
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-500
                          to-blue-500
                        "
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />
                    </div>

                  </div>
                ))}
              </GlassCard>

              {/* Backend */}
              <GlassCard>
                <h3 className="text-2xl font-bold text-white mb-8">
                  Backend
                </h3>

                {skills.backend.map((skill) => (
                  <div key={skill.name} className="mb-6">

                    <div className="flex justify-between mb-2">
                      <span className="text-white">
                        {skill.name}
                      </span>

                      <span className="text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-[#111827] rounded-full">
                      <div
                        className="
                          h-2
                          rounded-full
                          bg-gradient-to-r
                          from-purple-500
                          to-pink-500
                        "
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />
                    </div>

                  </div>
                ))}
              </GlassCard>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}