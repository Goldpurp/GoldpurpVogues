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
  useToast,
} from "@chakra-ui/react";
import RelatedChoice from "../components/RelatedChoice";
import { PiHandbagThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import productsData from "../redux/data";
import { removeWishlistItem } from "../redux/wishlistSlice";
import { addToCart, CartItem } from "../redux/cartSlice";

export default function Wishlist() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.items);
  const toast = useToast();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const handleRemove = (id: number) => {
    dispatch(removeWishlistItem(id));
  };

  const handleAddToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem: CartItem) => cartItem.id === item.id);

    if (!existingItem) {
      const newItem: CartItem = {
        ...item,
        quantity: 1,
        total: item.price,
      };

      dispatch(addToCart(newItem));

      toast({
        title: "Saved to Your Cart",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
        containerStyle: {
          fontFamily: 'Nunito, sans-serif',
        },
      });
    } else {
      toast({
        title: "Already in Cart",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
        containerStyle: {
          fontFamily: 'Nunito, sans-serif',
        },
      });
    }
  };

  return (
    <Container maxW="container.xl" pt={{ base: "50px", md: "70px", lg: "90px" }} px="4">
      {wishlistItems.length === 0 ? (
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
                  {productsData.map((e, i) => (
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
                        left="120px"
                        bottom="10px"
                        w="80%"
                        textAlign="center"
                        transform="translate(-50%, 0%)"
                        zIndex="2"
                      >
                        <Text
                          borderRadius={4}
                          bg={"#a52615"}
                          p={"0 4px"}
                          color={"#ffffff"}
                          fontWeight="500"
                          fontSize={"13px"}
                        >
                          Sold
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
            {wishlistItems.map((item, itemIndex) => (
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
                    cursor={"pointer"}
                    onClick={() => handleAddToCart(item)}
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
                  <Flex flex={1} justifyContent={"space-between"}>

                    <Text
                      color="#9d2226"
                      fontSize={{ base: "9px", md: "13px", lg: "15px" }}
                      mt={"5px"}
                    >
                      {item.bonus}
                    </Text>

                    <Box boxSize="20px" onClick={() => handleRemove(item.id)} cursor="pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="red">
                        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                      </svg>
                    </Box>
                  </Flex>


                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Container>
  );
}
