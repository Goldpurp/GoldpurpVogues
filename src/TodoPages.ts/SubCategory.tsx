import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import {
  Box,
  Text,
  Button,
  useToast,
  SimpleGrid,
  useBreakpointValue,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RootState } from "../redux/store";
import { removeWishlistItem, toggleWishlistItem } from "../redux/wishlistSlice";
import { ProductCard } from "../components/ProductCard";
import { ProductInterface } from "../redux/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";

export default function SubCategory() {
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const [activeSizes, setActiveSizes] = useState<Record<number, string | null>>({});
  const [activeColors, setActiveColors] = useState<Record<number, string | null>>({});

  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const toast = useToast();

  const handleLikeToggle = (id: number, item: ProductInterface) => {
    const isInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === id);

    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));

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
    setExpandedProduct(prev => (prev === id ? null : id));
  };

  const handleAddToCart = (item: ProductInterface) => {
    const color = activeColors[item.id];
    const size = activeSizes[item.id];
    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

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
    setActiveColors(prev => ({
      ...prev,
      [id]: prev[id] === color ? null : color,
    }));
  };

  const handleSizeClick = (id: number, size: string) => {
    setActiveSizes(prev => ({
      ...prev,
      [id]: prev[id] === size ? null : size,
    }));
  };

  const handleShowMore = () => {
    setVisibleProducts(prev => prev + (columns || 2) * 2);
  };

  // Effects
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisibleProducts((columns || 2) * 5);
  }, [columns]);

  const { category, subCategory } = useParams<{ category: string; subCategory: string }>();
  const filteredProducts = useSelector(
    (state: RootState) => state.products.filteredProducts
  );



  return (
    <Box px={4} py={8} pt={"70px"} w="100%" fontFamily="Nunito, sans-serif">
      <Box mb={5}>
        <Text fontSize="xl" fontWeight="bold">
          {subCategory} in {category}
        </Text>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" h="50vh">
          <Spinner size="xl" color="green.500" />
        </Box>
      ) : filteredProducts.length > 0 ? (
        <>
          <SimpleGrid columns={columns} spacing={5}>
            {filteredProducts.slice(0, visibleProducts).map((item: ProductInterface) => (
              <ProductCard
                key={item.id}
                item={item}
                loading={loading}
                liked={likedItems[item.id]}
                expanded={expandedProduct === item.id}
                activeColor={activeColors[item.id]}
                activeSize={activeSizes[item.id]}
                onLikeToggle={handleLikeToggle}
                onExpand={handleAddToCartClick}
                onAddToCart={handleAddToCart}
                onColorClick={handleColorClick}
                onSizeClick={handleSizeClick}
                useCarousel={false}
                showLikeIcon={true}
              />
            ))}
          </SimpleGrid>
          {visibleProducts < filteredProducts.length && (
            <Button mt={5} colorScheme="green" size="lg" w="full" onClick={handleShowMore}>
              Show More
            </Button>
          )}
        </>
      ) : (
        <Flex direction={"column"} justifyContent={"center"} mt={"60px"} px={9} textAlign="center">

          <Text fontSize="lg" color="gray.600">
            No products match your search. Try refining your filters or explore our category options.
          </Text>

          <Box mt={3}>
            <Button
              borderBottom={"1px solid #000"}
              color={"#000"}
              background={"transparent"}
              variant="unstyled"
              alignItems="center"
              justifyContent="center"
              fontSize={"12px"}
              cursor="pointer"
              transition="color 0.4s, border-color 0.4s"
              alignSelf="center"
              _hover={{ color: "#829399", borderBottomColor: "#829399" }}
              onClick={() => navigate(Routes.Collections)}
            >
              Discover More
            </Button>
          </Box>
        </Flex>
      )}

    </Box>
  );
}