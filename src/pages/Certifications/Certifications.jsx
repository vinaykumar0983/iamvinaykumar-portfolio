import { useState } from "react";

import SectionTitle from "../../components/Common/SectionTitle";
import GlassCard from "../../components/Common/GlassCard";

import CertificateCard from "../../components/Certifications/CertificateCard";

import {
  certificates,
  certificateCategories,
  certificateStats,
} from "../../data/certificates";

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter(
          (certificate) =>
            certificate.category === selectedCategory
        );

  const featuredCertificates =
    certificates.filter(
      (certificate) => certificate.featured
    );

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

          {/* Hero */}
          <SectionTitle
            subtitle="Achievements & Learning"
            title="Certifications"
            center
          />

          {/* NPTEL Highlight */}
          <GlassCard className="mt-14">

            <div className="text-center">

              <span
                className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-yellow-500/10
                  border
                  border-yellow-500/20
                  text-yellow-400
                  text-sm
                  mb-5
                "
              >
                Featured Achievement
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white">
                NPTEL Cloud Computing
              </h2>

              <p className="text-yellow-400 text-2xl sm:text-3xl font-bold mt-4">
                82% Elite Score
              </p>

              <p className="text-gray-400 max-w-3xl mx-auto mt-6">
                Successfully completed NPTEL Cloud Computing
                certification with an Elite score while pursuing
                MCA in Cloud Computing at Galgotias University.
              </p>

            </div>

          </GlassCard>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {certificateStats.map((item, index) => (
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

          {/* Featured Certifications */}
          <div className="mt-24">

            <SectionTitle
              subtitle="Top Credentials"
              title="Featured Certifications"
              center
            />

            <div className="grid md:grid-cols-2 gap-8 mt-14">

              {featuredCertificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  title={certificate.title}
                  issuer={certificate.issuer}
                  date={certificate.date}
                  score={certificate.score}
                  image={certificate.image}
                  credentialUrl={
                    certificate.credentialUrl
                  }
                  description={
                    certificate.description
                  }
                />
              ))}

            </div>

          </div>

          {/* Category Filter */}
          <div className="mt-24">

            <SectionTitle
              subtitle="Browse Certificates"
              title="All Certifications"
              center
            />

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-4
                mt-12
              "
            >
              {certificateCategories.map((category) => (
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

            {/* Certificate Grid */}
            <div
              className="
                grid
                md:grid-cols-2
                xl:grid-cols-3
                gap-8
                mt-14
              "
            >
              {filteredCertificates.map(
                (certificate) => (
                  <CertificateCard
                    key={certificate.id}
                    title={certificate.title}
                    issuer={certificate.issuer}
                    date={certificate.date}
                    score={certificate.score}
                    image={certificate.image}
                    credentialUrl={
                      certificate.credentialUrl
                    }
                    description={
                      certificate.description
                    }
                  />
                )
              )}
            </div>

          </div>

          {/* Learning Journey */}
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
                  Continuous Learning
                </span>

                <h2 className="text-4xl font-bold text-white mb-6">
                  Lifelong Learning Mindset
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  I continuously improve my skills through
                  certifications, cloud labs, hands-on projects,
                  technical blogs, coding challenges and
                  real-world development experience.
                </p>

              </div>

            </GlassCard>

          </div>

        </div>
      </section>

    </>
  );
}