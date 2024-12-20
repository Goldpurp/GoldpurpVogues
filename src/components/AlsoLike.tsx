import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Box, Text, Button, useToast, SimpleGrid, useBreakpointValue, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RootState } from "../redux/store";
import { removeWishlistItem, toggleWishlistItem } from "../redux/wishlistSlice";
import { ProductCard } from "./ProductCard";
import { productsDatas } from "../redux/productData";
import { ProductInterface } from "../redux/productSlice";
import { useParams } from "react-router-dom";

export default function AlsoLike() {
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const [activeSizes, setActiveSizes] = useState<Record<number, string | null>>({});
  const [activeColors, setActiveColors] = useState<Record<number, string | null>>({});
  const [relatedProducts, setRelatedProducts] = useState<ProductInterface[]>([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true); // New loading state for related products

  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleLikeToggle = (id: number, item: ProductInterface) => {
    const isInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === id);

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

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisibleProducts((columns || 2) * 5);
  }, [columns]);

  const { label } = useParams<{ label: string }>();

  useEffect(() => {
    if (label) {
      const currentProduct = productsDatas.find(
        (product) => product.label.toLowerCase() === label.toLowerCase()
      );

      if (currentProduct) {
        const filteredRelatedProducts = productsDatas.filter(
          (product) =>
            product.collection === currentProduct.collection &&
            product.id !== currentProduct.id
        );

        setRelatedProducts(filteredRelatedProducts);
        setLoadingRelatedProducts(false);
      } else {
        setRelatedProducts([]);
        setLoadingRelatedProducts(false);
      }
    }
  }, [label]);

  return (
    <Box px={2} py={6} w="100%" fontFamily="Nunito, sans-serif">
      {loadingRelatedProducts ? (
        <Spinner size="lg" />
      ) : relatedProducts.length > 0 ? (
        <SimpleGrid columns={columns} spacing={3}>
          {relatedProducts.slice(0, visibleProducts).map(item => (
            <ProductCard
              key={item.id}
              item={item}
              loading={loading}
              liked={wishlistItems.some(wishlistItem => wishlistItem.id === item.id)} // Check if item is in wishlist
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
          ))}
        </SimpleGrid>
      ) : (
        <Text>No related category items found</Text>
      )}

      {visibleProducts < relatedProducts.length && (
        <Button mt={5} colorScheme="green" size="lg" w="full" onClick={handleShowMore}>
          Show More
        </Button>
      )}
    </Box>
  );
}
