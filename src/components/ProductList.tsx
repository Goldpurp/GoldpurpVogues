import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import {
  Box,
  Text,
  Button,
  useToast,
  SimpleGrid,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RootState } from "../redux/store";
import { removeWishlistItem, toggleWishlistItem } from "../redux/wishlistSlice";
import { ProductCard } from "./ProductCard";
import { filterByCategory, filterByCollection, ProductInterface } from "../redux/productSlice";

interface TrendsTabsProps {
  onTabChange: (filter: string) => void;
}

export default function ProductList({ onTabChange }: TrendsTabsProps) {
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState<string>("Best Sellers");
  const [activeSizes, setActiveSizes] = useState<Record<number, string | null>>(
    {}
  );
  const [activeColors, setActiveColors] = useState<Record<number, string | null>>(
    {}
  );

  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLikeToggle = (id: number, item: ProductInterface) => {
    const isInWishlist = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === id
    );

    dispatch(isInWishlist ? removeWishlistItem(id) : toggleWishlistItem(item));

    toast({
      title: isInWishlist ? "Removed from Wishlist" : "Added to Wishlist",
      status: isInWishlist ? "warning" : "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const handleAddToCartClick = (id: number) => {
    setExpandedProduct((prev) => (prev === id ? null : id));
  };

  const handleAddToCart = (item: ProductInterface) => {
    const color = activeColors[item.id];
    const size = activeSizes[item.id];
    const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (!color || !size) {
      return toast({
        title: "Please select a color and size",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }

    if (isInCart) {
      return toast({
        title: "Already in Cart",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }

    dispatch(
      addToCart({
        ...item,
        quantity: 1,
        total: item.price,
        selectedColor: color,
        selectedSize: size,
      })
    );

    setExpandedProduct(null);
    toast({
      title: "Saved to Your Cart",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const handleColorClick = (id: number, color: string) => {
    setActiveColors((prev) => ({
      ...prev,
      [id]: prev[id] === color ? null : color,
    }));
  };

  const handleSizeClick = (id: number, size: string) => {
    setActiveSizes((prev) => ({
      ...prev,
      [id]: prev[id] === size ? null : size,
    }));
  };

  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + (columns || 2) * 2);
  };

  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts);

  const handleBestSellersClick = () => {
    setActiveButton("Best Sellers");
    onTabChange("Best Sellers");
    dispatch(filterByCollection("Best Sellers"));
  };

  const handleClothingClick = () => {
    setActiveButton("Clothing");
    onTabChange("Clothing");
    dispatch(filterByCategory("Clothing"));
  };

  const handleAccessoriesClick = () => {
    setActiveButton("Accessories");
    onTabChange("Accessories");
    dispatch(filterByCategory("Accessories"));
  };

  const handleFootwearsClick = () => {
    setActiveButton("Footwears");
    onTabChange("Footwears");
    dispatch(filterByCategory("Footwears"));
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

    dispatch(filterByCollection("Best Sellers"));

    setVisibleProducts((columns || 2) * 5);
  }, [columns]);


  return (
    <Box px={2} py={2} w="100%" fontFamily="Nunito, sans-serif">
      <Box>
        <Flex direction="column" justify="flex-start">
          <Text
            fontSize={{ base: "35px", md: "45px", lg: "52px" }}
            fontWeight="light"
            fontFamily="Jomhuria, sans-serif"
            ml={{ base: "20px", lg: "40px" }}
          >
            Latest Trends
          </Text>

          <Flex
            gap={4}
            direction="row"
            wrap="nowrap"
            justify="flex-start"
            overflowX="auto"
            mx={{ base: "20px", lg: "40px" }}
            mb="30px"
            css={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Button
              variant="outline"
              fontSize={{ base: "12px", sm: "13px" }}
              fontWeight="500"
              px={{ base: "10px", sm: "15px" }}
              borderColor="#daddd8"
              _hover={{
                borderColor: "#353535",
              }}
              fontFamily="Montserrat, sans-serif"
              onClick={handleBestSellersClick}
              bg={activeButton === "Best Sellers" ? "#000" : "transparent"}
              color={activeButton === "Best Sellers" ? "white" : "black"}
            >
              Best Sellers
            </Button>

            <Button
              variant="outline"
              fontSize={{ base: "12px", sm: "13px" }}
              fontWeight="500"
              px={{ base: "10px", sm: "15px" }}
              borderColor="#daddd8"
              _hover={{
                borderColor: "#353535",
              }}
              fontFamily="Montserrat, sans-serif"
              onClick={handleClothingClick}
              bg={activeButton === "Clothing" ? "#000" : "transparent"}
              color={activeButton === "Clothing" ? "white" : "black"}
            >
              Clothing
            </Button>

            <Button
              variant="outline"
              fontSize={{ base: "12px", sm: "13px" }}
              fontWeight="500"
              px={{ base: "10px", sm: "15px" }}
              borderColor="#daddd8"
              _hover={{
                borderColor: "#353535",
              }}
              fontFamily="Montserrat, sans-serif"
              onClick={handleFootwearsClick}
              bg={activeButton === "Footwears" ? "#000" : "transparent"}
              color={activeButton === "Footwears" ? "white" : "black"}
            >
              Footwears
            </Button>

            <Button
              variant="outline"
              fontSize={{ base: "12px", sm: "13px" }}
              fontWeight="500"
              px={{ base: "10px", sm: "15px" }}
              borderColor="#daddd8"
              _hover={{
                borderColor: "#353535",
              }}
              fontFamily="Montserrat, sans-serif"
              onClick={handleAccessoriesClick}
              bg={activeButton === "Accessories" ? "#000" : "transparent"}
              color={activeButton === "Accessories" ? "white" : "black"}
            >
              Accessories
            </Button>
          </Flex>
        </Flex>
      </Box>

      <SimpleGrid columns={columns} spacing={3}>
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, visibleProducts).map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              loading={loading}
              liked={wishlistItems.some(
                (wishlistItem) => wishlistItem.id === item.id
              )}
              expanded={expandedProduct === item.id}
              activeColor={activeColors[item.id]}
              activeSize={activeSizes[item.id]}
              onLikeToggle={handleLikeToggle}
              onExpand={handleAddToCartClick}
              onAddToCart={handleAddToCart}
              onColorClick={handleColorClick}
              onSizeClick={handleSizeClick}
              showLikeIcon={true}
            />
          ))
        ) : (
          <Text>No products available</Text>
        )}
      </SimpleGrid>

      {visibleProducts < filteredProducts.length && (
        <Box flex={1} px={"30px"}>


          <Button
            mt={5}
            colorScheme="green"
            size="lg"
            px={4}
            w={"full"}
            onClick={handleShowMore}
          >
            Show More
          </Button>
        </Box>
      )}
    </Box>
  );
}
