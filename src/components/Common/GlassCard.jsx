export default function GlassCard({
  children,
  className = "",
  hover = true,
  padding = "p-5 sm:p-6",
  blur = true,
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#071122]/80 ${
        blur ? "backdrop-blur-xl" : ""
      } ${padding} transition-all duration-300 ${
        hover
          ? "hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
          : ""
      } ${className}`}
    >
      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
