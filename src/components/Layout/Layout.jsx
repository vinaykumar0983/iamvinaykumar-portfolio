import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#030817] text-white">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
