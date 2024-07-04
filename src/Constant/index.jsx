import { FaBuilding } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";


import web from '../assets/About.jpeg'
import app from '../assets/About.jpeg'
import data from '../assets/About.jpeg'
import market from '../assets/About.jpeg'
import video from '../assets/About.jpeg'
import peoplw from '../assets/About.jpeg'

export const jobsCompanies = [
  {
    tittle: "LiveJobs",
    amount: "3,779",
    icon: <BsPeopleFill size={25} />,
  },
  {
    icon: <FaBuilding size={25} />,
    tittle: "Companies",
    amount: "16,450",
  },
  {
    tittle: "Appointments",
    amount: "3,779",
    icon: <IoIosPaper size={25} />,
  },
];
export const Heading = [
  {
    tittle: "Home",
  },
  {
    tittle: "Find Jobs",
  },
  {
    tittle: "Post Jobs",
  },
  {
    tittle: "Contact Us",
  },
];
export const Applicants1 = [
  {
    name: "Md Tofaal Ahmed",
    img: web,
    jobrole:"Video Editor",
    university:"University Of Rajshahi"
  },
  {
    name: "Tanim Sk",
    img: web,
    jobrole:"Hacker",
    university:"University Of Rajshahi"
  },
  {
    name: "Tofajjul Islam",
    img: web,
    jobrole:"Game developer",
    university:"University Of Rajshahi"
  },
];
export const Applicants2 = [
  {
    name: "Naiem Siddeki",
    img: web,
    jobrole:"Influencer",
    university:"University Of Rajshahi"
  },
  {
    name: "Hasnat Shafi",
    img: web,
    jobrole:"App Developer",
    university:"University Of Rajshahi"
  },
  {
    name: "Ramim Sabil",
    img: web,
    jobrole:"Matchine Language expert",
    university:"University Of Rajshahi"
  },
];
export const FeaturedJobsgroup1 = [
  {
    tittle: "Web Develpment",
    img:web,
    jobtime: "Full-Time",
    location: "Dhaka",
  },
  {
    tittle: "Machine Learning",
    img:peoplw,
    jobtime: "Part-Time",
    location: "Khulna",
  },
  {
    tittle: "Marketting",
    img:market,
    jobtime: "Full-Time",
    location: "Japan",
  },
  
];
export const FeaturedJobsgroup2 = [
  {
    img: data,
    tittle: "Data Entry",
    jobtime: "Full-Time",
    location: "Dhaka",
  },
  {
    img:video,
    tittle: "Video Editing",
    jobtime: "Part-Time",
    location: "Khulna",
  },
  {
    img:app,
    tittle: "App Developement",
    jobtime: "Full-Time",
    location: "Japan",
  },
  
];
export const JobCard1 = [
  {
    title: "Data Entry",
    type: "Full-Time",
    location: "Dhaka",
    remote: "Remote",
    description:
      "We are looking for a data entry specialist to manage our database...",
    salary: "$2K/month",
    posted: "5h ago",
  },
  {
    title: "Software Engineer",
    type: "Full-Time",
    location: "Dhaka",
    remote: "On-site",
    description:
      "Join our team as a Software Engineer and help build cutting-edge applications...",
    salary: "$5K/month",
    posted: "1d ago",
  },
  {
    title: "Marketing Specialist",
    type: "Part-Time",
    location: "Khulna",
    remote: "Remote",
    description:
      "Seeking a Marketing Specialist to lead our digital marketing efforts...",
    salary: "$80K/year",
    posted: "3d ago",
  },
  {
    title: "Graphic Designer",
    type: "Contract",
    location: "Rajshahi",
    remote: "On-site",
    description:
      "Are you a talented Graphic Designer? Join us and create stunning visuals...",
    salary: "Competitive",
    posted: "1w ago",
  },
  {
    title: "Customer Support Representative",
    type: "Full-Time",
    location: "Tangail",
    remote: "Remote",
    description:
      "Customer Support Representative needed to assist our clients with their inquiries...",
    salary: "$2K/month",
    posted: "5h ago",
  },
  {
    title: "Data Analyst",
    type: "Contract",
    location: "Dhaka",
    remote: "Remote",
    description:
      "We're hiring a Data Analyst to analyze data and generate insights...",
    salary: "$70K/year",
    posted: "1d ago",
  },
  {
    title: "Web Developer",
    type: "Full-Time",
    location: "Barishal",
    remote: "On-site",
    description:
      "Join our team as a Web Developer and work on exciting web projects...",
    salary: "$6K/month",
    posted: "3d ago",
  },
  {
    title: "Sales Manager",
    type: "Full-Time",
    location: "Dhaka",
    remote: "Remote",
    description:
      "Seeking a Sales Manager to lead our sales team and drive revenue growth...",
    salary: "$90K/year",
    posted: "1w ago",
  },
  {
    title: "Content Writer",
    type: "Part-Time",
    location: "Khulna",
    remote: "Remote",
    description:
      "We are looking for a Content Writer to create engaging content for our audience...",
    salary: "$3K/month",
    posted: "5h ago",
  },
  {
    title: "HR Specialist",
    type: "Full-Time",
    location: "Rajshahi",
    remote: "On-site",
    description:
      "Join our HR team as a Specialist and help manage our human resources...",
    salary: "$5K/month",
    posted: "1d ago",
  },
  {
    title: "UI/UX Designer",
    type: "Contract",
    location: "Dhaka",
    remote: "Remote",
    description:
      "UI/UX Designer needed to create intuitive and user-friendly interfaces...",
    salary: "$80K/year",
    posted: "3d ago",
  },
  {
    title: "Financial Analyst",
    type: "Full-Time",
    location: "Tangail",
    remote: "Remote",
    description:
      "We're hiring a Financial Analyst to analyze financial data and forecasts...",
    salary: "$7K/month",
    posted: "1w ago",
  },
  {
    title: "Project Manager",
    type: "Full-Time",
    location: "Dhaka",
    remote: "Remote",
    description:
      "Seeking a Project Manager to oversee our projects and ensure timely delivery...",
    salary: "$100K/year",
    posted: "5h ago",
  },
  {
    title: "Software Developer",
    type: "Full-Time",
    location: "Barishal",
    remote: "On-site",
    description:
      "Join our team as a Software Developer and build scalable software solutions...",
    salary: "$8K/month",
    posted: "1d ago",
  },
  {
    title: "Digital Marketer",
    type: "Part-Time",
    location: "Khulna",
    remote: "Remote",
    description:
      "Seeking a Digital Marketer to implement and manage digital marketing campaigns...",
    salary: "$4K/month",
    posted: "3d ago",
  },
  {
    title: "Operations Manager",
    type: "Full-Time",
    location: "Rajshahi",
    remote: "On-site",
    description:
      "Operations Manager needed to oversee daily operations and improve efficiency...",
    salary: "$90K/year",
    posted: "1w ago",
  },
  {
    title: "Legal Counsel",
    type: "Full-Time",
    location: "Dhaka",
    remote: "Remote",
    description:
      "We are looking for a Legal Counsel to provide legal advice and support...",
    salary: "$120K/year",
    posted: "5h ago",
  },
  {
    title: "Customer Success Manager",
    type: "Full-Time",
    location: "Tangail",
    remote: "Remote",
    description:
      "Customer Success Manager needed to ensure customer satisfaction and retention...",
    salary: "$6K/month",
    posted: "1d ago",
  },
  {
    title: "Technical Support Specialist",
    type: "Contract",
    location: "Dhaka",
    remote: "Remote",
    description:
      "We're hiring a Technical Support Specialist to assist customers with technical issues...",
    salary: "$70K/year",
    posted: "3d ago",
  },
  {
    title: "Product Manager",
    type: "Full-Time",
    location: "Barishal",
    remote: "On-site",
    description:
      "Join our team as a Product Manager and lead product development initiatives...",
    salary: "$9K/month",
    posted: "1w ago",
  },
  {
    title: "Healthcare Administrator",
    type: "Full-Time",
    location: "Dhaka",
    remote: "Remote",
    description:
      "Healthcare Administrator needed to manage healthcare facility operations...",
    salary: "$100K/year",
    posted: "5h ago",
  },
  {
    title: "Event Coordinator",
    type: "Part-Time",
    location: "Khulna",
    remote: "Remote",
    description:
      "Seeking an Event Coordinator to plan and execute successful events...",
    salary: "$3K/month",
    posted: "1d ago",
  },
  {
    title: "Quality Assurance Analyst",
    type: "Full-Time",
    location: "Rajshahi",
    remote: "On-site",
    description:
      "Join our QA team as an Analyst and ensure the quality of our products...",
    salary: "$5K/month",
    posted: "3d ago",
  },
  {
    title: "Sales Representative",
    type: "Full-Time",
    location: "Tangail",
    remote: "Remote",
    description:
      "We're hiring a Sales Representative to generate leads and close sales...",
    salary: "$80K/year",
    posted: "1w ago",
  },
  {
    title: "UX Researcher",
    type: "Full-Time",
    location: "Dhaka",
    remote: "Remote",
    description:
      "Seeking a UX Researcher to conduct user research and enhance user experience...",
    salary: "$110K/year",
    posted: "5h ago",
  },
  {
    title: "Social Media Manager",
    type: "Full-Time",
    location: "Barishal",
    remote: "On-site",
    description:
      "Join our team as a Social Media Manager and oversee our social media presence...",
    salary: "$7K/month",
    posted: "1d ago",
  },
  {
    title: "Business Analyst",
    type: "Part-Time",
    location: "Khulna",
    remote: "Remote",
    description:
      "We're looking for a Business Analyst to analyze business processes and improve efficiency...",
    salary: "$4K/month",
    posted: "3d ago",
  },
  {
    title: "Technical Writer",
    type: "Full-Time",
    location: "Rajshahi",
    remote: "On-site",
    description:
      "Technical Writer needed to create clear and concise technical documentation...",
    salary: "$6K/month",
    posted: "1w ago",
  },
];
