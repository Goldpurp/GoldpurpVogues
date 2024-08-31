import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Routes } from "./baseRoutes";
import ProductGrid from "../pages/ProductGrid";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    { path: Routes.Login,
        element: <Login/>
    },
    { path: Routes.SignUp,
        element: <SignUp/>
    },

    {
        path: Routes.home,
        element: <Home/>,
        children: [
            {
                index: true,
                element: <App/>
            },
            { path: Routes.ProductGrid,
                element: <ProductGrid/>
            },

        
        ]
    },
])
export default router;