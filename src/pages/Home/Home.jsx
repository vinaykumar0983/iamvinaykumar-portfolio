import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import TechStack from "../../components/TechStack/TechStack";
import FeaturedProjects from "../../components/Projects/FeaturedProjects";
import AboutPreview from "../../components/AboutPreview/AboutPreview";
import CertificationsPreview from "../../components/CertificationsPreview/CertificationsPreview";
import ExperienceTimeline from "../../components/ExperienceTimeline/ExperienceTimeline";

export default function Home() {
  return (
    <div className="bg-[#030817] text-white overflow-hidden">

      {/* Hero Section */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Tech Stack */}
      <TechStack />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* About Preview */}
      <AboutPreview />

      {/* Certifications */}
      <CertificationsPreview />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      </div>
  );
}