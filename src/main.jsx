import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Rect-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components:
import RegistrationPage from "./pages/registration/RegistrationPage";
import LoginPage from "./pages/login/LoginPage";
import JobPortal from "./pages/JobPortal/JobPortal";
import Home from './pages/JobPortal/Body/Home/Home'
import Jobs from "./pages/JobPortal/Body/Jobs/Jobs";


import ApplicantDashboard from "./pages/JobPortal/Body/ApplicantDashboard/ApplicantDashboard";
import ApplicantProfile from "./pages/JobPortal/Body/ApplicantDashboard/ApplicantProfile/ApplicantProfile";
import CompanyDashboard from "./pages/JobPortal/Body/CompanyDashboard/CompanyDashboard";
import CompanyProfile from'./pages/JobPortal/Body/CompanyDashboard/CompanyProfile/CompanyProfile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <JobPortal />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/applicantdashboard",
        element: <ApplicantDashboard />,
      },
      {
        path: "/companyDashboard",
        element: <CompanyDashboard />,
      },
    ],
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/ApplicantProfile",
    element: <ApplicantProfile />,
  },
  {
    path: "/Companyprofile",
    element: <CompanyProfile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
