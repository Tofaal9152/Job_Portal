
import HeroHome from "./HeroHome/HeroHome";
import Navbar from "../../Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";
import PostJobs from "./PostJobs/PostJobs";
import Card from "./Card/Card";
import style from "../../../../style";
const Home = () => {
  // Gsap
  // End
  return (
    <div className="interfont bg-[#F9FAFB]">
      {/* Navbar */}
      <div className="w-full  shadow-md top-0 sticky z-50 bg-[#F9FAFB]">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} z-10`}>
            <Navbar />
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="relative top-[-4.17rem]">
        <div className="space-y-20  bg-gray-50 ">
          <HeroHome />
          <Card />
          <PostJobs />
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

export default Home;
