// src/layouts/MainLayout.tsx
import { ScrollRestoration } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

const MainLayout = () => {
    return (
        <Box>
            <ScrollRestoration />
            <Box>
                <Header />
                <Outlet />
                <Footer />
            </Box>

        </Box>
    );
};

export default MainLayout;
