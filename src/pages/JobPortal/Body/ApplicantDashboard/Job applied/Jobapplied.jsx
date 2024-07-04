import  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination, Navigation } from "swiper/modules";
import FormModal from "../FormModal/FormModal";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  FeaturedJobsgroup1,
  FeaturedJobsgroup2,
} from "../../../../../Constant";
import { MdLocationPin } from "react-icons/md";
import { FaClock } from "react-icons/fa6";

const Card = () => {
  const [showFormModal, setShowFormModal] = useState(false);

  const handleCardClick = () => {
    setShowFormModal(true);
  };
  return (
    <div className="space-y-5  mt-[3rem]">
      <h1 className="text-4xl font-bold text-center text-[#3670a3]">
        Pending Applications...
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
              {FeaturedJobsgroup1.map((item, index) => (
                <div
                  key={index}
                  className=" p-6 rounded-lg flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <div className="max-w-xs bg-black border border-gray-200 rounded-lg">
                    <img
                      className="rounded-t-lg w-[20rem] h-[12rem] object-cover"
                      src={item.img}
                      alt={item.tittle}
                    />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.tittle}
                      </h5>
                      <p className="mb-3 flex items-center space-x-1 font-normal text-gray-700 dark:text-gray-400">
                        <FaClock className="text-white" size={20} />
                        <span>{item.jobtime}</span>
                      </p>
                      <p className="mb-3 flex items-center space-x-1 font-normal text-gray-700 dark:text-gray-400">
                        <MdLocationPin className="text-white" size={20} />
                        <span>{item.location}</span>
                      </p>
                      <div
                        onClick={handleCardClick}
                        className="flex space-x-2 items-center justify-center"
                      >
                        <button className="bg-transparent border-2 border-white hover:border-black hover:text-black text-white font-bold py-2 px-6 rounded-full hover:bg-white">
                          View
                        </button>
                        <button className="bg-transparent border-2 border-white hover:border-black hover:text-black text-white font-bold py-2 px-4 rounded-full hover:bg-white">
                          Delete
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
              {FeaturedJobsgroup2.map((item, index) => (
                <div
                  key={index}
                  className=" p-6 rounded-lg flex flex-col items-center text-center transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <div className="max-w-sm bg-black border shadow-lg border-gray-200 rounded-lg">
                    <img
                      className="rounded-t-lg w-[20rem]  h-[12rem] object-cover"
                      src={item.img}
                      alt={item.tittle}
                    />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.tittle}
                      </h5>
                      <p className="mb-3 flex items-center space-x-1 font-normal text-gray-700 dark:text-gray-400">
                        <FaClock className="text-white" size={20} />
                        <span>{item.jobtime}</span>
                      </p>
                      <p className="mb-3 flex items-center space-x-1 font-normal text-gray-700 dark:text-gray-400">
                        <MdLocationPin className="text-white" size={20} />
                        <span>{item.location}</span>
                      </p>
                      <div className="flex space-x-2 items-center justify-center">
                        <button
                          onClick={handleCardClick}
                          className="bg-transparent border-2 border-white hover:border-black hover:text-black text-white font-bold py-2 px-6 rounded-full hover:bg-white"
                        >
                          View
                        </button>
                        <button className="bg-transparent border-2 border-white hover:border-black hover:text-black text-white font-bold py-2 px-4 rounded-full hover:bg-white">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <FormModal
              isVisible={showFormModal}
              onClose={() => setShowFormModal(false)}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <FormModal
        isVisible={showFormModal}
        onClose={() => setShowFormModal(false)}
      />
    </div>
  );
};

export default Card;
