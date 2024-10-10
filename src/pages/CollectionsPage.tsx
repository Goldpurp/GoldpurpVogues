import { Box, Image, Text, Grid, GridItem } from "@chakra-ui/react";
import IMG1 from "/ModalImgCards/1.webp";
import IMG2 from "/ModalImgCards/2.webp";
import IMG3 from "/ModalImgCards/3.webp";
import IMG4 from "/ModalImgCards/4.webp";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const products = [
    {
        id: 1,
        name: "Monogram Printed Short-Sleeved Shirt",
        images: [IMG1, IMG2, IMG3, IMG4],
        price: "$1,200.00",
    },
    {
        id: 2,
        name: "District PM",
        images: [IMG1, IMG2, IMG3, IMG4],
        price: "$2,340.00",
    },
    {
        id: 3,
        name: "District PM",
        images: [IMG1, IMG2, IMG3, IMG4],
        price: "$2,340.00",
    },
    {
        id: 4,
        name: "District PM",
        images: [IMG1, IMG2, IMG3, IMG4],
        price: "$2,340.00",
    },
    {
        id: 5,
        name: "District PM",
        images: [IMG1, IMG2, IMG3, IMG4],
        price: "$2,340.00",
    },
];

const CollectionPage = () => {
    return (
        <Box
            minH="100vh"
            bg="gray.50"
            color="gray.800"
            p={4}
            pt={{ base: "65px", md: "70px" }}
        >
            <Box as="section" my={8}>
                <Image
                    src="https://i.pinimg.com/736x/55/6e/04/556e04c6c3da6f7c2f93cd18f477c3c9.jpg"
                    alt="LV Fall Collection"
                    borderRadius="lg"
                    objectFit="cover"
                    width="100%"
                    height="450px"
                />
                <Text fontSize="lg" fontWeight="bold" mt={4}>
                    GP Men's Fall
                </Text>
                <Text maxW="600px" mt={2}>
                    A transversal wardrobe perpetuates Pharrell Williams’ dandy aesthetic,
                    unveiling an array of versatile creations imbued with classic
                    elegance.
                </Text>
            </Box>

            <Grid
                templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
                gap={3}
                mt={6}
            >
                {products.map((product) => (
                    <GridItem key={product.id} overflow="hidden">
                        <Carousel
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}
                            interval={8000}
                            transitionTime={500}
                            swipeable
                            emulateTouch
                            autoPlay={false}
                        >
                            {product.images.map((image, index) => (
                                <Box key={index}>
                                    <Image alt={`image-${index}`} src={image} objectFit="cover" />
                                </Box>
                            ))}
                        </Carousel>
                        <Box p={2} w={"full"}>
                            <Text
                                noOfLines={1}
                                fontSize={{ base: "12px", md: "13px", lg: "15px" }}
                            >
                                best shirt
                            </Text>
                            <Text
                                size="sm"
                                color="#386648"
                                mt={1}
                                fontSize={{ base: "13px", md: "14px", lg: "16px" }}
                            >
                                ₦50,000.00
                            </Text>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default CollectionPage;
