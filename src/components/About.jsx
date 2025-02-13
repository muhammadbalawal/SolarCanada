import solarPanel from '../assets/solarpanel.png';

export default function About() {
    return (
    <div className=""> 
        <div className="flex flex-col lg:flex-row items-center justify-between px-10 py-16 max-w-7xl mx-auto">
            <div className="flex-1 text-xl ">
                <h1 className="text-5xl text-[#1b7646] mb-6 font-bold">About Us</h1>
                <p className='mb-6'>
                    <span className=" text-[#1b7646] font-medium ">Solaire Canada Solar</span> is the voice for solar, wind and geothermal energy, and energy storage solutions that will power Quebec's energy future. We work to create the conditions for a modern energy system through stakeholder advocacy and public engagement. Our diverse members are uniquely positioned to deliver clean, low-cost, reliable, flexible and scalable solutions for Quebec's energy needs.
                </p>
                <span className=" text-[#1b7646] font-medium" >Our Mission</span>
                <ul className="list-outside list-disc ml-6 mb-6"> 
                    <li>To advocate on behalf of the solar, wind and geothermal energy and energy storage industries to benefit Quebec's economy and energy future.</li>
                    <li>To increase stakeholder understanding that renewable electricity and energy storage are clean, low-cost, reliable, flexible and scalable solutions for Quebec's energy needs.</li>
                    <li>To provide a forum devoted to dialogue, collaboration, stewardship and growth of the industry.</li>
                </ul>
                <span className="text-[#1b7646] font-medium">Our Vision</span>
                <p className='mb-6 '>Our vision is to ensure solar, wind and geothermal energy, and energy storage play a central role in transforming Quebec's energy mix.</p>
                <span className="text-[#1b7646] font-medium">Our History</span>
                <p>Solaire Canada Solar was established on July 1, 2016 to work with the <span className="underline  text-[#1b7646] font-medium  ">Wind Energy Association</span> and the <span>Canadian Solar Industries Association</span>. They have since united to create one voice for wind energy, solar energy and energy storage solutions.</p>
                <p className='mt-6'>For inquiries, reservations, or more information about our upcoming events and initiatives, please contact us at <span className=" text-[#1b7646] font-medium  underline">rsvp@solairecanadasolar.com</span>. Join our mailing list for discounts, resources and updates about our offers.</p>
                <p>We look forward to hearing from you!</p>
            </div>
            <div className="flex-1 ml-6">
                <img src={solarPanel} alt="solar-picture" className="h-full" />
            </div>
        </div>
    </div>
    )
}