import { useLayoutEffect, useRef, useState } from "react";
import Logo from "../../../assets/loginAnimation.gif";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
// Gsap
import gsap from "gsap";

const Navbar = () => {
  // Gsap
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
     
      gsap.from("#headlineLogo", {
        y: -40,
        opacity: 0,
        delay: 0.4,
      });
      gsap.from("#navitems #navitem", {
        y: -40,
        opacity: 0,
        delay:0.4,
        stagger:0.2
      });
    }, comp);

    return () => ctx.revert(); 
  }, []);
  // Main
  const [openClose, setopenClose] = useState(true);
  const navigate = useNavigate();
  return (
    <div
      ref={comp}
      className="interfont flex items-center justify-between p-3 "
    >
      <div
        id="headlineLogo"
        className="rounded-full flex items-center justify-between space-x-2"
      >
        <img
          onClick={() => {
            navigate("/");
          }}
          className="w-[2.7rem] h-[2.7rem] cursor-pointer"
          src={Logo}
          alt="Logo"
        />
        <h1
          onClick={() => {
            navigate("/");
          }}
          className="flex items-center justify-center space-x-1 text-xl font-bold cursor-pointer"
        >
          <span className="text-[#9773df]">Job</span>
          <span>Portal</span>
        </h1>
      </div>
      {/* pc */}
      <div
        id="navitems"
        className="links hidden md:flex items-center text-[#404040]  space-x-10 font-md"
      >
        <div
          id="navitem"
          onClick={() => {
            navigate("/");
          }}
          className="nav-item  cursor-pointer font-semibold"
        >
          Home
        </div>
        <div
          id="navitem"
          onClick={() => {
            navigate("/jobs");
          }}
          className="nav-item  cursor-pointer font-semibold"
        >
          Find jobs
        </div>
        <div
          id="navitem"
          onClick={() => {
            navigate("/companydashboard");
          }}
          className="nav-item  cursor-pointer font-semibold"
        >
          Post Jobs
        </div>
        {/* <div className="nav-item  cursor-pointer font-semibold">Contact Us</div> */}
      </div>
      {/* Mobile */}
      <div className="block md:hidden cursor-pointer">
        <div onClick={() => setopenClose((prev) => !prev)}>
          <GiHamburgerMenu />
        </div>
        <div
          className={`${
            openClose ? "hidden" : "flex"
          } custom879:hidden flex-col bg-[#F9FAFB] h-screen items-start flex-1  space-y-4 fixed top-[4rem] overflow-x-hidden right-0 min-w-[9.5rem] p-4 sidebar`}
        >
          <div
            onClick={() => {
              navigate("/");
            }}
            className="nav-item  cursor-pointer font-semibold"
          >
            Home
          </div>
          <div
            onClick={() => {
              navigate("/jobs");
            }}
            className="nav-item  cursor-pointer font-semibold"
          >
            Find jobs
          </div>
          <div
            onClick={() => {
              navigate("/companydashboard");
            }}
            className="nav-item  cursor-pointer font-semibold"
          >
            Post Jobs
          </div>
          {/* <div className="nav-item  cursor-pointer font-semibold">
            Contact Us
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
