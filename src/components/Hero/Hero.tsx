export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-black px-4">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#D4AF37] mb-6">
        <img
          src="/images/img.webp" 
          alt="Profile"
          className="w-full h-full object-cover transition-all duration-500 blur-sm"
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.remove('blur-sm')}
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-semibold text-[#DAC5A7]">Writer & Content</h1>
      <h1 className="text-2xl md:text-4xl italic text-[#DAC5A7] mt-2">Strategist</h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-[#DAC5A7] mt-4 max-w-2xl">
        Hi, I'm Shahzaib I craft campaigns, write copy, <br />
        and build brands.
      </p>

      {/* My Services Button */}
      <button className="mt-6 px-4 py-2 border-2 border-[#DAC5A7] text-[#DAC5A7] text-sm md:text-base rounded-md bg-transparent hover:bg-[#d9c070] hover:text-black transition flex items-center gap-2">
        MY SERVICES →
      </button>
    </section>
  );
}
