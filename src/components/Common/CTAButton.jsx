import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const styles = {
  primary:
    "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:scale-105",
  secondary:
    "border border-white/10 bg-[#071122] text-white hover:border-purple-500 hover:bg-[#0c1730]",
  danger:
    "bg-red-500/20 border border-red-500/30 text-red-300 hover:bg-red-500/30",
};

const isExternal = (href) => /^(https?:|mailto:|tel:)/.test(href);

export default function CTAButton({
  text = "Click Here",
  href,
  onClick,
  type = "button",
  variant = "primary",
  icon = true,
  fullWidth = false,
  disabled = false,
  download = false,
}) {
  const classes = `inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 rounded-2xl font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
    styles[variant] ?? styles.primary
  } ${fullWidth ? "w-full" : ""}`;

  const content = (
    <>
      {text}
      {icon && <FaArrowRight />}
    </>
  );

  if (href) {
    // Internal route -> client-side navigation (no full page reload)
    if (!isExternal(href) && !download && href.startsWith("/") && !href.includes(".")) {
      return (
        <Link to={href} className={classes}>
          {content}
        </Link>
      );
    }

    const opensNewTab = /^https?:/.test(href) && !download;

    return (
      <a
        href={href}
        download={download || undefined}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
