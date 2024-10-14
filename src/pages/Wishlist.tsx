import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  HStack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import Img1 from "../../public/Products/Sneaker.jpg";
import Img2 from "../../public/Products/shoe.jpg";
import Img3 from "../../public/Products/shade.jpg";
import Img4 from "../../public/Products/sideBag.jpg";
import RelatedChoice from "../components/RelatedChoice";
import { PiHandbagThin } from "react-icons/pi";

export default function Wishlist() {
  const _images = [
    {
      src: Img1,
      hashtag: "Sold",
    },
    {
      src: Img2,
      hashtag: "Sold",
    },
    {
      src: Img3,
      hashtag: "Sold",
    },
    {
      src: Img4,
      hashtag: "Sold",
    },
  ];

  const images = [..._images, ..._images];

  const wishlist = [
    {
      src: Img1,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img2,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },
    {
      src: Img3,
      label: "Crosses Cargo Sweatpant - Olive",
      price: "41,459.99",
      oldPrice: "58,050.00",
      bonus: "10% Off On ₦50,000+ Orders!",
    },

  ];

  return (
    <Container maxW="container.xl" pt={{ base: "50px", md: "70px", lg: "90px" }} px="4">
      {wishlist.length === 0 ? (
        <>
          <Flex alignItems="center" justifyContent={"center"} pt={3}>
            <Heading as="h1" fontSize="20px">
              WishList

            </Heading>
            <Box w="20px" ml={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </Box>
          </Flex>

          <VStack spacing="5" mt="30px" w="full">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={4}
            >
              <Heading as="h3" size="md" fontWeight="300" mb={4}>
                Your wishlist is empty
              </Heading>

              <Text textAlign="center" fontWeight="900" maxW="300px">
                START WITH ONE OF THESE TOP SELLERS!
              </Text>
            </Box>

            <Box w="100%" mb="10px" overflow="hidden" py="5">
              <RelatedChoice />

              <Box w="400%" mt={12}>
                <HStack
                  spacing="10px"
                  animation="scroll 20s linear infinite"
                  sx={{
                    "@keyframes scroll": {
                      "0%": { transform: "translateX(0%)" },
                      "100%": { transform: "translateX(-50%)" },
                    },
                  }}
                >
                  {images.map((e, i) => (
                    <Box
                      key={i}
                      position="relative"
                      border="1px solid #142b21b8"
                      borderRadius="10px"
                      overflow="hidden"
                      bg={"#f8f8f8"}
                      w="100%"
                      h={"100%"}
                    >
                      <Image src={e.src} alt={"img"} objectFit="cover" />

                      <VStack
                        position="absolute"
                        right="-110px"
                        top="10px"
                        w="80%"
                        textAlign="center"
                        transform="translate(-50%, 0%)"
                        zIndex="2"
                      >
                        <Text
                          borderRadius={4}
                          bg={"#a44a3f"}
                          p={"0 4px"}
                          color={"#ffffff"}
                          fontWeight="500"
                        >
                          {e.hashtag}
                        </Text>
                      </VStack>

                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        bg="rgba(0, 0, 0, 0.1)"
                        zIndex="0"
                      />
                    </Box>
                  ))}
                </HStack>
              </Box>
            </Box>
          </VStack>
        </>
      ) : (
        <Box
          pb={12}
          px={2}
          w="100%"
          overflow="hidden"
          letterSpacing="normal"
          fontFamily="Nunito, sans-serif"
        >
          <Flex alignItems="center" justifyContent={"center"} pt={3}>
            <Heading as="h1" fontSize="20px">
              WishList

            </Heading>
            <Box w="20px" ml={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </Box>
          </Flex>

          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={2} pt={6}>
            {wishlist.map((item, itemIndex) => (
              <Box
                key={itemIndex}
                bg="#e3e7eb"
                border="1px solid #e2e6e9"
                cursor="pointer"
                position={"relative"}
              >
                <Image src={item.src} alt="image" objectFit="cover" />
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
                    fontSize={{ base: "12px", md: "15px", lg: "17px" }}
                  >
                    {item.label}
                  </Text>
                  <Heading
                    as="h5"
                    size="sm"
                    color="#386648"
                    mt={1}
                    fontSize={{ base: "13px", md: "16px", lg: "18px" }}
                  >
                    ₦{item.price}
                    <Text
                      as="span"
                      color="#780000"
                      textDecoration="line-through"
                      ml={2}
                      fontWeight={"400"}
                      fontSize={{ base: "11px", md: "13px", lg: "15px" }}
                    >
                      ₦{item.oldPrice}
                    </Text>
                  </Heading>
                  <Text
                    color="#9d2226"
                    fontSize={{ base: "9px", md: "13px", lg: "15px" }}
                    mt={"5px"}
                  >
                    {item.bonus}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Container>
  );
}
