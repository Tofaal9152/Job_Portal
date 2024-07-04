
import Logo from "../../../assets/loginAnimation.gif";
// Icons
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gray-50 ">
      <div className="py-5 bg-[#00315B]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div className="col-span-3">
              <div className="flex">
                <img
                  className="w-20 h-20 cursor-pointer"
                  src={Logo}
                  alt="Logo"
                />
                <h1 className="flex items-center justify-center space-x-1 text-xl font-bold">
                  <span className="text-[#D6C8F4]">Job</span>
                  <span className="text-white">Portal</span>
                </h1>
              </div>
              <p className="text-base leading-relaxed text-white mt-7">
                Job Portal is your go-to online destination for connecting top
                talent with leading employers. Whether your searching for your
                next career move or seeking to hire exceptional professionals.
              </p>
            </div>
            {/* Company */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-white  uppercase">
                Company
              </p>

              <ul className="mt-6 space-y-4 text-white">
                <li>About </li>
                <li>Features </li>
                <li>Works </li>
                <li>Career </li>
              </ul>
            </div>
            {/* Help */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-white uppercase">
                Help
              </p>
              <ul className="mt-6 text-white space-y-4">
                <li>Customer Support </li>
                <li>Delivery Details </li>
                <li>Terms & Conditions </li>
                <li>Privacy Policy </li>
              </ul>
            </div>
            {/* Links */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-white uppercase">
                Contact Us
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center space-x-2 text-white">
                  <FaFacebook className="text-white" size={20} />
                  <span>Facebook</span>
                </li>
                <li className="flex items-center space-x-2 text-white">
                  <FaSquareInstagram className="text-white" size={20} />
                  <span>Instagram</span>
                </li>
                <li className="flex items-center space-x-2 text-white">
                  <FaXTwitter className="text-white" size={20} />
                  <span>X</span>
                </li>
                <li className="flex items-center space-x-2 text-white">
                  <SiTelegram className="text-white" size={20} />
                  <span>Telegram</span>
                </li>
              </ul>
            </div>
            {/*  */}
          </div>
          <hr className="mt-16 mb-10 border-gray-200" />
          <p className="text-sm text-center text-white">
            © Copyright 2021, All Rights Reserved by Postcraft
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
