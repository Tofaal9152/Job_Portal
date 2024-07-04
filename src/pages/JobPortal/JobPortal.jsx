
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const JobPortal = () => {
  return (
    <div className="interfont bg-[#F9FAFB]">
      <div className="">
        <Outlet />
      </div>
      {/* Footer */}
      <div className="bg-slate-500">
        <Footer />
      </div>
    </div>
  );
};

export default JobPortal;
