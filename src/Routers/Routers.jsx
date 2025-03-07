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
import CarDetails from "../Pages/CarDetails/CarDetails";
import AllCars from "../Pages/Cars/AllCars";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Profile from "../Pages/Profile/Profile";

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
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/profile",
                element: <LoggedRoute><Profile /></LoggedRoute>,
            },
            {
                path: "/cars",
                element: <AllCars />,
            },
            {
                path: "/car/:id",
                loader: ({ params }) => fetch(`${import.meta.env.VITE_BASE_URL}/cars/${params.id}`),
                element: <CarDetails />
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