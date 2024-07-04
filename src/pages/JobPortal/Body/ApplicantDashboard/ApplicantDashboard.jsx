import Jobapplied from "./Job applied/Jobapplied";
// import FormModal from "./FormModal/FormModal";
import ApplicantNavbar from "./ApplicantNavbar/ApplicantNavbar";
import style from "../../../../style";

const ApplicantDashboard1 = [
  {
    Name: "Md Tofaal Ahmed",
    Age: "20",
    university: "University of Rajshahi",
    subject: "Computer Science and Engineering",
    description:
      "I am highly proficient in Video Editing, leveraging my expertise to deliver exceptional results in various projects and initiatives.",
    JobRole: "Video Editor",
  },
];

const ApplicantDashboard = () => {
  // const [showFormModal, setShowFormModal] = useState(false);

  // const handleCardClick = () => {
  //   setShowFormModal(true);
  // };

  return (
    <div>
      <div className="w-full  shadow-md top-0 sticky z-50 bg-[#F9FAFB]">
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth} z-10`}>
            <ApplicantNavbar />
          </div>
        </div>
      </div>
      <section className="pt-10 h-screen overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              {/* Iterate over ApplicantDashboard1 array to display each applicant's details */}
              {ApplicantDashboard1.map((item, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-bold text-[#3670a3] leading-tight  sm:text-4xl lg:text-5xl">
                    Name: {item.Name}
                  </h2>
                  <p className="max-w-lg flex flex-col space-y-1  mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                    <span className="text-[#3670a3]">
                      <span className="font-bold text-[#3670a3]"> Age: </span>
                      <span className="text-[#3670a3]"> {item.Age}</span>
                    </span>
                    <span>
                      <span className="font-bold text-[#3670a3]">
                        University:{" "}
                      </span>
                      <span className="text-[#3670a3]">{item.university}</span>
                    </span>
                    <span>
                      <span className="font-bold text-[#3670a3]">
                        Subject:{" "}
                      </span>
                      <span className="text-[#3670a3]"> {item.subject}</span>
                    </span>
                    <span>
                      <span className="font-bold text-[#3670a3]">
                        Description:{" "}
                      </span>
                      <span className="text-[#3670a3]">
                        {" "}
                        {item.description}
                      </span>
                    </span>
                    <span>
                      <span className="font-bold text-[#3670a3]">
                        Job Role:{" "}
                      </span>
                      <span className="text-[#3670a3]"> {item.JobRole}</span>
                    </span>
                  </p>
                  {/* <div
                    onClick={handleCardClick}
                    className="mt-3 font-semibold px-4 py-2 text-lg cursor-pointer inline-block bg-transparent text-[#3670a3] hover:bg-[#3670a3] hover:text-white duration-300 rounded-md border-[#3670a3] border-2"
                  >
                    Resume
                  </div> */}
                </div>
              ))}
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <FormModal
          isVisible={showFormModal}
          onClose={() => setShowFormModal(false)}
        /> */}
      </section>
      {/* Job Applied */}
      <section>
        <Jobapplied />
      </section>
    </div>
  );
};

export default ApplicantDashboard;
