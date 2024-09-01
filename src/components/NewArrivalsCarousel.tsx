import { useState } from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  IconButton,
  VStack,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import Img6 from "/NewArrivals/6.png";
import DecorativeText from "./DecorativeText";

export default function NewArrivalsCarousel() {
  const newArrivalItems = [
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img6,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
  ];

  const [likedItem, setLikedItem] = useState(false)
  
  const handleLikeToggle =()=>{
      setLikedItem((prevState) => !prevState)
  }

  return (
    <>
      <DecorativeText />
      <VStack w="100%" mb={4} pl={2}>
        <Flex overflowX="auto" w="100%" pb={2} css={{ scrollbarWidth: "none" }}>
          {newArrivalItems.map((item, index) => (
            <Box
              key={index}
              bg="#f8f8f8"
              borderRadius="md"
              overflow="hidden"
              flexShrink={0}
              w={{ base: "160px", md: "190px", lg: "210px", xl: "250px" }}
              h={{ base: "320px", md: "350px", lg: "390px", xl: "490px" }}
              mr={2}
              position="relative"
            >
              <ChakraLink as={RouterLink} to={"product"}>
                <Image
                  src={item.src}
                  alt={item.title}
                  w="100%"
                  h="72%"
                  objectFit="cover"
                  borderRadius="md"
                  bg="#d8dad3"
                  boxShadow="sm"
                />
              </ChakraLink>
              <VStack p={2} align="start">
                <Text
                  fontSize={{
                    base: "13px",
                    sm: "18px",
                    md: "20px",
                    lg: "22px",
                  }}
                  fontWeight="400"
                  noOfLines={1}
                >
                  {item.title}
                </Text>
                <Text
                  fontSize={{
                    base: "11px",
                    sm: "14px",
                    md: "15px",
                    lg: "16px",
                  }}
                  color="gray.600"
                  noOfLines={1}
                >
                  {item.description}
                </Text>

                <Flex
                  w={"100%"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text
                    color="#2d6a4f"
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="bold"
                  >
                    ₦{item.price}
                  </Text>

                  <HStack gap={0}>
                    <IconButton
                      w={"10px"}
                      h={"20px"}
                      aria-label="Like Item"
                      icon={likedItem ? <MdOutlineFavorite size="100%" /> : 
                        <MdOutlineFavoriteBorder size="100%" />
                      }
                      onClick={() => handleLikeToggle()}
                      variant="ghost"
                      colorScheme="teal"
                      _hover={{ color: "#2f3e46" }}
                      transition="900ms"
                    />

                    <IconButton
                      w={"10px"}
                      h={"20px"}
                      aria-label="Add to Cart"
                      icon={
                        <Box boxSize={{ base: "19px", md: "21px" }}>
                          <GiShoppingCart size="100%" />
                        </Box>
                      }
                      variant="ghost"
                      colorScheme="teal"
                      _hover={{ color: "#2f3e46" }}
                      transition="900ms"
                    />
                  </HStack>
                </Flex>
              </VStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </>
  );
}
