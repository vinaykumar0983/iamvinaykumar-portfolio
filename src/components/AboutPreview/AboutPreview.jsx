import { Link } from "react-router-dom";

import aboutImg from "../../assets/images/about.webp";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#030817] py-16 sm:py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About Me
          </h2>

          <div className="w-16 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a final year MCA student at Galgotias University,
              specializing in Cloud Computing. Passionate about
              building scalable web applications and exploring
              cloud technologies like AWS.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              My journey started with BCA and evolved into
              full stack development, cloud computing and
              modern software engineering. I enjoy solving
              real-world problems through technology and
              continuously improving my skills.
            </p>

            {/* Education Cards */}
            <div className="space-y-5">

              <div className="bg-[#071122] border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 transition">

                <h3 className="text-white text-xl font-semibold">
                  MCA (Cloud Computing)
                </h3>

                <p className="text-gray-400 mt-2">
                  Galgotias University
                </p>

                <p className="text-cyan-400 mt-1">
                  CGPA: 8.67
                </p>
              </div>

              <div className="bg-[#071122] border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 transition">

                <h3 className="text-white text-xl font-semibold">
                  BCA
                </h3>

                <p className="text-gray-400 mt-2">
                  Dr. Ram Manohar Lohia Avadh University
                </p>

                <p className="text-cyan-400 mt-1">
                  Percentage: 69.05%
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                to="/about"
                className="
                inline-block
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
                Read More →
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[420px] sm:h-[420px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />

            <div
              className="
              relative
              bg-[#071122]
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              p-4
            "
            >
              <img
                src={aboutImg}
                alt="About Vinay Kumar"
                loading="lazy"
                className="rounded-2xl w-full max-w-lg"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}