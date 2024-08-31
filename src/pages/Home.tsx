import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <Box width="100%" height="100%">
            <Outlet />
            <Footer />
        </Box>
    );
}