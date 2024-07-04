import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import Modal from "../ViewDeatilModal.jsx/Modal";

const JobCard = ({ job }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState(null);

  const handleCardClick = () => {
    setSelectedDetails(job); 
    setShowModal(true);
  };

  return (
    <div className="h-[15.6rem] bg-white p-[2rem] shadow-lg space-y-3 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex-col flex space-y-2">
          <h1 className="text-[#1E1E1E] text-md font-semibold">{job.title}</h1>
          <div className="flex space-x-2 items-center justify-evenly text-sm text-[#5E6368]">
            <h6 className="flex items-center">
              <span>
                <BsDot className="text-[#5E6368]" />
              </span>
              {job.type}
            </h6>
            <h6 className="flex items-center">
              <span>
                <BsDot className="text-[#5E6368]" />
              </span>
              {job.location}
            </h6>
              <h6 className="flex items-center">
                <span>
                  <BsDot className="text-[#5E6368]" />
                </span>
                {job.remote}
              </h6>
          </div>
        </div>
        <div>
          <FaBookmark className="cursor-pointer text-[#FFDE7F]" size={24} />
        </div>
      </div>
      <p className="text-xs text-[#5E6368]">{job.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-md font-bold text-[#1E1E1E]">{job.salary}</span>
          <span className="text-xs text-[#5E6368]">/month</span>
        </div>
        <div>
          <span className="text-xs text-[#5E6368]">{job.posted}</span>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-5">
        <button
          onClick={handleCardClick}
          className="border px-2 py-1 border-[#E7E6E6]"
        >
          View details
        </button>
        <button className="px-2 py-1 bg-[#04ADE61A] text-[#04ADE6] font-semibold">
          Apply Now
        </button>
      </div>

      {/* Modal */}
      {selectedDetails && (
        <Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          job={selectedDetails}
        />
      )}
    </div>
  );
};

export default JobCard;
