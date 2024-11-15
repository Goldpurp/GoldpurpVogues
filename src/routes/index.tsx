// index.tsx (Routes configuration)
import { Routes } from "./baseRoutes";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import ContactUs from "../pages/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import HelpCenter from "../pages/HelpCenter";
import ReturnPolicy from "../TodoPages.ts/ReturnPolicy";
import TrackOrder from "../pages/TrackOrder";
import Wishlist from "../pages/Wishlist";
import CategoryItemsDisplay from "../TodoPages.ts/CategoryItemsDisplay";
import CheckoutBilling from "../TodoPages.ts/CheckoutBilling";
import ErrorPage from "../pages/ErrorPage";
import Home from "../App";
import MainLayout from "../MainLayout";
import ProductList from "../components/ProductList";
import Collection from "../pages/Collection";
import CollectionsList from "../pages/CollectionsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: Routes.Login, element: <Login /> },
      { path: Routes.SignUp, element: <SignUp /> },
      { path: Routes.ProductList, element: <ProductList /> },
      { path: Routes.About, element: <About /> },
      { path: Routes.ProductPage, element: <ProductPage /> },
      { path: Routes.Cart, element: <Cart /> },
      { path: Routes.ContactUs, element: <ContactUs /> },
      { path: Routes.PrivacyPolicy, element: <PrivacyPolicy /> },
      { path: Routes.HelpCenter, element: <HelpCenter /> },
      { path: Routes.ReturnPolicy, element: <ReturnPolicy /> },
      { path: Routes.TrackOrder, element: <TrackOrder /> },
      { path: Routes.Wishlist, element: <Wishlist /> },
      { path: Routes.SubCategory, element: <CategoryItemsDisplay /> },
      { path: Routes.Collection, element: <Collection /> },
      { path: Routes.Collections, element: <CollectionsList /> },
      { path: Routes.CheckoutBilling, element: <CheckoutBilling /> },
    ],
  },
]);

export default router;
