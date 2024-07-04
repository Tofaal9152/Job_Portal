import React, { useState } from "react";
import style from "../../../../../style";
import CompanyNav from "../CompanyNav/CompanyNav";
import Avater from "../../../../../assets/About.jpeg";
import { LuCamera } from "react-icons/lu";
import { IoSave } from "react-icons/io5";

const CompanyProfile = () => {
  const [image, setImage] = useState(Avater);
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    name: "Tesla",
    email: "Tesla@gmail.com",
    location: "Deer Creek Road, Palo Alto, CA 94304, USA",
    description: "We Make!",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(formData);

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="w-full shadow-md top-0 sticky z-50 bg-[#F9FAFB]">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} z-10`}>
            <CompanyNav />
          </div>
        </div>
      </div>

      <form className="mx-auto mt-8 max-w-xs md:max-w-md">
        <div className="flex flex-col items-center space-y-3">
            {/* image */}
          <div className="relative">
            <img
              className="object-cover w-20 h-20 rounded-full ring-2 ring-[#9773DF] cursor-pointer"
              src={image}
              alt="Avatar"
            />
            <label
              htmlFor="fileInput"
              className="absolute bottom-0 right-0 cursor-pointer"
            >
              <div className="p-1 bg-[#9773DF] rounded-full">
                <LuCamera size={20} className="text-white" />
              </div>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 mt-4">
            {/* form */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Company Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-violet-100 border border-violet-200 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                readOnly={!isEditing}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-violet-100 border border-violet-200 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                readOnly={!isEditing}
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Location
              </label>
              <input
                type="location"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`bg-violet-100 border border-violet-200 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                readOnly={!isEditing}
              />
            </div>

            <div className="row-span-3">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`bg-violet-100 border border-violet-200 outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                readOnly={!isEditing}
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="bg-[#9773DF] flex items-center justify-center space-x-3 hover:bg-[#a782f0] rounded-md px-4 py-2 cursor-pointer hover:scale-105 duration-300 text-md font-semibold text-white"
            >
              <IoSave size={17} />
              <span>Save Changes</span>
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default CompanyProfile;
