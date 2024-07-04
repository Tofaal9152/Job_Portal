import React from "react";
import backgroundImage from "../../../../../assets/PostJob.png";
import { useNavigate } from "react-router-dom";

const PostJobs = () => {
  const navigate =useNavigate()
  const ctaStyle = {
    margin: "100px auto",
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "10px",
    textAlign: "center",
    padding: "100px 0",
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-[#3670a3]">Post a Job</h1>
      <div style={ctaStyle} className="space-y-6">
        <h1 className="text-4xl font-bold text-white px-5">
          Reach the best candidates by posting your job here. Click the button
          below
        </h1>
        <div
          onClick={() => navigate("/companydashboard")}
          className="font-semibold px-4 py-2 text-lg cursor-pointer inline-block bg-transparent text-white border border-white duration-500 hover:bg-[#f44336] hover:border-[#f44336]"
        >
          Post Job
        </div>
      </div>
    </div>
  );
};

export default PostJobs;
