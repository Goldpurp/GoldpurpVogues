import {
  Box,
  Image,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import Img from "../../public/Products/4.png";

export default function RelatedChoice() {
  const newArrivalItems = [
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
    {
      src: Img,
      title: "Breathable Shirt",
      description: "Ethel Textured Knit Johnny Collar Shirt - white",
      price: "16,499.99",
    },
  ];

  return (
    <Flex pt={"30px"} flexDirection={"column"}>

<Flex justifyContent={"center"} alignContent={"center"} pb={4}>
                <Text fontSize={"16px"}>RELATED STYLES</Text>
            </Flex>

      <VStack w="100%" pl={2}>
        <Flex overflowX="auto" w="100%"  css={{ scrollbarWidth: "none" }}>
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
                <Image
                  src={item.src}
                  alt={item.title}
                  w="100%"
                  objectFit="cover"
                  bg="#d8dad35d"
                  boxShadow="sm"
                />
              <VStack py={4} pl={2} align="start">
                <Text
                  fontSize={{
                    base: "13px",
                    md: "20px",
                    lg: "22px",
                  }}
                  fontWeight="400"
                  noOfLines={1}
                >
                  {item.title}
                </Text>

                <Text
                  color="#2d6a4f"
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="500"
                >
                  ₦{item.price}
                </Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}
