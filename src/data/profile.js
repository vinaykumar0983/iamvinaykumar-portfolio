/**
 * Single source of truth for contact details and social links.
 * Update the values here and every page (Hero, Footer, Contact) updates.
 */
export const profile = {
  name: "Vinay Kumar",
  location: "Gonda UP, India",

  // TODO: replace with your real email address
  email: "vinayjeet92@gmail.com",

  // WhatsApp / phone — wa.me links need the country code and digits only.
  phoneDisplay: "+91 95172 04043",
  whatsappNumber: "919517204043",

  github: "https://github.com/vinaykumar0983",
  linkedin: "https://www.linkedin.com/in/vinay-kumar-cloud/",
  leetcode: "https://leetcode.com/u/Vinaykumar83/",
};

export const mailtoUrl = `mailto:${profile.email}`;
export const whatsappUrl = `https://wa.me/${profile.whatsappNumber}`;
