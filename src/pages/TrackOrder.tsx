import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function TrackOrder() {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        flex="1"
        mb="50px"
        mt="30px"
        bg={"#b7efc510"}
        pt={"80px"}
      >
        <VStack spacing="5" w={{ base: "90%", md: "60%" }} maxW="400px">
          <Heading
            as="h1"
            size="lg"
            textAlign="center"
            fontFamily="Montserrat"
            fontWeight="bold"
            mb="5"
            fontSize={{ base: "28px", md: "44px" }}
          >
            TRACK MY ORDER
          </Heading>

          <Text
            fontSize={{ base: "16px", md: "20px" }}
            fontWeight="medium"
            mb="-20px"
          >
            Track item ordered
          </Text>

          <VStack spacing="4" w="full">
            <Box w="full">
              <Text fontSize="13px" fontWeight="medium" mb="2">
                Enter your order ID
              </Text>
              <Input
                placeholder="354653468/AB456"
                borderColor="#274029"
                borderRadius="10px"
                h="50px"
                bg="white"
                _placeholder={{ color: "gray.400" }}
                _focus={{
                  boxShadow: "none",
                }}
              />
            </Box>

            <Box w="full">
              <Text fontSize="13px" fontWeight="medium" mb="2">
                Enter order address
              </Text>
              <Input
                type="email"
                placeholder="lagos, Ng"
                borderColor="#274029"
                borderRadius="10px"
                h="50px"
                bg="white"
                _placeholder={{ color: "gray.400" }}
                _focus={{
                  boxShadow: "none",
                }}
              />
            </Box>
          </VStack>

          <Button
            mt="5"
            bg="#2d6a4f"
            _hover={{ bg: "#344e41" }}
            color={"#fff"}
            fontSize="15px"
            fontWeight="bold"
            w="full"
            h="50px"
            borderRadius="30px"
          >
            SUBMIT
          </Button>
        </VStack>
      </Flex>
    </>
  );
}
