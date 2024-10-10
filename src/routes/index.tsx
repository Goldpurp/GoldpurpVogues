import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Routes } from "./baseRoutes";
import ProductGrid from "../pages/ProductGrid";
import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import ContactUs from "../pages/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import HelpCenter from "../pages/HelpCenter";
import ReturnPolicy from "../TodoPages.ts/ReturnPolicy";
import TrackOrder from "../pages/TrackOrder";
import ErrorPage from "../TodoPages.ts/ErrorPage";
import Wishlist from "../pages/Wishlist";
import Checkout from "../TodoPages.ts/Checkout";
import CategoryItemsDisplay from "../TodoPages.ts/CategoryItemsDisplay";
import CollectionSection from "../pages/CollectionSection";
import CollectionsPage from "../pages/CollectionsPage";

const router = createBrowserRouter([
    {
        path: Routes.Login,
        element: <Login />
    },
    {
        path: Routes.SignUp,
        element: <SignUp />
    },
    {
        path: Routes.ErrorPage,
        element: <ErrorPage />
    },
    {
        path: Routes.Checkout,
        element: <Checkout />
    },

    {
        path: Routes.home,
        element: (
            <>
                <ScrollRestoration />
                <Home />
            </>
        ),
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: Routes.ProductGrid,
                element: <ProductGrid />
            },
            {
                path: Routes.About,
                element: <About />
            },
            {
                path: Routes.Cart,
                element: <Cart />
            },
            {
                path: Routes.ProductPage,
                element: <ProductPage />
            },
            {
                path: Routes.ContactUs,
                element: <ContactUs />
            },
            {
                path: Routes.PrivacyPolicy,
                element: <PrivacyPolicy />
            },
            {
                path: Routes.HelpCenter,
                element: <HelpCenter />
            },
            {
                path: Routes.ReturnPolicy,
                element: <ReturnPolicy />
            },

            {
                path: Routes.TrackOrder,
                element: <TrackOrder />
            },
            {
                path: Routes.Wishlist,
                element: <Wishlist />
            },
            {
                path: Routes.SubCategory,
                element: <CategoryItemsDisplay />,
            },
            {
                path: Routes.Collection,
                element: <CollectionSection />,
            },
            {
                path: Routes.CollectionPage,
                element: <CollectionsPage />,
            },


        ]
    },
])
export default router;