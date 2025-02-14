import React from "react";
import canadaGov from "../assets/canadaGov.png";
import serviceCanada from "../assets/serviceCanada.png";
import hydroSolar from "../assets/hydroSolar.png";
import windDo from "../assets/windDo.png";
import rematek from "../assets/rematek.png";

export default function Partners() {
  return (
    <div className="p-6 sm:p-8 text-center bg-white mt-6">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1B7646]">
        Our Partners
      </h2>
      <p className="mt-4 text-gray-700 max-w-screen-lg mx-auto text-sm sm:text-base">
        We are grateful to the companies that have contributed to our Summer 2024
        project through sponsorships and renewable energy presentations. Their
        support and expertise have been invaluable to our mission and initiatives.
      </p>

      {/* Partner Logos */}
      <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-6 sm:gap-8">
        <img
          src={canadaGov}
          alt="Government of Canada"
          className="h-20 sm:h-32 mx-auto"
        />
        <img
          src={serviceCanada}
          alt="Service Canada"
          className="h-20 sm:h-32 mx-auto"
        />
        <img
          src={hydroSolar}
          alt="Hydro Solar"
          className="h-20 sm:h-32 mx-auto"
        />
        <img
          src={windDo}
          alt="Wind-Do"
          className="h-20 sm:h-32 mx-auto"
        />
        <img
          src={rematek}
          alt="Rematek"
          className="h-20 sm:h-32 mx-auto col-span-2" 
        />
      </div>
    </div>
  );
}