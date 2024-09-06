import { Box, Button, Text, Heading, Container, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import Img1 from "/Products/sideBag.jpg";
import Img2 from "/Products/shoe.jpg";
import Img3 from "/Products/Sneaker.jpg";
import Img4 from "/Products/faceCap.jpg";

const productLists = [
  {
    src: Img1,
    title: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    total: "24,999.99",
    details:
      "In a constantly changing fashion environment, it's vital to keep pace with the latest tendencies and blaze new trails, which is one of our top priorities.",
  },
  {
    src: Img2,
    title: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    total: "24,999.99",
    details:
      "In a constantly changing fashion environment, it's vital to keep pace with the latest tendencies and blaze new trails, which is one of our top priorities.",
  },
  {
    src: Img3,
    title: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    total: "24,999.99",
    details:
      "In a constantly changing fashion environment, it's vital to keep pace with the latest tendencies and blaze new trails, which is one of our top priorities.",
  },
  {
    src: Img4,
    title: "Los Angeles Palm Trees Oversized Short Sleeve Tee - Charcoal",
    price: "24,999.99",
    oldPrice: "33,000.00",
    total: "24,999.99",
    details:
      "In a constantly changing fashion environment, it's vital to keep pace with the latest tendencies and blaze new trails, which is one of our top priorities.",
  },
];

export default function Cart() {
  const [hasItems, setHasItems] = useState(productLists.length > 0);
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

  return (
    <Container maxW="container.lg" pb={10} pt={"100px"} display="flex" flexDirection="column">
      <Flex alignItems={"center"} mb={6} gap={2}>
        <Heading as="h1" fontSize={"30px"}>
          Cart
        </Heading>
        <Box w={"30px"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </Box>
      </Flex>

      {hasItems ? (
        productLists.map((productList, index) => (
          <Flex
            key={index}
            h={"170px"}
            py={2}
            borderBottom={"1px solid #adadad48"}
            mb={2}
          >
            <Box flex={"0.3"} display={"flex"} justifyContent={"center"}>
              <Image
                src={productList.src}
                alt={productList.title}
                objectFit="cover"
                h={"130px"}
              />
            </Box>

            <Flex flexDirection={"column"} pl={2} flex={"0.7"}>
              <Text fontSize={{ base: "16px", lg: "18px" }} noOfLines={1}>
                {productList.title}
              </Text>
              <Heading
                as="h5"
                size="sm"
                color="#386648"
                mt={1}
                fontSize={{ base: "14px", lg: "18px" }}
              >
                {productList.price}
                <Text
                  as="span"
                  color="#780000"
                  textDecoration="line-through"
                  ml={2}
                  fontSize={{ base: "9px", lg: "13px" }}
                >
                  {productList.oldPrice}
                </Text>
              </Heading>
              <Text
                color="#9d2226"
                fontSize={{ base: "10px", lg: "14px" }}
                mt={1}
                noOfLines={3}
              >
                {productList.details}
              </Text>
              <Flex mt={2} align="center" justify="space-between">
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
                  fontSize={{ base: "12px", lg: "15px" }}
                >
                  {productList.total}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ))
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center" minH="500px" mt={6}>
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
        </Box>
      )}
    </Container>
  );
}
