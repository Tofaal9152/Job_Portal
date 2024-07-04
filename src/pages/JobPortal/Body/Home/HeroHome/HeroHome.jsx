import { useLayoutEffect, useRef } from "react";
import { jobsCompanies } from "../../../../../Constant";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import bgVideo from "../../../../../assets/bgVideo.mov"

// GSAP
import gsap from "gsap";

const HeroHome = () => {
  // Gsap
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline();
      tl.from("#heroGSAP #item", {
        scale: 0,
        duration: 0.5,
        opacity: 0,
        stagger: 0.1,
      });
    }, comp);

    return () => ctx.revert();
  }, []);
  // Main
  const navigate = useNavigate();
 

  return (
    <>
      <div
        ref={comp}
        id="heroGSAP"
        // style={ctaStyle}
        className="flex flex-col relative items-center justify-center h-screen px-6 py-12 space-y-4 "
      >
        {/* bg-video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-screen object-cover"
          // style={{
          //   background: "linear-gradient(#273491, #0b134e, #0b134e)",
          // }}
        >
          <source src={bgVideo} />
        </video>
        {/* Title */}
        <h1
          id="item"
          className="md:text-4xl text-3xl font-bold text-white mb-10 text-center"
        >
          Get Your Dream Job Today!
        </h1>
        {/* Job Companies List */}
        <div
          id="item"
          className="flex flex-wrap justify-center md:gap-8 gap-3 "
        >
          {jobsCompanies.map((item, index) => (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <div className="w-14 h-14 p-2 flex items-center justify-center rounded-full bg-white mb-4">
                <span className="text-black w-10 h-10 flex items-center justify-center rounded-full">
                  {item.icon}
                </span>
              </div>
              <div className="text-center">
                <span className="font-semibold text-xl text-white block">
                  {item.tittle}
                </span>
                <span className="font-medium text-lg text-gray-300">
                  {item.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* buttons */}
        <div id="item" className="flex mt-5">
          <div
            onClick={() => {
              navigate("/jobs");
            }}
            className="font-semibold flex items-center justify-center px-4 py-2 text-lg cursor-pointer  bg-transparent text-[#ffffff70] border border-white duration-500 hover:bg-black hover:border-white"
          >
            <div className="mr-3">
              <FaSearch className="text-[#ffffff70]" size={20} />
            </div>
            <div>Looking for jobs?</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHome;
