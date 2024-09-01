import { Box, Text, VStack, keyframes } from "@chakra-ui/react";
import { css } from "@emotion/react";
import ShopNowBtn from "./ShowNowBtn";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export default function PromoAds() {
  return (
    <Box
      color="white"
      height={{ base: "150px", md: "200px", lg: "250px", xl: "280px" }}
      display="flex"
      fontWeight="bold"
      position="relative"
      alignItems="center"
      justifyContent="center"
      bg="#BAB597"
      fontFamily="Arial, sans-serif"
    >
      <Text
        position="absolute"
        top="7px"
        left="18px"
        color="#660708"
        fontSize={{ base: "17px", md: "24px", lg: "26px", xl: "30px" }}
        fontWeight="100"
        css={css`
          animation: ${pulse} 1.5s infinite;
        `}
      >
        10-15% OFF
      </Text>

      <VStack align="center" mt={4}>
        <Text
          fontSize={{ base: "40px", md: "60px", lg: "90px", xl: "100px" }}
          fontWeight="100"
        >
          SUMMER SALE.
        </Text>
        <ShopNowBtn />
      </VStack>
    </Box>
  );
}
