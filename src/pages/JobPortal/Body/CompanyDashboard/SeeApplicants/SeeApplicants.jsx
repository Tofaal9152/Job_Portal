
import React, { forwardRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Navigation } from "swiper/modules";
import Applicantsmodal from '../ApplicantsModal/ApplicantsModal'
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Applicants1,
  Applicants2,
  FeaturedJobsgroup1,
  FeaturedJobsgroup2,
} from "../../../../../Constant";
import { MdLocationPin } from "react-icons/md";
import { FaClock } from "react-icons/fa6";

const SeeApplicants = () => {
 const [form, setform] = useState(false)
 const handleCardClick = () => {
   setform(true);
 };
  return (
    <div className="space-y-5 bg-[#F9FAFB] mt-[3rem]">
      <h1 className="text-4xl font-bold text-center text-[#3670a3]">
        Applicants...
      </h1>
      <div className="container mx-auto px-4 py-12 shadow-lg">
        <Swiper
          effect={"creative"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
            },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[EffectCreative, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Applicants1.map((item, index) => (
                <div
                  key={index}
                  className=" p-6 rounded-lg flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <div className="max-w-xs bg-black border border-gray-200 rounded-lg">
                    <img
                      className="rounded-t-lg w-[20rem] h-[12rem] object-cover"
                      src={item.img}
                      alt=""
                    />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                      <p className="mb-3 flex items-center space-x-1 font-normal text-gray-700 dark:text-gray-400">
                        <FaClock className="text-white" size={20} />
                        <span>{item.university}</span>
                      </p>
                      <p className="mb-3 flex items-center space-x-1 font-normal text-gray-700 dark:text-gray-400">
                        <MdLocationPin className="text-white" size={20} />
                        <span>{item.jobrole}</span>
                      </p>
                      <div className="flex items-center justify-center space-x-3">
                        <button
                          onClick={handleCardClick}
                          className="bg-transparent border-2 border-white hover:border-black hover:text-black text-white font-bold py-2 px-6 rounded-full hover:bg-white"
                        >
                          View
                        </button>
                        <button className="bg-transparent border-2 border-white hover:border-black hover:text-black text-white font-bold py-2 px-4 rounded-full hover:bg-white">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {Applicants2.map((item, index) => (
                <div
                  key={index}
                  className=" p-6 rounded-lg flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <div className="max-w-xs bg-black border border-gray-200 rounded-lg">
                    <img
                      className="rounded-t-lg w-[20rem] h-[12rem] object-cover"
                      src={item.img}
                      alt=""
                    />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                      <p className="mb-3 flex items-center space-x-1 font-normal text-gray-700 dark:text-gray-400">
                        <FaClock className="text-white" size={20} />
                        <span>{item.university}</span>
                      </p>
                      <p className="mb-3 flex items-center space-x-1 font-normal text-gray-700 dark:text-gray-400">
                        <MdLocationPin className="text-white" size={20} />
                        <span>{item.jobrole}</span>
                      </p>
                      <div className="flex items-center justify-center space-x-3">
                        <button
                          onClick={handleCardClick}
                          className="bg-transparent border-2 border-white hover:border-black hover:text-black text-white font-bold py-2 px-6 rounded-full hover:bg-white"
                        >
                          View
                        </button>
                        <button className="bg-transparent border-2 border-white hover:border-black hover:text-black text-white font-bold py-2 px-4 rounded-full hover:bg-white">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* FormModal */}
      <Applicantsmodal isVisible={form} onClose={() => setform(false)} />
    </div>
  );
};

export default SeeApplicants;
