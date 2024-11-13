// src/layouts/MainLayout.tsx
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
