import {
  Box,
  Button,
  Text,
  Heading,
  Container,
  Flex,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Img1 from "/Products/sideBag.jpg";
import Img2 from "/Products/shoe.jpg";
import Img3 from "/Products/Sneaker.jpg";
import Img4 from "/Products/faceCap.jpg";
import LOGO from "/icon/GoldpurpIcon.png";
import { useNavigate } from "react-router-dom";
// import { Routes } from "../routes/baseRoutes";

const productLists = [
  {
    src: Img1,
    title: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    total: "24,999.99",
    details:
      "In a constantly changing fashion environment, it's vital to keep pace with the latest tendencies and blaze new trails.",
  },
  {
    src: Img2,
    title: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    total: "24,999.99",
    details:
      "In a constantly changing fashion environment, it's vital to keep pace with the latest tendencies and blaze new trails.",
  },
  {
    src: Img3,
    title: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    total: "24,999.99",
    details:
      "In a constantly changing fashion environment, it's vital to keep pace with the latest tendencies and blaze new trails.",
  },
  {
    src: Img4,
    title: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    total: "24,999.99",
    details:
      "In a constantly changing fashion environment, it's vital to keep pace with the latest tendencies and blaze new trails.",
  },
];

export default function Cart() {
  const [hasItems, _setHasItems] = useState(productLists.length > 0);
  const [quantities, setQuantities] = useState(productLists.map(() => 1));

  const handleIncrement = (index: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  const handleDecrement = (index: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index && qty > 1 ? qty - 1 : qty))
    );
  };

  const handleCheckout = () => {
    navigate("#", { replace: true });
  };

  const navigate = useNavigate();

  return (
    <Container
      maxW="container.lg"
      pb={10}
      px={0}
      display="flex"
      flexDirection="column"
    >
      <Flex
        alignItems="center"
        gap={2}
        mb={4}
        p={4}
        bg="#ffffffea"
        boxShadow="md"
        position="fixed"
        top={0}
        left={{ base: 0, md: "13%", lg: "34.5%", xl: "60%" }}
        right={0}
        zIndex={9}
      >
        <Flex alignItems="center">
          <Heading as="h1" fontSize="25px">
            Cart
          </Heading>
          <Box w="30px" ml={2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
          </Box>
        </Flex>

        <Box
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          maxW="100px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={LOGO} alt="LOGO" objectFit="cover" />
        </Box>
      </Flex>

      {hasItems ? (
        <Flex flexDirection={"column"} pt={"60px"}>
          {productLists.map((productList, index) => (
            <Flex key={index} py={4} borderBottom={"1px solid #adadad48"}>
              <Box flex={"0.3"} display={"flex"} justifyContent={"center"}>
                <Image
                  src={productList.src}
                  alt={productList.title}
                  objectFit="cover"
                  h={"130px"}
                />
              </Box>

              <Flex flexDirection={"column"} pl={3} flex={"0.7"}>
                <Text fontSize={{ base: "16px", lg: "18px" }} noOfLines={1}>
                  {productList.title}
                </Text>

                <Text
                  color="#9d2226"
                  fontSize={{ base: "10px", lg: "14px" }}
                  mt={1}
                  noOfLines={3}
                >
                  {productList.details}
                </Text>
                <Flex mt={3} align="center" justify="space-between">
                  <Flex align="center">
                    <Button onClick={() => handleDecrement(index)} size="sm">
                      -
                    </Button>
                    <Text mx={4} fontSize={"13px"}>
                      {quantities[index]}
                    </Text>
                    <Button onClick={() => handleIncrement(index)} size="sm">
                      +
                    </Button>
                  </Flex>

                  <Text
                    as="span"
                    color="#386648"
                    fontSize={{ base: "13px", lg: "15px" }}
                  >
                    # {productList.total}
                  </Text>
                </Flex>
              </Flex>

              <Box boxSize="25px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  color="red"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Box>
            </Flex>
          ))}

          <Flex flexDirection={"column"} mt={4}>
            <HStack justify="space-between" pb={2}>
              <Text>Total Price</Text>
              <Text fontWeight="500">₦430,000.90</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Delivery Fee</Text>
              <Text fontWeight="500">₦2,050.00</Text>
            </HStack>
            <Button
              colorScheme="green"
              mt={8}
              w="100%"
              py={6}
              alignSelf={"center"}
              boxShadow={"1px 0px 3px 1px #403b3b55"}
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Flex>
        </Flex>
      ) : (
        <Flex
          justifyContent={"center"}
          flexDirection="column"
          alignItems="center"
          pt={"120px"}
        >
          <Heading as="h3" size="md" fontWeight="300" mb={4}>
            Your cart has no items.
          </Heading>

          <Text textAlign="center" mb={4} fontWeight="900" maxW="300px">
            Already have an account? Sign in to view your cart.
          </Text>

          <Button variant="outline" colorScheme="gray" mb={4}>
            Best Sellers
          </Button>
          <Button variant="outline" colorScheme="gray" mb={4}>
            Login / Sign up
          </Button>
        </Flex>
      )}
    </Container>
  );
}
