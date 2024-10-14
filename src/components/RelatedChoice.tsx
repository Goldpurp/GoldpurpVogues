import { Box, Image, Text, Flex, VStack } from "@chakra-ui/react";
import Img from "/Products/4.png";

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

export default function RelatedChoice() {

  return (
    <Flex pt={"30px"} flexDirection={"column"} overflowX={"scroll"}>
      <VStack w="100%" pl={2}>
        <Flex overflowX="scroll" w="100%" css={{ scrollbarWidth: "none" }}>
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
                    lg: "17px",
                  }}
                  fontWeight="400"
                  noOfLines={1}
                >
                  {item.title}
                </Text>

                <Flex justifyContent={"space-between"}>
                  <Text
                    color="#2d6a4f"
                    fontSize={{ base: "14px", lg: "18px" }}
                    fontWeight="500"
                  >
                    ₦{item.price}
                  </Text>
                  <Box w="20px" ml={12}>
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
                </Flex>
              </VStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}
