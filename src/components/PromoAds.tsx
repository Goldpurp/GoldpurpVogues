import { Box, Text, VStack, keyframes, Skeleton } from "@chakra-ui/react";
import { css } from "@emotion/react";
import ShopNowBtn from "./ShowNowBtn";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/baseRoutes";
import { useDispatch } from "react-redux";
import { filterByCollection } from "../redux/productSlice";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export default function PromoAds() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);


  const handleCollectionClick = (collection: string) => {
    dispatch(filterByCollection(collection));
    navigate(`/collection/${collection}`);
  };


  return (
    <Box
      color="white"
      height={{ base: "150px", md: "200px", lg: "250px", xl: "280px" }}
      display="flex"
      fontWeight="bold"
      position="relative"
      alignItems="center"
      justifyContent="center"
      bg="#292828a4"
      pb={2}
      mb={1}
      fontFamily="Arial, sans-serif"
    >
      <Skeleton isLoaded={!loading}>
        <Text
          position="absolute"
          top="7px"
          left="18px"
          color="#660708"
          fontSize={{ base: "17px", md: "24px", lg: "26px", xl: "30px" }}
          fontWeight="100"
          cursor={"pointer"}
          css={css`
            animation: ${pulse} 1.5s infinite;
          `}
        >
          10-15% OFF
        </Text>
      </Skeleton>

      <VStack align="center" mt={4}>
        <Skeleton isLoaded={!loading}>
          <Text
            fontSize={{ base: "40px", md: "60px", lg: "90px", xl: "100px" }}
            fontWeight="100"
          >
            SUMMER SALE
          </Text>
        </Skeleton>

        <Skeleton isLoaded={!loading}>
          <ShopNowBtn onclickBtn={() => handleCollectionClick("Everyday Essentials")} />
        </Skeleton>
      </VStack>
    </Box>
  );
}
