import emsImage from "../assets/images/project1.webp";
import blogifyImage from "../assets/images/project2.webp";
import authAppImage from "../assets/images/project3.webp";

export const projects = [
  {
    id: 1,

    title: "Employee Management System",

    shortDescription:
      "Full Stack MERN application for managing employees, attendance, leave requests and payroll.",

    description:
      "A complete Employee Management System built using React, Node.js, Express and MongoDB. Includes authentication, attendance tracking, leave management, payroll generation and role-based access.",

    image: emsImage,

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],

    category: "Full Stack",

    github:
      "https://github.com/vinaykumar0983",

    live:
      "https://full-stack-ems-zc3o.vercel.app",

    featured: true,
  },

  {
    id: 2,

    title: "Blogify",

    shortDescription:
      "Modern blogging platform deployed on AWS Elastic Beanstalk.",

    description:
      "A cloud-based blogging application where users can create, edit and manage blogs. Deployed on AWS using Elastic Beanstalk with MongoDB Atlas integration.",

    image: blogifyImage,

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
      "Express",
    ],

    category: "Cloud",

    github:
      "https://github.com/vinaykumar0983",

    live:
      "",

    featured: true,
  },

  {
    id: 3,

    title: "AuthApp API",

    shortDescription:
      "Secure JWT Authentication and Authorization API.",

    description:
      "REST API implementing user registration, login, refresh tokens, password hashing, protected routes and role-based authentication using JWT.",

    image: authAppImage,

    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "bcrypt",
    ],

    category: "Backend",

    github:
      "https://github.com/vinaykumar0983",

    live: "",

    featured: true,
  },

  {
    id: 4,

    title: "Portfolio Website",

    shortDescription:
      "Personal portfolio showcasing projects, skills and achievements.",

    description:
      "Professional portfolio website built with React, Tailwind CSS and Framer Motion animations.",

    image: emsImage,

    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    category: "Frontend",

    github:
      "https://github.com/vinaykumar0983",

    live: "",

    featured: false,
  },

  {
    id: 5,

    title: "LeetCode Solutions Repository",

    shortDescription:
      "Collection of DSA and LeetCode problem solutions.",

    description:
      "Repository containing optimized solutions for 170+ LeetCode problems covering Arrays, Trees, Graphs, Dynamic Programming and more.",

    image: authAppImage,

    technologies: [
      "Java",
      "DSA",
      "Algorithms",
    ],

    category: "DSA",

    github:
      "https://github.com/vinaykumar0983",

    live: "",

    featured: false,
  },

  {
    id: 6,

    title: "AWS Cloud Labs",

    shortDescription:
      "Hands-on cloud projects using AWS services.",

    description:
      "Practical cloud computing projects involving EC2, S3, RDS, EFS, IAM, VPC and Elastic Beanstalk deployments.",

    image: blogifyImage,

    technologies: [
      "AWS",
      "EC2",
      "S3",
      "RDS",
      "IAM",
      "VPC",
    ],

    category: "Cloud",

    github:
      "https://github.com/vinaykumar0983",

    live: "",

    featured: false,
  },
];