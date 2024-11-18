import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Image,
  FormControl,
  FormLabel,
  Input,
  Button,
  Icon,
  RadioGroup,
  Radio,
  Checkbox,
} from "@chakra-ui/react";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

export default function Checkout() {
  const [selectedShipping, setSelectedShipping] = useState("delivery");
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Calculate the total price of the items
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Check if the number of items is 5 or more to apply the discount
  // const discount = cartItems.length >= 5 ? totalPrice * 0.05 : 0;

  // Calculate the final price after applying the discount
  // const finalPrice = totalPrice - discount;

  // const total = cartItems.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );

  const shippingCost = selectedShipping === "delivery" ? 1000 : 0;

  const finalCost = totalPrice + shippingCost;

  const handlePayment = () => {

    dispatch(clearCart());

    navigate("/confirmation");
  };

  return (
    <Box position={"relative"} minH="100vh" pt={{ base: "45px", md: "50px" }} px={{ md: "200px" }}>
      <Flex direction={["column", "row"]} gap={8}>
        <Box flex="1" bg="white" p={6} borderRadius="lg" shadow="sm">

          {/* <Flex display={"flex"} w={"fit-content"} alignItems={"center"} justifyContent={"left"} mb={2} gap={1} cursor={"pointer"} onClick={handleBackClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width={"20px"}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
              />
            </svg>
            <Text>
              Back
            </Text>
          </Flex> */}
          <Heading as="h2" size="md" mb={4}>
            Payment Details
          </Heading>
          <Text fontSize="13px" maxW={"85%"} color="gray.600" mb={6}>
            Complete your purchase item by providing your payment details order.
          </Text>

          <VStack spacing={4} align="stretch">
            <Flex
              justifyContent={"space-between"}
              alignItems={"left"}
              pb={2}
              gap={4}
            >
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Card Information
              </Text>

              <HStack spacing={2}>
                <Icon as={FaCcVisa} color="blue.500" fontSize={"27px"} />
                <Icon as={FaCcMastercard} color="red.500" fontSize={"27px"} />
                <Icon as={FaCcAmex} color="green.500" fontSize={"27px"} />
              </HStack>
            </Flex>

            <Box display={"flex"} flexDirection={"column"} gap={3}>
              <FormControl
                id="email"
                w={"full"}
                border={"1px solid #000"}
                borderRadius="10px"
                bg={"#b7e4c7"}
              >
                <FormLabel
                  fontSize="13px"
                  fontWeight="500"
                  pl={4}
                  mb={0}
                  py={"3px"}
                >
                  Email Address
                </FormLabel>
                <Input
                  type="text"
                  placeholder="goldpurp@example.com"
                  h="48px"
                  fontSize="13px"
                  borderRadius="10px"
                  border={"none"}
                  bg="#fff"
                  p="7px 45px 7px 12px"
                  _focus={{
                    boxShadow: "none",
                  }}
                />
              </FormControl>

              <FormControl
                id="cardName"
                w={"full"}
                border={"1px solid #000"}
                borderRadius="10px"
                bg={"#b7e4c7"}
              >
                <FormLabel
                  fontSize="13px"
                  fontWeight="500"
                  pl={4}
                  mb={0}
                  py={"3px"}
                >
                  Card Name
                </FormLabel>
                <Input
                  type="text"
                  placeholder="GoldPurp Vogue"
                  h="48px"
                  fontSize="13px"
                  borderRadius="10px"
                  border={"none"}
                  bg="#fff"
                  p="7px 45px 7px 12px"
                  _focus={{
                    boxShadow: "none",
                  }}
                />
              </FormControl>

              <FormControl
                id="cardNumber"
                w={"full"}
                border={"1px solid #000"}
                borderRadius="10px"
                bg={"#b7e4c7"}
              >
                <FormLabel
                  fontSize="13px"
                  fontWeight="500"
                  pl={4}
                  mb={0}
                  py={"3px"}
                >
                  Card Number
                </FormLabel>
                <Input
                  type="text"
                  placeholder="5330 2345 8390 7219"
                  h="48px"
                  fontSize="13px"
                  borderRadius="10px"
                  border={"none"}
                  bg="#fff"
                  p="7px 45px 7px 12px"
                  _focus={{
                    boxShadow: "none",
                  }}
                />
              </FormControl>

              <Flex gap={6}>
                <FormControl
                  id="expirationDate"
                  w={"full"}
                  border={"1px solid #000"}
                  borderRadius="10px"
                  bg={"#b7e4c7"}
                >
                  <FormLabel
                    fontSize="13px"
                    fontWeight="500"
                    pl={4}
                    mb={0}
                    py={"3px"}
                  >
                    Expiration Date
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="04/27"
                    h="48px"
                    fontSize="13px"
                    borderRadius="10px"
                    border={"none"}
                    bg="#fff"
                    p="7px 45px 7px 12px"
                    _focus={{
                      boxShadow: "none",
                    }}
                  />
                </FormControl>

                <FormControl
                  id="cvv"
                  w={"full"}
                  border={"1px solid #000"}
                  borderRadius="10px"
                  bg={"#b7e4c7"}
                >
                  <FormLabel
                    fontSize="13px"
                    fontWeight="500"
                    pl={4}
                    mb={0}
                    py={"3px"}
                  >
                    Cvv
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="027"
                    h="48px"
                    fontSize="13px"
                    borderRadius="10px"
                    border={"none"}
                    bg="#fff"
                    p="7px 45px 7px 12px"
                    _focus={{
                      boxShadow: "none",
                    }}
                  />
                </FormControl>
              </Flex>
            </Box>

            <Checkbox
              isChecked={useShippingAsBilling}
              onChange={(e) => setUseShippingAsBilling(e.target.checked)}
            >
              Use shipping address as billing address
            </Checkbox>

            {!useShippingAsBilling && (
              <Box display={"flex"} flexDirection={"column"} gap={3}>
                <Divider />
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Billing Information
                </Text>

                <FormControl
                  id="name"
                  w={"full"}
                  border={"1px solid #000"}
                  borderRadius="10px"
                  bg={"#b7e4c7"}
                >
                  <FormLabel
                    fontSize="13px"
                    fontWeight="500"
                    pl={4}
                    mb={0}
                    py={"3px"}
                  >
                    Full Name
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="Goldpurp Vogue"
                    h="48px"
                    fontSize="13px"
                    borderRadius="10px"
                    border={"none"}
                    bg="#fff"
                    p="7px 45px 7px 12px"
                    _focus={{
                      boxShadow: "none",
                    }}
                  />
                </FormControl>

                <FormControl
                  id="address"
                  w={"full"}
                  border={"1px solid #000"}
                  borderRadius="10px"
                  bg={"#b7e4c7"}
                >
                  <FormLabel
                    fontSize="13px"
                    fontWeight="500"
                    pl={4}
                    mb={0}
                    py={"3px"}
                  >
                    Address
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="01 Ibzc Ave Sagamu ogun Ng"
                    h="48px"
                    fontSize="13px"
                    borderRadius="10px"
                    border={"none"}
                    bg="#fff"
                    p="7px 45px 7px 12px"
                    _focus={{
                      boxShadow: "none",
                    }}
                  />
                </FormControl>

                <FormControl
                  id="number"
                  w={"full"}
                  border={"1px solid #000"}
                  borderRadius="10px"
                  bg={"#b7e4c7"}
                >
                  <FormLabel
                    fontSize="13px"
                    fontWeight="500"
                    pl={4}
                    mb={0}
                    py={"3px"}
                  >
                    Phone Number
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="2348109675377"
                    h="48px"
                    fontSize="13px"
                    borderRadius="10px"
                    border={"none"}
                    bg="#fff"
                    p="7px 45px 7px 12px"
                    _focus={{
                      boxShadow: "none",
                    }}
                  />
                </FormControl>

                <FormControl
                  id="city"
                  w={"full"}
                  border={"1px solid #000"}
                  borderRadius="10px"
                  bg={"#b7e4c7"}
                >
                  <FormLabel
                    fontSize="13px"
                    fontWeight="500"
                    pl={4}
                    mb={0}
                    py={"3px"}
                  >
                    City
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder="Sagamu"
                    h="48px"
                    fontSize="13px"
                    borderRadius="10px"
                    border={"none"}
                    bg="#fff"
                    p="7px 45px 7px 12px"
                    _focus={{
                      boxShadow: "none",
                    }}
                  />
                </FormControl>

                <Flex gap={6}>
                  <FormControl
                    id="state"
                    w={"full"}
                    border={"1px solid #000"}
                    borderRadius="10px"
                    bg={"#b7e4c7"}
                  >
                    <FormLabel
                      fontSize="13px"
                      fontWeight="500"
                      pl={4}
                      mb={0}
                      py={"3px"}
                    >
                      State
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="Ogun"
                      h="48px"
                      fontSize="13px"
                      borderRadius="10px"
                      border={"none"}
                      bg="#fff"
                      p="7px 45px 7px 12px"
                      _focus={{
                        boxShadow: "none",
                      }}
                    />
                  </FormControl>
                  <FormControl
                    id="zip"
                    w={"full"}
                    border={"1px solid #000"}
                    borderRadius="10px"
                    bg={"#b7e4c7"}
                  >
                    <FormLabel
                      fontSize="13px"
                      fontWeight="500"
                      pl={4}
                      mb={0}
                      py={"3px"}
                    >
                      Zip Code
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="110221"
                      h="48px"
                      fontSize="13px"
                      borderRadius="10px"
                      border={"none"}
                      bg="#fff"
                      p="7px 45px 7px 12px"
                      _focus={{
                        boxShadow: "none",
                      }}
                    />
                  </FormControl>
                </Flex>
              </Box>
            )}
          </VStack>

          <Divider my={6} />

          <Box>
            <Text fontSize="sm" fontWeight="medium" mb={2}>
              Available Shipping Method
            </Text>
            <RadioGroup onChange={setSelectedShipping} value={selectedShipping}>
              <VStack
                flexDirection={{ base: "column", md: "column" }}
                gap={{ base: "10px", md: "20px" }}
                align="stretch"
              >
                <Radio value="pickUp" size="md" colorScheme="blue">
                  <Flex justify="space-between" w="full">
                    <Box>
                      <Text fontWeight="medium">Store Pick Up</Text>
                      <Text fontSize="sm" color="gray.500">
                        Ogun State Ng
                      </Text>
                    </Box>
                  </Flex>
                </Radio>

                <Radio value="delivery" size="md" colorScheme="blue">
                  <Flex justify="space-between" w="full">
                    <Box mr={"50px"}>
                      <Text fontWeight="medium">Home Delivery</Text>
                      <Text fontSize="sm" color="gray.500">
                        Delivery: 1-5 working days
                      </Text>
                    </Box>
                    <Text fontWeight="semibold">    ₦
                      {Number(shippingCost.toFixed(2)).toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}</Text>
                  </Flex>
                </Radio>
              </VStack>
            </RadioGroup>
          </Box>
        </Box>

        <Box flex="1" p={6} borderRadius="lg" shadow="sm">
          <Heading as="h2" size="md" mb={4}>
            Summary Order
          </Heading>
          <Text fontSize="sm" color="gray.600" mb={6}>
            Check your item and select your shipping for a better experience
            order item.
          </Text>

          <VStack
            spacing={4}
            align="stretch"
            maxH={{ base: "300px", md: "500px" }}
            overflowY={"scroll"}
          >
            {cartItems.map((item) => (
              <HStack key={item.id} spacing={4}>
                <Box flex={"0.3"} display={"flex"} justifyContent={"center"}>


                  <Link to={`/products/${item.label}`}>
                    <Image
                      src={item.src[0]}
                      alt={item.label}
                      fallbackSrc="/icon/WebLogo.png"
                      objectFit="cover"
                      cursor={"pointer"}
                      h={"130px"}

                    />
                  </Link>
                </Box>

                <Box flex="1">
                  <Text fontWeight="400" fontSize={"12px"}>
                    {item.label}
                  </Text>
                  <Text fontSize="md" fontWeight="500" color={"#386648"}>
                    ₦
                    {Number(item.price.toFixed(2)).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </Text>

                  <Flex fontSize={"15px"} alignItems={"center"}>
                    <Text fontWeight={"200"}>Color:</Text>
                    <Box
                      ml={2}
                      borderRadius="5px"
                      color="#100f0f"
                      fontWeight={"500"}
                    >
                      {item.selectedColor}
                    </Box>
                  </Flex>

                  <Flex fontSize={"15px"} alignItems={"center"}>
                    <Text fontWeight={"200"}> Size:</Text>
                    <Text ml={2} fontSize="15px" fontWeight={"600"}>
                      {item.selectedSize}
                    </Text>
                  </Flex>
                </Box>
              </HStack>
            ))}
          </VStack>

          <Divider my={4} />

          <VStack align="stretch">
            <HStack justify="space-between">
              <Text>Sub-total</Text>
              <Text fontWeight="medium">    ₦
                {Number(totalPrice.toFixed(2)).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}</Text>
            </HStack>
            <HStack justify="space-between">
              <Text>Shipping</Text>
              <Text fontWeight="medium">    ₦
                {Number(shippingCost.toFixed(2)).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}</Text>
            </HStack>
            <HStack justify="space-between" fontSize="lg">
              <Text>Total</Text>
              <Text fontWeight="bold">     ₦
                {Number(finalCost.toFixed(2)).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}</Text>
            </HStack>
          </VStack>

          <Button mt={5} colorScheme={"green"} size={"lg"} w={"full"} cursor={"pointer"} onClick={handlePayment}>
            Pay     ₦
            {Number(finalCost.toFixed(2)).toLocaleString("en-US", {
              minimumFractionDigits: 2,
            })}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

