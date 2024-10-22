import PropTypes from "prop-types";
const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }
  const jobDetails = {
    tittle: "Sales Manager",
    description: `Seeking a Sales Manager to lead our sales team and drive revenue
            growth...`,
    location: "Dhaka",
    type: "Full-Time",
    Salaly: "90K/year",
    time: "1w ago",
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0  flex items-center justify-center z-50 bg-opacity-25 backdrop-blur-sm bg-black"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-8 max-w-md mx-auto rounded-md z-50"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{jobDetails.tittle}</h2>
          <button
            onClick={onClose}
            className="text-red-500 rounded-md px-2 py-1 cursor-pointer hover:scale-105 duration-500 font-bold text-lg"
          >
            X
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-medium">{jobDetails.description}</p>
          <div>
            <span className="text-md font-semibold">{jobDetails.location}</span>
          </div>
          <div>
            <span className="text-md font-semibold">{jobDetails.type}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-md font-bold">${jobDetails.Salaly}</span>
            <span className="text-xs text-[#5E6368]">/month</span>
          </div>
          <div>
            <span className="text-xs text-[#5E6368]">{jobDetails.time}</span>
          </div>
        </div>
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
