import {
    Box,
    Image,
    Text,
    Heading,
    Flex,
    SimpleGrid,
  } from "@chakra-ui/react";
  import Img1 from "/ProductImages/1.webp";
  import { PiHandbagThin } from "react-icons/pi";
  import { useState } from "react";
  
  interface Color {
    name: string;
    value: string;
  }
  
  const productList = [
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
        src: Img1,
        label: "Crosses Cargo Sweatpant - Olive",
        price: "41,459.99",
        oldPrice: "58,050.00",
        bonus: "10% Off On ₦50,000+ Orders!",
      },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
        src: Img1,
        label: "Crosses Cargo Sweatpant - Olive",
        price: "41,459.99",
        oldPrice: "58,050.00",
        bonus: "10% Off On ₦50,000+ Orders!",
      },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
        src: Img1,
        label: "Crosses Cargo Sweatpant - Olive",
        price: "41,459.99",
        oldPrice: "58,050.00",
        bonus: "10% Off On ₦50,000+ Orders!",
      },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
        src: Img1,
        label: "Crosses Cargo Sweatpant - Olive",
        price: "41,459.99",
        oldPrice: "58,050.00",
        bonus: "10% Off On ₦50,000+ Orders!",
      },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
        src: Img1,
        label: "Crosses Cargo Sweatpant - Olive",
        price: "41,459.99",
        oldPrice: "58,050.00",
        bonus: "10% Off On ₦50,000+ Orders!",
      },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
        src: Img1,
        label: "Crosses Cargo Sweatpant - Olive",
        price: "41,459.99",
        oldPrice: "58,050.00",
        bonus: "10% Off On ₦50,000+ Orders!",
      },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
        src: Img1,
        label: "Crosses Cargo Sweatpant - Olive",
        price: "41,459.99",
        oldPrice: "58,050.00",
        bonus: "10% Off On ₦50,000+ Orders!",
      },
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
        src: Img1,
        label: "Crosses Cargo Sweatpant - Olive",
        price: "41,459.99",
        oldPrice: "58,050.00",
        bonus: "10% Off On ₦50,000+ Orders!",
      },
   
 
  ];
  
  const colors: Color[] = [
    { name: "Black", value: "#000000" },
    { name: "Red", value: "#c1121f" },
    { name: "Green", value: "#588157" },
    { name: "Gray", value: "#808080" },
  ];
  
  export default function AlsoLike() {
    const [activeColors, setActiveColors] = useState<{ [key: number]: string | null }>({});
    const [likes, setLikes] = useState<{ [key: number]: boolean }>({});
  
    const handleColorClick = (index: number, color: string) => {
      setActiveColors((prevColors) => ({
        ...prevColors,
        [index]: color,
      }));
    };
  
    const toggleLike = (index: number) => {
      setLikes((prevLikes) => ({
        ...prevLikes,
        [index]: !prevLikes[index],
      }));
    };
  
  
    return (
      <>
        <Flex
          flexDirection={"column"}
          px={2}
          pt={"70px"}
          w="100%"
          overflow="hidden"
          letterSpacing="normal"
          fontFamily="Nunito, sans-serif"
        >
          <Flex justifyContent={"center"} alignContent={"center"} pb={9}>
            <Text fontSize={"18px"}>YOU MAY ALSO LIKE</Text>
          </Flex>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={2}>
            {productList.map((item, itemIndex) => (
              <Box
                key={itemIndex}
                bg="#e3e7eb"
                border="1px solid #e2e6e9"
                cursor="pointer"
                position={"relative"}
              >
                <Image
                  src={item.src}
                  alt="image"
                  objectFit="cover"
                />
                <Flex
                  position="absolute"
                  right={2}
                  top={3}
                  bg="white"
                  p={1}
                  borderRadius="full"
                >
                  <Box
                    as={PiHandbagThin}
                    w={{ base: 5, lg: 6 }}
                    h={{ base: 5, lg: 6 }}
                  />
                </Flex>
                <Box p={2} w={"full"} bg={"#fff"}>
                  <Text
                    noOfLines={1}
                    fontSize={{ base: "12px",lg: "15px" }}
                  >
                    {item.label}
                  </Text>
                  <Heading
                    as="h5"
                    size="sm"
                    color="#386648"
                    mt={1}
                    fontSize={{ base: "13px", lg: "14px" }}
                  >
                    ₦{item.price}
                    <Text
                      as="span"
                      color="#780000"
                      textDecoration="line-through"
                      ml={2}
                      fontWeight={"400"}
                      fontSize={{ base: "11px", lg: "15px" }}
                    >
                      ₦{item.oldPrice}
                    </Text>
                  </Heading>
  
                  <Flex justifyContent={"space-between"} alignItems={"center"}>
                    <Flex pt={2}>
                      {colors.map((color) => (
                        <Box
                          key={color.value}
                          w="18px"
                          h="18px"
                          bg={color.value}
                          border={
                            activeColors[itemIndex] === color.name
                              ? "2px solid black"
                              : "1px solid #adb5bd"
                          }
                          cursor="pointer"
                          mr={2}
                          borderRadius={"50%"}
                          _hover={{ border: "2px solid #c4a163" }}
                          onClick={() => handleColorClick(itemIndex, color.name)}
                        />
                      ))}
                    </Flex>
  
                    <Box onClick={() => toggleLike(itemIndex)}>
                      {likes[itemIndex] ? (
                        <Box boxSize="22px">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                          </svg>
                        </Box>
                      ) : (
                        <Box boxSize="22px">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                        </Box>
                      )}
                    </Box>
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </>
    );
  }
  