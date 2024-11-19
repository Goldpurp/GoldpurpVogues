import {
  Box,
  Button,
  Text,
  Heading,
  Container,
  Flex,
  Image,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { Routes } from "../routes/baseRoutes";
import { productsDatas } from "../redux/productData";
import ShowCaseProductCard from "../components/ShowCaseProductCard";
import { useState } from "react";
import { ProductInterface } from "../redux/productSlice";
import { removeWishlistItem, toggleWishlistItem } from "../redux/wishlistSlice";

export default function Cart() {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});


  const handleLikeToggle = (id: number, item: ProductInterface) => {
    const isInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === id);


    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));


    dispatch(isInWishlist ? removeWishlistItem(id) : toggleWishlistItem(item));
    toast({
      title: isInWishlist ? "Removed from Wishlist" : "Added to Wishlist",
      status: isInWishlist ? "warning" : "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

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
  // const totalWithoutDiscount = useSelector(
  //   (state: RootState) => state.cart.totalWithoutDiscount
  // );
  const finalTotal = useSelector((state: RootState) => state.cart.finalTotal);
  const totalItemsCount = useSelector((state: RootState) => state.cart.count);

  const newArrivalProducts = productsDatas.filter(
    (product) => product.collection === "New Arrivals"
  );

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

          {cartItems.map((item, index) => (
            <Flex key={index} py={4} borderBottom={"1px solid #adadad48"}>
              <Box flex={"0.3"} display={"flex"} justifyContent={"center"}>
                <Link to={`/products/${item.label}`}>
                  <Image
                    src={item.src[0]}
                    alt={item.label}
                    objectFit="cover"
                    h={"130px"}
                  />
                </Link>
              </Box>

              <Flex flexDirection={"column"} pl={3} flex={"0.7"}>
                <Text fontSize={{ base: "13px", lg: "18px" }} noOfLines={1}>
                  {item.label}
                </Text>

                <Heading
                  as="h5"
                  size="sm"
                  color="#000"
                  mt={1}
                  fontSize={{ base: "13px", md: "16px", lg: "18px" }}
                >
                  ₦
                  {Number(item.price.toFixed(2)).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                  {item.oldPrice !== 0 && (
                    <Text
                      as="span"
                      color="#780000"
                      textDecoration="line-through"
                      ml={2}
                      fontWeight="400"
                      fontSize={{ base: "10px", md: "13px", lg: "15px" }}
                    >
                      ₦
                      {Number(item.oldPrice?.toFixed(2)).toLocaleString(
                        "en-US",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}
                    </Text>
                  )}
                </Heading>

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

                <Flex mt={3} align="center" justify="space-between">
                  <Flex align="center">
                    <Button
                      onClick={() => handleDecrement(item.id)}
                      size="sm"
                      isDisabled={item.quantity === 1}
                    >
                      -
                    </Button>
                    <Text mx={4} fontSize={"13px"}>
                      {item.quantity}
                    </Text>
                    <Button onClick={() => handleIncrement(item.id)} size="sm">
                      +
                    </Button>
                  </Flex>

                  <Text
                    as="span"
                    color="#386648"
                    fontSize={{ base: "14px", lg: "15px" }}
                    fontWeight={"500"}
                  >
                    ₦
                    {Number(item.total.toFixed(2)).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </Text>
                </Flex>
              </Flex>

              <Button
                bg="#fff"
                _hover={{ background: "none" }}
                _focus={{ boxShadow: "none" }}
                transition="none"
                variant={"ghost"}
                p={"1px"}
                borderRadius="full"
                onClick={() => handleRemove?.(item.id)}
              >
                <Box boxSize="24px">
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
              </Button>
            </Flex>
          ))}
        </Flex>
      ) : (
        <Flex
          justifyContent={"center"}
          flexDirection="column"
          alignItems="center"
          py={"100px"}
          px={2}
          overflow={"hidden"}
        >
          <Heading as="h3" size="md" fontWeight="300" mb={4}>
            Your cart has no items.
          </Heading>

          <Text textAlign="center" mb={4} fontWeight="900" maxW="300px">
            Already have an account? Sign in to check your cart items!
          </Text>

          <Box flex={1}>
            <Button
              mt={2}
              colorScheme="green"
              size="lg"
              px={4}
              w={"full"}
              onClick={() => navigate(Routes.Login)}
            >
              Sign in
            </Button>
          </Box>


          <Box
            pt={9}
            px={2}
            w={"100%"}

          >
            <Text pb={4} fontSize={"20px"}>Explore Our New Arrivals</Text>


            <Flex
              overflowX="scroll"
              css={{
                "::-webkit-scrollbar": { display: "none" },
              }}
            >
              {newArrivalProducts.map((product) => (
                <ShowCaseProductCard
                  key={product.id}
                  product={product}
                  likedItems={likedItems}
                  onLikeToggle={handleLikeToggle}
                  loading={false}
                />
              ))}
            </Flex>
          </Box>
        </Flex>
      )}

      {hasItems ? (
        <>
          <Flex flexDirection={"column"} p={"15px 15px 15px 15px"}>
            <Flex direction={"column"} gap={1}>
              <Flex
                justify="space-between"
                flexDirection="row"
              // borderBottom="1px solid #c7c3c3"
              // mb={5}
              >
                <HStack justify="space-between" color={"green"} px={1}>
                  <Text fontWeight={"300"} color={"#000"}>
                    Total Item(s):
                  </Text>
                  <Text fontWeight={"500"} color={"#000"}>
                    {totalItemsCount}
                  </Text>
                </HStack>
                {/* <HStack justify="space-between" color={"green"} px={1}>
                  <Text fontWeight={"300"} color={"#000"}>
                    Sub-total:
                  </Text>
                  <Text fontWeight={"500"} color={"#000"}>
                    {" "}
                    ₦
                    {Number(totalWithoutDiscount.toFixed(2)).toLocaleString(
                      "en-US",
                      {
                        minimumFractionDigits: 2,
                      }
                    )}
                  </Text>
                </HStack> */}
              </Flex>
              <HStack justify="space-between" color={"green"} px={1}>
                <Text fontWeight={"medium"} color={"#000"}>
                  Total:
                </Text>
                <Text fontWeight={"bold"}>
                  ₦
                  {Number(finalTotal.toFixed(2)).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </Text>
              </HStack>
            </Flex>

            <Button
              mt={5}
              colorScheme={"green"}
              size={"lg"}
              w={"full"}
              onClick={() => navigate(Routes.Checkout)}
            >
              Checkout ₦
              {Number(finalTotal.toFixed(2)).toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </Button>
          </Flex>
        </>
      ) : (
        <Text></Text>
      )}

      {/* <RelatedChoice /> */}
    </Container>
  );
}
