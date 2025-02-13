import React from "react";
import canadaGov from "../assets/canadaGov.png";
import serviceCanada from "../assets/serviceCanada.png";
import hydroSolar from "../assets/hydroSolar.png";
import windDo from "../assets/windDo.png";
import rematek from "../assets/rematek.png";

export default function Partners() {
  return (
    <div className="p-8 text-center bg-white mt-6">
        <h2 className="text-3xl font-bold text-[#1B7646]">Our Partners</h2>
        <p className="mt-4 text-black-700 max-w-screen-lg mx-auto">
            We are grateful to the companies that have contributed to our Summer 2024 project through sponsorships and
            renewable energy presentations. Their support and expertise have been invaluable to our mission and initiatives.
        </p>

        <div className="mt-8 flex justify-center flex-wrap gap-8">
            <img src={canadaGov} alt="Government of Canada" className="h-32" />
            <img src={serviceCanada} alt="Service Canada" className="h-32" />
        </div>

        <div className="mt-6 flex justify-center flex-wrap gap-8">
            <img src={hydroSolar} alt="Hydro Solar" className="h-32" />
            <img src={windDo} alt="Wind-Do" className="h-32" />
            <img src={rematek} alt="Rematek" className="h-32" />
        </div>
    </div>

  );
}