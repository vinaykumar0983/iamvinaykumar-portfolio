import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section
      className="
        min-h-[70vh] py-24
        flex
        flex-col
        items-center
        justify-center
        bg-[#030817]
        text-white
        px-6
      "
    >
      <h1 className="text-7xl sm:text-8xl font-black mb-4">
        404
      </h1>

      <h2 className="text-3xl font-bold mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-400 mb-8 text-center">
        The page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="
          px-8
          py-4
          rounded-xl
          bg-gradient-to-r
          from-cyan-500
          to-blue-600
        "
      >
        Back To Home
      </Link>
    </section>
  );
}