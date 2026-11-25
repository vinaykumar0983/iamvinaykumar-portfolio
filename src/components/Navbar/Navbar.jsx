import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Certifications", path: "/certifications" },
  { name: "Blog", path: "/blog" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-[#030817]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="h-16 sm:h-20 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 sm:gap-3 shrink-0"
          >
            <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              VK
            </span>

            <span className="text-white text-lg sm:text-2xl font-semibold">
              Vinay Kumar
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main"
            className="hidden xl:flex items-center gap-8"
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative text-[15px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-3 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden xl:flex items-center">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-2xl text-white font-medium bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Let&apos;s Connect →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="xl:hidden text-white p-2 -mr-2"
          >
            {menuOpen ? (
              <HiX size={30} />
            ) : (
              <HiOutlineMenuAlt3 size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          id="mobile-menu"
          aria-label="Mobile"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden bg-[#071122] border-t border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <div className="flex flex-col p-6 gap-5">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-medium py-1 ${
                    isActive ? "text-purple-400" : "text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 w-full py-3 text-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
