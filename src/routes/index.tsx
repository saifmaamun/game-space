import { createBrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import NotFound from "../page/NotFound/NotFound";
import Facility from "../page/Facility/Facility";
import FacilityDetails from "../page/FacilityDetails/FacilityDetails";
import Booking from "../page/Booking/Booking";
import BookedDetails from "../page/BookedDetails/BookedDetails";

import DashboardHome from "../page/Dashboard/Dashboardhome/DashboardHome";
import MyBooking from "../page/Dashboard/MyBooking/MyBooking";
import AllFacility from "../page/Dashboard/AllFacility/AllFacility";
import AllBooking from "../page/Dashboard/AllBooking/AllBooking";
import AddFacility from "../page/Dashboard/AddFacility/AddFacility";
import AddAdmin from "../page/Dashboard/AddAdmin/AddAdmin";
import Dashboard from "../page/Dashboard/Dashboard";
import EditFacility from "../page/Dashboard/EditFacility/EditFacility";
import AboutUs from "../page/AboutUs/AboutUs";
import ContactUs from "../page/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/facility",
        element: <Facility />,
      },
      {
        path: "/facility/:id",
        element: (
          <PrivateRoute>
            element: <FacilityDetails />,
          </PrivateRoute>
        ),
      },

      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/booking/details",
        element: <BookedDetails />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            element: <Dashboard />,
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "mybookings",
            element: <MyBooking />,
          },
          {
            path: "allfacility",
            element: <AllFacility />,
          },
          {
            path: "allbookings",
            element: <AllBooking />,
          },
          {
            path: "addfacility",
            element: <AddFacility />,
          },
          {
            path: "editfacility/:id",
            element: <EditFacility />,
          },
          {
            path: "addadmin",
            element: <AddAdmin />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
