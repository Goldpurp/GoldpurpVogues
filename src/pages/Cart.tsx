import {
  Box,
  Button,
  Text,
  Heading,
  Container,
  Flex,
  Image,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RelatedChoice from "../components/RelatedChoice";
import { RootState } from "../redux/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { Routes } from "../routes/baseRoutes";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const hasItems = cartItems.length > 0;
  const totalAmount = cartItems.reduce((sum, item) => sum + item.total, 0);

  return (
    <Container
      maxW="container.lg"
      pb={10}
      px={0}
      display="flex"
      flexDirection="column"
    >
      {hasItems ? (
        <Flex
          flexDirection={"column"}
          pt={{ base: "60px", md: "70px", lg: "90px" }}
          px={3}
        >
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

          {cartItems.map((productList, index) => (
            <Flex key={index} py={4} borderBottom={"1px solid #adadad48"}>
              <Box flex={"0.3"} display={"flex"} justifyContent={"center"}>
                <Image
                  src={productList.src}
                  alt={productList.label}
                  objectFit="cover"
                  h={"130px"}
                />
              </Box>

              <Flex flexDirection={"column"} pl={3} flex={"0.7"}>
                <Text fontSize={{ base: "13px", lg: "18px" }} noOfLines={1}>
                  {productList.label}
                </Text>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  fontWeight={"600"}
                  color={"#000"}
                  noOfLines={1}
                >
                  ₦{productList.price}
                </Text>

                <Text
                  color="#9d2226"
                  fontSize={{ base: "10px", lg: "14px" }}
                  mt={1}
                  noOfLines={3}
                >
                  {productList.description}
                </Text>
                <Flex mt={3} align="center" justify="space-between">
                  <Flex align="center">
                    <Button
                      onClick={() => handleDecrement(productList.id)}
                      size="sm"
                      isDisabled={productList.quantity === 1}
                    >
                      -
                    </Button>
                    <Text mx={4} fontSize={"13px"}>
                      {productList.quantity}
                    </Text>
                    <Button
                      onClick={() => handleIncrement(productList.id)}
                      size="sm"
                    >
                      +
                    </Button>
                  </Flex>

                  <Text
                    as="span"
                    color="#386648"
                    fontSize={{ base: "14px", lg: "15px" }}
                    fontWeight={"500"}
                  >
                    ₦{productList.total}
                  </Text>
                </Flex>
              </Flex>

              <Box
                boxSize="20px"
                onClick={() => handleRemove(productList.id)}
                cursor="pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  color="red"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Box>
            </Flex>
          ))}
        </Flex>
      ) : (
        <Flex
          justifyContent={"center"}
          flexDirection="column"
          alignItems="center"
          pt={"120px"}
          px={9}
        >
          <Heading as="h3" size="md" fontWeight="300" mb={4}>
            Your cart has no items.
          </Heading>

          <Text textAlign="center" mb={4} fontWeight="900" maxW="300px">
            Already have an account? Sign in to check your cart items!
          </Text>

          <Button
            colorScheme={"green"}
            size={"lg"}
            w={"full"}
            cursor={"pointer"}
            boxShadow="1px 1px 5px 1px #a5a5a5"
            mt={6}
          >
            Sign in
          </Button>
        </Flex>
      )}

      <RelatedChoice />

      {hasItems ? (
        <>
          <Divider py={4} />
          <Flex bg={"#fff"} flexDirection={"column"} p={"15px 15px 0px 15px"}>
            <HStack justify="space-between" color={"green"} px={1}>
              <Text fontWeight={"medium"}>Discount:</Text>
              <Text fontWeight={"bold"}>5%</Text>
            </HStack>
            <HStack justify="space-between" color={"green"} px={1}>
              <Text fontWeight={"medium"}>Total:</Text>
              <Text fontWeight={"bold"}>₦{totalAmount}</Text>
            </HStack>
            <Button
              mt={5}
              colorScheme={"green"}
              size={"lg"}
              w={"full"}
              onClick={() => navigate(Routes.CheckoutBilling)}
            >
              Checkout ₦{totalAmount}
            </Button>
          </Flex>
        </>
      ) : (
        <Text></Text>
      )}
    </Container>
  );
}
