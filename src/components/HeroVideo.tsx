import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ShopNowBtn from "./ShowNowBtn";

const Hero: React.FC = () => {
  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#fff"
      fontFamily={"DM Mono"}
    >
      <Box
        as="video"
        src="https://videos.pexels.com/video-files/7037493/7037493-sd_506_960_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        objectFit="cover"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="0"
      />
      <Flex
        direction="column"
        align="center"
        justify="center"
        zIndex="1"
        textAlign="center"
        color="#fff"
        px={9}
      >
        <Heading fontSize={"22px"} mb="4">
          Urban Winter Essentials
        </Heading>
        <Text fontSize={"13px"} mb="6" px={6}>
          Experience the perfect blend of style and warmth with our sleek winter
          collection.
        </Text>
        <ShopNowBtn />
      </Flex>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="0"
      />
    </Box>
  );
};

export default Hero;
