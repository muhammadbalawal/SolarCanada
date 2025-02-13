export default function Hero() {
    return (
        <section 
            className="h-[1440px] w-full relative bg-cover bg-center flex items-center justify-center text-center p-5" 
            style={{ backgroundImage: "url('/Home_Image.png')" }}
        >
            <div className="relative z-10 max-w-[1371px] text-white">
                <h1 className="text-[70px] font-extrabold text-shadow-lg drop-shadow-md">
                    Solaire Canada Solar & Renewable Energy Power Foundation!
                </h1>
                <p className="text-[30px] font-medium text-shadow-md mt-4">
                    Our mission is to promote the adoption of renewable energy solutions and reduce greenhouse gas emissions in the Montreal West Island Municipalities.
                </p>
                <div className="mt-[100px] flex gap-[60px] justify-center">
                    <a href="#" className="inline-block px-[30px] py-[20px] bg-[#1b7646] text-white rounded-lg text-lg transition-colors duration-300 hover:bg-[#145830]">
                        Learn More
                    </a>
                    <a href="#" className="inline-block px-[30px] py-[20px] bg-[#1b7646] text-white rounded-lg text-lg transition-colors duration-300 hover:bg-[#145830]">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}