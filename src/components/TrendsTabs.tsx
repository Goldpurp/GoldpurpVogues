import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { filterByCollection, filterByCategory } from "../redux/productSlice";

interface TrendsTabsProps {
    onTabChange: (filter: string) => void;
}

const TrendsTabs: React.FC<TrendsTabsProps> = ({ onTabChange }) => {
    const dispatch = useDispatch();

    const handleTabClick = (filter: string) => {
        onTabChange(filter);

        // Dispatch the action based on the selected tab
        if (filter === "Everyday Essentials" || filter === "Best Sellers" || filter === "Hoodies" || filter === "Denims") {
            dispatch(filterByCategory(filter)); // Filter by category based on the tab name
        } else {
            dispatch(filterByCollection(filter)); // Filter by collection if it's a collection-related tab
        }
    };

    return (
        <Box>
            <Flex direction="column" justify="flex-start">
                <Box>
                    <Text
                        fontSize={{ base: "35px", md: "45px", lg: "52px" }}
                        fontWeight="light"
                        fontFamily="Jomhuria, sans-serif"
                        ml={{ base: "20px", lg: "40px" }}
                    >
                        Latest Trends
                    </Text>
                </Box>

                <Flex
                    gap={4}
                    direction="row"
                    wrap="nowrap"
                    justify="flex-start"
                    overflowX="auto"
                    mx={{ base: "20px", lg: "40px" }}
                    my="30px"
                    css={{
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    <Button
                        variant="outline"
                        color="black"
                        fontSize={{ base: "10px", sm: "13px" }}
                        fontWeight="500"
                        px={{ base: "10px", sm: "15px" }}
                        py="5px"
                        borderRadius="30px"
                        borderColor="#daddd8"
                        _hover={{
                            borderColor: "#353535",
                        }}
                        fontFamily="Montserrat, sans-serif"
                        onClick={() => handleTabClick("best_sellers")}
                    >
                        Best Sellers
                    </Button>
                    <Button
                        variant="outline"
                        color="black"
                        fontSize={{ base: "10px", sm: "13px" }}
                        fontWeight="500"
                        px={{ base: "10px", sm: "15px" }}
                        py="5px"
                        borderRadius="30px"
                        borderColor="#daddd8"
                        _hover={{
                            borderColor: "#353535",
                        }}
                        fontFamily="Montserrat, sans-serif"
                        onClick={() => handleTabClick("sale")}
                    >
                        Sale
                    </Button>
                    <Button
                        variant="outline"
                        color="black"
                        fontSize={{ base: "10px", sm: "13px" }}
                        fontWeight="500"
                        px={{ base: "10px", sm: "15px" }}
                        py="5px"
                        borderRadius="30px"
                        borderColor="#daddd8"
                        _hover={{
                            borderColor: "#353535",
                        }}
                        fontFamily="Montserrat, sans-serif"
                        onClick={() => handleTabClick("graphics")}
                    >
                        Graphics
                    </Button>
                    <Button
                        variant="outline"
                        color="black"
                        fontSize={{ base: "10px", sm: "13px" }}
                        fontWeight="500"
                        px={{ base: "10px", sm: "15px" }}
                        py="5px"
                        borderRadius="30px"
                        borderColor="#daddd8"
                        _hover={{
                            borderColor: "#353535",
                        }}
                        fontFamily="Montserrat, sans-serif"
                        onClick={() => handleTabClick("jeans")}
                    >
                        Jeans
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export default TrendsTabs;

