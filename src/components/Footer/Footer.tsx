import { FaGithub, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-[#363636] text-white p-4 relative">
      {/* Top Line */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Section - Name */}
        <p className="text-xs md:text-sm">Shahzaib</p>

        {/* Center Section - Social Icons */}
        <div className="flex space-x-4">
          <a 
            href="https://github.com/ShahzaibAkhtar7" 
            className="text-white hover:text-gray-200"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/shahzaib-akhtar-a938472b5/" 
            className="text-white hover:text-gray-200"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">Services</a>
          <a href="#" className="hover:text-gray-200">Portfolio</a>
          <a href="#" className="hover:text-gray-200">About</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </div>
      </div>

      {/* Line Separator */}
      <hr className="border-gray-500 my-4" />

      {/* Bottom Line */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        {/* Left Section - Copyright Notice */}
        <p className="text-xs md:text-sm">© 2025 Shahzaib All rights reserved.</p>

        {/* Right Section - "Top Up" Button with Small Arrow */}
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-2 bg-white text-[#363636] rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          <span className="text-xs">Top Up</span>
          <FaArrowUp size={14} />
        </a>
      </div>
    </div>
  );
}
