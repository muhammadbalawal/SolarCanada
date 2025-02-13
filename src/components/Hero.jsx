export default function Hero() {
    return (
      <section
        className="min-h-screen w-full relative bg-cover bg-center flex items-center justify-center text-center px-5 py-10 sm:py-20"
        style={{ backgroundImage: "url('/Home_Image.png')" }}
      >
        <div className="relative z-10 max-w-[1371px] text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow-lg">
            Solaire Canada Solar & Renewable Energy Power Foundation!
          </h1>
          <p className="text-lg sm:text-2xl font-medium drop-shadow-md mt-4">
            Our mission is to promote the adoption of renewable energy solutions and reduce greenhouse gas emissions in the Montreal West Island Municipalities.
          </p>
          <div className="mt-10 sm:mt-16 flex flex-row gap-4 sm:gap-12 justify-center">
            <a
              href="#"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#1b7646] text-white rounded-lg text-base sm:text-lg transition-colors duration-300 hover:bg-[#145830]"
            >
              Learn More
            </a>
            <a
              href="#"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#1b7646] text-white rounded-lg text-base sm:text-lg transition-colors duration-300 hover:bg-[#145830]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  }