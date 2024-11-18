import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterBySubCategory } from "../redux/productSlice";

const ComingSoon = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubCategoryClick = (category: string, subCategory: string) => {
        dispatch(filterBySubCategory({ category, subCategory }));
        navigate(`/category/${category}/${subCategory}`);
    };

    return (
        <Box color="white" pt={4} display={{ base: "block", md: "block" }} flex={1}> 
                <Box position="relative" flex={1}>
                    <Image
                        src="https://i.pinimg.com/736x/68/5d/1d/685d1d63442b3e37d159b0b693cbc0c8.jpg"
                        alt="From our new in"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                        }}
                    />
                    <Box position="absolute" top="30%" left="5%" zIndex={1}>
                        <Text fontSize={{base: "30px", md: "50px" }}  fontWeight="bold" mb={2} color={"#fff"}>
                            FROM OUR NEW IN
                        </Text>
                        <Button
                            colorScheme="yellow"
                            onClick={() => handleSubCategoryClick("Clothing", "Jackets")}
                        >
                            Explore Now
                        </Button>
                    </Box>
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        bg="rgba(0, 0, 0, 0.2)"
                        zIndex="0"
                    />
                </Box>

                <Box position="relative" flex={1}>
                    <Image
                        src="https://i.pinimg.com/736x/ed/ce/ab/edceabf57a235f4abd8f75ebfb14690c.jpg"
                        alt="New Releases"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                        }}
                    />
                    <Box position="absolute" bottom="10%" left="5%" zIndex={1}>
                        <Text fontSize={{base: "35px", md: "50px" }} fontWeight="bold" mb={2}>
                            NEW RELEASES
                        </Text>
                        <Button
                            colorScheme="yellow"
                            onClick={() => handleSubCategoryClick("Footwears", "Sneakers")}
                        >
                            Explore Now
                        </Button>
                    </Box>
                </Box>
        </Box>
    );
};

export default ComingSoon;
