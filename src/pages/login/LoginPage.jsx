// import jobAnimation from "../../assets/loginAnimation.gif";
// import { useForm } from "react-hook-form";
// import React from "react";

// const LoginPage = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => console.log(data);

//   return (
//     <section className="bg-gray-50 min-h-screen flex items-center justify-center">
//       {/* login container */}
//       <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
//         {/* image */}
//         <div className="md:block hidden w-1/2">
//           <img
//             className="rounded-2xl"
//             src={jobAnimation}
//             alt="Login"
//             style={{ backgroundColor: "gray" }}
//           />
//           <p className="mt-6 text-[#002D74] text-center text-sm">
//             Hop in the world of job seeking.
//           </p>
//         </div>
//         {/* form */}
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="md:w-1/2 px-8 md:px-16 w-full flex flex-col"
//         >
//           <h2 className="font-bold text-[1.4rem] text-[#002D74]">
//             Applicant Registration
//           </h2>

//           <div className="flex flex-col gap-4">
//             <input
//               {...register("name", { required: "Name is required" })}
//               className="p-2 mt-5 rounded-xl border"
//               type="text"
//               placeholder="Your Name"
//             />
//             <div className="relative">
//               <input
//                 {...register("password", { required: "Password is required" })}
//                 className="p-2 rounded-xl border w-full"
//                 type="password"
//                 placeholder="Password"
//               />
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="gray"
//                 className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
//                 <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
//               </svg>
//             </div>

//             <input
//               {...register("email", { required: "Email is required" })}
//               className="p-2 rounded-xl border w-full"
//               type="email"
//               placeholder="Your Email"
//             />

//             <input
//               {...register("university", {
//                 required: "University is required",
//               })}
//               className="p-2 rounded-xl border w-full"
//               type="text"
//               placeholder="Your University"
//             />
//             <input
//               {...register("major", { required: "Major is required" })}
//               className="p-2 rounded-xl border w-full"
//               type="text"
//               placeholder="Your Major"
//             />

//             <textarea
//               {...register("description", {
//                 required: "Description is required",
//               })}
//               placeholder="Your Description"
//               className="p-2 rounded-xl border w-full"
//             ></textarea>
//             {/* Submit  */}
//             <input
//               className="bg-[#002D74] rounded-xl cursor-pointer text-white py-2 hover:scale-105 duration-300"
//               type="submit"
//               value="Register"
//             />
//           </div>

//           <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
//             <hr className="border-gray-400" />
//             <p className="text-center text-sm">OR</p>
//             <hr className="border-gray-400" />
//           </div>

//           <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
//             <p>Already have an account?</p>
//             <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default LoginPage;
// Tanim

import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuCamera } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import jobAnimation from "../../assets/loginAnimation.gif";
import Avater from "../../assets/About.jpeg";

const LoginPage = () => {
  // State for image preview
  const [image, setImage] = useState(Avater);
  const [clicked, setclicked] = useState(false);

  // Handle image change
  const handleClick = () => {
    setclicked(true);
  };
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

  // Form handling with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission, you can console log or process the data as needed
    console.log(data);
  };

  return (
    <section className="bg-gray-50  min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-gray-100 relative flex items-center justify-center rounded-2xl shadow-lg max-w-3xl p-5 overflow-hidden h-[80vh]">
        {/* Left Section - Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            className="rounded-2xl"
            src={jobAnimation}
            alt="Login Animation"
            style={{ backgroundColor: "gray" }}
          />
          <p className="mt-6 text-[#002D74] text-center text-sm">
            Hop into the world of job seeking.
          </p>
        </div>

        {/* Right Section - Form */}
        <div
          className={`w-full  h-screen md:w-1/2 flex flex-col items-center justify-center duration-500 px-8 md:px-16 `}
        >
          {/* Upload Image */}
          <div className={`flex  flex-col items-center space-y-3`}>
            <img
              className="object-cover w-32 h-32 rounded-full ring-2 ring-purple-500 cursor-pointer"
              src={image}
              alt="Avatar"
            />
            <input
              {...register("name", { required: "Name is required" })}
              className="p-2 mt-5 rounded-xl border"
              type="text"
              placeholder="Your Name"
            />

            <label htmlFor="fileInput" className="cursor-pointer">
              <div className="flex space-x-2 items-center justify-center bg-white rounded-md border p-2">
                <span className="text-lg text-slate-500 font-semibold">
                  Upload Image
                </span>
                <LuCamera className="text-slate-500" size={20} />
              </div>
              <input
                {...register("profilePicture")}
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            {/* Next Arrow */}
            <div
              onClick={handleClick}
              className="flex  bg-white p-2 rounded-full hover:scale-105 duration-200 cursor-pointer"
            >
              <IoIosArrowDown className="text-slate-500" size={25} />
            </div>
          </div>

          {/* Form */}
          <div
            className={`${
              clicked ? "bottom-2" : "absolute-div bottom-[-100rem]"
            } duration-500 absolute  bg-[#F3F4F6]`}
          >
            <div
              className="w-full max-w-[15rem] "
            >
              <div className="flex space-x-3 items-center justify-center">
                <h2 className="font-bold whitespace-no-wrap text-2xl text-[#002D74] mb-5">
                  Applicants Registration
                </h2>
                <div
                  onClick={() => setclicked(false)}
                  className="p-2 bg-white hover:scale-105 cursor-pointer rounded-full"
                >
                  <IoIosArrowUp className="text-slate-500" size={25} />
                </div>
              </div>

              {/* Form Inputs */}
              <div className="flex flex-col gap-4">
                <input
                  {...register("email", { required: "Email is required" })}
                  className="p-2 rounded-xl border w-full"
                  type="email"
                  placeholder="Your Email"
                />
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="p-2 rounded-xl border w-full"
                    type="password"
                    placeholder="Password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </div>

                <input
                  {...register("university", {
                    required: "University is required",
                  })}
                  className="p-2 rounded-xl border w-full"
                  type="text"
                  placeholder="Your University"
                />
                <input
                  {...register("major", { required: "Major is required" })}
                  className="p-2 rounded-xl border w-full"
                  type="text"
                  placeholder="Your Major"
                />

                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  placeholder="Your Description"
                  className="p-2 rounded-xl border w-full"
                ></textarea>
                {/* Submit  */}

                <input
                  className="bg-[#002D74] rounded-xl cursor-pointer text-white py-2 hover:scale-105 duration-300"
                  type="submit"
                  value="Register"
                />
              </div>

              {/* OR Divider */}
              <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-400" />
              </div>

              {/* Login Link */}
              <div className="mt-3 space-x-3 text-xs flex justify-between items-center text-[#002D74]">
                <p>Already have an account?</p>
                <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </section>
  );
};

export default LoginPage;
