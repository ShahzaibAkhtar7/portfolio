import { useState } from "react";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  { id: 1, category: "Print & Outdoor", image: "/images/outdoor1.jpg" },
  { id: 2, category: "Print & Outdoor", image: "/images/outdoor2.jpg" },
  { id: 3, category: "Print & Outdoor", image: "/images/outdoor3.jpg" },
  { id: 4, category: "Print & Outdoor", image: "/images/outdoor4.jpg" },
  { id: 5, category: "Print & Outdoor", image: "/images/outdoor5.jpg" },
  { id: 6, category: "Print & Outdoor", image: "/images/outdoor6.jpg" },
  { id: 7, category: "Digital", image: "/images/digital1.png" },
  { id: 8, category: "Digital", image: "/images/digital2.jpg" },
  { id: 9, category: "Digital", image: "/images/digital3.jpg" },
];

const categories = ["Show All", "Print & Outdoor", "Digital"];

export default function MyWork() {
  const [selectedCategory, setSelectedCategory] = useState("Show All");

  const filteredItems =
    selectedCategory === "Show All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-black text-[#DAC5A7] py-10 px-4 md:px-10">
      {/* Portfolio Title */}
      <h3 className="text-center text-2xl font-bold text-[#DAC5A7]">Portfolio</h3>
      
      {/* Work Title */}
      <h1 className="text-center text-6xl font-serif text-[#DAC5A7] mt-2">
        Latest <span className="italic">Work</span>
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-lg font-semibold transition border border-gray-400 hover:bg-gray-700 hover:text-[#DAC5A7] ${
              selectedCategory === category ? "bg-gray-700 text-[#DAC5A7]" : "bg-black text-[#DAC5A7]"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid gap-6 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-lg shadow-lg overflow-hidden bg-gray-900"
          >
            <div className="w-full h-64">
              <img
                src={item.image}
                alt="Project"
                loading="lazy"
                className="w-full h-full object-cover rounded-lg transition duration-300 group-hover:scale-105"
              />
            </div>
            {/* Overlay with Title and Button */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
              <h3 className="text-lg font-semibold text-[#DAC5A7]">LOREM IPSUM</h3>
              <button className="mt-2 flex items-center gap-2 bg-black text-[#DAC5A7] px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-700">
                About Project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}