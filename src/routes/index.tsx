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
import ReturnPolicy from "../pages/ReturnPolicy";
import TrackOrder from "../pages/TrackOrder";
import Wishlist from "../pages/Wishlist";
import CategoryItemsDisplay from "../pages/Category";
import ErrorPage from "../pages/ErrorPage";
import Home from "../App";
import MainLayout from "../MainLayout";
import ProductList from "../components/ProductList";
import Collection from "../pages/Collection";
import CollectionsList from "../pages/CollectionsList";
import SubCategory from "../pages/SubCategory";
import SearchPage from "../pages/SearchPage";
import PaymentConfirmation from "../pages/PaymentConfirmation";
import Checkout from "../pages/Checkout";
import Blogs from "../TodoPages.ts/Blogs";

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
      { path: Routes.Category, element: <CategoryItemsDisplay /> },
      { path: Routes.SubCategory, element: <SubCategory /> },
      { path: Routes.SearchPage, element: <SearchPage /> },
      { path: Routes.Collection, element: <Collection /> },
      { path: Routes.Collections, element: <CollectionsList /> },
      { path: Routes.Checkout, element: <Checkout /> },
      { path: Routes.PaymentConfirmation, element: <PaymentConfirmation /> },
      { path: Routes.Blogs, element: <Blogs /> },
    ],
  },
]);

export default router;
