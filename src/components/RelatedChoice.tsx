import React, { useEffect, useState } from "react";
import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import ShowCaseProductCard from "./ShowCaseProductCard";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItem, toggleWishlistItem } from "../redux/wishlistSlice";
import { RootState } from "../redux/store";
import { productsDatas } from "../redux/productData";
import { ProductInterface } from "../redux/productSlice";
import { useParams } from "react-router-dom"; // For capturing the product ID from URL

const RelatedChoice: React.FC = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const { label } = useParams<{ label: string }>(); // Assuming the route has a :productId param

  const [relatedProducts, setRelatedProducts] = useState<ProductInterface[]>([]);
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});

  const handleLikeToggle = (id: number, item: ProductInterface) => {
    const isInWishlist = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === id
    );

    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    dispatch(isInWishlist ? removeWishlistItem(id) : toggleWishlistItem(item));
    toast({
      title: isInWishlist ? "Removed from Wishlist" : "Added to Wishlist",
      status: isInWishlist ? "warning" : "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  useEffect(() => {
    if (label) {
      const currentProduct = productsDatas.find(
        (product) => product.label.toLowerCase() === label.toLowerCase()
      );


      if (currentProduct) {
        const filteredRelatedProducts = productsDatas.filter(
          (product) =>
            product.category === currentProduct.category &&
            product.id !== currentProduct.id
        );

        setRelatedProducts(filteredRelatedProducts);
      }
    }
  }, [label]);


  return (
    <Box pb={9} px={2}>
      <Flex justifyContent={"center"} alignContent={"center"} pb={5}>
        <Text fontSize={"18px"}>RELATED ITEMS</Text>
      </Flex>

      <Flex
        overflowX="scroll"
        css={{
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => (
            <ShowCaseProductCard
              key={product.id}
              product={product}
              likedItems={likedItems}
              onLikeToggle={handleLikeToggle}
              loading={false}
            />
          ))
        ) : (
          <Text>No related items found</Text> // A fallback if no related products
        )}
      </Flex>
    </Box>
  );
};

export default RelatedChoice;
