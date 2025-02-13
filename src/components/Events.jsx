import React from "react";
import image1 from "../assets/newsLetter1.png";
import image2 from "../assets/newsLetter2.png";
import image3 from "../assets/newsLetter3.png";
import greenBox from "../assets/greenBox.png";
import icons from "../assets/icons.png";

export default function Events() {
  const openImageInNewTab = (imgSrc) => {
    window.open(imgSrc, "_blank");
  };

  return (
    <div className="p-8 bg-[#d1e4da]">
      <div className="flex flex-col items-center text-center space-y-6 py-[30px] text-xl">
        <div className="relative w-[1066px] h-[590px]">
          <img src={greenBox} className="absolute top-0 left-0 w-full h-full" alt="Green Box Background" />
          <img src={icons} className="absolute top-0 left-0 w-full h-full p-6" alt="Icons" />
          <h1 className="absolute top-0 left-[40px] w-full h-full p-6 text-3xl text-white font-bold">
            Our Events
          </h1>

          <button
            onClick={() => openImageInNewTab(image1)}
            className="absolute h-[450px] bottom-10 left-[500px] p-6 rotate-6 transition-transform hover:scale-105 active:scale-95"
          >
            <img src={image1} className="h-full w-auto" alt="Newsletter 1" />
          </button>
          <button
            onClick={() => openImageInNewTab(image3)}
            className="absolute h-[450px] bottom-10 left-[250px] p-6 -rotate-6 transition-transform hover:scale-105 active:scale-95"
          >
            <img src={image3} className="h-full w-auto" alt="Newsletter 3" />
          </button>
          <button
            onClick={() => openImageInNewTab(image2)}
            className="absolute h-[450px] bottom-18 left-[400px] p-6 rotate-2 transition-transform hover:scale-105 active:scale-95"
          >
            <img src={image2} className="h-full w-auto" alt="Newsletter 2" />
          </button>
        </div>

        <div className="w-[1066px]">
          <p>
            This summer, we are hosting{" "}
            <span className="text-[#1b7646] font-bold">
              "Get Connected - Green Energy - Lunch & Learn Q&A"
            </span>{" "}
            events every{" "}
            <span className="text-[#1b7646] font-bold">Friday at noon</span>, to provide a platform for participants to learn from experienced guest speakers and discuss the latest in green energy solutions.
          </p>
          <p>
            Additionally, we will be hosting our first ever{" "}
            <span className="text-[#1b7646] font-bold">Annual General Meeting</span> on{" "}
            <span className="text-[#1b7646] font-bold">Friday, August 16th</span>, where we will discuss our achievements, future plans, and ways you can get involved.
          </p>
          <p>
            For more information on our events, please contact us at{" "}
            <span className="text-[#1b7646] font-bold underline">
              rsvp@solairecanadasolar.com
            </span>{" "}
            to join our mailing list and receive our weekly e-newsletters. We invite you to connect, learn, and contribute to a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}
