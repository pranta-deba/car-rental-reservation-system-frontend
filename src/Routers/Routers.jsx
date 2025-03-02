import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import PrivateUserRoute from "./Private/PrivateUserRoute";
import PrivateAdminRoute from "./Private/PrivateAdminRoute";
import CreateCar from "../Pages/CreateCar/CreateCar";
import BookedCar from "../Pages/BookedCar/BookedCar";
import Booking from "../Pages/Booking/Booking";
import LoggedRoute from "./Private/LoggedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: "about",
            },
            {
                path: "/contact",
                element: "contact",
            },
            {
                path: "/booking",
                element: <PrivateUserRoute><Booking /></PrivateUserRoute>,
            },
            {
                path: "/create-car",
                element: <LoggedRoute>
                    <PrivateAdminRoute>
                        <CreateCar />
                    </PrivateAdminRoute>
                </LoggedRoute>,
            },
            {
                path: "/booked-car",
                element: <PrivateAdminRoute><BookedCar /></PrivateAdminRoute>,
            },
        ],
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
]);