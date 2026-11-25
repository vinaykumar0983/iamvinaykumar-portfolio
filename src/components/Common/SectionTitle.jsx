export default function SectionTitle({
  title,
  subtitle,
  center = false,
}) {
  return (
    <div
      className={`mb-14 ${
        center ? "text-center" : "text-left"
      }`}
    >
      {/* Subtitle */}
      {subtitle && (
        <span
          className="
            inline-block
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            text-cyan-300
            border
            border-cyan-500/20
            bg-cyan-500/10
            mb-4
          "
        >
          {subtitle}
        </span>
      )}

      {/* Title */}
      <h2
        className="
          text-4xl
          md:text-5xl
          font-black
          text-white
          leading-tight
        "
      >
        {title}
      </h2>

      {/* Gradient Line */}
      <div
        className={`
          h-[4px]
          w-24
          mt-5
          rounded-full
          bg-gradient-to-r
          from-purple-500
          via-blue-500
          to-cyan-500
          ${center ? "mx-auto" : ""}
        `}
      />

      {/* Glow */}
      <div
        className={`
          h-[8px]
          w-20
          blur-md
          opacity-70
          bg-gradient-to-r
          from-purple-500
          to-blue-500
          ${center ? "mx-auto" : ""}
        `}
      />
    </div>
  );
}