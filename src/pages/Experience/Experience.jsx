
import SectionTitle from "../../components/Common/SectionTitle";
import GlassCard from "../../components/Common/GlassCard";

import TimelineCard from "../../components/Experience/TimelineCard";
import ExperienceCard from "../../components/Experience/ExperienceCard";

import {
  timelineData,
  experiences,
  careerStats,
  futureGoals,
} from "../../data/experience";

export default function Experience() {
  return (
    <>

      <section className="min-h-screen bg-[#030817] py-16 sm:py-24 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <SectionTitle
            subtitle="Career Journey"
            title="Experience & Timeline"
            center
          />

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {careerStats.map((item, index) => (
              <GlassCard key={index}>
                <h2 className="text-4xl font-bold text-cyan-400">
                  {item.value}
                </h2>

                <p className="text-gray-400 mt-2">
                  {item.title}
                </p>
              </GlassCard>
            ))}

          </div>

          {/* Timeline */}
          <div className="mt-24">

            <SectionTitle
              subtitle="My Story"
              title="Career Timeline"
              center
            />

            <div className="max-w-5xl mx-auto mt-16">

              {timelineData.map((item, index) => {
                const Icon = item.icon;

                return (
                  <TimelineCard
                    key={item.id}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                    icon={<Icon />}
                    color={item.color}
                    isLast={
                      index ===
                      timelineData.length - 1
                    }
                  />
                );
              })}

            </div>

          </div>

          {/* Experience Cards */}
          <div className="mt-24">

            <SectionTitle
              subtitle="Projects & Practical Work"
              title="Experience Highlights"
              center
            />

            <div className="grid md:grid-cols-2 gap-8 mt-14">

              {experiences.map((item) => (
                <ExperienceCard
                  key={item.id}
                  title={item.title}
                  company={item.company}
                  duration={item.duration}
                  location={item.location}
                  description={item.description}
                  technologies={item.technologies}
                  type={item.type}
                />
              ))}

            </div>

          </div>

          {/* Future Goals */}
          <div className="mt-24">

            <SectionTitle
              subtitle="Vision"
              title="Future Goals"
              center
            />

            <div className="grid md:grid-cols-3 gap-8 mt-14">

              {futureGoals.map((goal, index) => {
                const Icon = goal.icon;

                return (
                  <GlassCard key={index}>

                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        flex
                        items-center
                        justify-center
                        text-white
                        text-2xl
                        mb-6
                      "
                    >
                      <Icon />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {goal.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {goal.description}
                    </p>

                  </GlassCard>
                );
              })}

            </div>

          </div>

          {/* Career Objective */}
          <div className="mt-24">

            <GlassCard>

              <div className="text-center max-w-4xl mx-auto">

                <span
                  className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-500/20
                    text-cyan-300
                    text-sm
                    mb-6
                  "
                >
                  Career Objective
                </span>

                <h2 className="text-4xl font-bold text-white mb-6">
                  Building the Future with Cloud & Full Stack Development
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  My goal is to become a highly skilled Full Stack
                  Developer and Cloud Engineer by mastering modern
                  technologies, solving real-world problems and
                  building scalable software products that impact
                  millions of users.
                </p>

              </div>

            </GlassCard>

          </div>

        </div>

      </section>

    </>
  );
}