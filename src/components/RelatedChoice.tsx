import React, { useState } from "react";
import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import ShowCaseProductCard from "./ShowCaseProductCard";
import { ProductInterface } from "../redux/productInterface";
import { productsDatas } from "../redux/datas";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItem, toggleWishlistItem } from "../redux/wishlistSlice";
import { RootState } from "../redux/store";

const ShowCaseCarousel: React.FC = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

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
        {productsDatas.map((product) => (
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
  );
};

export default ShowCaseCarousel;
