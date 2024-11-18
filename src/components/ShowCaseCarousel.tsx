import React, { useState } from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import ShowCaseProductCard from "./ShowCaseProductCard";
// import { ProductInterface } from "../redux/productInterface";
// import { productsDatas } from "../redux/datas";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItem, toggleWishlistItem } from "../redux/wishlistSlice";
import { RootState } from "../redux/store";
import DecorativeText from "./DecorativeText";
import { productsDatas } from "../redux/productData";
import { ProductInterface } from "../redux/productSlice";

const ShowCaseCarousel: React.FC = () => {
    const dispatch = useDispatch();
    const toast = useToast();
    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);


    const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});


    const handleLikeToggle = (id: number, item: ProductInterface) => {
        const isInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === id);


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

    const newArrivalProducts = productsDatas.filter(
        (product) => product.collection === "New Arrivals"
    );

    return (
        <Box
            pb={9}
            px={2}
        >
            <DecorativeText />

            <Flex
                overflowX="scroll"
                css={{
                    "::-webkit-scrollbar": { display: "none" },
                }}
            >
                {newArrivalProducts.map((product) => (
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
