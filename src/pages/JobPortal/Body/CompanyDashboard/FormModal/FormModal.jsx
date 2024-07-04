import { useState } from "react";
import { BsFillSignpostFill } from "react-icons/bs";
import PropTypes from "prop-types";
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
          <h2 className="text-xl font-semibold text-[#3670A3]">Post Job</h2>
          <button
            onClick={onClose}
            className="text-red-500 rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-500 font-bold text-lg"
          >
            X
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-sm text-[#3670A3]">
              Job Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={jobData.name}
              onChange={handleInputChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="location" className="text-sm text-[#3670A3]">
              Job Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={jobData.location}
              onChange={handleInputChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="text-sm text-[#3670A3]">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              value={jobData.description}
              onChange={handleInputChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
              required
            />
          </div>

          <div className="flex flex-col  mb-4">
            <div className="flex items-center space-x-5 ">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="time"
                  value="Full-Time"
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Remote
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="time"
                  value="Part-Time"
                  onChange={handleInputChange}
                  className="mr-2"
                />
                On-site
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Full-Time"
                  checked={jobData.type === "Full-Time"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Full Time
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="Part-Time"
                  checked={jobData.type === "Part-Time"}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Part Time
              </label>
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="salary" className="text-sm text-[#3670A3]">
              Salary
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={jobData.salary}
              onChange={handleInputChange}
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center justify-center space-x-4 mt-4">
            <button
              type="submit"
              className="bg-[#3670A3] flex items-center justify-center hover:bg-[#5e93c2] rounded-md px-3 py-2 cursor-pointer text-md font-semibold text-white space-x-2"
            >
              <BsFillSignpostFill size={25} />
              <span>Post Job</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired, // Define the type and whether it's required
};
Modal.propTypes = {
  onClose: PropTypes.bool.isRequired, // Define the type and whether it's required
};
export default Modal;
