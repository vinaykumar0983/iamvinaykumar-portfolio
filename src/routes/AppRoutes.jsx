import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Experience from "../pages/Experience/Experience";
import Certifications from "../pages/Certifications/Certifications";
import Blog from "../pages/Blog/Blog";
import BlogPost from "../pages/BlogPost/BlogPost";
import Resume from "../pages/Resume/Resume";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
