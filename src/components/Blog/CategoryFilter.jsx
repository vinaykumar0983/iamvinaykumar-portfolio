export default function CategoryFilter({
  categories = [],
  selectedCategory = "All",
  onSelectCategory,
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`
            px-5
            py-2.5
            rounded-full
            text-sm
            font-medium
            transition-all
            duration-300
            border

            ${
              selectedCategory === category
                ? `
                  bg-gradient-to-r
                  from-purple-600
                  via-blue-600
                  to-cyan-500
                  text-white
                  border-transparent
                  shadow-lg
                  shadow-blue-500/20
                `
                : `
                  bg-[#071122]
                  text-gray-300
                  border-white/10
                  hover:border-cyan-500/40
                  hover:text-white
                `
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}