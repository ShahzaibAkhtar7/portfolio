export default function Reviews() {
  return (
    <div className="bg-black text-[#DAC5A7] py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-center text-4xl text-[#DAC5A7] mb-10">
          What my clients say
        </h1>

        {/* Review Container */}
        <div className="relative">
          {/* Vertical Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-1/2 h-full w-px bg-[#DAC5A7] transform -translate-x-1/2"></div>

          {/* Review Items */}
          <div className="space-y-10">
            {/* Review 1 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Card 1 (Right Side) */}
              <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg flex-1 md:ml-auto md:max-w-md">
                <h3 className="text-lg font-semibold text-[#B58A5A]">Amazing Results with Premium Design Services</h3>
                <p className="mt-2 text-sm">
                  Shahzaib is a top-notch professional who created an amazing website for my business. Throughout the project, he provided excellent communication and a smooth process. I highly recommend his services.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#B58A5A] flex items-center justify-center text-black font-bold">
                    J
                  </div>
                  <div>
                    <div className="text-sm font-semibold">JOHN SMITH</div>
                    <div className="text-xs">ABC Company</div>
                  </div>
                </div>
              </div>
              {/* Number 1 (Hidden on Mobile) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-[#DAC5A7] border-2 border-[#DAC5A7] rounded-full w-8 h-8 items-center justify-center">
                1
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Card 2 (Left Side) */}
              <div className="bg-[#DAC5A7] p-6 rounded-lg shadow-lg flex-1 md:mr-auto md:max-w-md text-black">
                <h3 className="text-lg font-semibold">Expert Webflow and SEO Services: Excellent Work</h3>
                <p className="mt-2 text-sm">
                  Working with Shahzaib on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail is remarkable.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#DAC5A7] font-bold">
                    D
                  </div>
                  <div>
                    <div className="text-sm font-semibold">DAVID KIM</div>
                    <div className="text-xs">Design Inc.</div>
                  </div>
                </div>
              </div>
              {/* Number 2 (Hidden on Mobile) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-[#DAC5A7] border-2 border-[#DAC5A7] rounded-full w-8 h-8 items-center justify-center">
                2
              </div>
            </div>

            {/* Review 3 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Card 3 (Right Side) */}
              <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg flex-1 md:ml-auto md:max-w-md">
                <h3 className="text-lg font-semibold text-[#B58A5A]">Strategic Design & Development Solutions</h3>
                <p className="mt-2 text-sm">
                  The strategic approach to our website redesign was impressive. Every detail was carefully considered, resulting in a platform that not only looks great but also performs exceptionally well.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#B58A5A] flex items-center justify-center text-black font-bold">
                    S
                  </div>
                  <div>
                    <div className="text-sm font-semibold">SARAH CHEN</div>
                    <div className="text-xs">Vertex Media</div>
                  </div>
                </div>
              </div>
              {/* Number 3 (Hidden on Mobile) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-[#DAC5A7] border-2 border-[#DAC5A7] rounded-full w-8 h-8 items-center justify-center">
                3
              </div>
            </div>

            {/* Review 4 */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Card 4 (Left Side) */}
              <div className="bg-[#DAC5A7] p-6 rounded-lg shadow-lg flex-1 md:mr-auto md:max-w-md text-black">
                <h3 className="text-lg font-semibold">Innovative Solutions & Creative Excellence</h3>
                <p className="mt-2 text-sm">
                  Their approach to our project was both innovative and thorough. The team's ability to understand our needs and translate them into a stunning website was remarkable.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[#DAC5A7] font-bold">
                    E
                  </div>
                  <div>
                    <div className="text-sm font-semibold">EMMA TAYLOR</div>
                    <div className="text-xs">Pulse Digital</div>
                  </div>
                </div>
              </div>
              {/* Number 4 (Hidden on Mobile) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-[#DAC5A7] border-2 border-[#DAC5A7] rounded-full w-8 h-8 items-center justify-center">
                4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
