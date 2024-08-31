import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Link,
    Text,
    VStack,
  } from "@chakra-ui/react";
  
  export default function Login() {
    return (
      <Flex
        align="center"
        justify="center"
        direction="column"
        py={{ base: "120px", md: "70px" }}
        fontFamily="'Poppins', sans-serif"
      >
        <Text fontSize="24px" fontWeight="800" pb="10px" fontFamily="'Montserrat', sans-serif">
          LOGIN ACCOUNT
        </Text>
  
        <Text fontWeight="500">
          New here?{" "}
          <Link color="#386648" href="/signUp">
            Sign up
          </Link>
        </Text>
  
        <VStack
          as="form"
          w="85vw"
          spacing="20px"
          align="center"
          justify="center"
        >
          <FormControl id="email" w={{ base: "300px", sm: "350px", md: "400px" }}>
            <FormLabel fontSize="13px" fontWeight="500" ml="10px">
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="email address"
              h="50px"
              fontSize="14px"
              borderRadius="10px"
              bg="#fff"
              p="7px 45px 7px 12px"
              borderColor="#000"
            />
          </FormControl>
  
          <FormControl id="password" w={{ base: "300px", sm: "350px", md: "400px" }}>
            <FormLabel fontSize="13px" fontWeight="500" ml="10px">
              Password
            </FormLabel>
            <Input
              type="password"
              placeholder="password"
              h="50px"
              fontSize="14px"
              borderRadius="10px"
              bg="#fff"
              p="7px 45px 7px 12px"
              borderColor="#000"
            />
          </FormControl>
  
          <Button
            w={{ base: "300px", sm: "350px", md: "400px" }}
            fontSize="15px"
            fontWeight="700"
            p="12px 18px"
            borderRadius="30px"
            transition="400ms"
            borderColor="#daddd8"
            _hover={{ bg: "#ced4da" }}
            color="black"
            bg="transparent"
            border="0.6px solid"
          >
            Access
          </Button>
        </VStack>
  
        <Text
          fontSize="14px"
          mt="60px"
          fontWeight="400"
          textAlign="center"
          maxW="200px"
        >
          Problem trying to access?{" "}
          <Link textDecoration="underline" _hover={{ color: "#9f9aa4" }}>
            Reset password
          </Link>
        </Text>
  
        <Text fontSize="10px" mt="60px" textAlign="center" maxW="300px">
          By selecting Create Account you agree to our{" "}
          <Link textDecoration="underline" _hover={{ color: "#9f9aa4" }}>
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link textDecoration="underline" _hover={{ color: "#9f9aa4" }}>
            Terms & Conditions
          </Link>
        </Text>
      </Flex>
    );
  }