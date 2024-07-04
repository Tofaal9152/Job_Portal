import React from "react";
import AboutUsImage from "../../../../../assets/About.jpeg";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <img
            src={AboutUsImage}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4 text-[#3b7bb3]">About Us</h2>
          <p className="text-[#3670a3] mb-6  leading-loose">
            We are committed to providing the best services to our customers.
            Our team of dedicated professionals works tirelessly to meet and
            exceed your expectations. Join us on our journey to create
            outstanding experiences and achieve remarkable milestones together.
          </p>
          <p className="text-[#3670a3]  leading-loose">
            Our vision is to innovate and lead in our industry, ensuring that we
            stay at the forefront of excellence. We believe in the power of
            collaboration, integrity, and continuous improvement. Thank you for
            being a part of our story.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
