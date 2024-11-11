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
import { PiHandbagThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";
import { useState, useEffect } from "react";
import fallbackImg from "/icon/WebLogo.png";
import productsData from "../redux/data";

export default function ProductGrid() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();
  const toast = useToast();

  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const [visibleProducts, setVisibleProducts] = useState((columns || 2) * 2); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisibleProducts((columns || 2) * 5);
  }, [columns]);

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

  const handleShowMore = () => {
    setVisibleProducts((prevCount) => prevCount + (columns || 2) * 2); 
  };

  return (
    <Box
      px={2}
      py={6}
      w="100%"
      overflow="hidden"
      letterSpacing="normal"
      fontFamily="Nunito, sans-serif"
    >
      <SimpleGrid columns={columns} spacing={3}>
        {productsData.slice(0, visibleProducts).map((item, itemIndex) => (
          <Box
            key={itemIndex}
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
                onClick={() => navigate(Routes.ProductPage, { state: { product: item } })}
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
              <Box
                as={PiHandbagThin}
                w={{ base: 5, lg: 6 }}
                h={{ base: 5, lg: 6 }}
                cursor="pointer"
                onClick={() => handleAddToCart(item)}
              />
            </Flex>
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
              <Skeleton isLoaded={!loading}>
                <Text
                  color="#9d2226"
                  fontSize={{ base: "9px", md: "13px", lg: "15px" }}
                  mt="5px"
                >
                  {item.bonus}
                </Text>
              </Skeleton>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
      {visibleProducts < productsData.length && (
        <Flex align="center" justify="center" p={4}>
          <Button
            onClick={handleShowMore}
            color="white"
            width={{ base: "200px", lg: "385px" }}
            height="48px"
            fontSize="13px"
            borderRadius="30px"
            bg="#2d6a4f"
            _hover={{ bg: "#344e41" }}
          >
            Show more
          </Button>
        </Flex>
      )}
    </Box>
  );
}
