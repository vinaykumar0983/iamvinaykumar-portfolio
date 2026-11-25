import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaTag,
} from "react-icons/fa";

import GlassCard from "../Common/GlassCard";
import CTAButton from "../Common/CTAButton";
import { profile } from "../../data/profile";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClass =
  "w-full bg-[#030817] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-gray-600 outline-none focus:border-cyan-500";

function Field({ id, label, icon: Icon, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-gray-300 mb-2 block">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        )}
        {children}
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setStatus("");
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // There is no backend, so the message is handed to the visitor's
  // email app, addressed to the portfolio owner.
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;

    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus(
      "Your email app should open with the message prepared. Review it and press Send to contact me."
    );
  };

  return (
    <GlassCard hover={false} className="max-w-4xl mx-auto">

      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Let&apos;s Work Together
        </h2>

        <p className="text-gray-400">
          Have a project idea, internship opportunity,
          or freelance work? Send me a message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        <Field id="contact-name" label="Full Name" icon={FaUser}>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className={inputClass}
          />
        </Field>

        <Field id="contact-email" label="Email Address" icon={FaEnvelope}>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className={inputClass}
          />
        </Field>

        <Field id="contact-subject" label="Subject" icon={FaTag}>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Discussion"
            required
            className={inputClass}
          />
        </Field>

        <Field id="contact-message" label="Message">
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            required
            className="w-full bg-[#030817] border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-600 outline-none resize-none focus:border-cyan-500"
          />
        </Field>

        <CTAButton text="Send Message" type="submit" fullWidth />

        <p
          role="status"
          aria-live="polite"
          className={`text-center text-sm ${
            status ? "text-green-400" : "text-gray-500"
          }`}
        >
          {status || "This form opens your email app; your message is sent only after you press Send."}
        </p>
      </form>
    </GlassCard>
  );
}
