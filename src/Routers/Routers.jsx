import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import PrivateUserRoute from "./Private/PrivateUserRoute";

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
                element: <PrivateUserRoute>"booking"</PrivateUserRoute>,
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