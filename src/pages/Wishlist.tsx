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
  Heading,
  Container,
  VStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RootState } from "../redux/store";
// import { ProductInterface } from "../redux/productInterface";
import { removeWishlistItem, toggleWishlistItem } from "../redux/wishlistSlice";
import { ProductCard } from "../components/ProductCard";
// import RelatedChoice from "../components/RelatedChoice";
import { ProductInterface } from "../redux/productSlice";
import ShowCaseProductCard from "../components/ShowCaseProductCard";
import { productsDatas } from "../redux/productData";

const randomSort = () => 0.5 - Math.random();


export default function Wishlist() {
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  const [activeSizes, setActiveSizes] = useState<Record<number, string | null>>({});
  const [activeColors, setActiveColors] = useState<Record<number, string | null>>({});
  const [shuffledBestSellers, setShuffledBestSellers] = useState<ProductInterface[]>([]);

  const columns = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();
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
  const handleRemove = (id: number) => {
    dispatch(removeWishlistItem(id));
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
    setShuffledBestSellers([...productsDatas].filter(product => product.collection === "Best Sellers").sort(randomSort));
  }, [productsDatas]);


  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setVisibleProducts((columns || 2) * 5);
  }, [columns]);

  return (
    <Container maxW="container.xl" pt={{ base: "50px", md: "70px", lg: "90px" }} px="4">
      {wishlistItems.length === 0 ? (
        <>
          <Flex alignItems="center" justifyContent={"center"} pt={6} >
            <Heading as="h1" fontSize="20px">
              WishList
            </Heading>
            <Box w="20px" ml={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </Box>
          </Flex>

          <VStack spacing="5" mt="30px" w="full" pb={"100px"}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt={4}
            >
              <Heading as="h3" size="md" fontWeight="300" mb={4}>
                Your wishlist is empty
              </Heading>

              <Text textAlign="center" fontWeight="900" maxW="300px">
                START WITH ONE OF THESE TOP SELLERS!
              </Text>
            </Box>

            <Box
            pt={9}
            px={2}
            w={"100%"}

          >
            <Text pb={4} fontSize={"20px"}>Explore Our Best Sellers</Text>


            <Flex
              overflowX="scroll"
            css={{
              "::-webkit-scrollbar": { display: "none" },
            }}
            >
              {shuffledBestSellers.map((product) => (
                <ShowCaseProductCard
                  key={product.id}
                  product={product}
                  likedItems={likedItems}
                  onLikeToggle={handleLikeToggle}
                  loading={false}
                />
              ))}
            </Flex>
          </Box>

          </VStack>
        </>
      ) : (
        <Box
          pb={12}
          px={2}
          w="100%"
          overflow="hidden"
          letterSpacing="normal"
          fontFamily="Nunito, sans-serif"
        >
          <Flex alignItems="center" justifyContent={"center"} py={3}>
            <Heading as="h1" fontSize="20px">
              WishList

            </Heading>
            <Box w="20px" ml={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </Box>
          </Flex>
          <SimpleGrid columns={columns} spacing={3}>
            {wishlistItems.slice(0, visibleProducts).map(item => (
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
                showLikeIcon={false}
                onDelete={handleRemove}
              />
            ))}
          </SimpleGrid>
          {visibleProducts < wishlistItems.length && (
            <Button mt={5} colorScheme="green" size="lg" w="full" onClick={handleShowMore}>
              Show More
            </Button>
          )}
        </Box>
      )}

    </Container>

  );
}