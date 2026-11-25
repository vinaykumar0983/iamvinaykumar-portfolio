import awsImg from "../assets/images/project1.webp";
import reactImg from "../assets/images/project2.webp";
import nodeImg from "../assets/images/project3.webp";

export const blogs = [
  {
    id: 1,

    title: "AWS S3 Complete Guide for Beginners",

    slug: "aws-s3-complete-guide",

    category: "AWS",

    coverImage: awsImg,

    date: "10 Oct 2026",

    readTime: "8 min read",

    featured: true,

    excerpt:
      "Learn Amazon S3 from beginner to advanced including buckets, policies, lifecycle rules and static website hosting.",

    content: `
      Amazon S3 is an object storage service that offers
      scalability, availability and security. In this guide
      we cover bucket creation, permissions, versioning,
      lifecycle management and hosting websites using S3.
    `,
  },

  {
    id: 2,

    title: "Deploy MERN Application on AWS Elastic Beanstalk",

    slug: "deploy-mern-on-aws",

    category: "Cloud",

    coverImage: awsImg,

    date: "15 Oct 2026",

    readTime: "10 min read",

    featured: true,

    excerpt:
      "Step-by-step guide to deploy a production-ready MERN application using AWS Elastic Beanstalk.",

    content: `
      Elastic Beanstalk simplifies deployment by managing
      servers, scaling and monitoring automatically.
      Learn how to deploy React and Node.js applications.
    `,
  },

  {
    id: 3,

    title: "JWT Authentication Using Node.js and MongoDB",

    slug: "jwt-authentication-nodejs",

    category: "Node.js",

    coverImage: nodeImg,

    date: "20 Oct 2026",

    readTime: "7 min read",

    featured: true,

    excerpt:
      "Build secure login and registration APIs using JWT, bcrypt and refresh tokens.",

    content: `
      JWT authentication is widely used in modern web
      applications. Learn token generation, middleware
      protection and refresh token implementation.
    `,
  },

  {
    id: 4,

    title: "React Interview Questions for Freshers",

    slug: "react-interview-questions",

    category: "React",

    coverImage: reactImg,

    date: "25 Oct 2026",

    readTime: "6 min read",

    featured: false,

    excerpt:
      "Top React interview questions covering hooks, state management, lifecycle and routing.",

    content: `
      React interviews frequently focus on hooks,
      component lifecycle, virtual DOM, routing and
      state management concepts.
    `,
  },

  {
    id: 5,

    title: "MongoDB Atlas Setup Guide",

    slug: "mongodb-atlas-guide",

    category: "MongoDB",

    coverImage: nodeImg,

    date: "30 Oct 2026",

    readTime: "5 min read",

    featured: false,

    excerpt:
      "Learn how to create a MongoDB Atlas cluster and connect it with your Node.js application.",

    content: `
      MongoDB Atlas provides managed cloud databases.
      Learn cluster creation, database users, network
      access configuration and connection strings.
    `,
  },

  {
    id: 6,

    title: "LeetCode Two Pointer Pattern",

    slug: "two-pointer-pattern",

    category: "DSA",

    coverImage: reactImg,

    date: "05 Nov 2026",

    readTime: "9 min read",

    featured: false,

    excerpt:
      "Master the Two Pointer pattern with common interview questions and optimized solutions.",

    content: `
      The Two Pointer technique is one of the most
      important coding interview patterns. It helps
      reduce complexity from O(n²) to O(n).
    `,
  },

  {
    id: 7,

    title: "Top 20 Java Interview Questions",

    slug: "java-interview-questions",

    category: "Java",

    coverImage: reactImg,

    date: "10 Nov 2026",

    readTime: "8 min read",

    featured: false,

    excerpt:
      "Most asked Java interview questions including OOP, Collections, Exception Handling and Multithreading.",

    content: `
      Java interviews focus on object-oriented concepts,
      collections framework, exception handling and JVM
      internals.
    `,
  },

  {
    id: 8,

    title: "MERN Stack Roadmap 2027",

    slug: "mern-stack-roadmap",

    category: "Career",

    coverImage: awsImg,

    date: "15 Nov 2026",

    readTime: "12 min read",

    featured: true,

    excerpt:
      "Complete roadmap to become a professional MERN Stack Developer in 2027.",

    content: `
      Learn frontend, backend, databases, deployment,
      system design and interview preparation strategies
      to become a full stack developer.
    `,
  },
];

export const blogCategories = [
  "All",
  "AWS",
  "Cloud",
  "React",
  "Node.js",
  "MongoDB",
  "Java",
  "DSA",
  "Career",
];

export const featuredBlogs = blogs.filter(
  (blog) => blog.featured
);

export const blogStats = [
  {
    title: "Articles",
    value: "8+",
  },

  {
    title: "Categories",
    value: "8",
  },

  {
    title: "Topics",
    value: "Cloud + MERN",
  },

  {
    title: "Readers",
    value: "Growing",
  },
];