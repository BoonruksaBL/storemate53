import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
        ],
    },
    // 404 Catch-all route
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default router;