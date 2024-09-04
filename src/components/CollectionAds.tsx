import { Box, Text, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Banner from "/Images/col.jpg";
import ShopNowBtn from "./ShowNowBtn";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

export default function CollectionsAds() {
  return (
    <MotionBox
      width="100%"
      height={{base: "100%", lg: "800px"}}
      display="flex"
      position="relative"
      alignItems="center"
      justifyContent="center"
      fontFamily="Montserrat, sans-serif"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <MotionVStack
        width="100%"
        height="100%"
        spacing={4}
        marginY={{ base: 1, lg: 2.5 }}
        alignItems="center"
        justifyContent="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Image src={Banner} alt="ColImages" objectFit="cover" width="100%" height="100%" />
      </MotionVStack>

      <MotionBox
        position="absolute"
        textAlign="center"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        zIndex={1}
      >
        <Text color="white" fontSize={{ base: "20px", sm: "24px", md: "27px", lg: "35px", xl: "42px" }} fontWeight="600">
          Explore Our
        </Text>
        <Text color="white" fontSize={{ base: "40px", sm: "45px", md: "55px", lg: "70px", xl: "80px" }} fontWeight="500" lineHeight={{ base: "60px", xl: "90px" }}>
          COLLECTIONS
        </Text>
        <ShopNowBtn />
      </MotionBox>

      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.4)"
        zIndex="0"
      />
    </MotionBox>
  );
}
