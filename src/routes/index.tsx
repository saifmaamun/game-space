import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/Home/Home";
import Login from "../page/login/Login";
import Register from "../page/register/Register";
import NotFound from "../page/NotFound/NotFound";
import Facility from "../page/Facility/Facility";
import FacilityDetails from "../page/FacilityDetails/FacilityDetails";
import Booking from "../page/Booking/Booking";
import BookedDetails from "../page/BookedDetails/BookedDetails";

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
        path: "/facility",
        element: <Facility />,
      },
      {
        path: "/facility/:id",
        element: <FacilityDetails />,
        // element: (
        //   <PrivateRoute>
        //     <ProductDetails />
        //   </PrivateRoute>
        // ),
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
