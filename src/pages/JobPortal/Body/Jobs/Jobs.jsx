import React, { useState } from "react";
import JobCard from "./JobCard/JobCard";
import { JobCard1 } from "../../../../Constant";
import style from "../../../../style";
import Navbar from "../../Navbar/Navbar";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");


  const filteredJobs = JobCard1.filter((job) => {
    return (
      (jobType ? job.type === jobType : true) &&
      (location ? job.location === location : true) &&
      (experienceLevel ? job.experienceLevel === experienceLevel : true) &&
      (searchTerm
        ? job.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
    );
  });

  return (
    <div>
      <div className="w-full  shadow-md top-0 sticky z-50 bg-[#F9FAFB]">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} z-10`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className="bg-[#F9FAFB] min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl text-center mb-4 font-bold text-[#9773df]">
            Search Jobs
          </h1>
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search jobs..."
              className="border w-full inline-block rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9773df]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex md:flex-row flex-col justify-between items-start md:space-y-0 space-y-3 md:items-center mb-6">
            <select
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9773df]"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">All Job Types</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
            <select
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9773df]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Khulna">Khulna</option>
              <option value="Tangail">Tangail</option>
              <option value="Sylhet">Sylhet</option>
            </select>
            {/* <select
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9773df]"
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
          >
            <option value="">All Experience Levels</option>
            <option value="Entry Level">Entry Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
          </select> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
            {filteredJobs.map((job, index) => {
              return <JobCard key={index} job={job} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
