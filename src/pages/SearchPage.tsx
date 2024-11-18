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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RootState } from "../redux/store";
import { removeWishlistItem, toggleWishlistItem } from "../redux/wishlistSlice";
import { ProductCard } from "../components/ProductCard";
import { filterBySearch, ProductInterface } from "../redux/productSlice";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const [activeSizes, setActiveSizes] = useState<Record<number, string | null>>({});
  const [activeColors, setActiveColors] = useState<Record<number, string | null>>({});

  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLikeToggle = (id: number, item: ProductInterface) => {
    const isInWishlist = wishlistItems.some((wishlistItem) => wishlistItem.id === id);

    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
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
      title: "Added to Your Cart",
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

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisibleProducts((columns || 2) * 5);
  }, [columns]);

  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query") || "";

  useEffect(() => {
    if (searchQuery) {
      dispatch(filterBySearch(searchQuery));
    }
  }, [searchQuery, dispatch]);



  return (
    <Box px={4} py={8} pt={"70px"} w="100%" fontFamily="Nunito, sans-serif">
      <Box mb={5}>
        <Text fontSize="md" fontWeight="bold">
          Results Matching "{searchQuery}"
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
        <Box display={"flex"} justifyContent={"center"} my={"120px"} px={12} textAlign="center">
          <Text fontSize="lg" color="gray.600">
            No products match your search. Try refining your filters or explore our category options.
          </Text>
        </Box>
      )}

    </Box>
  );
}
