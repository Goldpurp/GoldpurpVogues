import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ShoeImg from "/Products/shoe.jpg";
import BagImg from "/Products/backPack.jpg";
import HatImg from "/Products/faceCap.jpg";
import ShadeImg from "/Products/spec.jpg";

export default function ProductGallery() {
  return (
    <Flex direction="column" overflow="hidden" fontFamily="'Nunito', sans-serif" w="100%">
      <Flex wrap="wrap" transition="transform 0.6s ease">
        <ProductItem src={ShoeImg} alt="ShoeImg" label="SHOP SHOES" />
        <ProductItem src={BagImg} alt="BagImg" label="SHOP BAGS" />
        <ProductItem src={HatImg} alt="HatImg" label="SHOP HATS" />
        <ProductItem src={ShadeImg} alt="ShadeImg" label="SHOP SHADES" />
      </Flex>
    </Flex>
  );
}

function ProductItem({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <Flex
      flex={{base: "50%", lg: 1}}
      maxW="50%"
      align="center"
      direction="column"
      justify="center"
      p="2px 5px 8px 5px"
      transition="transform 0.5s ease"
      _hover={{ transform: "scale(1.07)" }}
      _focus={{ transform: "scale(1.15)" }}
      cursor="pointer"
      borderWidth="1px"
      borderColor="#e2e6e9"
      bg="#e3e7eb"
    >
      <Box w="100%" h={{ base: "180px", md: "220px", lg: "250px", xl: "300px", "2xl": "350px" }} bg="#ddd">
        <Image src={src} alt={alt} w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box p="5px">
        <Text fontSize={{ base: "14px", md: "15px", lg: "17px" }} cursor="pointer">
          {label}
        </Text>
      </Box>
    </Flex>
  );
}
