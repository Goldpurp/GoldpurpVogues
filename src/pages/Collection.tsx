import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import {
    Box,
    Text,
    Image,
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

export default function Collection() {
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
    const toast = useToast();
    const navigate = useNavigate();

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

    const { collection } = useParams<{ collection: string }>();
    const filteredProducts = useSelector(
        (state: RootState) => state.products.filteredProducts
    );

    return (
        <Box px={{base: 3, md: 12}} py={{base:9, md: 12}} pt={{base:"45px", lg: "70px"}} w="100%" fontFamily="Nunito, sans-serif">
            <Box as="section" my={8}>
                <Image
                    src="https://i.pinimg.com/736x/55/6e/04/556e04c6c3da6f7c2f93cd18f477c3c9.jpg"
                    alt="LV Fall Collection"
                    borderRadius={{base: "5px", md: "0px"}}
                    objectFit="cover"
                    width="100%"
                    height="450px"
                />
                <Text fontSize="lg" fontWeight="bold" mt={4}>
                    GP Men's Fall
                </Text>
                <Text maxW="600px" mt={2}>
                    A transversal wardrobe perpetuates Pharrell Williams’ dandy aesthetic,
                    unveiling an array of versatile creations imbued with classic
                    elegance.
                </Text>
            </Box>

            <Text fontSize="xl" fontWeight="bold">
                Explore {collection}
            </Text>

            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" h="50vh">
                    <Spinner size="xl" color="green.500" />
                </Box>
            ) : filteredProducts.length > 0 ? (
                <>
                    <SimpleGrid columns={columns} spacing={5} pt={6}>
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
                        No items are currently available in the {collection} collection. Please explore our other collections for more options.
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