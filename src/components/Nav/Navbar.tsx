import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-center py-4 bg-black">
      <div className="inline-flex items-center gap-x-4 px-4 bg-[#232323] py-2 rounded-full border border-gray-600 shadow-lg">
        
        {/* Left: Logo and Nav Links */}
        <div className="flex items-center space-x-4">
          <h1 className="text-white font-semibold text-sm">Shahzaib</h1>
          <ul className="hidden md:flex space-x-4 text-white text-sm">
            {["HOME", "SERVICES", "WORK", "PORTFOLIO", "ABOUT"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-[#c8a15d] transition-colors duration-300">
                <Link to={item.toLowerCase()}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Let's Talk Button & Mobile Menu Icon */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block border border-white px-3 py-1 rounded-full text-white text-sm hover:bg-white hover:text-black transition">
            LET'S TALK
          </button>
          <div className="md:hidden text-white text-xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="absolute top-16 w-[90%] max-w-xs bg-[#232323] text-white flex flex-col items-center py-3 space-y-3 border border-gray-600 rounded-lg shadow-lg md:hidden">
          {["HOME", "SERVICES", "WORK", "PORTFOLIO", "ABOUT"].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              className="cursor-pointer hover:text-[#c8a15d] transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button className="border border-white px-3 py-1 rounded-full text-white text-sm hover:bg-white hover:text-black transition">
            LET'S TALK
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
