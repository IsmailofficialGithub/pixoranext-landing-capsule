import { createBrowserRouter, Navigate } from "react-router-dom";


import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />, // Layout wrapper
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <Home /> }, // default page
        ],
    },
    {
        path: "/capsule",
        element: <Navigate to="/" replace />,
    }
]);



export default router;
