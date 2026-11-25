import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaReact,
  FaAws,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiMongodb, SiNodedotjs } from "react-icons/si";

import heroImg from "../../assets/images/hero.webp";
import { profile, mailtoUrl, whatsappUrl } from "../../data/profile";

const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FaGithub, external: true },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin, external: true },
  { label: "Email", href: mailtoUrl, icon: FaEnvelope, external: false },
  { label: "WhatsApp", href: whatsappUrl, icon: FaWhatsapp, external: true },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030817] lg:min-h-[calc(100vh-5rem)]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-blue-600/20 blur-[120px] sm:blur-[180px]" />
      <div className="absolute right-0 top-20 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-purple-600/20 blur-[120px] sm:blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 sm:py-16 lg:py-0 lg:min-h-[calc(100vh-5rem)]">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 rounded-full px-4 sm:px-5 py-2 text-sm sm:text-base text-gray-200 mb-6 sm:mb-8">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              MCA Student at Galgotias University
            </div>

            <p className="text-white text-3xl sm:text-4xl font-bold mb-2">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-none">
              <span className="text-white">Vinay </span>

              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Kumar
              </span>
            </h1>

            <div className="flex flex-wrap gap-x-3 gap-y-1 text-lg sm:text-xl text-gray-300 mb-6">
              <span>Full Stack Developer</span>
              <span className="hidden sm:inline">|</span>
              <span>Cloud Enthusiast</span>
              <span className="hidden sm:inline">|</span>
              <span>Problem Solver</span>
            </div>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              I build modern web applications, explore cloud technologies
              like AWS, and love solving real-world problems. Currently
              pursuing MCA (Cloud Computing) at Galgotias University.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
              <Link
                to="/projects"
                className="px-8 py-4 rounded-2xl text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:scale-105 transition"
              >
                View My Projects →
              </Link>

              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-2xl text-center border border-white/20 text-white hover:border-purple-500 transition"
              >
                Download Resume
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-5 mt-8 text-gray-300">
              {socialLinks.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="hover:text-white hover:scale-110 transition"
                >
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center items-center">

            {/* Circle Glow */}
            <div className="absolute w-72 h-72 sm:w-[450px] sm:h-[450px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-40" />

            <img
              src={heroImg}
              alt="Vinay Kumar"
              className="relative z-10 w-full max-w-sm sm:max-w-xl object-contain"
              fetchPriority="high"
            />

            {/* Floating tech cards (hidden on small screens to avoid overlap) */}
            <div className="hidden md:block absolute top-16 left-4 xl:left-10 bg-[#071122] border border-cyan-500/30 rounded-2xl p-4 z-20">
              <FaReact size={40} className="text-cyan-400" />
              <p className="text-white mt-2">React</p>
            </div>

            <div className="hidden md:block absolute top-56 left-0 bg-[#071122] border border-green-500/30 rounded-2xl p-4 z-20">
              <SiMongodb size={40} className="text-green-500" />
              <p className="text-white mt-2">MongoDB</p>
            </div>

            <div className="hidden md:block absolute top-16 right-4 xl:right-8 bg-[#071122] border border-green-500/30 rounded-2xl p-4 z-20">
              <SiNodedotjs size={40} className="text-green-400" />
              <p className="text-white mt-2">Node.js</p>
            </div>

            <div className="hidden md:block absolute top-60 right-0 bg-[#071122] border border-yellow-500/30 rounded-2xl p-4 z-20">
              <FaAws size={40} className="text-yellow-400" />
              <p className="text-white mt-2">AWS</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
