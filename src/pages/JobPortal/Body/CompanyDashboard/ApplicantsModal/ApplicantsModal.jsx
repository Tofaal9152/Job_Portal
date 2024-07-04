import React, { useState } from "react";
import { BsFillSignpostFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
// import { GiCrossMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";




const Modal = ({ isVisible, onClose }) => {
  const [jobData, setJobData] = useState({
    name: "",
    location: "",
    description: "",
    type: "Full-Time",
    onsite: true,
    salary: "$",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox input
    if (type === "checkbox") {
      setJobData({ ...jobData, [name]: checked });
    } else {
      setJobData({ ...jobData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Data:", jobData);

    // Perform further actions like submitting the data to backend, etc.

    // Clear form fields
    setJobData({
      name: "",
      location: "",
      description: "",
      type: "Full-Time",
      onsite: true,
      salary: "$",
    });

    // Close the modal
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-25 backdrop-blur-sm bg-black"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-8 max-w-md mx-auto rounded-md z-50"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-center font-semibold text-[#3670A3]">
            Resume
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-500 font-bold text-lg"
          >
            X
          </button>
        </div>

        <h1 className="text-2xl font-bold text-[#3670A3] mb-4">
          Md Tofaal Ahmed
        </h1>
        <p className="text-[#3670A3] mb-2">
          <strong>Age:</strong> 20
        </p>
        <p className="text-[#3670A3] mb-2">
          <strong>University:</strong> University of Rajshahi
        </p>
        <p className="text-[#3670A3] mb-2">
          <strong>Subject:</strong> Computer Science and Engineering
        </p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#3670A3]">Description</h2>
          <p className="text-[#3670A3]">
            I am highly proficient in Video Editing, leveraging my expertise to
            deliver exceptional results in various projects and initiatives.
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-[#3670A3]">Job Role</h2>
          <p className="text-[#3670A3]">Video Editor</p>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <button
            type="submit"
            className="bg-[#3670A3] flex items-center justify-center hover:bg-[#5e93c2] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white space-x-2"
          >
            <TiTick size={25} />
            <span>Accept</span>
          </button>
          <button
            type="submit"
            className="bg-[#3670A3] flex items-center justify-center hover:bg-[#5e93c2] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white space-x-2"
          >
            <RxCross2 size={25} />
            <span>Declite</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
