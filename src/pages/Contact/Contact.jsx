
import SectionTitle from "../../components/Common/SectionTitle";
import GlassCard from "../../components/Common/GlassCard";

import ContactForm from "../../components/Contact/ContactForm";
import ContactInfo from "../../components/Contact/ContactInfo";
import SocialLinks from "../../components/Contact/SocialLinks";
import { profile, mailtoUrl, whatsappUrl } from "../../data/profile";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>

      <section className="min-h-screen bg-[#030817] py-16 sm:py-24 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          {/* Hero */}
          <SectionTitle
            subtitle="Let's Connect"
            title="Contact Me"
            center
          />

          <div className="max-w-3xl mx-auto text-center mt-8">
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you have a project idea, internship opportunity,
              freelance work, or simply want to connect, I'd love
              to hear from you.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            <GlassCard>
              <FaEnvelope className="text-cyan-400 text-3xl mb-4" />

              <h3 className="text-white font-semibold mb-2">
                Email
              </h3>

              <a
                href={mailtoUrl}
                className="text-gray-400 text-sm break-all hover:text-cyan-300 transition"
              >
                {profile.email}
              </a>
            </GlassCard>

            <GlassCard>
              <FaPhoneAlt className="text-green-400 text-3xl mb-4" />

              <h3 className="text-white font-semibold mb-2">
                Phone
              </h3>

              <p className="text-gray-400">
                {profile.phoneDisplay}
              </p>
            </GlassCard>

            <GlassCard>
              <FaWhatsapp className="text-green-500 text-3xl mb-4" />

              <h3 className="text-white font-semibold mb-2">
                WhatsApp
              </h3>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition"
              >
                Chat on WhatsApp
              </a>
            </GlassCard>

            <GlassCard>
              <FaMapMarkerAlt className="text-red-400 text-3xl mb-4" />

              <h3 className="text-white font-semibold mb-2">
                Location
              </h3>

              <p className="text-gray-400">
                {profile.location}
              </p>
            </GlassCard>

          </div>

          {/* Main Section */}
          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            {/* Contact Form */}
            <ContactForm />

            {/* Right Side */}
            <div className="space-y-8">

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Contact Information
                </h2>

                <ContactInfo />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Follow Me
                </h2>

                <SocialLinks />
              </div>

            </div>

          </div>

          {/* Availability */}
          <div className="mt-24">

            <GlassCard>

              <div className="text-center">

                <span
                  className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-green-500/10
                    border
                    border-green-500/20
                    text-green-400
                    text-sm
                    mb-6
                  "
                >
                  Available for Opportunities
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Open to Internships, Freelancing & Full-Time Roles
                </h2>

                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  Currently pursuing MCA in Cloud Computing and actively
                  seeking opportunities in Full Stack Development,
                  Cloud Engineering and Software Development.
                </p>

              </div>

            </GlassCard>

          </div>

          {/* CTA */}
          <div className="mt-20">

            <GlassCard>

              <div className="text-center">

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  Let's Build Something Amazing Together 🚀
                </h2>

                <p className="text-gray-400 text-lg mb-8">
                  Have an idea, project or opportunity?
                  Let's discuss it.
                </p>

                <a
                  href={mailtoUrl}
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
                  <FaEnvelope />
                  Send Email
                </a>

              </div>

            </GlassCard>

          </div>

        </div>

      </section>

    </>
  );
}