import { FaInstagram, FaTwitter, FaFacebookF, FaBehance, FaDribbble, FaPinterest } from "react-icons/fa";

export default function LetsTalk() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Watermark Text */}
      <div className="absolute top-4 w-full overflow-hidden">
        <div className="flex space-x-4 whitespace-nowrap animate-marquee text-gray-500 opacity-30 text-lg uppercase tracking-widest">
          {Array(20).fill("LET'S TALK • • •").map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
      </div>

      {/* Spacing between watermark and content */}
      <div className="h-16"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full px-4">
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-left text-[#DAC5A7] flex flex-col justify-center h-full">
          <p className="text-sm uppercase tracking-widest text-gray-400">Project in Mind?</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Let's make <br />
            <span className="block">your</span>
            <span className="italic">Business</span> <br />
            <span className="italic">shine</span>
          </h2>
        </div>

        {/* Right Side: Form */}
        <div className="bg-[#111] p-8 rounded-lg shadow-lg text-[#DAC5A7] w-full max-w-md mx-auto flex flex-col justify-center h-full">
          <h3 className="text-lg font-semibold mb-4">Let's get in touch.</h3>
          <form className="space-y-6">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-5 py-3 bg-[#1c1c1c] border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DAC5A7] focus:border-[#DAC5A7] text-[#DAC5A7]"
                placeholder="NAME"
              />
            </div>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-5 py-3 bg-[#1c1c1c] border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DAC5A7] focus:border-[#DAC5A7] text-[#DAC5A7]"
                placeholder="EMAIL"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-5 py-3 bg-[#1c1c1c] border border-gray-700 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#DAC5A7] focus:border-[#DAC5A7] text-[#DAC5A7]"
                placeholder="MESSAGE"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-black bg-[#DAC5A7] hover:bg-[#bda07e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DAC5A7] font-semibold"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 w-full max-w-2xl">
        {[FaInstagram, FaTwitter, FaFacebookF, FaBehance, FaDribbble, FaPinterest].map((Icon, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-6 py-3 bg-[#111] text-[#DAC5A7] border border-gray-700 rounded-md hover:bg-[#1c1c1c]"
          >
            <Icon /> {['INSTAGRAM', 'TWITTER', 'FACEBOOK', 'BEHANCE', 'DRIBBBLE', 'PINTEREST'][index]}
          </button>
        ))}
      </div>
    </div>
  );
}
