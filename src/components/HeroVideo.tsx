import React from "react";
import { Box, Flex, Heading, Button, Text } from "@chakra-ui/react";

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
      bg="red"
    >
      <Box
        as="video"
        src="https://videos.pexels.com/video-files/8515054/8515054-sd_360_640_24fps.mp4"
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
        color="white"
      >
        <Heading as="h1" size="2xl" mb="4">
          Your Hero Title
        </Heading>
        <Text fontSize="xl" mb="6">
          Your subtitle or description goes here.
        </Text>
        <Button colorScheme="teal" size="lg">
          Call to Action
        </Button>
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