import solarPanel from '../assets/solarpanel.png';

export default function About() {
    return (
        <div className="px-6 py-16 max-w-7xl mx-auto"> 
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
                {/* Image Section (Hidden on Mobile) */}
                <div className="hidden lg:block flex-1">
                    <img 
                        src={solarPanel} 
                        alt="Solar Panels" 
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 text-lg">
                    <h1 className="text-4xl text-[#1b7646] mb-6 font-bold">About Us</h1>
                    <p className="mb-6">
                        <span className="text-[#1b7646] font-semibold">Solaire Canada Solar</span> is the voice for solar, wind, and geothermal energy, as well as energy storage solutions that will power Quebec's energy future. We work to create the conditions for a modern energy system through stakeholder advocacy and public engagement.
                    </p>

                    <h2 className="text-[#1b7646] font-semibold text-2xl mb-3">Our Mission</h2>
                    <ul className="list-disc list-outside ml-6 mb-6 space-y-2"> 
                        <li>Advocate for solar, wind, geothermal, and energy storage industries to benefit Quebec's economy and energy future.</li>
                        <li>Increase stakeholder understanding of renewable electricity as a clean, low-cost, reliable, and scalable solution.</li>
                        <li>Provide a platform for industry collaboration and growth.</li>
                    </ul>

                    <h2 className="text-[#1b7646] font-semibold text-2xl mb-3">Our Vision</h2>
                    <p className="mb-6">
                        Our vision is to ensure solar, wind, geothermal energy, and energy storage play a central role in transforming Quebec's energy mix.
                    </p>

                    <h2 className="text-[#1b7646] font-semibold text-2xl mb-3">Our History</h2>
                    <p>
                        Solaire Canada Solar was established on July 1, 2016, to work with the <span className="underline text-[#1b7646] font-medium">Wind Energy Association</span> and the <span className="underline text-[#1b7646] font-medium">Canadian Solar Industries Association</span>. They have since united to create one voice for wind energy, solar energy, and energy storage solutions.
                    </p>

                    <p className="mt-6">
                        For inquiries, reservations, or more information about our upcoming events and initiatives, contact us at <span className="text-[#1b7646] font-medium underline">rsvp@solairecanadasolar.com</span>. 
                    </p>
                    <p>Join our mailing list for discounts, resources, and updates!</p>
                </div>
            </div>
        </div>
    );
}
