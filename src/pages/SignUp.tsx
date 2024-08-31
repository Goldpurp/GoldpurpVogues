import {Button, FormControl, FormLabel, Input, Text, Link, VStack, Flex } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function SignUp() {
  return (
    <Flex
    align="center"
    justify="center"
    direction="column"
    py={{ base: "120px", md: "70px" }}
    fontFamily="'Poppins', sans-serif"
  >
      <Text fontSize="24px" fontWeight="800" padding="0 10px 10px 10px" fontFamily="Montserrat, sans-serif">
        REGISTER ACCOUNT
      </Text>

      <Text fontWeight="500" textAlign="center">
        Have account?{" "}
        <Link as={ReactRouterLink} to="login" color="#386648">
          Login here
        </Link>
      </Text>

      <VStack as="form" spacing={4} width="85vw" alignItems="center">
        <FormControl>
          <FormLabel marginLeft="10px" fontSize="13px" fontWeight="500">
            Email
          </FormLabel>
          <Input type="email" placeholder="email address" />
        </FormControl>

        <FormControl>
          <FormLabel marginLeft="10px" fontSize="13px" fontWeight="500">
            Password
          </FormLabel>
          <Input type="password" placeholder="password" />
        </FormControl>

        <FormControl>
          <FormLabel marginLeft="10px" fontSize="13px" fontWeight="500">
            Phone
          </FormLabel>
          <Input type="text" placeholder="mobile number" />
        </FormControl>

        <Button
          width={{ base: "300px", md: "350px" }}
          colorScheme="gray"
          fontSize="15px"
          fontWeight="700"
          borderRadius="30px"
          padding="12px 18px"
          _hover={{ backgroundColor: "#ced4da" }}
        >
          Register
        </Button>
      </VStack>

      <Text fontSize="10px" marginTop="60px" maxWidth="300px" textAlign="center">
        By selecting Create Account you agree to our{" "}
        <Link textDecoration="underline" _hover={{ color: "#9f9aa4" }}>
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link textDecoration="underline" _hover={{ color: "#9f9aa4" }}>
          Terms & Conditions
        </Link>{" "}
      </Text>
    </Flex>
  );
}