import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Image,
  Flex,
} from "@chakra-ui/react";

const moviePosters = [
  {
    title: "Joker: Folie à Deux",
    image:
      "https://i.pinimg.com/564x/58/89/8e/58898e7d0b32cbea4120ed3e53132e3c.jpg",
    background:
      "https://i.pinimg.com/564x/58/89/8e/58898e7d0b32cbea4120ed3e53132e3c.jpg",
    description:
      "The upcoming Joker sequel takes a deep dive into the madness...",
  },
  {
    title: "Venom: The Last Dance",
    image:
      "https://i.pinimg.com/736x/01/be/83/01be83eed822d09b1f8c701de39d7158.jpg",
    background:
      "https://i.pinimg.com/736x/01/be/83/01be83eed822d09b1f8c701de39d7158.jpg",
    description: "Venom returns in a gripping new adventure...",
  },
  {
    title: "Smile 2",
    image:
      "https://i.pinimg.com/564x/07/7d/5f/077d5fad92365549da1cad0e4d979513.jpg",
    background:
      "https://i.pinimg.com/564x/07/7d/5f/077d5fad92365549da1cad0e4d979513.jpg",
    description: "Smile continues to terrorize in this thrilling sequel...",
  },
  {
    title: "Joker: Folie à Deux",
    image:
      "https://i.pinimg.com/564x/b3/7a/e6/b37ae6ac2f58df8a13ee09480640d5c1.jpg",
    background:
      "https://i.pinimg.com/564x/b3/7a/e6/b37ae6ac2f58df8a13ee09480640d5c1.jpg",
    description:
      "The upcoming Joker sequel takes a deep dive into the madness...",
  },
];

const HeroSection: React.FC = () => {
  const [currentMovie, setCurrentMovie] = useState(moviePosters[0]);

  const handlePosterClick = (movie: any) => {
    setCurrentMovie(movie);
  };

  return (
    <Flex
      overflow={"hidden"}
      as="section"
      position="relative"
      w="100vw"
      h="100vh"
      bgImage={`url(${currentMovie.background})`}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      color="white"
      justifyContent="space-between"
      flexDirection={{ base: "column", lg: "row" }}
      alignItems={"center"}
      py={6}
      pt={{ lg: "200px" }}
    >
      <VStack
        align="flex-start"
        spacing={4}
        position="relative"
        zIndex={2}
        maxW="600px"
        h={"fit-content"}
        p={6}
        ml={{ md: "-200px", lg: "0"}}
        borderRadius="md"
        pt={{ base: "200px", lg: "0" }}
      >
        <Text fontSize={{ base: "25px", lg: "36px" }} fontWeight="bold">
          {currentMovie.title}
        </Text>
        <Text fontSize={{ base: "13px", lg: "16px" }} maxW="md">
          {currentMovie.description}
        </Text>
        <HStack spacing={4}>
          <Button size="md" colorScheme="teal">
            Buy now
          </Button>
          <Button size="md" variant="outline" colorScheme="teal">
            Add to cart
          </Button>
        </HStack>
      </VStack>

      <Box
        w={{ base: "100%", lg: "50%" }}
        py={12}
        zIndex={2}
        overflowX={"scroll"}
        mr={"-50px"}
      >
        <Flex gap={4} overflowX={"scroll"}>
          {moviePosters.map((movie, index) => (
            <Box
              justifyContent={"center"}
              alignItems={"center"}
              key={index}
              cursor="pointer"
              bg={"#2c2e2c5b"}
              borderRadius="md"
              p={2}
              textAlign={"center"}
            >
              <Image
                src={movie.image}
                alt={movie.title}
                minW={{ base: "125px", md: "200px" }}
                h={{ base: "200px", md: "300px" }}
                onClick={() => handlePosterClick(movie)}
                borderRadius="md"
                objectFit="cover"
                transition="transform 0.3s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
              <Text fontSize={{ base: "10px", md: "13px" }} mt={2}>
                {movie.title}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.3)"
        zIndex="0"
      />
    </Flex>
  );
};

export default HeroSection;
