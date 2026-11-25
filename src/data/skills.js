import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiPostman,
  SiGithub,
  SiLinux,
} from "react-icons/si";

export const skills = {
  frontend: [
    {
      name: "React.js",
      icon: FaReact,
      level: 90,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: 88,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 90,
    },
    {
      name: "Redux",
      icon: SiRedux,
      level: 75,
    },
  ],

  backend: [
    {
      name: "Node.js",
      icon: FaNodeJs,
      level: 85,
    },
    {
      name: "Express.js",
      icon: SiExpress,
      level: 85,
    },
    {
      name: "Java",
      icon: FaJava,
      level: 80,
    },
  ],

  database: [
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: 88,
    },
    {
      name: "MySQL",
      icon: SiMysql,
      level: 80,
    },
  ],

  cloud: [
    {
      name: "AWS",
      icon: FaAws,
      level: 82,
    },
    {
      name: "Linux",
      icon: SiLinux,
      level: 80,
    },
    {
      name: "Docker",
      icon: FaDocker,
      level: 75,
    },
  ],

  tools: [
    {
      name: "Git",
      icon: FaGitAlt,
      level: 85,
    },
    {
      name: "GitHub",
      icon: SiGithub,
      level: 85,
    },
    {
      name: "Postman",
      icon: SiPostman,
      level: 85,
    },
  ],
};

export const achievements = [
  {
    title: "LeetCode Problems",
    value: "170+",
  },
  {
    title: "NPTEL Score",
    value: "82%",
  },
  {
    title: "CGPA",
    value: "8.67",
  },
  {
    title: "Major Projects",
    value: "5+",
  },
];