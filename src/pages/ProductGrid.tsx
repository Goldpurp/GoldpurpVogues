import { useDispatch, useSelector } from "react-redux";
import { addToCart, CartItem } from "../redux/cartSlice";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Button,
  SimpleGrid,
  Skeleton,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";
import { useState, useEffect } from "react";
import fallbackImg from "/icon/WebLogo.png";
import productsData from "../redux/data";
import {
  removeWishlistItem,
  toggleWishlistItem,
  WishlistItem,
} from "../redux/wishlistSlice";
import { RootState } from "../redux/store";

const sizes = ["S", "M", "L", "XL", "2XL"];

export default function ProductGrid() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const toast = useToast();

  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const [visibleProducts, setVisibleProducts] = useState((columns || 2) * 2);

  const [activeColors, setActiveColors] = useState<{
    [id: number]: string | null;
  }>({});
  const [activeSizes, setActiveSizes] = useState<{
    [id: number]: string | null;
  }>({});

  const [likedItems, setLikedItems] = useState<{ [id: number]: boolean }>({});

  const handleLikeToggle = (id: number, item: WishlistItem) => {
    const itemInWishlist = wishlistItems.some(
      (wishlistItem: { id: number }) => wishlistItem.id === id
    );

    setLikedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));

    if (itemInWishlist) {
      dispatch(removeWishlistItem(id));
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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisibleProducts((columns || 2) * 5);
  }, [columns]);

  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

  const handleAddToCartClick = (id: number) => {
    setExpandedProduct(expandedProduct === id ? null : id);
  };

  const handleAddToCart = (item: CartItem) => {
    const existingItem = cartItems.find(
      (cartItem: CartItem) => cartItem.id === item.id
    );

    if (!existingItem && activeSizes && activeColors) {
      dispatch(addToCart({ ...item, quantity: 1, total: item.price }));
      setExpandedProduct(null);
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

  const colors = [
    { name: "Black", value: "#000000" },
    { name: "Red", value: "#c1121f" },
    { name: "Green", value: "#588157" },
    { name: "Gray", value: "#808080" },
  ];

  const handleColorClick = (id: number, color: string) => {
    setActiveColors((prevColors) => ({
      ...prevColors,
      [id]: prevColors[id] === color ? null : color,
    }));
  };

  const handleSizeClick = (id: number, size: string) => {
    setActiveSizes((prevSizes) => ({
      ...prevSizes,
      [id]: prevSizes[id] === size ? null : size,
    }));
  };

  const handleShowMore = () => {
    setVisibleProducts((prevCount) => prevCount + (columns || 2) * 2);
  };

  return (
    <Box
      px={2}
      py={6}
      w="100%"
      overflow="hidden"
      fontFamily="Nunito, sans-serif"
    >
      <SimpleGrid columns={columns} spacing={3}>
        {productsData.slice(0, visibleProducts).map((item) => (
          <Box
            key={item.id}
            bg="transparent"
            border="1px solid #e2e6e9"
            cursor="pointer"
            position="relative"
          >
            <Skeleton isLoaded={!loading}>
              <Image
                src={item.src}
                alt="image"
                fallbackSrc={fallbackImg}
                objectFit="cover"
                onClick={() =>
                  navigate(Routes.ProductPage, { state: { product: item, id: item.id } })
                }
              />
            </Skeleton>
            <Flex
              position="absolute"
              right={2}
              top={3}
              bg="white"
              p={1}
              borderRadius="full"
            >
              <Box onClick={() => handleLikeToggle(item.id, item)}>
                {likedItems[item.id] ? (
                  <Box boxSize="22px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      color="red"
                    >
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.312 3c2.973 0 5.437 2.322 5.437 5.25 0 3.924-2.438 7.11-4.738 9.257a25.166 25.166 0 0 1-4.244 3.17 15.25 15.25 0 0 1-.383.218l-.022.012-.007.003a.753.753 0 0 1-.653 0z" />
                    </svg>
                  </Box>
                ) : (
                  <Box boxSize="22px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M16.312 3a5.5 5.5 0 0 0-4.312 2.052A5.5 5.5 0 0 0 7.688 3C4.714 3 2.25 5.322 2.25 8.25c0 3.924 2.438 7.11 4.738 9.257a25.18 25.18 0 0 0 4.244 3.17c.132.075.258.142.383.218l.022.012.007.003a.753.753 0 0 0 .653 0l.007-.003.022-.012a15.24 15.24 0 0 0 .383-.218 25.168 25.168 0 0 0 4.244-3.17c2.3-2.147 4.738-5.333 4.738-9.257 0-2.928-2.464-5.25-5.438-5.25z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        color="red"
                      />
                    </svg>
                  </Box>
                )}
              </Box>
            </Flex>

            <Box
              position={"absolute"}
              bottom={0}
              right={"2px"}
              w="28px"
              h="28px"
              fontWeight={900}
              cursor="pointer"
              onClick={() => handleAddToCartClick(item.id)}
            >
              {expandedProduct === item.id ? (
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="24px"
                  height="24px"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
            </Box>

            <Skeleton isLoaded={!loading}>
              {expandedProduct === item.id && (
                <Flex
                  background={"#fff"}
                  py={3}
                  px={2}
                  position={"absolute"}
                  bottom={{ base: "50px", md: "60px" }}
                  right={0}
                  left={0}
                  flexDirection="column"
                  gap={2}
                >
                  <Box w={"full"}>
                    <Flex gap={1} pb={3}>
                      {sizes.map((size) => (
                        <Box
                          key={size}
                          fontSize={{ base: "13px", md: "15px" }}
                          py="2px"
                          px={2}
                          border={
                            activeSizes[item.id] === size
                              ? "2px solid #c4a163"
                              : "1px solid #adb5bd"
                          }
                          cursor="pointer"
                          _hover={{ border: "2px solid #c4a163" }}
                          onClick={() => handleSizeClick(item.id, size)}
                          fontWeight={
                            activeSizes[item.id] === size ? "bold" : "500"
                          }
                        >
                          {size}
                        </Box>
                      ))}
                    </Flex>
                    <Flex>
                      {colors.map((color) => (
                        <Box
                          key={color.value}
                          w="21px"
                          h="21px"
                          bg={color.value}
                          border={
                            activeColors[item.id] === color.name
                              ? "2px solid #c4a163"
                              : "1px solid #adb5bd"
                          }
                          cursor="pointer"
                          mr={2}
                          _hover={{ border: "2px solid #c4a163" }}
                          onClick={() => handleColorClick(item.id, color.name)}
                        />
                      ))}
                    </Flex>

                    <Flex
                      position={"absolute"}
                      bottom={2}
                      right={2}
                      // bg="#1bf2073a"
                      p={1}
                      borderRadius="full"
                    >
                      <Button
                        w="23px"
                        h="23px"
                        p={0}
                        variant={"ghost"}
                        cursor="pointer"
                        onClick={() => handleAddToCart(item)}
                        isDisabled={
                          !activeColors[item.id] || !activeSizes[item.id]
                        }
                        aria-label="Add to Cart"
                        color={
                          !activeColors[item.id] || !activeSizes[item.id]
                            ? "gray.400"
                            : "#000"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width="24px"
                          height="24px"
                          stroke="currentColor"
                          strokeWidth="0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              )}
            </Skeleton>

            <Box p={2} w="full" bg="#fff">
              <Skeleton isLoaded={!loading}>
                <Text
                  noOfLines={1}
                  fontSize={{ base: "12px", md: "15px", lg: "17px" }}
                >
                  {item.label}
                </Text>
              </Skeleton>
              <Skeleton isLoaded={!loading}>
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
                    fontWeight="400"
                    fontSize={{ base: "10px", md: "13px", lg: "15px" }}
                  >
                    ₦{item.oldPrice}
                  </Text>
                </Heading>
              </Skeleton>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      {visibleProducts < productsData.length && (
        <Button
          mt={5}
          colorScheme="green"
          size="lg"
          w="full"
          onClick={handleShowMore}
        >
          Show More
        </Button>
      )}
    </Box>
  );
}
