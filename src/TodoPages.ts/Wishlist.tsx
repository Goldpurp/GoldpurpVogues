import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Image,
    HStack,
  } from "@chakra-ui/react";
  import Img1 from "/Products/3.png";
  
  export default function Wishlist() {
    const _images = [
      {
        src: Img1,
        hashtag: "TheOGs",
        words: "Mika Textured Relaxed Short Sleeve",
      },
      {
        src: Img1,
        hashtag: "TheOGs",
        words: "Mika Textured Relaxed Short Sleeve",
      },
      {
        src: Img1,
        hashtag: "TheOGs",
        words: "Mika Textured Relaxed Short Sleeve",
      },
      {
        src: Img1,
        hashtag: "TheOGs",
        words: "Mika Textured Relaxed Short Sleeve",
      },
    ];
  
    const images = [..._images, ..._images];
  
    return (
      <Container maxW="container.xl" pt="100px" px="4">
        <Heading
          as="h1"
          fontWeight="600"
          fontSize={{ base: "24px", md: "32px" }}
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: "4", md: "6" }}
        >
          WishList
        </Heading>
  
        <VStack
          spacing="5"
          align="center"
          minH="500px"
          mt="30px"
          w="full"
        >
          <Heading
            as="h3"
            size="md"
            fontWeight="300"
            fontSize={{ base: "18px", md: "22px" }}
          >
            Your wishlist is empty
          </Heading>
          <Text
            textAlign="center"
            fontWeight="900"
            mb="70px"
            fontSize={{ base: "16px", md: "18px" }}
          >
            START WITH ONE OF THESE TOP SELLERS!
          </Text>
  
          <Box w="100%" mt="20px" mb="10px" overflow="hidden" py="5">
            <Box w="200%">
              <HStack
                spacing="10px"
                animation="scroll 20s linear infinite"
                sx={{
                  "@keyframes scroll": {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                  },
                }}
              >
                {images.map((e, i) => (
                  <Box
                    key={i}
                    position="relative"
                    border="1px solid #8d99ae"
                    borderRadius="10px"
                    p="10px"
                    overflow="hidden"
                  >
                    <Image src={e.src} alt="product image" borderRadius="10px" />
  
                    <VStack
                      position="absolute"
                      left="50%"
                      top="70%"
                      w="80%"
                      textAlign="center"
                      transform="translate(-50%, 0%)"
                      zIndex="2"
                    >
                      <Text fontWeight="bold">{`#${e.hashtag}`}</Text>
                      <Text fontSize="14px">
                        {e.words.length > 100
                          ? `${e.words.substring(0, 100)}...`
                          : e.words}
                      </Text>
                    </VStack>
  
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      w="100%"
                      h="100%"
                      opacity="0.625"
                      zIndex="1"
                      borderRadius="10px"
                      bgGradient="linear(to-t, rgba(0, 0, 0, 0.2196) 0%, rgba(0, 0, 0, 0) 100%)"
                    />
                  </Box>
                ))}
              </HStack>
            </Box>
          </Box>
        </VStack>
      </Container>
    );
  }
  