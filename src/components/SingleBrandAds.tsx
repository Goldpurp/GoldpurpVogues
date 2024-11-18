import { Box, Image, Text, Flex, Skeleton, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { filterBySubCategory } from "../redux/productSlice";

const SingleBrandAds = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    // Example product data (replace with actual data from your store)
    const productsDatas = {
        label: "Tyson Hoodie - Charcoal",
        src: "https://cdn.shopify.com/s/files/1/0293/9277/products/12-30-22Studio5_RT_SR_11-31-02_38_NMKT40418_Charcoal_R_2207_JB.jpg?v=1672792215",
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = (productLabel: string) => {
        navigate(`/products/${productLabel}`);
    };

    const handleSubCategoryClick = (category: string, subCategory: string) => {
        dispatch(filterBySubCategory({ category, subCategory }));
        navigate(`/category/${category}/${subCategory}`);
    };

    return (
        <Box
            bg="#EDECEA"
            flex={1}
            p={4}
            borderRadius="md"
            position="relative"
            boxShadow="md"
        >
            <Box mb={4}>
                <Text fontWeight="bold" fontSize="lg" color="black">
                    HOODIE & SWEATS
                </Text>
                <Text fontSize="sm" color="gray.600">
                    Style Overhaul
                </Text>

                <Box mt={1}>
                    <Skeleton isLoaded={!loading}>
                        <Button
                            color={"#000"}
                            background={"transparent"}
                            variant="unstyled"
                            alignItems="center"
                            justifyContent="center"
                            fontSize={"12px"}
                            cursor="pointer"
                            transition="color 0.4s, border-color 0.4s"
                            alignSelf="center"
                            _hover={{ color: "#dee2e6", borderBottomColor: "#dee2e6" }}
                            onClick={() => handleSubCategoryClick("Clothing", "Hoodies")}
                        >
                            Shop now →
                        </Button>
                    </Skeleton>
                </Box>
            </Box>

            <Box flex={1}>
                <Image
                    src={productsDatas.src}
                    alt={productsDatas.label}
                    borderRadius="md"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }}
                    onClick={() => handleImageClick(productsDatas.label)}
                />
            </Box>

            <Flex justifyContent="center" mt={4}>
                <Text fontWeight="bold" fontSize="lg" color="black">
                    HOODIE & SWEATS
                </Text>
            </Flex>
        </Box>
    );
};

export default SingleBrandAds;
