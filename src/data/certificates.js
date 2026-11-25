import nptelImg from "../assets/certificates/nptel-cloud.jpg";
import awsImg from "../assets/certificates/aws-academy.jpg";
import javaImg from "../assets/certificates/java-certificate.jpg";
import cloudImg from "../assets/certificates/cloud-workshop.jpg";
import dsaImg from "../assets/certificates/dsa-certificate.jpg";

export const certificates = [
  {
    id: 1,

    title: "Cloud Computing",

    issuer: "NPTEL",

    date: "2026",

    score: "82%",

    image: nptelImg,

    category: "Cloud",

    credentialUrl:
      "https://nptel.ac.in",

    description:
      "Successfully completed NPTEL Cloud Computing certification with Elite score. Learned virtualization, cloud architecture, SaaS, PaaS, IaaS and distributed systems.",

    featured: true,
  },

  {
    id: 2,

    title: "AWS Academy Cloud Foundations",

    issuer: "AWS Academy",

    date: "2026",

    score: "",

    image: awsImg,

    category: "AWS",

    credentialUrl:
      "https://aws.amazon.com/training/",

    description:
      "Learned AWS core services including EC2, S3, IAM, RDS, VPC and cloud security fundamentals.",

    featured: true,
  },

  {
    id: 3,

    title: "Java Programming",

    issuer: "Coursera",

    date: "2025",

    score: "",

    image: javaImg,

    category: "Programming",

    credentialUrl:
      "https://coursera.org",

    description:
      "Completed Java programming fundamentals including OOP, Collections, Exception Handling and Multithreading.",

    featured: false,
  },

  {
    id: 4,

    title: "Cloud Workshop",

    issuer: "Galgotias University",

    date: "2026",

    score: "",

    image: cloudImg,

    category: "Cloud",

    credentialUrl: "",

    description:
      "Participated in cloud infrastructure workshop covering AWS deployment, networking and cloud architecture.",

    featured: false,
  },

  {
    id: 5,

    title: "Data Structures & Algorithms",

    issuer: "Online Certification",

    date: "2026",

    score: "",

    image: dsaImg,

    category: "DSA",

    credentialUrl: "",

    description:
      "Completed advanced DSA concepts including Trees, Graphs, Dynamic Programming and Problem Solving.",

    featured: false,
  },
];

export const certificateCategories = [
  "All",
  "Cloud",
  "AWS",
  "Programming",
  "DSA",
];

export const certificateStats = [
  {
    title: "Certificates",
    value: "5+",
  },

  {
    title: "NPTEL Score",
    value: "82%",
  },

  {
    title: "Cloud Certifications",
    value: "2+",
  },

  {
    title: "Workshops",
    value: "3+",
  },
];