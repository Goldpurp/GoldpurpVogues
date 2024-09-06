import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Routes } from "./baseRoutes";
import ProductGrid from "../pages/ProductGrid";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import About from "../components/About";
import ProductPage from "../components/ProductPage";
import Cart from "../components/Cart";

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
            { path: Routes.About,
                element: <About/>
            },
            { path: Routes.Cart,
                element: <Cart/>
            },
            { path: Routes.ProductPage,
                element: <ProductPage/>
            },

        
        ]
    },
])
export default router;