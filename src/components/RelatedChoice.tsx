import { Box, Image, Text, Flex, VStack, useToast, HStack, IconButton } from "@chakra-ui/react";
import productsData from "../redux/data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, CartItem } from "../redux/cartSlice";
import { Routes } from "../routes/baseRoutes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { RootState } from "../redux/store";
import { removeWishlistItem, toggleWishlistItem, WishlistItem } from "../redux/wishlistSlice";

export default function RelatedChoice() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

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
    <Flex pt={"30px"} flexDirection={"column"} overflowX={"scroll"} cursor={"pointer"}>
      <VStack w="100%" pl={2}>
        <Flex overflowX="scroll" w="100%" css={{ scrollbarWidth: "none" }}>
          {productsData.map((item, index) => (
            <Box
              key={index}
              bg="#f8f8f8"
              borderRadius="md"
              overflow="hidden"
              flexShrink={0}
              w={{ base: "160px", md: "190px", lg: "210px", xl: "250px" }}
              h={{ base: "320px", md: "350px", lg: "390px", xl: "490px" }}
              mr={2}
              position="relative"
            >
              <Image
                src={item.src}
                alt={item.label}
                w="100%"
                objectFit="cover"
                bg="#d8dad35d"
                boxShadow="sm"
                onClick={() => navigate(Routes.ProductPage, { state: { product: item } })}
              />
              <VStack py={4} pl={2} align="start">
                <Text
                  fontSize={{
                    base: "13px",
                    lg: "17px",
                  }}
                  fontWeight="400"
                  noOfLines={1}
                >
                  {item.label}
                </Text>

                <Flex
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                  w={"100%"}
                >
                  <Text
                    color="#2d6a4f"
                    fontSize={{ base: "14px", lg: "18px" }}
                    fontWeight="500"
                  >
                    ₦{item.price}
                  </Text>
                  <HStack>
                    <Box>
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
                    </Box>

                    <Box >
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
                    </Box>
                  </HStack>
                </Flex>
              </VStack>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}
