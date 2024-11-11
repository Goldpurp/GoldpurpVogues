// import { Carousel } from "react-responsive-carousel";
import {
  Box,
  Image,
  Text,
  GridItem,
  Button,
  useBreakpointValue,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import productsData from "../redux/data";
import { useEffect, useState } from "react";
import { Routes } from "../routes/baseRoutes";
import { useNavigate } from "react-router-dom";

const CollectionPage = () => {
  const navigate = useNavigate();
  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const [visibleProducts, setVisibleProducts] = useState((columns || 2) * 2);

  useEffect(() => {
    setVisibleProducts((columns || 2) * 5);
  }, [columns]);

  const handleShowMore = () => {
    setVisibleProducts((prevCount) => prevCount + (columns || 2) * 2);
  };
  return (
    <Box
      minH="100vh"
      bg="gray.50"
      color="gray.800"
      p={4}
      pt={{ base: "45px", md: "70px" }}
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

      <SimpleGrid columns={columns} spacing={3} gap={3} mt={6}>
        {productsData.slice(0, visibleProducts).map((product) => (
          <GridItem overflow="hidden">
            {/* <Carousel
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
                        </Carousel> */}
            <Box>
              <Image src={product.src} alt="image" objectFit="cover" cursor={"pointer"} onClick={() => navigate(Routes.ProductPage, { state: { product: product } })}
/>
            </Box>
            <Box p={2} w={"full"}>
              <Text
                noOfLines={1}
                fontSize={{ base: "12px", md: "13px", lg: "15px" }}
              >
                {product.label}
              </Text>
              <Text
                size="sm"
                color="#386648"
                mt={1}
                fontSize={{ base: "13px", md: "14px", lg: "16px" }}
              >
                ₦{product.price}
              </Text>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>

      {visibleProducts < productsData.length && (
        <Flex align="center" justify="center" p={4}>
          <Button
            onClick={handleShowMore}
            color="white"
            width={{ base: "200px", lg: "385px" }}
            height="48px"
            fontSize="13px"
            borderRadius="30px"
            bg="#2d6a4f"
            _hover={{ bg: "#344e41" }}
          >
            Show more
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default CollectionPage;
