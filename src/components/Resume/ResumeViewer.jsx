import { FaExpand, FaFilePdf } from "react-icons/fa";

import GlassCard from "../Common/GlassCard";
import CTAButton from "../Common/CTAButton";

export default function ResumeViewer() {
  return (
    <GlassCard hover={false} className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>
          <div className="flex items-center gap-3 mb-3">
            <FaFilePdf className="text-red-500 text-2xl" />

            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Resume Preview
            </h2>
          </div>

          <p className="text-gray-400">
            View or download the latest version of my resume.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">

          <CTAButton
            text="Download Resume"
            href="/resume.pdf"
            download
          />

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              px-6
              py-4
              rounded-2xl
              border
              border-white/10
              text-white
              hover:border-purple-500
              transition-all
            "
          >
            <FaExpand />
            Full Screen
          </a>

        </div>

      </div>

      {/* PDF Viewer */}
      <div
        className="
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          bg-[#030817]
          h-[520px]
          md:h-[900px]
        "
      >
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-full"
        >
          <p className="p-6 text-gray-400">
            Your browser can&apos;t display PDFs inline.{" "}
            <a
              href="/resume.pdf"
              className="text-cyan-400 underline"
            >
              Open the resume
            </a>
            .
          </p>
        </iframe>
      </div>

      {/* Bottom Info */}
      <div
        className="
          mt-8
          grid
          md:grid-cols-3
          gap-6
        "
      >
        <div
          className="
            bg-[#030817]
            border
            border-white/10
            rounded-2xl
            p-5
          "
        >
          <h3 className="text-white font-semibold mb-2">
            Education
          </h3>

          <p className="text-gray-400 text-sm">
            MCA (Cloud Computing)
            <br />
            Galgotias University
          </p>
        </div>

        <div
          className="
            bg-[#030817]
            border
            border-white/10
            rounded-2xl
            p-5
          "
        >
          <h3 className="text-white font-semibold mb-2">
            Skills
          </h3>

          <p className="text-gray-400 text-sm">
            React, Node.js, MongoDB,
            AWS, Java, DSA
          </p>
        </div>

        <div
          className="
            bg-[#030817]
            border
            border-white/10
            rounded-2xl
            p-5
          "
        >
          <h3 className="text-white font-semibold mb-2">
            Projects
          </h3>

          <p className="text-gray-400 text-sm">
            Employee Management System,
            Blogify, AuthApp API
          </p>
        </div>

      </div>

    </GlassCard>
  );
}