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

  const [likedItems, setLikedItems] = useState<boolean[]>(
    new Array(newArrivalItems.length).fill(false)
  );

  const handleLikeToggle = (index: number) => {
    setLikedItems((prevState) => {
      const updatedLikes = [...prevState];
      updatedLikes[index] = !updatedLikes[index];
      return updatedLikes;
    });
  };

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
              <VStack p={1} align="start">
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

                  <HStack>
                    <IconButton
                      w={"10px"}
                      h={"20px"}
                      aria-label="Like Item"
                      icon={
                        likedItems[index] ? (
                          <Box w={"20px"} cursor="pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                          </Box>
                        ) : (
                          <Box w={"20px"} cursor="pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                              />
                            </svg>
                          </Box>
                        )
                      }
                      onClick={() => handleLikeToggle(index)}
                      variant="ghost"
                      colorScheme="teal"
                      _hover={{ color: "#2f3e46" }}
                      transition="900ms"
                    />

                    <IconButton
                      w={"10px"}
                      h={"20px"}
                      ml={"-15px"}
                      aria-label="Add to Cart"
                      icon={
                        <Box boxSize={{ base: "19px", md: "21px" }}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
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
