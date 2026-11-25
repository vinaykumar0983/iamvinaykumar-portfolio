import { Link } from "react-router-dom";

import SectionTitle from "../../components/Common/SectionTitle";
import GlassCard from "../../components/Common/GlassCard";

import ResumeCard from "../../components/Resume/ResumeCard";
import ResumeViewer from "../../components/Resume/ResumeViewer";

import {
  skills,
  achievements,
} from "../../data/skills";

import {
  certificates,
} from "../../data/certificates";

import {
  experiences,
} from "../../data/experience";

import {
  FaDownload,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
} from "react-icons/fa";

export default function Resume() {
  return (
    <>

      <section className="min-h-screen bg-[#030817] py-16 sm:py-24 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <SectionTitle
            subtitle="Professional Profile"
            title="Resume"
            center
          />

          {/* Resume Download */}
          <div className="mt-12 text-center">

            <a
              href="/resume.pdf"
              download
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                font-semibold
                hover:scale-105
                transition
              "
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          {/* Resume Preview */}
          <div className="mt-20">

            <ResumeViewer />

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

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

          {/* Education */}
          <div className="mt-24">

            <SectionTitle
              subtitle="Academic Background"
              title="Education"
              center
            />

            <div className="grid lg:grid-cols-2 gap-8 mt-14">

              <ResumeCard
                icon={<FaGraduationCap />}
                title="Master of Computer Applications"
                subtitle="Galgotias University"
                duration="2025 - 2027"
                description="
                Specialization in Cloud Computing.
                Current CGPA: 8.67.
                Focused on Cloud Computing, AWS,
                Networking and Full Stack Development.
                "
              />

              <ResumeCard
                icon={<FaGraduationCap />}
                title="Bachelor of Computer Applications"
                subtitle="Dr. Ram Manohar Lohia Avadh University"
                duration="2021 - 2024"
                description="
                Completed BCA with strong foundation
                in Programming, Databases,
                Operating Systems and Web Development.
                "
              />

            </div>

          </div>

          {/* Skills */}
          <div className="mt-24">

            <SectionTitle
              subtitle="Technical Expertise"
              title="Skills"
              center
            />

            <div className="grid lg:grid-cols-2 gap-8 mt-14">

              <GlassCard>

                <h3 className="text-2xl font-bold text-white mb-8">
                  Frontend
                </h3>

                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="mb-5">

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
                          bg-cyan-500
                        "
                        style={{
                          width: `${skill.level}%`,
                        }}
                      />
                    </div>

                  </div>
                ))}

              </GlassCard>

              <GlassCard>

                <h3 className="text-2xl font-bold text-white mb-8">
                  Backend & Cloud
                </h3>

                {[...skills.backend, ...skills.cloud].map(
                  (skill) => (
                    <div
                      key={skill.name}
                      className="mb-5"
                    >
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
                            bg-purple-500
                          "
                          style={{
                            width: `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>
                  )
                )}

              </GlassCard>

            </div>

          </div>

          {/* Experience */}
          <div className="mt-24">

            <SectionTitle
              subtitle="Practical Work"
              title="Experience"
              center
            />

            <div className="grid md:grid-cols-2 gap-8 mt-14">

              {experiences.slice(0, 4).map((item) => (
                <ResumeCard
                  key={item.id}
                  icon={<FaBriefcase />}
                  title={item.title}
                  subtitle={item.company}
                  duration={item.duration}
                  description={item.description}
                />
              ))}

            </div>

          </div>

          {/* Certifications */}
          <div className="mt-24">

            <SectionTitle
              subtitle="Achievements"
              title="Certifications"
              center
            />

            <div className="grid md:grid-cols-2 gap-8 mt-14">

              {certificates.slice(0, 4).map((item) => (
                <ResumeCard
                  key={item.id}
                  icon={<FaCertificate />}
                  title={item.title}
                  subtitle={item.issuer}
                  duration={item.date}
                  description={item.description}
                />
              ))}

            </div>

          </div>

          {/* CTA */}
          <div className="mt-24">

            <GlassCard>

              <div className="text-center max-w-4xl mx-auto">

                <h2 className="text-4xl font-bold text-white mb-6">
                  Looking for a Full Stack Developer
                  or Cloud Engineer?
                </h2>

                <p className="text-gray-400 text-lg mb-8">
                  I am actively building projects,
                  learning cloud technologies and
                  preparing for software development
                  opportunities.
                </p>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    px-8
                    py-4
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    text-white
                    font-semibold
                  "
                >
                  Contact Me
                </Link>

              </div>

            </GlassCard>

          </div>

        </div>

      </section>

    </>
  );
}