import { Github, Linkedin } from "lucide-react";

export default function Intro() {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 flex flex-col items-center">
      {/* Container with Equal Spacing */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Profile Picture (Left Side) */}
        <div className="w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-lg border-4 border-[#DAC5A7] shadow-lg">
          <img
            src="/images/img.png" // Replace with your profile picture path
            alt="Shahzaib Akhtar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro Section (Right Side) */}
        <div className="max-w-lg text-center md:text-left md:ml-12 mt-10 md:mt-0">
          {/* Title */}
          <h1 className="text-5xl font-bold text-[#DAC5A7]">
            Shahzaib <span className="italic">Akhtar</span>
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-lg text-gray-400 mt-4 leading-relaxed">
            Hi, I’m Shahzaib Akhtar - a freelancer specializing in premium web design,
            development, and SEO services. I’m passionate about creating unique and
            effective solutions for my clients, and I bring a personal touch to every project.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/ShahzaibAkhtar7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DAC5A7] hover:text-[#B58A5A] transition-colors flex items-center gap-2"
            >
              <Github size={28} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shahzaib-akhtar-a938472b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DAC5A7] hover:text-[#B58A5A] transition-colors flex items-center gap-2"
            >
              <Linkedin size={28} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Watermark Logos (Now Correctly Centered Below) */}
      <div className="flex flex-wrap justify-center gap-6 opacity-50 mt-14 text-xl font-bold text-[#DAC5A7] w-full">
        <div>LOREM</div>
        <div>|</div>
        <div>IPSUM</div>
        <div>|</div>
        <div>DOLOR</div>
        <div>|</div>
        <div>SIT</div>
      </div>
    </div>
  );
}


