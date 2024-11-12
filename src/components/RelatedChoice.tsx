import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Image,
  Text,
  Flex,
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

export default function RelatedChoice() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const toast = useToast();

  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const [visibleProducts, setVisibleProducts] = useState((columns || 2) * 2);

  const [activeColors, setActiveColors] = useState<{
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

  return (
    <Box
      px={2}
      py={6}
      w="100%"
      overflow="hidden"
      fontFamily="Nunito, sans-serif"
    >
      <Flex justifyContent={"center"} alignContent={"center"} pb={9}>
        <Text fontSize={"18px"}>RELATED ITEMS</Text>
      </Flex>


      <Flex overflowX="auto" w="100%" css={{ scrollbarWidth: "none" }}>

        {productsData.slice(0, visibleProducts).map((item) => (
          <Box
            key={item.id}
            bg="#f8f8f8"
            borderRadius="md"
            overflow="hidden"
            flexShrink={0}
            w={{ base: "160px", md: "190px", lg: "210px", xl: "250px" }}
            mr={2}
            position="relative"
          >
            <Skeleton isLoaded={!loading}>
              <Image
                src={item.src}
                alt="image"
                fallbackSrc={fallbackImg}
                objectFit="cover"
                onClick={() =>
                  navigate(Routes.ProductPage, { state: { product: item } })
                }
              />
            </Skeleton>
            <Flex
              position="absolute"
              right={2}
              bottom={0}
              bg="#f8f8f8"
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
                      width={"25px"}
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

            <Box p={1} w="full" bg="#f8f8f8"
            >
              <Skeleton isLoaded={!loading}>
                <Text
                  noOfLines={1}
                  fontWeight={"500"}
                  fontSize={{ base: "13px", md: "15px", lg: "17px" }}
                >
                  {item.label}
                </Text>
              </Skeleton>
              <Skeleton isLoaded={!loading}>
                <Text
                  color="#386648"
                  fontWeight={"600"}
                  fontSize={{ base: "15px", md: "16px", lg: "18px" }}
                >
                  ₦{item.price}
                </Text>
              </Skeleton>
              <Skeleton isLoaded={!loading}>
                <Flex pt={1}>
                  {colors.map((color) => (
                    <Box
                      key={color.value}
                      w="15px"
                      h="15px"
                      bg={color.value}
                      borderRadius={"50%"}
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
              </Skeleton>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
