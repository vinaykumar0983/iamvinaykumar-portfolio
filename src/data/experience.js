import {
  FaGraduationCap,
  FaCloud,
  FaCode,
  FaAws,
  FaRocket,
  FaLaptopCode,
} from "react-icons/fa";

export const timelineData = [
  {
    id: 1,

    year: "2021",

    title: "Started BCA",

    icon: FaGraduationCap,

    color: "from-blue-500 to-cyan-500",

    description:
      "Started Bachelor of Computer Applications and built strong foundations in programming, databases, operating systems and web technologies.",
  },

  {
    id: 2,

    year: "2024",

    title: "Completed BCA",

    icon: FaGraduationCap,

    color: "from-indigo-500 to-purple-500",

    description:
      "Graduated from Dr. Ram Manohar Lohia Avadh University with practical knowledge of software development and computer science fundamentals.",
  },

  {
    id: 3,

    year: "2025",

    title: "Started MCA (Cloud Computing)",

    icon: FaCloud,

    color: "from-purple-500 to-pink-500",

    description:
      "Joined Galgotias University for MCA with specialization in Cloud Computing. Focused on cloud infrastructure, networking and distributed systems.",
  },

  {
    id: 4,

    year: "2026",

    title: "Full Stack Development Journey",

    icon: FaCode,

    color: "from-green-500 to-emerald-500",

    description:
      "Built multiple MERN stack applications including Employee Management System, Blogify and AuthApp API using modern development practices.",
  },

  {
    id: 5,

    year: "2026",

    title: "AWS & Cloud Learning",

    icon: FaAws,

    color: "from-orange-500 to-yellow-500",

    description:
      "Worked on AWS services including EC2, S3, IAM, RDS, EFS, VPC and Elastic Beanstalk through hands-on labs and cloud projects.",
  },

  {
    id: 6,

    year: "2027",

    title: "Placement & Career Goal",

    icon: FaRocket,

    color: "from-red-500 to-orange-500",

    description:
      "Preparing for software development and cloud engineering roles while strengthening DSA, system design and cloud architecture skills.",
  },
];

export const experiences = [
  {
    id: 1,

    title: "Employee Management System",

    company: "Personal Project",

    duration: "2026",

    location: "Remote",

    type: "Full Stack",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],

    description:
      "Developed a complete Employee Management System with authentication, attendance tracking, leave management and payroll generation.",
  },

  {
    id: 2,

    title: "Blogify",

    company: "Cloud Project",

    duration: "2026",

    location: "AWS",

    type: "Cloud",

    technologies: [
      "React",
      "Node.js",
      "MongoDB Atlas",
      "AWS Elastic Beanstalk",
    ],

    description:
      "Built and deployed a blogging platform on AWS Elastic Beanstalk with MongoDB Atlas integration and production deployment workflow.",
  },

  {
    id: 3,

    title: "AuthApp API",

    company: "Backend Project",

    duration: "2026",

    location: "Remote",

    type: "Backend",

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "bcrypt",
    ],

    description:
      "Created a secure authentication API with JWT authentication, refresh tokens, password hashing and role-based authorization.",
  },

  {
    id: 4,

    title: "AWS Hands-On Labs",

    company: "Cloud Computing",

    duration: "2025 - Present",

    location: "AWS Cloud",

    type: "Cloud",

    technologies: [
      "EC2",
      "S3",
      "IAM",
      "RDS",
      "EFS",
      "VPC",
    ],

    description:
      "Completed multiple cloud labs involving infrastructure deployment, networking, storage services and cloud security practices.",
  },
];

export const careerStats = [
  {
    title: "Projects Built",
    value: "5+",
  },

  {
    title: "LeetCode Solved",
    value: "170+",
  },

  {
    title: "Cloud Certifications",
    value: "2+",
  },

  {
    title: "Current CGPA",
    value: "8.67",
  },
];

export const futureGoals = [
  {
    icon: FaLaptopCode,
    title: "Full Stack Developer",
    description:
      "Build scalable web applications using MERN stack technologies.",
  },

  {
    icon: FaCloud,
    title: "Cloud Engineer",
    description:
      "Design, deploy and manage cloud infrastructure on AWS.",
  },

  {
    icon: FaRocket,
    title: "Software Engineer",
    description:
      "Join a product-based company and contribute to large-scale systems.",
  },
];