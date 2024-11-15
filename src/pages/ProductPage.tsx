import {
  Box,
  Flex,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  UnorderedList,
  ListItem,
  IconButton,
  useToast,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import SizeSelectComponent from "../components/Size";
import StarRating from "../components/StarRating";
import RelatedChoice from "../components/RelatedChoice";
import ShareButton from "../components/ShareButton";
import SizeChartDrawer from "../components/SizeChart";
import { useLocation, Link as RouterLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItem, toggleWishlistItem } from "../redux/wishlistSlice";
import { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { addToCart } from "../redux/cartSlice";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ColorSelectComponent from "../components/Color";
import { ProductInterface } from "../redux/productInterface";
import ProducImageCarousel from "../components/ProducImageCarousel";
import { fetchProductsSuccess } from "../redux/productSlice";
import { productsDatas } from "../redux/datas";
import ProductList from "../components/ProductList";

export default function ProductPage() {
  const toast = useToast();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    state?.product?.selectedColor
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    state?.product?.selectedSize
  );
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProductsSuccess(productsDatas));
  }, [dispatch]);

  const { label } = useParams<{ label: string }>();
  const products = useSelector((state: RootState) => state.products.items);

  const product = products.find((item) => item.label === label);

  useEffect(() => {
    if (!product) {
      navigate("/error-page");
    }
  }, [product, navigate]);

  const handleLikeToggle = (item: ProductInterface) => {
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
    if (!selectedColor || !selectedSize) {
      showToast("Please select color and size", "warning");
      return;
    }

    if (!product) return;

    const itemAlreadyInCart = cartItems.some(
      (item: ProductInterface) => item.id === product.id
    );

    if (itemAlreadyInCart) {
      showToast("Item already exists in cart", "warning");
      return;
    }

    const cartItem: ProductInterface = {
      id: product.id,
      label: product.label,
      price: product.price,
      oldPrice: product.oldPrice,
      quantity: 1,
      total: product.price,
      color: product.color,
      size: product.size,
      discount: product.discount,
      details: product.details,
      src: product.src,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
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

  const handleColorSelect = (color: string) => {
    setSelectedColor(selectedColor === color ? undefined : color);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(selectedSize === size ? undefined : size);
  };

  return (
    <Flex
      direction="column"
      pt={{ base: "70px", md: "80px", lg: "100px" }}
      pb="50px"
      px={{ base: "", md: 9, lg: "100px" }}
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
          <BreadcrumbLink onClick={handleBackClick}>Go back</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>
            <Text isTruncated maxW="170px">
              {product?.label || "Product"}
            </Text>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {product && (
        <Flex
          direction="column"
          pb="50px"
          px={{ base: "", md: 9, lg: "80px" }}
        >
          <Flex flexDirection={{ base: "column", lg: "row" }}>


            <Flex position={"relative"} flex="0.4" px={3}>
              <ProducImageCarousel
                images={product.src}
                title={product.label}
              />

              {product.discount !== 0 && (
                <Box
                  position="absolute"
                  left={6}
                  top={3}
                  bg="#bc4749"
                  py={1}
                  px={2}
                  borderRadius="full"
                  fontSize={"12px"}
                  color={"#fff"}
                  fontWeight={"700"}
                  zIndex={9}
                >
                  <Text>⁃{product.discount}%</Text>
                </Box>
              )}
            </Flex>

            <Flex direction="column" flex="0.6" ml={{ lg: 8 }} mt={{ base: 4, lg: 0 }} px={4}>


              <Flex
                direction="column"
                flex="0.6"
                ml={{ lg: 8 }}
                mt={{ base: 4, lg: 0 }}
                px={4}
              >
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="15px">{product.label}</Text>
                  <ShareButton />
                </Flex>

                <Flex justify="space-between" align="center" pt={3} pb={4}>
                  <Text as="h5" color="#386648" fontWeight={600} fontSize="18px">
                    ₦
                    {Number(product.price.toFixed(2)).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                    {product.discount !== 0 && (
                      <Text
                        as="span"
                        color="#780000"
                        textDecoration="line-through"
                        ml={2}
                        fontWeight="400"
                        fontSize={{ base: "10px", md: "13px", lg: "15px" }}
                      >
                        ₦
                        {Number(product.oldPrice.toFixed(2)).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
                      </Text>
                    )}
                  </Text>
                </Flex>

                <ColorSelectComponent
                  selectedColor={selectedColor}
                  colors={product.color}
                  onColorSelect={handleColorSelect}
                />
                <SizeSelectComponent
                  selectedSize={selectedSize}
                  sizes={product.size}
                  onSizeSelect={handleSizeSelect}
                />

                <Flex
                  alignItems="center"
                  flex={1}
                  justifyContent={"space-between"}
                  py={3}
                >
                  <StarRating />
                  <SizeChartDrawer />
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
                    isDisabled={!selectedColor || !selectedSize}
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
              </Flex>
              <Box>
                <Accordion defaultIndex={[0]}>
                  <AccordionItem>
                    <h4>
                      <AccordionButton
                        p={4}
                        borderRadius="md"
                        boxShadow="sm"
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          fontWeight="600"
                          fontSize="16px"
                        >
                          View Item Details
                        </Box>
                      </AccordionButton>
                    </h4>
                    <AccordionPanel pb={4} pt={2}>
                      <UnorderedList>
                        {product.details.map((content: any, index: any) => (
                          <ListItem key={index} fontSize="14px" color="gray.600">
                            {content}
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Flex>


          </Flex>
        </Flex>
      )}

      <RelatedChoice />

      <Box>
        <Flex justifyContent={"center"} alignContent={"center"} >
          <Text fontSize={"18px"}>YOU MAY ALSO LIKE</Text>
        </Flex>

        <ProductList />

      </Box>
    </Flex>
  );
}
