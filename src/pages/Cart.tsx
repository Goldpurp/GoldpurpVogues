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
import { useNavigate } from "react-router-dom";
import RelatedChoice from "../components/RelatedChoice";

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
      {hasItems ? (
        <Flex flexDirection={"column"} pt={{base:"50px", md:"70px", lg: "90px"}} px={3}>
          <Flex alignItems="center" justifyContent={"center"}>
            <Heading as="h1" fontSize="20px">
              Cart
            </Heading>
            <Box w="20px" ml={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
            </Box>
          </Flex>

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

              <Box boxSize="20px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  color="red"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Box>
            </Flex>
          ))}

          <Flex bg={"#fff"} flexDirection={"column"} p={"15px 15px 0px 15px"}>
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
          px={1}
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

          <Flex direction={{ base: "column", lg: "column" }} maxW={"100%"} pt={3}>
            <RelatedChoice />
          </Flex>
        </Flex>
      )}
    </Container>
  );
}
