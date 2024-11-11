import { useState } from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  IconButton,
  VStack,
  HStack,
  Skeleton,
  Link as ChakraLink,
  useToast,
} from "@chakra-ui/react";
import DecorativeText from "./DecorativeText";
import fallbackImg from "/icon/WebLogo.png";
import productsData from "../redux/data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, CartItem } from "../redux/cartSlice";
import {
  toggleWishlistItem,
  removeWishlistItem,
  WishlistItem,
} from "../redux/wishlistSlice";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";

export default function NewArrivalsCarousel() {
  const [isLoading, setIsLoading] = useState(true);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();


  const [likedItems, setLikedItems] = useState<boolean[]>(
    new Array(productsData.length).fill(false)
  );

  const handleLikeToggle = (index: number, item: WishlistItem) => {
    const itemInWishlist = wishlistItems.some(
      (wishlistItem: { id: number }) => wishlistItem.id === item.id
    );

    setLikedItems((prevState) => {
      const updatedLikes = [...prevState];
      updatedLikes[index] = !updatedLikes[index];
      return updatedLikes;
    });

    if (itemInWishlist) {
      dispatch(removeWishlistItem(item.id));
      toast({
        title: "Removed from Wishlist",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
        containerStyle: {
          fontFamily: "Nunito, sans-serif",
        },
      });
    } else {
      dispatch(toggleWishlistItem(item));
      toast({
        title: "Added to Wishlist",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
        containerStyle: {
          fontFamily: "Nunito, sans-serif",
        },
      });
    }
  };

  setTimeout(() => setIsLoading(false), 1000);

  const handleAddToCart = (item: CartItem) => {
    const existingItem = cartItems.find(
      (cartItem: CartItem) => cartItem.id === item.id
    );

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
          fontFamily: "Nunito, sans-serif",
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
          fontFamily: "Nunito, sans-serif",
        },
      });
    }
  };

  return (
    <>
      <DecorativeText />
      <VStack w="100%" pb={6} pl={2}>
        <Flex overflowX="auto" w="100%" css={{ scrollbarWidth: "none" }}>
          {productsData.map((item, index) => (
            <Box
              key={index}
              bg="#f8f8f8"
              borderRadius="md"
              overflow="hidden"
              flexShrink={0}
              w={{ base: "160px", md: "190px", lg: "210px", xl: "250px" }}
              mr={2}
              position="relative"
            >
              <ChakraLink>
                <Skeleton isLoaded={!isLoading}>
                  <Image
                    src={item.src}
                    alt={item.label}
                    fallbackSrc={fallbackImg}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    borderRadius="lg"
                    bg="#d8dad3"
                    boxShadow="md"
                onClick={() => navigate(Routes.ProductPage, { state: { product: item } })}
                  />
                </Skeleton>
              </ChakraLink>
              <VStack p={1} align="start">
                <Skeleton isLoaded={!isLoading}>
                  <Text
                    fontSize={{
                      base: "13px",
                      md: "20px",
                      lg: "22px",
                    }}
                    fontWeight="400"
                    noOfLines={1}
                  >
                    {item.label}
                  </Text>
                </Skeleton>

                <Skeleton isLoaded={!isLoading}>
                  <Text
                    fontSize={{
                      base: "12px",
                      md: "15px",
                      lg: "16px",
                    }}
                    color="gray.600"
                    noOfLines={1}
                  >
                    {item.description}
                  </Text>
                </Skeleton>

                <Flex
                  w={"100%"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Skeleton isLoaded={!isLoading}>
                    <Text
                      color="#2d6a4f"
                      fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                      fontWeight="bold"
                    >
                      ₦{item.price}
                    </Text>
                  </Skeleton>

                  <HStack>
                    <Skeleton isLoaded={!isLoading}>
                      <IconButton
                        w={"10px"}
                        h={"20px"}
                        aria-label="Like Item"
                        icon={
                          likedItems[index] ? (
                            <Box
                              boxSize={{ base: "19px", md: "21px", lg: "24px" }}
                              cursor="pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                              </svg>
                            </Box>
                          ) : (
                            <Box
                              boxSize={{ base: "19px", md: "21px", lg: "24px" }}
                              cursor="pointer"
                            >
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
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                />
                              </svg>
                            </Box>
                          )
                        }
                        onClick={() => handleLikeToggle(index, item)}
                        variant="black"
                        colorScheme="teal"
                        _hover={{ color: "#2f3e46" }}
                        transition="900ms"
                      />
                    </Skeleton>

                    <Skeleton isLoaded={!isLoading}>
                      <IconButton
                        w={"10px"}
                        h={"20px"}
                        aria-label="Add to Cart"
                        ml={{ base: "-15px", lg: "-1" }}
                        onClick={() => handleAddToCart(item)}
                        cursor={"pointer"}
                        icon={
                          <Box
                            boxSize={{ base: "19px", md: "21px", lg: "24px" }}
                            cursor="pointer"
                          >
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
                        }
                        variant="ghost"
                        colorScheme="black"
                      />
                    </Skeleton>
                  </HStack>
                </Flex>
              </VStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </>
  );
}
