import { Routes } from "./baseRoutes";
import { createBrowserRouter } from "react-router-dom";

import Home from "../App";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MainLayout from "../MainLayout";
import Checkout from "../pages/Checkout";
import Wishlist from "../pages/Wishlist";
import Blogs from "../TodoPages.ts/Blogs";
import ErrorPage from "../pages/ErrorPage";
import ContactUs from "../pages/ContactUs";
import TrackOrder from "../pages/TrackOrder";
import SearchPage from "../pages/SearchPage";
import HelpCenter from "../pages/HelpCenter";
import Collection from "../pages/Collection";
import SubCategory from "../pages/SubCategory";
import ProductPage from "../pages/ProductPage";
import ReturnPolicy from "../pages/ReturnPolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import CategoryItemsDisplay from "../pages/Category";
import CollectionsList from "../pages/CollectionsList";
import PaymentConfirmation from "../pages/PaymentConfirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: Routes.Cart, element: <Cart /> },
      { path: Routes.Blogs, element: <Blogs /> },
      { path: Routes.About, element: <About /> },
      { path: Routes.Login, element: <Login /> },
      { path: Routes.SignUp, element: <SignUp /> },
      { path: Routes.Wishlist, element: <Wishlist /> },
      { path: Routes.Checkout, element: <Checkout /> },
      { path: Routes.ContactUs, element: <ContactUs /> },
      { path: Routes.SearchPage, element: <SearchPage /> },
      { path: Routes.Collection, element: <Collection /> },
      { path: Routes.TrackOrder, element: <TrackOrder /> },
      { path: Routes.HelpCenter, element: <HelpCenter /> },
      { path: Routes.SubCategory, element: <SubCategory /> },
      { path: Routes.ProductPage, element: <ProductPage /> },
      { path: Routes.ReturnPolicy, element: <ReturnPolicy /> },
      { path: Routes.PrivacyPolicy, element: <PrivacyPolicy /> },
      { path: Routes.Collections, element: <CollectionsList /> },
      { path: Routes.Category, element: <CategoryItemsDisplay /> },
      { path: Routes.PaymentConfirmation, element: <PaymentConfirmation /> },
    ],
  },
]);

export default router;
