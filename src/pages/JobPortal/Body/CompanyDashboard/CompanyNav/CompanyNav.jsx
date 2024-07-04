import{ useState } from "react";
import Logo from "../../../../../assets/loginAnimation.gif";
import Profile from "../../../../../assets/About.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openClose, setopenClose] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="interfont flex items-center justify-between p-3 ">
      <div className="rounded-full flex items-center justify-between space-x-2">
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
      <div className="links hidden md:flex items-center text-[#404040]  space-x-10 font-md">
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
        <div className="cursor-pointer">
          <img
            onClick={() => {
              navigate("/Companyprofile");
            }}
            className="rounded-full w-[3rem] h-[3rem] object-cover"
            src={Profile}
            alt=""
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="block md:hidden cursor-pointer">
        <div className="flex space-x-3 items-center">
          <div className="cursor-pointer">
            <img
              className="rounded-full w-[2.5rem] h-[2.5rem] object-cover"
              src={Profile}
              alt=""
            />
          </div>
          <div onClick={() => setopenClose((prev) => !prev)}>
            <GiHamburgerMenu />
          </div>
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
          {/* <div className="cursor-pointer">
            <img src={Profile} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
