import { createBrowserRouter } from "react-router";
import Home from "../pages/HomePage";
import RegisterPage from "../pages/auth/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/auth/LoginPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[


        {
            path:"/",
            element:<Home/>


        },

         {
    path:"/register",
    element:<RegisterPage/>
    },
    {
        path:"/login",
        element:<LoginPage/>
    }


        ]
    }
   

], { basename: '/store-mate-app' });

// When the app is hosted at a subpath (GitHub Pages), route matching
// must use the repository name as the base URL.

export default router;