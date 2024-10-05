import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
    return (
        <Box width="100%" height="100%">
            <Header />
            <Outlet />
            <Footer />
        </Box>
    );
}