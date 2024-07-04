import React from "react";
import { BsFillSignpostFill } from "react-icons/bs";

const Modal = ({ isVisible, onClose, job }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0  flex items-center justify-center z-50 bg-opacity-25 backdrop-blur-sm bg-black"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-8 max-w-md mx-auto rounded-md z-50"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <button
              onClick={onClose}
              className="text-red-500 rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-500 font-bold text-lg"
            >
              X
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-medium">{job.description}</p>
            <div>
              <span className="text-md font-semibold">Dhaka</span>
            </div>
            <div>
              <span className="text-md font-semibold">Full-Time</span>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-md font-bold">{job.salary}</span>
              <span className="text-xs text-[#5E6368]">/month</span>
            </div>
            <div>
              <span className="text-xs text-[#5E6368]">{job.posted}</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button
              type="button"
              className="bg-[#76c3ed] flex items-center justify-center hover:bg-[#69afd4] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white"
            >
              <BsFillSignpostFill size={25} />
              <span>Apply Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
