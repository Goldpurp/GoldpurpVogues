import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  UnorderedList,
  ListItem,
  IconButton,
  useToast,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import ColorSelectComponent from "../components/Color";
import SizeSelectComponent from "../components/Size";
import StarRating from "../components/StarRating";
import RelatedChoice from "../components/RelatedChoice";
import AlsoLike from "../components/AlsoLike";
import ShareButton from "../components/ShareButton";
import SizeChartDrawer from "../components/SizeChart";
import { useLocation, Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeWishlistItem,
  toggleWishlistItem,
  WishlistItem,
} from "../redux/wishlistSlice";
import { useState } from "react";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/cartSlice";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function ProductPage() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const product = state.product;
  const handleLikeToggle = (item: WishlistItem) => {
    const itemInWishlist = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === item.id
    );

    setLike(!like);

    if (itemInWishlist) {
      dispatch(removeWishlistItem(item.id));
      showToast("Removed from Wishlist", "warning");
    } else {
      dispatch(toggleWishlistItem(item));
      showToast("Added to Wishlist", "success");
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      src: product.src,
      label: product.label,
      price: product.price,
      oldPrice: product.oldPrice,
      bonus: product.bonus || "",
      description: product.description,
      quantity: 1,
      total: product.price,
    };

    dispatch(addToCart(cartItem));
    showToast("Added to Cart", "success");
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const showToast = (title: string, status: "success" | "warning") => {
    toast({
      title,
      status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        fontFamily: "Nunito, sans-serif",
      },
    });
  };

  const tabs = ["DETAILS", "DESCRIPTION"];
  const detailsContent = [
    "Available In Olive",
    "Elastic Waistband",
    "Drawstring",
    "100% Polyester",
    "Back Hand Pocket",
    "Cargo Pockets",
    "Left Chest Pocket",
    "Pair With Cargo Zip Up Hoodie",
    "96% Polyester 4% Elastane",
    "Disclaimer: Due To The Specialized Distressing & Wash Process, Each Garment Is Unique.",
    "Imported",
  ];

  return (
    <Flex
      direction="column"
      pt={{ base: "70px", md: "80px", lg: "100px" }}
      pb="50px"
      px={{ base: "", md: 9, lg: "80px" }}
    >

      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
        mb={4}
        pl={{ base: 4, lg: 12 }}
        fontSize={"12px"}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink onClick={handleBackClick}>
            Go back
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink >
            <Text isTruncated maxW="170px">{product.label}</Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex flexDirection={{ base: "column", lg: "row" }}>
        <Flex flex="0.4" px={3}>
          <Box maxW="640px" mx="auto">
            <Image src={product.src} alt={product.label} />
          </Box>
        </Flex>

        <Flex direction="column" flex="0.6" ml={{ lg: 8 }} mt={{ base: 4, lg: 0 }} px={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="15px">{product.label}</Text>
            <ShareButton />
          </Flex>

          <Flex justify="space-between" align="center" pt={3} pb={4}>
            <Text as="h5" color="#386648" fontWeight={600} fontSize="18px">
              ₦{product.price}
              <Text as="span" color="#780000" textDecoration="line-through" ml={6} fontWeight={400} fontSize="13px">
                ₦{product.oldPrice}
              </Text>
            </Text>
          </Flex>

          <ColorSelectComponent />

          <Flex justify="space-between" alignItems="start">
            <SizeSelectComponent />

          </Flex>

          <Flex alignItems="center" flex={1} justifyContent={"space-between"} py={3}>
            <StarRating />
            <SizeChartDrawer />

            {/* <Flex align="center">
              <Button onClick={() => handleDecrement(product.id)}>-</Button>
              <Text mx={4}>{product.quantity}</Text>
              <Button onClick={() => handleIncrement(product.id)}>+</Button>
            </Flex> */}
          </Flex>

          <Flex alignItems="center">
            <Button
              w="full"
              p="23px"
              bg="#2D6A4F"
              borderRadius="10px"
              fontSize="16px"
              fontWeight="600"
              color="#fff"
              _hover={{ background: "#2D6A4F" }}
              cursor="pointer"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
            <Box m={4} w="40px" h="40px" borderRadius="5px" bg="white">
              <IconButton
                w="40px"
                h="40px"
                aria-label="Like Item"
                onClick={() => handleLikeToggle(product)}
                icon={
                  like ? (
                    <Box boxSize="24px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>
                    </Box>
                  ) : (
                    <Box boxSize="24px">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </Box>
                  )
                }
                variant="ghost"
                colorScheme="red"
                border="1px solid #e9ecef"
                _hover={{ bg: "transparent" }}
              />
            </Box>
          </Flex>

          <Tabs mt={4}>
            <TabList>
              {tabs.map((tab, index) => (
                <Tab key={index} _selected={{ color: "#000", fontWeight: "bold", fontSize: "18px", borderColor: "#072115" }} color="black" fontSize="14px">
                  {tab}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              <TabPanel py={2} px={0}>
                <UnorderedList>
                  {detailsContent.map((desc, index) => (
                    <ListItem key={index}>{desc}</ListItem>
                  ))}
                </UnorderedList>
              </TabPanel>
              <TabPanel py={2} px={0}>
                <Text fontSize="14px" color="gray.600">
                  {product.description}
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>

      <RelatedChoice />
      <AlsoLike />
    </Flex>
  );
}
